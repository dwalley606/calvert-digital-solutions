/** Durable, atomic ledger. No customer fields are stored here. */
export type SubmissionRecord = {
  fingerprint: string;
  state: 'processing' | 'recorded' | 'failed' | 'uncertain';
  noteId?: string;
  notification?: 'accepted' | 'failed';
};
export interface SubmissionStore {
  claim(id: string, record: SubmissionRecord): Promise<boolean>;
  retry(id: string, previous: SubmissionRecord, record: SubmissionRecord): Promise<boolean>;
  read(id: string): Promise<SubmissionRecord | null>;
  write(id: string, record: SubmissionRecord): Promise<void>;
}

export function redisSubmissionStore(url: string, token: string): SubmissionStore {
  const base = new URL(url);
  if (base.protocol !== 'https:') throw new Error('Ledger requires HTTPS');
  const command = async (args: unknown[]) => {
    const res = await fetch(base, {
      method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args), signal: AbortSignal.timeout(5000), cache: 'no-store',
    });
    if (!res.ok) throw new Error('Ledger unavailable');
    const body = await res.json();
    if (body.error) throw new Error('Ledger command failed');
    return body.result;
  };
  const key = (id: string) => `cds:inquiry:${id}`;
  return {
    // No expiration: a previously accepted ID must never become a new inquiry.
    claim: async (id, record) => (await command(['SET', key(id), JSON.stringify(record), 'NX'])) === 'OK',
    retry: async (id, previous, record) => (await command(['EVAL',
      "if redis.call('GET', KEYS[1]) == ARGV[1] then redis.call('SET', KEYS[1], ARGV[2]); return 1 else return 0 end",
      1, key(id), JSON.stringify(previous), JSON.stringify(record)])) === 1,
    read: async id => { const value = await command(['GET', key(id)]); return value ? JSON.parse(value) : null; },
    write: async (id, record) => { await command(['SET', key(id), JSON.stringify(record)]); },
  };
}

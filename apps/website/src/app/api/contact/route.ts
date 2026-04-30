import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.includes('@') ||
    typeof message !== 'string' || !message.trim()
  ) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  const emailPromise = resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'dwalley606@gmail.com',
    subject: `New contact from ${escapeHtml(name)}`,
    html: `
      <h2>New message from your website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  });

  const hubspotPromise = fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      properties: {
        firstname: name,
        email,
        message,
      },
    }),
  });

  const [emailResult] = await Promise.allSettled([emailPromise, hubspotPromise]);

  if (emailResult.status === 'rejected') {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return Response.json({ success: true });
}

export const digitalBusinessCard = {
  href: 'https://blinq.me/cmrttnwyg01x90cs63s65i4xx?bs=db',
  label: 'View my digital business card',
  description: 'Save my contact details and connect with me online.',
};
export const contactPage = {
  metadata: { title: 'Contact', description: 'Talk with Danny at Calvert Digital Solutions about what you’re trying to build, improve, or fix.' },
  hero: {
    eyebrow: 'Calvert County / Direct to Danny',
    lines: ['Let’s talk about', 'what you’re', 'working on.'],
    description: 'Tell me what you’re trying to build, improve, or fix. I’ll help you figure out a practical next step.',
    call: { label: 'Book a call', detail: 'Schedule a conversation' },
    message: { label: 'Send a message', detail: 'Write first' },
    connect: { label: 'Connect', detail: 'Digital business card' },
  },
  scheduler: {
    eyebrow: 'A conversation is a good start',
    title: 'Book a time.',
    description: 'Choose a phone or video consultation, then pick a time below. We’ll talk through your business, your goals, and a practical next step.',
  },
  written: {
    eyebrow: 'Start with a message',
    lines: ['Rather', 'write it', 'down?'],
    description: 'Tell me a little about your business and what you have in mind. You don’t need a finished brief to start the conversation.',
  },
  form: {
    name: 'Name', email: 'Email', message: 'What are you working on?',
    namePlaceholder: 'Jane Smith', emailPlaceholder: 'jane@yourbusiness.com',
    messagePlaceholder: 'What are you trying to build, improve, or fix?',
    success: 'Got it — thanks for telling me about your project. I’ll be in touch.',
    error: 'Something went wrong — try again or email me directly.',
    sending: 'Sending…', submit: 'Send message',
  },
};

export const consultationFormats = [
  {
    id: 'phone',
    label: 'Phone Consultation',
    description: 'Talk through your project by phone. No video or meeting app needed.',
    url: 'https://meetings-na2.hubspot.com/daniel-walley',
  },
  {
    id: 'video',
    label: 'Google Meet Video Consultation',
    description: 'Meet face to face online with Google Meet, with room to share your screen.',
    url: 'https://meetings-na2.hubspot.com/daniel-walley/google-meet-video-consultation',
  },
] as const;

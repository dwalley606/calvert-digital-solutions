import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Let's Talk</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-400">
            15-minute call. Tell me what your business needs. I'll tell you exactly what makes sense and what it'll cost.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-navy-800 overflow-hidden">
          <iframe
            src={`${process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL}?embed=true`}
            width="100%"
            height="690"
            style={{ border: 0 }}
            title="Book a call with Calvert Digital Solutions"
          />
        </div>

        <div className="mt-12 border-t border-white/10 pt-12">
          <h3 className="text-xl font-semibold text-white text-center">Prefer to write first?</h3>
          <p className="mt-2 text-center text-slate-400 text-sm">
            Send me a message and I'll get back to you within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

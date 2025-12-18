export default function VideoSection() {
    return (
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              What we actually do
            </h2>
            <p className="mt-2 text-slate-300">
              A quick look at how Calvert Digital Solutions helps local businesses
              get online, get organized, and stop bleeding leads.
            </p>
          </div>
  
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Calvert Digital Solutions overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
  
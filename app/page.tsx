export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">DIGITAL SOLUTIONS</h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Smart digital solutions to grow your business and successfully automate your tasks.
          </p>
          <a href="#services" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-8 py-4 text-lg font-bold hover:scale-105 transition-transform">
            Discover Our Services
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Business Development Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Process Automation</h3>
            <p className="text-lg text-slate-600">Save your time and effort by automating repetitive tasks.</p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Marketing & Growth</h3>
            <p className="text-lg text-slate-600">Custom digital strategies to increase your sales and reach.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

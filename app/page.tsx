import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DIGITAL SOLUTIONS
            </span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Automate Your Growth. <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Scale Your Business.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build high-converting landing pages, seamless automation workflows, and data-driven marketing strategies to elevate your digital presence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
          >
            Get Started Now
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-slate-200 transition-all"
          >
            Explore Services
          </a>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Expertise</h2>
          <p className="text-slate-400 max-w-md mx-auto">Innovative solutions tailored to drive efficiency and maximize revenue.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">01</div>
            <h3 className="text-xl font-semibold mb-3">Business Automation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Streamline your daily workflows, reduce repetitive overhead, and eliminate human error with smart AI tools.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">02</div>
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Target top decision-makers on professional channels, driving targeted traffic straight to optimized landing pages.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">03</div>
            <h3 className="text-xl font-semibold mb-3">Web Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Fast, responsive, and ultra-modern web frameworks optimized natively for SEO and seamless conversions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-950 border-t border-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Let&apos;s collaborate to design custom solutions that accelerate your digital performance and scaling strategy.</p>
          <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl inline-block">
            <div className="bg-slate-900 px-8 py-4 rounded-2xl font-medium text-slate-200">
              Contact: <span className="text-blue-400 font-semibold">contact@digitalsolutions.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 bg-slate-950 text-center text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} DIGITAL SOLUTIONS. All rights reserved.</p>
      </footer>
    </div>
  );
}

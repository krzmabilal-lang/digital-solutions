import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DIGITAL SOLUTIONS | Business & Automation',
  description: 'Smart digital solutions to grow your business and successfully automate your tasks.',
};

export default function Home() {
  return (
    <>
      <header className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              DIGITAL SOLUTIONS
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 text-balance">
              Smart digital solutions to grow your business and successfully automate your tasks.
            </p>
            <Link 
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-8 py-4 text-lg font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <section id="services" className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Business Development Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Process Automation
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Save your time and effort by automating repetitive tasks.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Marketing & Growth
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Custom digital strategies to increase your sales and reach.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-20">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Digital Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

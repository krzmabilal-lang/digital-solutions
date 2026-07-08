import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-8">
      
      {/* اللوجو */}
      <div className="mb-8">
        <Image 
          src="/logo.png" 
          alt="DIGITAL SOLUTIONS Logo" 
          width={300} 
          height={90}
          priority
          className="mx-auto"
        />
      </div>

      {/* العنوان الرئيسي */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-slate-300 bg-clip-text text-transparent">
        DIGITAL SOLUTIONS
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-300 text-center mb-8 max-w-2xl">
        Empowering Enterprises with Intelligent Business & Automation Solutions
      </p>

      {/* زر */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all">
        Get Started
      </button>

    </main>
  );
}

import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      {/* Navbar */}
      <nav className="w-full border-b-2 border-black bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
              BRUTAL_SAAS
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm font-bold tracking-tight">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">FEATURES</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">PRICING</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">ABOUT</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block border-2 border-black px-6 py-2 font-bold text-sm hover:bg-black hover:text-white transition-colors uppercase">
              Login
            </button>
            <button className="bg-secondary border-2 border-black px-6 py-2 font-bold text-sm shadow-brutal-sm hover:shadow-brutal transition-all hover:-translate-y-0.5 uppercase">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 flex flex-col justify-center py-20 md:py-32">
        <div className="max-w-4xl relative">
          {/* Decorative element above headline */}
          <div className="absolute -top-12 left-0 bg-black text-white px-2 py-1 font-mono text-xs transform -rotate-2 border-2 border-transparent">
            BETA v1.0
          </div>
          <div className="absolute -top-10 left-0 w-32 h-1 bg-secondary"></div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-8">
            SHIP IT <br />
            <span className="text-stroke text-white">OR DIE</span> <br />
            TRYING.
          </h1>

          <div className="max-w-2xl bg-white border-l-4 border-secondary pl-6 py-2 mb-12">
            <p className="font-mono text-lg md:text-xl leading-relaxed font-bold text-gray-800">
              The no-nonsense toolkit for developers who value raw speed over pretty pixels. 
              Build ugly, ship fast, make money.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <button className="bg-black text-white border-2 border-black px-8 py-4 font-display text-xl tracking-wide hover:bg-gray-900 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase">
              Start Building
            </button>
            <button className="bg-white text-black border-2 border-black px-8 py-4 font-display text-xl tracking-wide hover:bg-gray-50 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase">
              View Documentation
            </button>
          </div>
        </div>
      </main>

      {/* Corner Badge */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 font-sans text-sm font-medium text-gray-600">
          Made with <span className="flex items-center font-bold text-black"><div className="w-3 h-3 bg-[#f26207] mr-1"></div> replit</span>
        </div>
      </div>
    </div>
  );
}

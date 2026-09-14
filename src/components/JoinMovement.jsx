import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function JoinMovement({ onOpenContact }) {
  return (
    <section className="py-12 md:py-24 bg-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        <span className="text-blue-600 font-bold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase block">
          JOIN THE MOVEMENT
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Let's Build Safer Roads Together
        </h2>

        <p className="text-slate-600 text-sm sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Partner with us to bring intelligent safety to every commercial vehicle.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:pt-4">
          <button
            onClick={onOpenContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

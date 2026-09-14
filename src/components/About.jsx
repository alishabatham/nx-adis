import React, { useState } from 'react';
import { ArrowRight, Cpu, Moon, Wrench, Shield, Truck, Check, X } from 'lucide-react';
import cameraDeviceImg from '../assets/about_camera.jpg';

export default function About() {
  const [showVisionModal, setShowVisionModal] = useState(false);

  const highlights = [
    {
      icon: Cpu,
      title: 'AI-powered computer vision',
    },
    {
      icon: Moon,
      title: 'Works in day & night (IR camera)',
    },
    {
      icon: Wrench,
      title: 'Compact & easy to install',
    },
    {
      icon: Shield,
      title: 'No video/image storage',
    },
    {
      icon: Truck,
      title: 'Designed for commercial vehicles',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-blue-600 font-bold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase block">
              ABOUT NX ADIS
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Smarter Co-Pilot <br className="hidden sm:inline" />
              for Every Driver
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              NX ADIS (Adaptive Driver Intelligent System) is a compact, camera-based, AI-powered Driver Monitoring System designed for commercial vehicles — taxis, cabs, trucks, and load carriers. It continuously monitors the driver's face and eyes using computer vision to detect drowsiness and distraction in real time, entirely on-device, without the need for internet or cloud.
            </p>

            <div>
              <button
                onClick={() => setShowVisionModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base rounded-full shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Our Vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column Product & Specs Visual */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Product Camera Render */}
              <div className="sm:col-span-5 relative flex justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-blue-100/50 flex items-center justify-center relative p-2 shadow-inner">
                  <img
                    src={cameraDeviceImg}
                    alt="NX ADIS IR Camera Hardware Device"
                    className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-2xl shadow-lg border border-white"
                  />
                  <div className="absolute top-1 right-1 bg-blue-600 text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                    NX Hardware
                  </div>
                </div>
              </div>

              {/* Specs Checklist */}
              <div className="sm:col-span-7 space-y-2.5 sm:space-y-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-slate-800 text-xs sm:text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Vision Modal */}
      {showVisionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setShowVisionModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase">
              MISSION & VISION
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 mb-3">
              Zero Preventable Fatigue Accidents
            </h3>

            <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>
                Our mission at NX ADIS is to eliminate road accidents caused by driver fatigue, micro-sleeps, and mobile distractions across commercial transport sectors worldwide.
              </p>
              <p>
                By processing computer vision models entirely on edge AI chips, we provide instantaneous sub-10ms alerts while ensuring 100% privacy compliance for fleet operators and drivers alike.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowVisionModal(false)}
                className="bg-blue-600 text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-blue-700 text-xs sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

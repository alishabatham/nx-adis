import React, { useState } from 'react';
import { Camera, Cpu, Bell, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Capture',
      desc: "IR camera monitors the driver's face",
      detail: 'Ultra-compact 940nm Infrared (IR) camera frames the driver head pose, eyes, and facial keypoints 60 times per second, unaffected by dark night driving or sunglasses.',
      icon: Camera,
      badgeColor: 'bg-blue-500',
    },
    {
      number: 2,
      title: 'Analyse',
      desc: 'On-device AI detects signs of drowsiness or distraction',
      detail: 'Embedded NPU runs real-time computer vision models locally on frame buffers to evaluate blink rate, yawn duration, and head orientation vector.',
      icon: Cpu,
      badgeColor: 'bg-indigo-500',
    },
    {
      number: 3,
      title: 'Alert',
      desc: 'Instant in-cabin audio alert',
      detail: 'Sub-second audible alarm chime sounding directly inside the cab alerts the driver instantly to refocus or pull over safely.',
      icon: Bell,
      badgeColor: 'bg-purple-500',
    },
    {
      number: 4,
      title: 'Escalate',
      desc: 'Notify vehicle owner via paired app (if needed)',
      detail: 'Repeated high-risk events trigger an encrypted Bluetooth/Cellular telemetry ping to the owner app dashboard.',
      icon: Smartphone,
      badgeColor: 'bg-rose-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-blue-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-blue-600 font-bold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase block">
              HOW IT WORKS
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              From Observation to Action <br className="hidden sm:inline" />
              in Real Time
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              NX ADIS uses advanced computer vision and AI to analyse the driver's face and behaviour on-device, ensuring instant detection and alerts — without storing any video or images.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenDemo}
                className="bg-white hover:bg-slate-100 text-blue-600 border border-blue-200 hover:border-blue-300 font-bold px-5 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base rounded-full shadow-xs transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Active Step Highlight Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-sm space-y-1.5 sm:space-y-2 mt-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Step {steps[activeStep].number}: {steps[activeStep].title}</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>

          </div>

          {/* Right Column Workflow Steps Diagram */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative">
              
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;

                return (
                  <div key={step.number} className="relative">
                    
                    {/* Connecting arrow for larger screens */}
                    {idx < steps.length - 1 && (
                      <div className="hidden sm:block absolute top-12 -right-4 text-slate-300 z-10">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    )}

                    <div
                      onClick={() => setActiveStep(idx)}
                      className={`bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border text-center transition-all duration-300 flex flex-col items-center justify-between cursor-pointer hover:shadow-lg ${
                        isActive
                          ? 'border-blue-500 shadow-md ring-2 ring-blue-500/20 scale-102'
                          : 'border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {/* Step Icon Container */}
                        <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1.5 sm:mb-2 shadow-xs ${
                          isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                        }`}>
                          <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
                        </div>

                        {/* Step Number Circle Badge */}
                        <div className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-black flex items-center justify-center mb-1.5 sm:mb-2">
                          {step.number}
                        </div>

                        {/* Step Title */}
                        <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-0.5 leading-snug">
                          {step.title}
                        </h3>

                        {/* Step Short Description */}
                        <p className="text-slate-500 text-[10px] sm:text-xs leading-tight hidden xs:block">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-blue-100 text-blue-700' : 'text-slate-400'
                        }`}>
                          {isActive ? 'Active' : 'Select'}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

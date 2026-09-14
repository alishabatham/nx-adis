import React, { useState } from 'react';
import { Eye, UserX, Smile, BellRing, Smartphone, X } from 'lucide-react';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featureCards = [
    {
      id: 'drowsiness',
      title: 'Drowsiness Detection',
      description: 'Detects prolonged eye closure and slow blink patterns.',
      detailedDesc: 'Advanced neural networks measure Eye Aspect Ratio (EAR) and PERCLOS metrics in real-time. If eyelids remain closed beyond 1.5 seconds or blink frequencies drop severely, instant warnings trigger.',
      icon: Eye,
      bgColor: 'bg-blue-50/70 hover:bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'distraction',
      title: 'Distraction Detection',
      description: 'Identifies head turns and inattention (e.g., phone usage).',
      detailedDesc: 'Monitors Head Pose Estimation (Yaw, Pitch, Roll) and posture vector points. Triggers alerts if the driver looks away from the road or holds a phone for more than 3 consecutive seconds.',
      icon: UserX,
      bgColor: 'bg-emerald-50/70 hover:bg-emerald-50 border-emerald-100',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 'yawning',
      title: 'Yawning Detection',
      description: 'Detects mouth-opening patterns associated with yawning.',
      detailedDesc: 'Measures Mouth Aspect Ratio (MAR) to catch early-stage fatigue signatures before micro-sleeps occur, recommending rest stops during long-haul journeys.',
      icon: Smile,
      bgColor: 'bg-orange-50/70 hover:bg-orange-50 border-orange-100',
      iconBg: 'bg-orange-100 text-orange-600',
    },
    {
      id: 'in-cabin',
      title: 'In-Cabin Alerts',
      description: 'Immediate audible alert inside the cabin upon risk detection.',
      detailedDesc: 'High-decibel multi-tone audible chimes accompanied by visual flashing LEDs ensure immediate driver arousal during critical fatigue events.',
      icon: BellRing,
      bgColor: 'bg-rose-50/70 hover:bg-rose-50 border-rose-100',
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 'escalation',
      title: 'Escalation to Companion App',
      description: 'After multiple alerts, notification is sent to the vehicle owner.',
      detailedDesc: 'If repeated alerts occur within a short window, Bluetooth or cellular telemetry notifies fleet manager dashboards and owner smartphone companion apps for intervention.',
      icon: Smartphone,
      bgColor: 'bg-purple-50/70 hover:bg-purple-50 border-purple-100',
      iconBg: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 sm:space-y-3 mb-8 sm:mb-14 max-w-3xl">
          <span className="text-blue-600 font-bold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase block">
            KEY FEATURES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Real-Time Detection for Safer Journeys
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            NX ADIS (Adaptive Driver Intelligent System) actively monitors the driver's behaviour and provides instant alerts before a small lapse becomes a big risk.
          </p>
        </div>

        {/* 5 Card Responsive Grid matching layout of reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedFeature(card)}
                className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:shadow-xl ${card.bgColor}`}
              >
                <div>
                  {/* Circular Icon Container */}
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-6 shadow-xs group-hover:scale-110 transition-transform ${card.iconBg}`}>
                    <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-slate-900 font-bold text-sm sm:text-lg leading-snug mb-1.5 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 ${selectedFeature.iconBg}`}>
              <selectedFeature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase">
              FEATURE SPECIFICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 mb-3">
              {selectedFeature.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {selectedFeature.detailedDesc}
            </p>

            <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200/70 text-xs text-slate-500 space-y-1.5">
              <div className="flex justify-between font-medium">
                <span>Detection Latency:</span>
                <span className="text-slate-800 font-semibold">&lt; 10 ms (Sub-second)</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Processing Mode:</span>
                <span className="text-slate-800 font-semibold">100% On-Device Neural Edge</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Privacy Standard:</span>
                <span className="text-slate-800 font-semibold">Zero Video Recording / Stream</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedFeature(null)}
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

import React, { useState } from 'react';
import { Play, ArrowDown, Eye, Compass, Target, CheckCircle2, Zap, WifiOff, ShieldCheck, Truck } from 'lucide-react';
import heroDriverImg from '../assets/hero_driver.jpg';

export default function Hero({ onOpenDemo }) {
  const [hudState, setHudState] = useState('Attentive');

  return (
    <section id="home" className="pt-24 pb-12 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-300/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              SAFER DRIVERS. SAFER ROADS.
            </div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  NX ADIS
                </span>
              </h1>
              
              <h2 className="font-display text-xl sm:text-3xl lg:text-4xl text-slate-800 font-extrabold tracking-tight leading-snug">
                Adaptive Driver Intelligent System
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Detecting driver drowsiness & distraction in real time — Fully offline, on-device, privacy-first.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 max-w-md">
              <button
                onClick={onOpenDemo}
                className="flex-1 sm:flex-initial justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-base rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer group whitespace-nowrap"
              >
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>

              <a
                href="#about"
                className="flex-1 sm:flex-initial justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-base rounded-full font-semibold transition-all flex items-center gap-1.5 sm:gap-2 hover:border-slate-400 whitespace-nowrap"
              >
                <span>Learn More</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0" />
              </a>
            </div>

            {/* 4 Feature Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200/80">
              <div className="flex flex-col items-start gap-0.5 p-1.5 sm:p-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-0.5 sm:mb-1" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">Real-time</span>
                <span className="text-[11px] sm:text-xs text-slate-500">Detection</span>
              </div>
              <div className="flex flex-col items-start gap-0.5 p-1.5 sm:p-2">
                <WifiOff className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-0.5 sm:mb-1" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">Fully</span>
                <span className="text-[11px] sm:text-xs text-slate-500">Offline</span>
              </div>
              <div className="flex flex-col items-start gap-0.5 p-1.5 sm:p-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-0.5 sm:mb-1" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">Privacy</span>
                <span className="text-[11px] sm:text-xs text-slate-500">First</span>
              </div>
              <div className="flex flex-col items-start gap-0.5 p-1.5 sm:p-2">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-0.5 sm:mb-1" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">Built for</span>
                <span className="text-[11px] sm:text-xs text-slate-500">Real Roads</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual HUD Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group">
              
              {/* Driver Image */}
              <img
                src={heroDriverImg}
                alt="NX ADIS Driver Monitoring AI in action"
                className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Simulated Face Bounding Box HUD Layer */}
              <div className="absolute top-[26%] left-[55%] -translate-x-1/2 w-24 h-32 sm:w-32 sm:h-40 border-2 border-emerald-400 rounded-lg shadow-[0_0_15px_rgba(52,211,153,0.4)] pointer-events-none flex flex-col justify-between p-1">
                {/* Bounding Box Corner Reticles */}
                <div className="flex justify-between">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 border-t-2 border-l-2 border-emerald-400"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 border-t-2 border-r-2 border-emerald-400"></span>
                </div>
                {/* AI Facial Landmarks dots */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
                </div>
                <div className="flex justify-between">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 border-b-2 border-l-2 border-emerald-400"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 border-b-2 border-r-2 border-emerald-400"></span>
                </div>
              </div>

              {/* Top-Right HUD Status Card */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xl text-white w-36 sm:w-48 space-y-1.5 sm:space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-200">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>Eyes Open</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-200">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span className="truncate">Looking Forward</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-200">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                  <span>Focused</span>
                </div>

                {/* Status Badge Pill */}
                <div className="pt-0.5">
                  <div className="w-full bg-emerald-500 text-white font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Attentive</span>
                  </div>
                </div>
              </div>

              {/* Bottom Cursive Tagline overlay */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 text-white text-right drop-shadow-md hidden xs:block">
                <p className="font-handwriting text-lg sm:text-2xl lg:text-3xl text-slate-100 tracking-wide font-normal leading-tight">
                  Driving Safety <br /> for a Better Tomorrow
                </p>
              </div>

              {/* Interactive Demo Trigger Badge */}
              <button
                onClick={onOpenDemo}
                className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-blue-600/90 hover:bg-blue-600 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl backdrop-blur-sm border border-blue-400/40 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Test Simulator</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

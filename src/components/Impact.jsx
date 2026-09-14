import React, { useState } from 'react';
import { ArrowRight, ArrowDownRight, Infinity as InfinityIcon, ShieldAlert, Calculator, TrendingDown, Users } from 'lucide-react';
import impactHighwayImg from '../assets/impact_highway.jpg';

export default function Impact({ onOpenContact }) {
  const [fleetSize, setFleetSize] = useState(25);

  // Calculations:
  // Avg annual accidents for 25 vehicles without DMS: ~3-4
  // Avg accident cost: $45,000
  // Accident reduction rate: 85%
  const annualAccidentsPrevented = Math.round(fleetSize * 0.16 * 0.85);
  const annualSavingsUSD = Math.round(fleetSize * 1800);

  return (
    <section id="impact" className="relative bg-slate-950 text-white overflow-hidden py-12 md:py-24">
      {/* Background Highway Truck Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-luminosity">
        <img
          src={impactHighwayImg}
          alt="Commercial fleet highway driving at night"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Impact Pitch */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-blue-400 font-bold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase block">
              OUR IMPACT
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Safer Drivers. <br />
              <span className="text-blue-400">Brighter Tomorrows.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              By preventing accidents caused by fatigue and distraction, NX ADIS helps protect drivers, businesses, and families — creating safer roads for everyone.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenContact}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Our Impact</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Reference Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-10 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  1M+
                </div>
                <div className="text-[11px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  Lives can be safer
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight flex items-center gap-0.5 sm:gap-1">
                  <ArrowDownRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[3]" />
                  <span>85%</span>
                </div>
                <div className="text-[11px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  Accident Reduction
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-black text-emerald-400 tracking-tight flex items-center gap-1">
                  <InfinityIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-[11px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1 font-medium">
                  A Safer Future
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fleet Impact & ROI Calculator */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-800 shadow-2xl space-y-4 sm:space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Fleet Safety Calculator</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400">Estimate risk reduction for your fleet</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                  Interactive
                </span>
              </div>

              {/* Slider Input */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Fleet Size (Vehicles):</span>
                  <span className="text-lg sm:text-2xl font-black text-blue-400">{fleetSize} Trucks / Cabs</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-500">
                  <span>5 Vehicles</span>
                  <span>100 Vehicles</span>
                  <span>200+ Vehicles</span>
                </div>
              </div>

              {/* Calculation Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Est. Accidents Avoided</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    ~{annualAccidentsPrevented || 1} / year
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Based on 85% fatigue alert save rate</p>
                </div>

                <div className="bg-slate-950/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <TrendingDown className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estimated Annual Savings</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-blue-400">
                    ${annualSavingsUSD.toLocaleString()}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">Damage, downtime & insurance</p>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenContact}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Fleet Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

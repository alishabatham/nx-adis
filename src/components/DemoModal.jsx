import React, { useState, useEffect } from 'react';
import { X, Volume2, VolumeX, Eye, Compass, AlertTriangle, CheckCircle2, ShieldAlert, Activity, Smartphone } from 'lucide-react';
import heroDriverImg from '../assets/hero_driver.jpg';
import nxLogo from '../assets/nx_logo.png';

export default function DemoModal({ isOpen, onClose }) {
  const [activeState, setActiveState] = useState('attentive');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [simulationLogs, setSimulationLogs] = useState([]);

  // Audio synthesize alert sound using Web Audio API
  const triggerAudioAlert = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.log('Audio playback context prevented by browser gesture:', e);
    }
  };

  useEffect(() => {
    if (activeState !== 'attentive') {
      triggerAudioAlert();
    }
    const timestamp = new Date().toLocaleTimeString();
    setSimulationLogs((prev) => [
      `[${timestamp}] State changed to ${activeState.toUpperCase()} - Latency 4.2ms`,
      ...prev.slice(0, 5),
    ]);
  }, [activeState]);

  if (!isOpen) return null;

  const statesConfig = {
    attentive: {
      title: 'Attentive',
      boxColor: 'border-emerald-400 bg-emerald-500/10',
      badgeBg: 'bg-emerald-500 text-white',
      alertMessage: 'Driver status normal. Eyes focused on road.',
      eyeStatus: 'Eyes Open (EAR 0.38)',
      headStatus: 'Looking Forward (Yaw 0.2°)',
      alertness: 98,
      statusIcon: CheckCircle2,
    },
    drowsy: {
      title: 'Drowsy / Prolonged Blink',
      boxColor: 'border-red-500 bg-red-500/20 animate-pulse',
      badgeBg: 'bg-red-600 text-white animate-pulse',
      alertMessage: 'WARNING: Prolonged Eye Closure (> 1.8s) Detected!',
      eyeStatus: 'Eyelids Closed (EAR 0.08)',
      headStatus: 'Head Nodding Downward',
      alertness: 28,
      statusIcon: AlertTriangle,
    },
    distracted: {
      title: 'Distracted / Phone Usage',
      boxColor: 'border-amber-500 bg-amber-500/20',
      badgeBg: 'bg-amber-600 text-white',
      alertMessage: 'WARNING: Driver Head Pose Off-Road (> 3.2s)!',
      eyeStatus: 'Gaze Shifted Left',
      headStatus: 'Head Turned (Yaw -34.5°)',
      alertness: 45,
      statusIcon: ShieldAlert,
    },
    yawning: {
      title: 'Fatigue / Yawning',
      boxColor: 'border-purple-500 bg-purple-500/20',
      badgeBg: 'bg-purple-600 text-white',
      alertMessage: 'NOTICE: Repeated Yawning (MAR 0.72) Detected',
      eyeStatus: 'Mouth Wide Open Pattern',
      headStatus: 'Frequent Micro-Movement',
      alertness: 62,
      statusIcon: Activity,
    },
  };

  const scenarios = [
    { key: 'attentive', name: 'Attentive Normal Driving', desc: 'Driver focused on road', icon: CheckCircle2, color: 'text-emerald-400' },
    { key: 'drowsy', name: 'Drowsiness & Micro-Sleep', desc: 'Prolonged eye closure alert', icon: AlertTriangle, color: 'text-red-400' },
    { key: 'distracted', name: 'Mobile Phone Distraction', desc: 'Head turned off road', icon: Smartphone, color: 'text-amber-400' },
    { key: 'yawning', name: 'Yawning & Early Fatigue', desc: 'Mouth aspect ratio threshold', icon: Activity, color: 'text-purple-400' },
  ];

  const current = statesConfig[activeState];
  const StatusIcon = current.statusIcon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-4 animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-800 shadow-2xl relative my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <img
              src={nxLogo}
              alt="NX Logo"
              className="h-9 w-auto object-contain"
            />
            <div>
              <h3 className="font-extrabold text-base text-white flex items-center gap-2">
                NX ADIS AI Simulator Cockpit
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  LIVE INTERACTIVE
                </span>
              </h3>
              <p className="text-xs text-slate-400">Test real-time computer vision detection scenarios</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Toggle Audio Alert"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
              <span>{soundEnabled ? 'Audio On' : 'Muted'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Visual Canvas Simulator */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex items-center justify-center group shadow-xl">
              
              <img
                src={heroDriverImg}
                alt="Driver Simulation Frame"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  activeState === 'drowsy' ? 'brightness-75' : ''
                }`}
              />

              {/* Bounding Box AI Tracking Box */}
              <div className={`absolute top-[28%] left-[55%] -translate-x-1/2 w-36 h-44 border-2 rounded-xl transition-all duration-300 ${current.boxColor} shadow-lg pointer-events-none flex flex-col justify-between p-1.5`}>
                <div className="flex justify-between">
                  <span className="w-3 h-3 border-t-2 border-l-2 border-current"></span>
                  <span className="w-3 h-3 border-t-2 border-r-2 border-current"></span>
                </div>
                <div className="flex justify-center items-center gap-5">
                  <span className={`w-2 h-2 rounded-full ${activeState === 'drowsy' ? 'bg-red-500 animate-ping' : 'bg-emerald-400 animate-ping'}`}></span>
                  <span className={`w-2 h-2 rounded-full ${activeState === 'drowsy' ? 'bg-red-500 animate-ping' : 'bg-emerald-400 animate-ping'}`}></span>
                </div>
                <div className="flex justify-between">
                  <span className="w-3 h-3 border-b-2 border-l-2 border-current"></span>
                  <span className="w-3 h-3 border-b-2 border-r-2 border-current"></span>
                </div>
              </div>

              {/* Live HUD telemetry Overlay */}
              <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl p-3 text-xs space-y-1.5 w-48 shadow-lg">
                <div className="flex items-center gap-2 text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span className="truncate">{current.eyeStatus}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span className="truncate">{current.headStatus}</span>
                </div>
                <div className="pt-1">
                  <div className={`w-full font-bold text-xs py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm ${current.badgeBg}`}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    <span>{current.title.split('/')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Alert Warning Overlay Banner */}
              <div className={`absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md border text-xs font-bold flex items-center gap-2.5 transition-all ${
                activeState === 'attentive'
                  ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                  : 'bg-red-950/90 border-red-500/60 text-red-200 animate-bounce'
              }`}>
                <StatusIcon className="w-4 h-4 shrink-0" />
                <span>{current.alertMessage}</span>
              </div>

            </div>

            {/* Real-time Telemetry Bar */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-400">Driver Alertness Score:</span>
                <span className={`font-black ${current.alertness > 80 ? 'text-emerald-400' : current.alertness > 50 ? 'text-amber-400' : 'text-red-400'}`}>
                  {current.alertness}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    current.alertness > 80 ? 'bg-emerald-500' : current.alertness > 50 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${current.alertness}%` }}
                />
              </div>
            </div>
          </div>

          {/* Controls & Logs Panel */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Select Simulation Scenario:
              </h4>

              <div className="grid grid-cols-1 gap-2.5">
                {scenarios.map((item) => {
                  const ItemIcon = item.icon;
                  const isSelected = activeState === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setActiveState(item.key)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col gap-1 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-100">
                        <ItemIcon className={`w-4 h-4 ${item.color}`} />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 pl-6">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Terminal Live Telemetry Logs */}
            <div className="bg-black/80 rounded-xl p-3 border border-slate-800 font-mono text-[11px] space-y-1">
              <div className="text-slate-500 font-bold border-b border-slate-800 pb-1 mb-1.5 flex justify-between">
                <span>LOCAL NPU EVENT LOG</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              {simulationLogs.map((log, i) => (
                <div key={i} className="text-slate-400 truncate">
                  {log}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
          <span>* Demo running on local synthetic NPU stream. No video recorded or saved.</span>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-1.5 rounded-full cursor-pointer"
          >
            Close Demo
          </button>
        </div>

      </div>
    </div>
  );
}

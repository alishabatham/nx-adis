import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BrochureModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Simulate downloading brochure PDF file:
    const blob = new Blob([
      `NX DRIVE - AI-POWERED DRIVER MONITORING SYSTEM BROCHURE\n\n` +
      `Product Specifications:\n` +
      `- Camera: 940nm Night-Vision IR Sensor (Sub-10ms latency)\n` +
      `- On-Device Edge NPU AI Processing\n` +
      `- Zero Cloud/Video Storage - 100% Privacy Compliant\n` +
      `- Features: Drowsiness, Distraction, Yawning, In-Cabin Speaker Alert & Companion App Telemetry\n\n` +
      `Thank you for requesting brochure! Contact sales@nxdrive.ai for custom fleet deployments.`
    ], { type: 'text/plain;charset=utf-8' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'NX_Drive_Product_Brochure.txt';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-100">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>

            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase">
              OFFICIAL SPEC SHEET
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">
              Download NX Drive Brochure
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Get complete hardware dimensions, power draw, NPU performance metrics, and installation guides.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Company / Fleet Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Apex Logistics Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure (PDF)</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Download Started!
            </h3>
            <p className="text-slate-600 text-sm">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. The brochure has been saved to your downloads folder.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 text-sm"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

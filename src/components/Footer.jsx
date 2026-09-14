import React from 'react';
import nxLogo from '../assets/nx_logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-slate-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <a href="#home" className="flex items-center gap-2">
              <img
                src={nxLogo}
                alt="NX ADIS Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-black tracking-tight text-slate-900">
                <span className="text-blue-600">ADIS</span>
              </span>
            </a>
            <p className="text-slate-500 text-xs font-semibold">
              Adaptive Driver Intelligent System
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#impact" className="hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Social Icons (matching reference image) */}
          <div className="flex items-center gap-4 text-slate-600">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09v2.68c0 .6-.03 1.29-.1 2.09-.06.8-.15 1.43-.28 1.9-.17.61-.46 1.07-.87 1.38-.41.31-.92.51-1.52.6-1.07.13-2.67.2-4.8.2H9.63c-2.13 0-3.73-.07-4.8-.2-.6-.09-1.11-.29-1.52-.6-.41-.31-.7-.77-.87-1.38-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09V11.16c0-.6.03-1.29.1-2.09.06-.8.15-1.43.28-1.9.17-.61.46-1.07.87-1.38.41-.31.92-.51 1.52-.6 1.07-.13 2.67-.2 4.8-.2H14.37c2.13 0 3.73.07 4.8.2.6.09 1.11.29 1.52.6.41.31.7.77.87 1.38z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X Twitter"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} NX ADIS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:underline">Privacy Policy</a>
            <a href="#home" className="hover:underline">Terms of Service</a>
            <a href="#home" className="hover:underline">Fleet Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

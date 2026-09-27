import React from 'react';
import { Terminal, Code, Cpu, Smartphone, Globe, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>

      {/* Main IDE Window Mockup */}
      <div className="relative rounded-2xl bg-white/95 dark:bg-navy-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300">
        {/* Editor Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-navy-950/90 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Code className="w-3.5 h-3.5 text-primary-500" />
            <span>DeveloperProfile.ts</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            ACTIVE
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
          <div className="text-slate-400 dark:text-slate-500 italic mb-2">
            // Full Stack MERN & Mobile App Engineer
          </div>
          <div>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
            <span className="text-blue-600 dark:text-blue-400 font-bold">engineer</span>:{' '}
            <span className="text-amber-600 dark:text-amber-300">FullStackDeveloper</span> = {'{'}
          </div>

          <div className="pl-4 sm:pl-6 space-y-1 my-1">
            <div>
              <span className="text-slate-600 dark:text-slate-400">name:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400">"Gokulraj V"</span>,
            </div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">roles:</span> [
              <span className="text-emerald-600 dark:text-emerald-400">"MERN Stack"</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">"Web & Mobile"</span>],
            </div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">company:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400">"Softye Technologies"</span>,
            </div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">platforms:</span> {'{'}
            </div>
            <div className="pl-4 space-y-0.5 text-[11px] sm:text-xs">
              <div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">web:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Node.js"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"TypeScript"</span>],
              </div>
              <div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">mobile:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">"React Native"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Expo"</span>],
              </div>
              <div>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">database:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"MongoDB / Mongoose"</span>
              </div>
            </div>
            <div>{'}'},</div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">status:</span>{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">"Ready to Build Scalable Solutions"</span>
            </div>
          </div>

          <div>{'}'};</div>
        </div>

        {/* Live System Diagnostics Bar */}
        <div className="px-5 py-3 bg-slate-50/90 dark:bg-navy-950/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>Web Apps</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <Smartphone className="w-3.5 h-3.5 text-purple-500" />
              <span>Mobile Apps</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-primary-600 dark:text-primary-400 font-medium">
            <span>REST APIs & SaaS</span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-xl items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xs">
          TS
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">TypeScript & React</div>
          <div className="text-[10px] text-slate-500">Robust Architecture</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -top-4 -right-4 bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-xl items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-xs">
          RN
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">React Native & Expo</div>
          <div className="text-[10px] text-slate-500">Android & iOS Delivery</div>
        </div>
      </div>
    </div>
  );
}

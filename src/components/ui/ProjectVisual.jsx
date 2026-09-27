import React from 'react';
import { 
  Building2, 
  Receipt, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  GraduationCap, 
  Coins, 
  MapPin, 
  Globe, 
  Utensils, 
  Code, 
  Users,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  Clock,
  QrCode
} from 'lucide-react';

export default function ProjectVisual({ projectId, variant = 'card', className = '' }) {
  // Renders domain-authentic, responsive mockups for every project

  if (projectId === 'softyeone') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-navy-900 to-blue-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Web Mockup */}
        <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] bg-slate-800/90 rounded-xl border border-slate-700/80 shadow-2xl p-3 text-white backdrop-blur">
          {/* Browser header */}
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="text-[10px] text-slate-400 font-mono ml-2">softyeone.app/billing</span>
            </div>
            <span className="text-[9px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30">WEB</span>
          </div>
          {/* Dashboard contents */}
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <div className="text-[9px] text-slate-400">Total Revenue</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400">₹4,82,500</div>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <div className="text-[9px] text-slate-400">GST Filed</div>
              <div className="text-xs sm:text-sm font-bold text-blue-400">18% Compliant</div>
            </div>
            <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
              <div className="text-[9px] text-slate-400">Invoices</div>
              <div className="text-xs sm:text-sm font-bold text-purple-400">1,248</div>
            </div>
          </div>
          {/* Mini billing table */}
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between items-center bg-slate-900/50 p-1.5 rounded text-slate-300">
              <span className="font-mono">#INV-2025-089</span>
              <span className="text-emerald-400 font-medium">PAID (₹18,500)</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/50 p-1.5 rounded text-slate-300">
              <span className="font-mono">#INV-2025-090</span>
              <span className="text-amber-400 font-medium">PENDING (₹34,200)</span>
            </div>
          </div>
        </div>

        {/* Floating Mobile Mockup */}
        <div className="absolute right-3 sm:right-6 bottom-3 z-20 w-24 sm:w-28 bg-slate-950 rounded-2xl border-2 border-primary-500/50 shadow-2xl p-1.5 text-white">
          <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto mb-1.5"></div>
          <div className="bg-primary-950/60 p-1.5 rounded-lg border border-primary-800/40 text-[9px] space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[8px] text-primary-300 font-bold">SoftyeOne</span>
              <span className="text-[7px] bg-primary-500/30 text-primary-200 px-1 rounded">App</span>
            </div>
            <div className="text-[8px] text-slate-300">Quick Bill: ₹4,500</div>
            <div className="h-1 w-full bg-emerald-500/80 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'softye-pg') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="absolute top-2 right-3 z-20">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-300 bg-sky-500/20 border border-sky-500/30 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            IN DEVELOPMENT
          </span>
        </div>

        {/* Web Admin preview */}
        <div className="relative z-10 w-full max-w-[270px] sm:max-w-[310px] bg-slate-900/90 rounded-xl border border-sky-800/40 shadow-2xl p-3 text-white backdrop-blur">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-900/60">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-sky-100">Softye PG Admin</span>
            </div>
            <span className="text-[9px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-mono">Room Matrix</span>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-4 gap-1.5 mb-2.5">
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-1.5 rounded text-center">
              <span className="text-[8px] text-emerald-300 block font-mono">101</span>
              <span className="text-[7px] text-emerald-400 font-bold">OCC</span>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-1.5 rounded text-center">
              <span className="text-[8px] text-emerald-300 block font-mono">102</span>
              <span className="text-[7px] text-emerald-400 font-bold">OCC</span>
            </div>
            <div className="bg-blue-950/60 border border-blue-500/40 p-1.5 rounded text-center">
              <span className="text-[8px] text-blue-300 block font-mono">103</span>
              <span className="text-[7px] text-blue-400 font-bold">VACANT</span>
            </div>
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-1.5 rounded text-center">
              <span className="text-[8px] text-emerald-300 block font-mono">104</span>
              <span className="text-[7px] text-emerald-400 font-bold">OCC</span>
            </div>
          </div>

          {/* Resident Quick Info */}
          <div className="flex items-center justify-between bg-slate-950/70 p-2 rounded text-[10px] text-slate-300 border border-slate-800">
            <span>Active Residents: <strong className="text-white">48</strong></span>
            <span className="text-amber-400 font-medium">Meals Today: 45</span>
          </div>
        </div>

        {/* Mobile resident app snippet */}
        <div className="absolute right-2 sm:right-4 bottom-2 z-20 w-24 bg-slate-950 border border-sky-500/50 rounded-xl p-1.5 shadow-xl text-white">
          <div className="text-[8px] font-bold text-sky-300 mb-1">Resident App</div>
          <div className="text-[7px] bg-slate-900 p-1 rounded mb-1 text-slate-300">My Stay: Room 102</div>
          <div className="text-[7px] text-emerald-400">Rent Paid ✓</div>
        </div>
      </div>
    );
  }

  if (projectId === 'qchecker') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-emerald-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-900/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-200">Quality Inspection</span>
            </div>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">100% Passed</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between bg-slate-950/70 p-1.5 rounded border border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Dimension Spec</span>
              <span className="text-emerald-400 font-mono">PASSED</span>
            </div>
            <div className="flex items-center justify-between bg-slate-950/70 p-1.5 rounded border border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Material Integrity</span>
              <span className="text-emerald-400 font-mono">PASSED</span>
            </div>
            <div className="flex items-center justify-between bg-slate-950/70 p-1.5 rounded border border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Packaging Audit</span>
              <span className="text-emerald-400 font-mono">PASSED</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'school-management-system') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-blue-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-blue-900/60">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-200">Campus Admin</span>
            </div>
            <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-mono">Term 2025</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] mb-2">
            <div className="bg-slate-950/70 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[9px]">Students</div>
              <div className="text-sm font-bold text-blue-300">1,450</div>
            </div>
            <div className="bg-slate-950/70 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[9px]">Attendance</div>
              <div className="text-sm font-bold text-emerald-400">96.4%</div>
            </div>
          </div>
          <div className="text-[9px] bg-slate-950/50 p-1.5 rounded text-slate-400 flex justify-between">
            <span>Staff Roster: 62 Active</span>
            <span className="text-blue-400">Operations OK</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'global-finance') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-amber-950/80 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-amber-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-900/60">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-200">Fiscal Ledger</span>
            </div>
            <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">Audit Ready</span>
          </div>
          <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 text-[10px] space-y-1.5">
            <div className="flex justify-between text-slate-300">
              <span>Operating Cash Flow</span>
              <span className="text-emerald-400 font-mono">+ ₹12,45,000</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[9px]">
              <span>Tax Reserves (TDS/GST)</span>
              <span className="font-mono text-amber-400">₹2,10,000</span>
            </div>
            <div className="flex justify-between text-white font-bold border-t border-slate-800 pt-1 text-[10px]">
              <span>Net Ledger Position</span>
              <span className="text-blue-400 font-mono">Balanced</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'today-local') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-teal-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-teal-900/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-bold text-teal-200">Local Directory</span>
            </div>
            <span className="text-[9px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-mono">Erode Region</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="bg-slate-950/70 p-2 rounded flex justify-between items-center text-slate-300">
              <span>Retail & Supermarkets</span>
              <span className="text-teal-300 font-mono">140+ Listings</span>
            </div>
            <div className="bg-slate-950/70 p-2 rounded flex justify-between items-center text-slate-300">
              <span>Health & Diagnostics</span>
              <span className="text-teal-300 font-mono">85+ Listings</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'indiglope') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-indigo-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-indigo-900/60">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-200">Indiglope Portal</span>
            </div>
            <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">Global B2B</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded text-[10px] space-y-1 text-slate-300">
            <div>Cross-border consulting solutions</div>
            <div className="text-[9px] text-indigo-400">Interactive consultation inquiry workflows</div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'food-munch') {
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-orange-950 to-slate-950 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
        <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-orange-800/40 shadow-2xl p-3.5 text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-orange-900/60">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold text-orange-200">Hotel Food Ordering</span>
            </div>
            <span className="text-[9px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded font-mono">Menu Cart</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded text-[10px] space-y-1.5 text-slate-300">
            <div className="flex justify-between items-center">
              <span>Chef's Special Combo</span>
              <span className="text-orange-400 font-mono">₹380</span>
            </div>
            <div className="flex justify-between items-center text-slate-400 text-[9px]">
              <span>Cart Status</span>
              <span className="text-emerald-400">2 Items Added</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default / Portfolio Website / One Invoice
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-slate-800 to-navy-900 p-4 sm:p-5 flex items-center justify-center overflow-hidden rounded-t-2xl ${className}`}>
      <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 rounded-xl border border-slate-700/60 shadow-2xl p-3.5 text-white">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-primary-400" />
            <span className="text-xs font-bold text-slate-200">Application Architecture</span>
          </div>
          <span className="text-[9px] bg-primary-500/20 text-primary-300 px-1.5 py-0.5 rounded font-mono">MERN Stack</span>
        </div>
        <div className="space-y-1 text-[10px] text-slate-300">
          <div className="flex justify-between bg-slate-950/60 p-1.5 rounded">
            <span>Frontend Components</span>
            <span className="text-primary-400">React.js</span>
          </div>
          <div className="flex justify-between bg-slate-950/60 p-1.5 rounded">
            <span>REST API Backend</span>
            <span className="text-emerald-400">Node / Express</span>
          </div>
        </div>
      </div>
    </div>
  );
}

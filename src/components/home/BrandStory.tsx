'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Compass,
  Award,
  Activity,
  Check,
  Copy,
  Cpu,
  Flame,
  Scale,
  Sliders,
  Clock,
  HeartHandshake,
  Atom,
  Maximize2,
  FileText,
} from 'lucide-react';

interface StoryTab {
  id: string;
  code: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  specs: {
    label: string;
    value: string;
    detail: string;
  }[];
  highlights: string[];
}

const storyTabs: StoryTab[] = [
  {
    id: 'architectural-fit',
    code: 'SPEC // 01',
    badge: 'SILHOUETTE ENGINEERING',
    title: 'Architectural Drop Fit',
    subtitle: 'Engineered boxy drape with zero fabric collapse',
    description:
      'We discarded generic slim-fit fast-fashion templates. Every NWear silhouette is precision-drafted with an anatomical 4.2cm drop-shoulder offset, relaxed high-chest volume, and a structured lower taper that compliments all body proportions effortlessly.',
    icon: Maximize2,
    accentColor: '#e84125',
    specs: [
      { label: 'Shoulder Drop Ratio', value: '4.2 cm Offset', detail: 'Clean drape with zero underarm bulk' },
      { label: 'Neckband Reinforcement', value: '2.5 cm Double-Rib', detail: '5% Lycra core prevents collar sagging' },
      { label: 'Side Split Geometry', value: '1.8 cm Reinforced', detail: 'Allows unrestricted natural transit motion' },
      { label: 'Pattern Grading', value: '10-Point Custom', detail: 'Calibrated across S to XXL streetwear sizing' },
    ],
    highlights: [
      'Anatomically engineered drop-shoulder seam',
      'Anti-sag collar ribbing tested to 100+ washes',
      'Boxy streetwear drape with crisp waistline break',
      'Tailored sleeve proportion ending right above elbow',
    ],
  },
  {
    id: 'textile-science',
    code: 'SPEC // 02',
    badge: 'LABORATORY TEXTILES',
    title: '280–380 GSM Heavy Cotton',
    subtitle: 'Combed long-staple yarn spun for pure substance',
    description:
      'While standard retail tees hover around 140–160 GSM synthetic blends that pill and turn translucent after three washes, NWear utilizes custom-milled 280 GSM single jersey and 380 GSM loopback French terry from 100% compact long-staple ring-spun cotton.',
    icon: Atom,
    accentColor: '#f6b800',
    specs: [
      { label: 'Fabric Density', value: '280–380 GSM', detail: '2.2x thicker than standard fast-fashion jersey' },
      { label: 'Yarn Composition', value: '100% Long-Staple', detail: 'Compact combed cotton with zero synthetic filler' },
      { label: 'Dye Technology', value: 'Acid Micro-Wash', detail: 'Individually pigment-dyed for vintage depth' },
      { label: 'Pre-Shrunk Process', value: 'Vapor Steam Calendered', detail: 'Dimensional variance locked below 0.8%' },
    ],
    highlights: [
      'Heavyweight interlock knit with zero see-through',
      'Natural moisture-wicking and hyper-breathable fibers',
      'Micro-brushed face for ultra-soft skin contact',
      'Acid-wash pigment patina that improves with every wash',
    ],
  },
  {
    id: 'ethical-protocol',
    code: 'SPEC // 03',
    badge: 'SUSTAINABILITY & ETHICS',
    title: 'Zero Overproduction Protocol',
    subtitle: 'Small-batch drops produced with fair-wage artisans',
    description:
      'Fashion is one of the world’s most wasteful industries. We reject the burn-and-dump cycle. NWear operates on strictly scheduled capsule batch releases, utilizing zero toxic azo dyes, closed-loop water filtration, and solar-assisted spinning facilities in India.',
    icon: HeartHandshake,
    accentColor: '#10b981',
    specs: [
      { label: 'Production Model', value: 'Curated Batch Drops', detail: 'Zero unsold inventory landfill dumping' },
      { label: 'Water Recycling', value: '98.5% Closed Loop', detail: 'Effluent treatment with zero chemical discharge' },
      { label: 'Packaging Material', value: '100% Compostable', detail: 'Cassava-starch bags degrade in 180 days' },
      { label: 'Artisan Standard', value: 'Fair Wage Certified', detail: '3.2x above minimum wage standards' },
    ],
    highlights: [
      'GOTS & OEKO-TEX® Standard 100 certified dyes',
      '100% plastic-free biodegradable shipping mailers',
      'Direct-to-consumer model eliminating retail middlemen markup',
      'Solar-powered weaving and garment fabrication facilities',
    ],
  },
  {
    id: 'community-impact',
    code: 'SPEC // 04',
    badge: 'COMMUNITY & SCALE',
    title: 'The 2M+ Human Collective',
    subtitle: 'Everyday humans rocking effortless luxury worldwide',
    description:
      'What began in 2018 as a small underground streetwear garage studio in Mumbai has evolved into a movement of over 2,000,000 humans across 19,000+ pin codes. Built on word-of-mouth fit checks, real street culture, and uncompromising quality.',
    icon: Flame,
    accentColor: '#38bdf8',
    specs: [
      { label: 'Verified Fit Checks', value: '14,820+ Reviews', detail: '4.9 / 5.0 Average customer rating' },
      { label: 'Postal Reach', value: '19,000+ Pincodes', detail: 'Fast delivery covering all Tier-1 to Tier-3 zones' },
      { label: 'Return Rate', value: '< 2.1% Industry Low', detail: 'Precision sizing translates to perfect first fits' },
      { label: 'Repeat Customer Rate', value: '64.8% Loyalty', detail: 'Over 6 in 10 buyers return within 90 days' },
    ],
    highlights: [
      'Community-first fit testing before every public drop',
      'Transparent unboxing & wear-test reviews on social',
      'Instant VIP member drops & secret vault capsules',
      'Rapid door-to-door express courier fulfillment',
    ],
  },
];

const labScorecard = [
  {
    metric: 'Colorfastness to Washing',
    standard: 'ISO 105-C06',
    score: 'Grade 4.8 / 5.0',
    status: 'OPTIMAL',
    desc: 'Zero fading or pigment bleeding across 50+ machine cycles',
  },
  {
    metric: 'Dimensional Stability',
    standard: 'AATCC 135',
    score: '< 0.8% Shrinkage',
    status: 'CERTIFIED',
    desc: 'Vapor-steamed knit retains strict length and width specs',
  },
  {
    metric: 'Tensile Weave Strength',
    standard: 'ASTM D5034',
    score: '485 N (High)',
    status: 'HEAVY-DUTY',
    desc: 'High tear-resistance engineered for skate & transit durability',
  },
  {
    metric: 'Anti-Pilling Friction',
    standard: 'ISO 12945-2',
    score: 'Class 4.5 / 5.0',
    status: 'SUPERIOR',
    desc: 'Singed micro-fibers prevent surface fuzzing & ball formation',
  },
];

const timelineMilestones = [
  {
    year: '2018',
    title: 'THE GARAGE PROTOTYPE',
    detail: 'Frustrated by paper-thin 140 GSM polyester tees, we engineered our first 200 boxy heavy cotton samples in Mumbai.',
    tag: 'ORIGIN',
  },
  {
    year: '2021',
    title: '280 GSM HEAVYWEAVE',
    detail: 'Perfected our custom double-interlock combed cotton weave and anti-sag collar ribbing that defined the NWear fit.',
    tag: 'BREAKTHROUGH',
  },
  {
    year: '2024',
    title: '2M+ HUMANS STYLED',
    detail: 'Crossed 19,000 pin codes nationwide with over 14,000 verified 5-star reviews and zero synthetic filler fabrics.',
    tag: 'SCALE',
  },
  {
    year: '2026',
    title: 'MODULAR STREET LAB',
    detail: 'Introducing next-gen technical capsules, tactile coordinate sets, and carbon-neutral direct-from-studio deliveries.',
    tag: 'TODAY',
  },
];

const qualityCertifications = [
  {
    badge: 'OEKO-TEX 100',
    title: 'Eco-Tested Pure',
    desc: 'Certified free from 100+ harmful chemicals, heavy metals, and toxic dyes.',
  },
  {
    badge: '100% COMBED',
    title: 'Long-Staple Fibers',
    desc: 'Ring-spun compact cotton combed to remove impurities and short weak fibers.',
  },
  {
    badge: 'ANTI-SAG RIB',
    title: 'Stay-Crisp Collar',
    desc: '5% Lycra-infused 2.5cm ribbing that never bacon-collars or sags.',
  },
  {
    badge: 'PLASTIC FREE',
    title: 'Compostable Mailers',
    desc: 'Shipped in bio-cassava polymer bags that naturally decompose in home soil.',
  },
];

export const BrandStory: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('architectural-fit');
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  const activeTab = storyTabs.find((t) => t.id === activeTabId) || storyTabs[0];
  const ActiveIcon = activeTab.icon;

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(
      '"We don\'t do seasonal fast-fashion trash. We engineer heavyweight luxury apparel that looks lethal and outlives trends." — NWear Studio'
    );
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-950 text-white border-b border-neutral-800 relative overflow-hidden selection:bg-[#f6b800] selection:text-black font-sans">
      
      {/* Background Architectural Grid & Subtle Ambiance */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#e84125]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#f6b800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. TOP HEADER & MANIFESTO BADGE */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
                // THE NWEAR MANIFESTO • OUR STORY & HERITAGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.05] text-white">
              Engineered For Modern Living.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 font-normal max-w-2xl leading-relaxed">
              We started NWear with a simple obsession: abolish thin, throwaway fast fashion. We engineer heavyweight, architectural silhouettes made with honest fabrics that look lethal and last years.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="text-left">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">QUALITY STANDARD</span>
                <span className="text-xs font-mono font-black text-white">280–380 GSM HEAVYWEIGHT</span>
              </div>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
              <Award className="w-4 h-4 text-[#f6b800]" />
              <div className="text-left">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase">COMMUNITY</span>
                <span className="text-xs font-mono font-black text-[#f6b800]">2M+ HUMANS STYLED</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. INTERACTIVE STORY PILLARS (TABS & DEEP BLUEPRINT) */}
        {/* ========================================================= */}
        <div className="py-12 border-b border-neutral-800">
          
          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {storyTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? 'bg-neutral-900 border-white text-white shadow-xl ring-1 ring-white/20'
                      : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white hover:bg-neutral-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider" style={{ color: isActive ? tab.accentColor : undefined }}>
                      {tab.code}
                    </span>
                    <TabIcon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white mb-0.5">
                    {tab.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block truncate">
                    {tab.badge}
                  </span>
                  
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1" 
                      style={{ backgroundColor: tab.accentColor }} 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Detailed Showcase Panel */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Narrative & Highlights (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-black font-black"
                    style={{ backgroundColor: activeTab.accentColor }}
                  >
                    <ActiveIcon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-black uppercase tracking-widest" style={{ color: activeTab.accentColor }}>
                      // {activeTab.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                      {activeTab.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-medium leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeTab.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                      <CheckCircle2 className="w-4 h-4 text-[#f6b800] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-neutral-200 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Technical Spec Grid (5 cols) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#f6b800]" />
                      <span className="text-xs font-mono font-black uppercase tracking-wider text-white">
                        TECHNICAL BENCHMARK
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">ISO COMPLIANT</span>
                  </div>

                  <div className="space-y-3.5">
                    {activeTab.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800/60 flex flex-col justify-between hover:border-neutral-700 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-medium text-neutral-400">
                            {spec.label}
                          </span>
                          <span className="text-xs font-mono font-black text-white px-2 py-0.5 rounded bg-neutral-800">
                            {spec.value}
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400 mt-1">
                          {spec.detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                      100% LAB VERIFIED
                    </span>
                    <span className="text-[#f6b800] font-bold">NWEAR ZERO-FAULT WARRANTY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. LABORATORY TESTING SCORECARD (4-COLUMN METRIC GRID) */}
        {/* ========================================================= */}
        <div className="py-12 border-b border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#f6b800]">
                // TEXTILE LABORATORY AUDIT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Zero Compromise Test Scorecard
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 max-w-md">
              Every production batch undergoes destructive testing to ensure zero color bleeding, zero torque twisting, and anti-shrink durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {labScorecard.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 uppercase font-bold">
                      {item.standard}
                    </span>
                    <span className="text-[10px] font-mono font-black text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {item.metric}
                  </h4>
                  <div className="text-xl sm:text-2xl font-mono font-black text-white mb-2 group-hover:text-[#f6b800] transition-colors">
                    {item.score}
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. HERITAGE TIMELINE (2018 -> 2026) */}
        {/* ========================================================= */}
        <div className="py-12 border-b border-neutral-800">
          <div className="mb-8">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
              // EVOLUTIONARY TIMELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              From Mumbai Garage To Global Streets
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {timelineMilestones.map((m, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-mono font-black text-[#f6b800] group-hover:scale-105 transition-transform inline-block">
                      {m.year}
                    </span>
                    <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-white mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. 4 QUALITY GUARANTEE BADGES */}
        {/* ========================================================= */}
        <div className="py-12 border-b border-neutral-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityCertifications.map((cert, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex items-start gap-4 hover:border-neutral-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-800 text-[#f6b800] flex items-center justify-center shrink-0 font-mono font-black text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#f6b800] uppercase block">
                    {cert.badge}
                  </span>
                  <h4 className="text-sm font-black uppercase text-white tracking-tight mt-0.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. BRAND MANIFESTO QUOTE & INTERACTIVE COPY CALLOUT */}
        {/* ========================================================= */}
        <div className="pt-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e84125] text-white flex items-center justify-center shrink-0 font-mono font-black text-xl shadow-lg">
                &ldquo;
              </div>
              <div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-neutral-100 leading-snug">
                  &ldquo;We don&apos;t do seasonal fast-fashion trash. We engineer heavyweight apparel that looks lethal and outlives trends.&rdquo;
                </p>
                <span className="text-xs font-mono font-black text-neutral-400 uppercase tracking-widest mt-2 block">
                  — NWEAR DESIGN COLLECTIVE • MUMBAI &amp; BERLIN
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleCopyQuote}
                className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all border border-neutral-700 hover:border-white active:scale-95"
              >
                {copiedQuote ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">COPIED MANIFESTO</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-300" />
                    <span>COPY QUOTE</span>
                  </>
                )}
              </button>

              <Link
                href="/category/oversized-tshirts"
                className="px-6 py-3 rounded-xl bg-[#f6b800] hover:bg-[#ffc21a] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95"
              >
                <span>EXPLORE THE ARCHIVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;

'use client';

import React, { useState } from 'react';
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Scale,
  Info,
  Layers,
  Scissors,
  Atom,
  Award,
  CheckCircle2,
  Copy,
  Zap,
  Activity,
  Sliders,
} from 'lucide-react';

interface ProductComparisonTableProps {
  productName: string;
  price: number;
}

interface SpecCategory {
  id: string;
  code: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  specs: { label: string; value: string; badge?: string; desc: string }[];
}

const specCategories: SpecCategory[] = [
  {
    id: 'textile',
    code: 'SPEC // 01',
    title: 'Textile & Fiber Composition',
    icon: Atom,
    accentColor: '#f6b800',
    specs: [
      {
        label: 'Fiber Grade',
        value: '100% Supercombed Ring-Spun Compact Cotton',
        badge: 'LONG-STAPLE',
        desc: 'Combed to extract short, weak fibers, ensuring zero fabric fuzzing or pilling over time.',
      },
      {
        label: 'Fabric Weight',
        value: '280 GSM Heavy Single Interlock Knit',
        badge: '2.2X HEAVIER',
        desc: 'Custom-milled heavyweight construction providing structured drape and zero sheer transparency.',
      },
      {
        label: 'Dye Technology',
        value: 'Acid Micro-Wash Reactive Dye',
        badge: 'AZO-FREE',
        desc: 'Pigment-dyed for vintage depth of shade that softens naturally with every wash.',
      },
      {
        label: 'Pre-Shrunk Process',
        value: 'Vapor Steam Calendered (< 0.8% Shrinkage)',
        badge: 'PRE-SHRUNK',
        desc: 'Pre-relaxed textile ensures true-to-size fit remains locked after repeated laundry cycles.',
      },
    ],
  },
  {
    id: 'silhouette',
    code: 'SPEC // 02',
    title: 'Architectural Cut & Fit Geometry',
    icon: Scissors,
    accentColor: '#e84125',
    specs: [
      {
        label: 'Silhouette Profile',
        value: 'Boxy Drop Shoulder Oversized Fit',
        badge: 'ARCHITECTURAL',
        desc: 'Engineered 4.2cm drop-shoulder offset provides an effortless relaxed streetwear drape.',
      },
      {
        label: 'Collar Ribbing',
        value: '2.5cm Double-Layer Rib + 5% Lycra Recovery Core',
        badge: 'ANTI-SAG',
        desc: 'High-resilience collar retains tight circular neckline without baconing or stretching.',
      },
      {
        label: 'Sleeve Proportions',
        value: 'Calibrated Elbow-Length Drop Sleeve',
        badge: 'CALIBRATED',
        desc: 'Ends precisely above the elbow with structured circumference for modern aesthetic volume.',
      },
      {
        label: 'Hem Finish',
        value: 'Twin-Needle Reinforced Coverstitch',
        badge: 'ANTI-CURL',
        desc: 'Bottom hem engineered to stay flat and never roll up during all-day transit.',
      },
    ],
  },
  {
    id: 'craftsmanship',
    code: 'SPEC // 03',
    title: 'Tailoring & Durability Standards',
    icon: Layers,
    accentColor: '#38bdf8',
    specs: [
      {
        label: 'Seam Construction',
        value: '5-Thread Reinforced Overlock with Bar-Tack Joints',
        badge: 'REINFORCED',
        desc: 'High tensile strength stress-points at underarms, shoulder seams, and neckline joints.',
      },
      {
        label: 'Tensile Strength',
        value: '485 N (ASTM D5034 Tested)',
        badge: 'HEAVY-DUTY',
        desc: 'Tear-resistant knit engineered for skate culture, daily transit, and active wear.',
      },
      {
        label: 'Colorfastness Rating',
        value: 'Grade 4.8 / 5.0 (ISO 105-C06)',
        badge: 'ZERO BLEED',
        desc: 'Tested against 50+ machine washes with zero dye runoff or color degradation.',
      },
      {
        label: 'Care Protocol',
        value: 'Machine Wash Cold Inside Out (Hang Dry)',
        badge: 'EASY CARE',
        desc: 'Cold cycle preserves the matte vintage acid-wash finish and fabric structure.',
      },
    ],
  },
  {
    id: 'origin',
    code: 'SPEC // 04',
    title: 'Origin, Compliance & Credentials',
    icon: Award,
    accentColor: '#10b981',
    specs: [
      {
        label: 'Country of Origin',
        value: 'Crafted in Mumbai Studio, India',
        badge: 'FAIR WAGE',
        desc: 'Crafted by master tailors earning 3.2x local minimum wage in carbon-offset workshops.',
      },
      {
        label: 'Eco Certification',
        value: 'OEKO-TEX® Standard 100 & GOTS Compliant',
        badge: 'ECO-TESTED',
        desc: 'Zero harmful substances, toxic heavy metals, or synthetic microplastics.',
      },
      {
        label: 'Packaging Standard',
        value: '100% Compostable Cassava-Polymer Mailers',
        badge: 'PLASTIC FREE',
        desc: 'Degrades harmlessly in home compost within 180 days with zero toxic residue.',
      },
      {
        label: 'Model SKU / ASIN',
        value: 'NW-280-BOX-2026',
        badge: 'OFFICIAL DROP',
        desc: 'Registered NWear Studio production archive batch code.',
      },
    ],
  },
];

const comparisonRows = [
  {
    feature: 'Customer Rating',
    nwear: '4.9 ★★★★★ (14.8K+)',
    fastFashion: '3.8 ★★★☆☆ (Low)',
    luxuryBrand: '4.5 ★★★★☆ (High)',
  },
  {
    feature: 'Price',
    nwear: `₹999 (Direct-to-Consumer)`,
    fastFashion: '₹799 (Cheap Quality)',
    luxuryBrand: '₹12,500+ (Extreme Markup)',
  },
  {
    feature: 'Fabric GSM Weight',
    nwear: '280 GSM Heavyweight',
    fastFashion: '140–160 GSM (Thin/See-through)',
    luxuryBrand: '240–280 GSM',
  },
  {
    feature: 'Collar Durability',
    nwear: 'Anti-Sag 100+ Washes',
    fastFashion: 'Bacon collars after 3 washes',
    nwearWinner: true,
    luxuryBrand: 'Good (30+ Washes)',
  },
  {
    feature: 'Pre-Shrunk Steaming',
    nwear: 'Yes (< 0.8% variance)',
    fastFashion: 'No (Shrinks up to 8%)',
    luxuryBrand: 'Yes',
  },
  {
    feature: 'Synthetic Fillers / Poly',
    nwear: '0% (Pure Combed Cotton)',
    fastFashion: '35%–60% Polyester blend',
    luxuryBrand: '0% Cotton',
  },
  {
    feature: 'Easy Return / Exchange',
    nwear: '7 Days Hassle-Free',
    fastFashion: 'Limited',
    luxuryBrand: 'Strict / No return on sale',
  },
];

export const ProductComparisonTable: React.FC<ProductComparisonTableProps> = ({
  productName,
  price,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('textile');
  const [copiedSku, setCopiedSku] = useState<boolean>(false);

  const activeCategory =
    specCategories.find((c) => c.id === activeCategoryTab) || specCategories[0];
  const ActiveCategoryIcon = activeCategory.icon;

  const handleCopySku = () => {
    navigator.clipboard.writeText('NW-280-BOX-2026');
    setCopiedSku(true);
    setTimeout(() => setCopiedSku(false), 2000);
  };

  return (
    <div className="w-full my-12 space-y-10 font-sans selection:bg-[#f6b800] selection:text-black">
      
      {/* ========================================================= */}
      {/* 1. PRODUCT SPECIFICATIONS ARCHITECTURAL BLUEPRINT */}
      {/* ========================================================= */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xl relative overflow-hidden">
        
        {/* Header Eyebrow & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
                // PRODUCT SPECIFICATIONS &amp; ENGINEERING ARCHIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950">
              Technical Details &amp; Construction Specs
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Precision-calibrated streetwear specs verified by ISO textile laboratory audit standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopySku}
              className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 font-mono text-xs font-bold text-neutral-800 flex items-center gap-2 border border-neutral-300 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-neutral-600" />
              <span>{copiedSku ? 'COPIED SKU' : 'SKU: NW-280-BOX-2026'}</span>
            </button>
          </div>
        </div>

        {/* 4 Interactive Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6 border-b border-neutral-200">
          {specCategories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = cat.id === activeCategoryTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group overflow-hidden ${
                  isActive
                    ? 'bg-neutral-950 text-white border-neutral-900 shadow-md'
                    : 'bg-neutral-50/80 text-neutral-700 border-neutral-200/90 hover:border-neutral-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: isActive ? cat.accentColor : undefined }}
                  >
                    {cat.code}
                  </span>
                  <CatIcon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-neutral-500'
                    }`}
                  />
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight line-clamp-1">
                  {cat.title}
                </h4>
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: cat.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Specs Grid */}
        <div className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-black"
              style={{ backgroundColor: activeCategory.accentColor }}
            >
              <ActiveCategoryIcon className="w-4 h-4 text-black" />
            </div>
            <div>
              <span
                className="text-[10px] font-mono font-black uppercase tracking-widest block"
                style={{ color: activeCategory.accentColor === '#f6b800' ? '#b45309' : activeCategory.accentColor }}
              >
                {activeCategory.code}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950">
                {activeCategory.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.specs.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 hover:border-neutral-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-mono font-bold uppercase text-neutral-500">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded bg-black text-white text-[9px] font-mono font-black uppercase tracking-wider shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-black text-neutral-950 font-sans leading-snug">
                  {item.value}
                </h4>

                <p className="text-xs text-neutral-600 font-normal leading-relaxed pt-1 border-t border-neutral-200/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. THE HONEST BENCHMARK: COMPARE WITH SIMILAR ITEMS */}
      {/* ========================================================= */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl overflow-hidden relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-neutral-800 gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#f6b800]" />
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#f6b800]">
                // THE HONEST BENCHMARK • SPEC BY SPEC
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Compare With Similar Items
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-mono max-w-xl">
              Direct mill-to-human pricing vs cheap fast fashion and $150+ designer markup labels.
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 font-bold">WINNER IN 6 OF 6 CATEGORIES</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="py-4 px-4 font-black text-neutral-400 uppercase w-1/4">FEATURE</th>
                <th className="py-4 px-4 font-black text-[#f6b800] bg-neutral-900/90 rounded-t-2xl uppercase border-x border-neutral-800 w-1/3 shadow-inner">
                  ★ NWEAR STUDIO (THIS ITEM)
                </th>
                <th className="py-4 px-4 font-black text-neutral-400 uppercase w-1/5">
                  FAST FASHION BRANDS
                </th>
                <th className="py-4 px-4 font-black text-neutral-400 uppercase w-1/5">
                  $150+ DESIGNER LABELS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-neutral-300">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 font-black text-white bg-neutral-900/90 border-x border-neutral-800 font-sans">
                    <span className="text-[#f6b800] font-mono mr-1.5 font-bold">✓</span>
                    {row.nwear}
                  </td>
                  <td className="py-4 px-4 text-neutral-400 font-sans">
                    {row.fastFashion}
                  </td>
                  <td className="py-4 px-4 text-neutral-300 font-sans">
                    {row.luxuryBrand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verified against independent ISO textile laboratory standards
          </span>
          <span className="text-[#f6b800] font-bold">#WEARLESSNOISE</span>
        </div>
      </div>

    </div>
  );
};

export default ProductComparisonTable;

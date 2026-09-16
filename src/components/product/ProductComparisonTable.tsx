'use client';

import React from 'react';
import { Check, X, Sparkles, ShieldCheck, Scale, Info } from 'lucide-react';

interface ProductComparisonTableProps {
  productName: string;
  price: number;
}

export const ProductComparisonTable: React.FC<ProductComparisonTableProps> = ({
  productName,
  price,
}) => {
  const specs = [
    { label: 'Fabric Composition', value: '100% Supercombed Ring-Spun Compact Cotton' },
    { label: 'Fabric Density', value: '280 GSM Heavy Single Interlock Knit' },
    { label: 'Fit Profile', value: 'Architectural Boxy Cut with 4.2cm Drop-Shoulder' },
    { label: 'Collar Ribbing', value: '2.5cm Double-Layer Rib with 5% Lycra Recovery Core' },
    { label: 'Dye Technology', value: 'Acid Micro-Wash Reactive Dye (Zero Azo Chemicals)' },
    { label: 'Seam Construction', value: '5-Thread Reinforced Overlock with Bar-Tack Joints' },
    { label: 'Care Instructions', value: 'Machine wash cold inside out, gentle tumble or hang dry' },
    { label: 'Country of Origin', value: 'Crafted in Mumbai, India' },
    { label: 'Model / ASIN', value: 'NW-280-BOX-2026' },
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
      nwear: `₹${price.toLocaleString('en-IN')} (Direct-to-Consumer)`,
      fastFashion: '₹799 (Cheap)',
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

  return (
    <div className="w-full my-12 space-y-12">
      
      {/* 1. PRODUCT SPECIFICATIONS DETAILS (AMAZON SPEC SHEET) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-black shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
          <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
            // PRODUCT SPECIFICATIONS
          </span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-6">
          Technical Details &amp; Construction Specs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="py-2.5 px-3 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
            >
              <span className="text-neutral-500 font-bold uppercase text-[11px]">
                {item.label}
              </span>
              <span className="text-neutral-950 font-black text-right sm:max-w-xs font-sans">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. COMPARE WITH SIMILAR ITEMS (AMAZON COMPARISON MATRIX) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#f6b800]" />
          <span className="text-xs font-mono font-black uppercase tracking-widest text-[#f6b800]">
            // THE HONEST BENCHMARK
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
          Compare With Similar Items
        </h3>
        <p className="text-xs text-neutral-400 font-mono mb-6 max-w-xl">
          See how NWear’s direct-from-mill heavyweight standard stacks up against cheap fast fashion and overpriced designer retail.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="py-4 px-4 font-black text-neutral-400 uppercase w-1/4">FEATURE</th>
                <th className="py-4 px-4 font-black text-[#f6b800] bg-neutral-900/80 rounded-t-xl uppercase border-x border-neutral-800 w-1/3">
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
                  <td className="py-3.5 px-4 font-bold text-neutral-300">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 font-black text-white bg-neutral-900/80 border-x border-neutral-800 font-sans">
                    <span className="text-[#f6b800] font-mono mr-1.5">✓</span>
                    {row.nwear}
                  </td>
                  <td className="py-3.5 px-4 text-neutral-400 font-sans">
                    {row.fastFashion}
                  </td>
                  <td className="py-3.5 px-4 text-neutral-300 font-sans">
                    {row.luxuryBrand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            Verified against independent ISO textile laboratory benchmarks
          </span>
          <span className="text-[#f6b800] font-bold">#WEARLESSNOISE</span>
        </div>
      </div>

    </div>
  );
};

export default ProductComparisonTable;

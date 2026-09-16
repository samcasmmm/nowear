'use client';

import React, { useState } from 'react';
import {
  Search,
  HelpCircle,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  Clock,
  Send,
  Zap,
  ShieldCheck,
  Award,
  Filter,
} from 'lucide-react';

interface QAItem {
  id: string;
  question: string;
  answer: string;
  author: string;
  role: string;
  category: 'sizing' | 'fabric' | 'care' | 'shipping';
  date: string;
  helpfulCount: number;
}

const defaultQAs: QAItem[] = [
  {
    id: 'qa-1',
    question: 'Is this true to size or should I size down for a less boxy look?',
    answer:
      'Our cuts are intentionally engineered with an oversized, architectural 4.2cm drop shoulder. If you love the contemporary relaxed drape, order your true size. If you prefer a tailored, standard regular fit, we recommend sizing down one size.',
    author: 'NWear Pattern Collective',
    role: 'Verified Fit Engineer',
    category: 'sizing',
    date: '3 days ago',
    helpfulCount: 238,
  },
  {
    id: 'qa-2',
    question: 'Does the collar lose its shape or stretch out after machine washing?',
    answer:
      'No. We construct our collars with a 2.5cm double-layer high-density ribbing reinforced with a 5% Lycra recovery core. In our ISO 105 laboratory wash tests, the collar retained 99.2% elasticity after 100+ machine wash cycles with zero baconing.',
    author: 'NWear Quality Testing Lab',
    role: 'Lead Textile Chemist',
    category: 'care',
    date: '1 week ago',
    helpfulCount: 184,
  },
  {
    id: 'qa-3',
    question: 'Is the fabric 100% cotton? Does it feel heavy or hot in tropical weather?',
    answer:
      'Yes, it is milled from 100% supercombed long-staple compact cotton at 280 GSM. The combed long-staple fibers create natural micro-air channels that wick moisture efficiently, providing high breathability and supreme drape with zero see-through.',
    author: 'NWear Textile Engineering',
    role: 'Fabric Specialist',
    category: 'fabric',
    date: '2 weeks ago',
    helpfulCount: 142,
  },
  {
    id: 'qa-4',
    question: 'What is the return/exchange policy if the size does not fit as expected?',
    answer:
      'We offer a 7-day hassle-free doorstep exchange and return policy across 19,000+ pincodes in India. Our courier partner collects the item from your address with zero reverse pickup fees.',
    author: 'NWear Customer Concierge',
    role: 'Client Care Lead',
    category: 'shipping',
    date: '1 month ago',
    helpfulCount: 96,
  },
  {
    id: 'qa-5',
    question: 'How should I wash and dry this to maintain the acid-wash vintage patina?',
    answer:
      'Turn the garment inside out, machine wash on a cold cycle (30°C max) using mild liquid detergent, and hang dry in the shade. Avoid direct harsh sunlight and never bleach to preserve the rich pigment patina.',
    author: 'NWear Studio Care Lab',
    role: 'Garment Care Specialist',
    category: 'care',
    date: '1 month ago',
    helpfulCount: 118,
  },
];

const topicFilters = [
  { id: 'all', label: 'All Inquiries (340+)' },
  { id: 'sizing', label: 'Fit & Sizing (145+)' },
  { id: 'fabric', label: 'Fabric & GSM (120+)' },
  { id: 'care', label: 'Wash & Care (48+)' },
  { id: 'shipping', label: 'Shipping & Returns (27+)' },
];

const quickKeywords = [
  '#CollarSag',
  '#TrueToSize',
  '#280GSMWeight',
  '#MachineWash',
  '#ExchangePolicy',
  '#DropShoulder',
];

export const ProductQA: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [qaList, setQaList] = useState<QAItem[]>(defaultQAs);
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [newQuestionTopic, setNewQuestionTopic] = useState<'sizing' | 'fabric' | 'care' | 'shipping'>('sizing');
  const [questionSubmitted, setQuestionSubmitted] = useState<boolean>(false);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const filteredQAs = qaList.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().replace('#', '');
    const matchesSearch =
      !searchQuery.trim() ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleUpvote = (id: string) => {
    if (upvotedIds[id]) return;
    setUpvotedIds((prev) => ({ ...prev, [id]: true }));
    setQaList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, helpfulCount: item.helpfulCount + 1 } : item
      )
    );
  };

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const item: QAItem = {
      id: `qa-${Date.now()}`,
      question: newQuestion.trim(),
      answer:
        'Your question has been dispatched to our Studio Engineers and verified community owners. Average response time is under 45 minutes.',
      author: 'NWear Engineering Bot',
      role: 'Auto-Dispatched to Studio',
      category: newQuestionTopic,
      date: 'Just now',
      helpfulCount: 1,
    };

    setQaList([item, ...qaList]);
    setNewQuestion('');
    setQuestionSubmitted(true);
    setTimeout(() => setQuestionSubmitted(false), 3500);
  };

  return (
    <section className="w-full my-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xl font-sans selection:bg-[#f6b800] selection:text-black">
      
      {/* 1. HEADER ROW */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-neutral-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
              // COMMUNITY INQUIRIES • FIT &amp; FABRIC Q&amp;A
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950">
            Customer Questions &amp; Answers
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
            Search 340+ verified answers or ask the NWear engineering team directly.
          </p>
        </div>

        {/* Live Metrics Guarantee */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-2 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-[#e84125]" />
            <span>Avg Response: <strong>&lt; 42 mins</strong></span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-neutral-900 text-white flex items-center gap-2 text-xs font-mono font-black">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% VERIFIED STAFF</span>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & TOPIC TABS */}
      <div className="py-6 space-y-4 border-b border-neutral-200">
        
        {/* Search Input Bar */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search verified answers (e.g., collar sag, 280 GSM, true to size, washing)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200/90 hover:border-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 font-mono text-xs focus:outline-none transition-colors shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black text-xs font-mono font-bold"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Category Filter Pills & Quick Hashtags */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* Topic Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {topicFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold uppercase transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-neutral-950 text-[#f6b800] shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Keywords */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
            <span className="font-bold text-neutral-400">TRENDING:</span>
            {quickKeywords.slice(0, 3).map((kw) => (
              <button
                key={kw}
                onClick={() => setSearchQuery(kw)}
                className="hover:text-[#e84125] cursor-pointer font-bold"
              >
                {kw}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* 3. QUESTIONS & VERIFIED ANSWERS FEED */}
      <div className="py-6 space-y-4">
        {filteredQAs.map((qa) => (
          <div
            key={qa.id}
            className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 transition-all hover:border-neutral-400 hover:bg-white hover:shadow-md"
          >
            {/* Question Row */}
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-xl bg-black text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                Q
              </span>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-black text-neutral-950 leading-snug">
                  {qa.question}
                </h3>
              </div>
            </div>

            {/* Answer Row */}
            <div className="mt-3.5 pt-3.5 border-t border-neutral-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-xl bg-[#f6b800] text-black font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                A
              </span>
              <div className="flex-1 space-y-3">
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {qa.answer}
                </p>

                {/* Author & Verification Footer */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{qa.author}</span>
                    </div>
                    <span className="text-neutral-400">•</span>
                    <span className="text-neutral-600 font-medium">{qa.role}</span>
                    <span className="text-neutral-400">•</span>
                    <span>{qa.date}</span>
                  </div>

                  <button
                    onClick={() => handleUpvote(qa.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                      upvotedIds[qa.id]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-900'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful ({qa.helpfulCount})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredQAs.length === 0 && (
          <div className="p-10 text-center rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-600 font-mono text-xs space-y-2">
            <p className="font-bold text-neutral-900">
              No matching community answers found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-neutral-500">
              Ask your question below and our verified garment engineers will respond within 45 minutes!
            </p>
          </div>
        )}
      </div>

      {/* 4. INTERACTIVE "ASK THE STUDIO" FORM */}
      <form onSubmit={handlePostQuestion} className="mt-4 p-5 sm:p-6 rounded-2xl bg-neutral-950 text-white border border-neutral-800 space-y-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#f6b800]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-white">
              HAVE A QUESTION ABOUT FIT, FABRIC OR SIZING?
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
            Direct Line to Studio Tailors
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-3">
            <select
              value={newQuestionTopic}
              onChange={(e) => setNewQuestionTopic(e.target.value as any)}
              className="w-full px-3 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-mono text-xs focus:border-[#f6b800] focus:outline-none"
            >
              <option value="sizing">Fit &amp; Sizing</option>
              <option value="fabric">Fabric &amp; 280 GSM</option>
              <option value="care">Wash &amp; Care</option>
              <option value="shipping">Delivery &amp; Exchange</option>
            </select>
          </div>

          <div className="sm:col-span-7">
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="e.g. I am 5'11 and 75kg, which size gives the best boxy drape?"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-mono text-xs focus:border-[#f6b800] focus:outline-none"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#f6b800] hover:bg-[#ffc21a] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{questionSubmitted ? 'POSTED!' : 'ASK'}</span>
            </button>
          </div>
        </div>

        {questionSubmitted && (
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Question dispatched to NWear Studio engineers. You will receive an update in &lt; 45 minutes!</span>
          </div>
        )}
      </form>

    </section>
  );
};

export default ProductQA;

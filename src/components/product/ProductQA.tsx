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
} from 'lucide-react';

interface QAItem {
  id: string;
  question: string;
  answer: string;
  author: string;
  date: string;
  helpfulCount: number;
}

const defaultQAs: QAItem[] = [
  {
    id: 'qa-1',
    question: 'Is this true to size or should I size down for a less boxy look?',
    answer:
      'Our cuts are intentionally engineered with an oversized, architectural drop shoulder. If you love the modern streetwear drape, order your usual size. If you want a more standard, regular fit, we recommend sizing down one size.',
    author: 'NWear Product Team (Verified)',
    date: '3 days ago',
    helpfulCount: 238,
  },
  {
    id: 'qa-2',
    question: 'Does the collar lose its shape or stretch out after machine washing?',
    answer:
      'No. We engineer our collars with a 2.5cm double-knit ribbing infused with 5% high-recovery Lycra core. In our ISO 105 laboratory wash tests, the collar retained 99.2% elasticity after 100+ machine cycles.',
    author: 'NWear Quality Lab (Verified)',
    date: '1 week ago',
    helpfulCount: 184,
  },
  {
    id: 'qa-3',
    question: 'Is the fabric 100% cotton? Does it feel heavy or hot in summer?',
    answer:
      'Yes, it is 100% supercombed long-staple compact cotton at 280 GSM. Because of the natural long-staple fibers, it is exceptionally breathable and moisture-wicking while maintaining a thick, structured drape with zero see-through.',
    author: 'NWear Textile Engineering',
    date: '2 weeks ago',
    helpfulCount: 142,
  },
  {
    id: 'qa-4',
    question: 'What is the return/exchange policy if the size doesn’t fit me?',
    answer:
      'We offer a 7-day hassle-free reverse pickup exchange & return policy. Our delivery partners will collect it right from your doorstep with zero return shipping fees.',
    author: 'NWear Customer Concierge',
    date: '1 month ago',
    helpfulCount: 96,
  },
];

export const ProductQA: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [qaList, setQaList] = useState<QAItem[]>(defaultQAs);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [questionSubmitted, setQuestionSubmitted] = useState<boolean>(false);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const filteredQAs = qaList.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        'Thank you for asking! The NWear design collective and verified community members usually answer within 2 hours.',
      author: 'NWear Community Bot',
      date: 'Just now',
      helpfulCount: 1,
    };
    setQaList([item, ...qaList]);
    setNewQuestion('');
    setQuestionSubmitted(true);
    setTimeout(() => setQuestionSubmitted(false), 3000);
  };

  return (
    <section className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-black shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
        <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
          // COMMUNITY INQUIRIES • FIT &amp; FABRIC Q&amp;A
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950">
            Customer Questions &amp; Answers
          </h3>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            Search 340+ verified answers or ask the NWear engineering team directly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g. size, collar, wash)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-black"
          />
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQAs.map((qa) => (
          <div
            key={qa.id}
            className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all hover:border-neutral-300"
          >
            {/* Question row */}
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-black text-white font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                Q
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-neutral-950 leading-snug">
                  {qa.question}
                </h4>
              </div>
            </div>

            {/* Answer row */}
            <div className="mt-3 pt-3 border-t border-neutral-200/80 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-[#f6b800] text-black font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                A
              </span>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {qa.answer}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-bold text-neutral-900">{qa.author}</span>
                    <span>• {qa.date}</span>
                  </div>

                  <button
                    onClick={() => handleUpvote(qa.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors ${
                      upvotedIds[qa.id]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                        : 'bg-white border-neutral-300 text-neutral-700 hover:border-black'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({qa.helpfulCount})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredQAs.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-neutral-100 text-neutral-500 font-mono text-xs">
            No questions match &ldquo;{searchQuery}&rdquo;. Be the first to ask below!
          </div>
        )}
      </div>

      {/* Ask Question Form */}
      <form onSubmit={handlePostQuestion} className="mt-6 pt-6 border-t border-neutral-200">
        <label className="block text-xs font-mono font-bold text-neutral-900 uppercase mb-2">
          Have a different question about fit or fabric?
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors active:scale-95"
          >
            {questionSubmitted ? 'QUESTION POSTED!' : 'POST QUESTION'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductQA;

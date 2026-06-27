"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, Shield, BookOpen, Clock, CheckCircle } from "lucide-react";
import { SUGGESTED_QUESTIONS, STATS } from "@/data";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col min-h-[calc(100vh-56px)]">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Your AI Assistant for{" "}
                <span className="text-[#006b3f]">FSSAI Regulations</span>
              </h1>
              <p className="text-gray-500 mb-6 text-base leading-relaxed">
                Ask questions. Get accurate answers.<br />
                All backed by official FSSAI regulations.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#006b3f] font-medium">
                <CheckCircle className="w-4 h-4" />
                Verified from Official FSSAI Regulations
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 bg-[#e8f5ee] rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#006b3f] rounded-full mx-auto flex items-center justify-center mb-3 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-white rounded-lg px-4 py-1.5 shadow border border-gray-100">
                      <span className="text-[#006b3f] font-bold text-base">FSSAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-2xl">
            <div className="flex items-center gap-2 bg-white border-2 border-[#006b3f] rounded-xl px-4 py-3 shadow-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything about FSSAI regulations..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent"
              />
              <button className="p-1.5 bg-[#006b3f] rounded-lg hover:bg-[#004d2c] transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-5">
            <p className="text-xs text-gray-500 mb-3 font-medium">Suggested Questions</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuery(q)}
                  className="text-xs bg-white border border-gray-200 hover:border-[#006b3f] hover:bg-[#e8f5ee] text-gray-700 hover:text-[#006b3f] rounded-lg px-3 py-2 transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#006b3f]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-green-200 mt-1 whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-5xl mx-auto px-4 py-10 w-full">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Access</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Browse Regulation Library", desc: "Search through all 28 FSSAI regulations", href: "/library", icon: BookOpen },
            { title: "View Search History", desc: "Revisit your recent regulatory queries", href: "/history", icon: Clock },
            { title: "Saved Bookmarks", desc: "Access your saved regulations and answers", href: "/bookmarks", icon: Shield },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-[#006b3f]/40 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-[#e8f5ee] flex items-center justify-center mb-3">
                <card.icon className="w-4 h-4 text-[#006b3f]" />
              </div>
              <div className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-[#006b3f]">{card.title}</div>
              <div className="text-xs text-gray-500">{card.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

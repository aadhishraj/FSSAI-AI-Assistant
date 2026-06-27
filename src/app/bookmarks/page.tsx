"use client";
import { useState } from "react";
import { Bookmark, FileText, MessageSquare, X } from "lucide-react";
import { BOOKMARKS } from "@/data";
import { Bookmark as BookmarkType } from "@/types";
import Link from "next/link";

const TABS = ["All", "Regulations", "Answers"] as const;
type Tab = typeof TABS[number];

export default function BookmarksPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [items, setItems] = useState<BookmarkType[]>(BOOKMARKS);

  const filtered = items.filter((item) => {
    if (activeTab === "Regulations") return item.type === "regulation";
    if (activeTab === "Answers") return item.type === "answer";
    return true;
  });

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Bookmarks</h1>
        <p className="text-sm text-gray-500 mt-1">Your saved regulations and answers</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="flex border-b border-gray-100">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-[#006b3f] border-[#006b3f]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        {filtered.length === 0 ? (
          <div className="p-14 text-center">
            <Bookmark className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">No bookmarks in this category.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((item) => (
              <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors group">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    item.type === "regulation" ? "bg-[#e8f5ee]" : "bg-blue-50"
                  }`}>
                    {item.type === "regulation" ? (
                      <FileText className="w-4 h-4 text-[#006b3f]" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {item.type === "regulation" ? (
                      <>
                        <Link
                          href="/details/1"
                          className="text-sm font-semibold text-[#006b3f] hover:underline line-clamp-2 leading-snug"
                        >
                          {item.regulationTitle}
                        </Link>
                        {item.section && (
                          <p className="text-xs text-gray-500 mt-1">{item.section}</p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-semibold text-gray-900 mb-1">{item.query}</p>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{item.answer}</p>
                      </>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Bookmarked on: {item.bookmarkedDate}
                    </p>
                  </div>

                  <button
                    onClick={() => remove(item.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-red-50 transition-all flex-shrink-0"
                  >
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

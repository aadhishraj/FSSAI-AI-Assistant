"use client";
import { useState } from "react";
import { Search, Clock, Trash2, X } from "lucide-react";
import { SEARCH_HISTORY } from "@/data";
import { SearchHistoryItem } from "@/types";

export default function HistoryPage() {
  const [items, setItems] = useState<SearchHistoryItem[]>(SEARCH_HISTORY);
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.query.toLowerCase().includes(query.toLowerCase())
  );

  const clearAll = () => setItems([]);
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  // Group by date
  const grouped: Record<string, SearchHistoryItem[]> = {};
  filtered.forEach((item) => {
    if (!grouped[item.date]) grouped[item.date] = [];
    grouped[item.date].push(item);
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Search History</h1>
          <p className="text-sm text-gray-500 mt-1">Your recent searches and questions</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 border border-red-200 text-red-500 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </button>
        )}
      </div>

      {/* Search filter */}
      {items.length > 0 && (
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2.5 mb-6 shadow-sm">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter history..."
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
          />
          {query && (
            <button onClick={() => setQuery("")}>
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>
      )}

      {/* Empty */}
      {items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-14 text-center">
          <Clock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium mb-1">No search history yet</p>
          <p className="text-xs text-gray-400">Your searches will appear here.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <p className="text-gray-500 text-sm">No results match your filter.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {Object.entries(grouped).map(([date, dateItems]) => (
            <div key={date} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{date}</span>
              </div>
              <div className="divide-y divide-gray-100">
                {dateItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="flex-1 text-sm text-gray-700">{item.query}</span>
                    {item.time && (
                      <span className="text-xs text-gray-400 flex-shrink-0">{item.time}</span>
                    )}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-red-50 transition-all"
                    >
                      <X className="w-3.5 h-3.5 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

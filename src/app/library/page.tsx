"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { REGULATIONS, CATEGORIES, YEARS, REGULATION_TYPES } from "@/data";
import { TagBadge } from "@/components/shared/TagBadge";

const PAGE_SIZE = 5;

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");
  const [type, setType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Relevance");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return REGULATIONS.filter((r) => {
      const matchSearch =
        !searchQuery ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = category === "All Categories" || r.category === category;
      const matchYear = year === "All Years" || r.year.toString() === year;
      const matchType = type === "All Types" || r.type === type;
      return matchSearch && matchCat && matchYear && matchType;
    });
  }, [searchQuery, category, year, type]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleReset = () => {
    setSearchQuery("");
    setCategory("All Categories");
    setYear("All Years");
    setType("All Types");
    setPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Regulation Library</h1>
        <p className="text-sm text-gray-500 mt-1">Search and explore FSSAI regulations</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5 shadow-sm">
        <div className="flex gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search by regulation name, keyword, section..."
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <button className="bg-[#006b3f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#004d2c] transition-colors">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="text-xs border border-gray-300 rounded-md px-2 py-1.5 outline-none bg-white text-gray-700"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 font-medium">Year ≡</label>
            <select
              value={year}
              onChange={(e) => { setYear(e.target.value); setPage(1); }}
              className="text-xs border border-gray-300 rounded-md px-2 py-1.5 outline-none bg-white text-gray-700"
            >
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500 font-medium">Regulation Type</label>
            <select
              value={type}
              onChange={(e) => { setType(e.target.value); setPage(1); }}
              className="text-xs border border-gray-300 rounded-md px-2 py-1.5 outline-none bg-white text-gray-700"
            >
              {REGULATION_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <button onClick={handleReset} className="text-xs text-[#006b3f] hover:underline font-medium ml-auto">
            Reset
          </button>
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-600">
          Total Results: <span className="font-semibold text-gray-900">{filtered.length}</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs border border-gray-300 rounded-md px-2 py-1 outline-none bg-white"
          >
            <option>Relevance</option>
            <option>Year (Newest)</option>
            <option>Year (Oldest)</option>
            <option>Title A-Z</option>
          </select>
        </div>
      </div>

      {/* Results list */}
      <div className="space-y-3">
        {paginated.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">No regulations found. Try adjusting your filters.</p>
          </div>
        ) : (
          paginated.map((reg) => (
            <div key={reg.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm hover:border-[#006b3f]/30 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#e8f5ee] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-[#006b3f]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug">{reg.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-0">
                    <TagBadge label={`Category: ${reg.category}`} variant="category" />
                    <TagBadge label={`Type: ${reg.type}`} variant="type" />
                    <TagBadge label={String(reg.year)} variant="year" />
                  </div>
                </div>
                <Link
                  href={`/details/${reg.id}`}
                  className="flex-shrink-0 border border-[#006b3f] text-[#006b3f] text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#006b3f] hover:text-white transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-1.5 rounded border border-gray-200 disabled:opacity-40 hover:border-[#006b3f] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                page === p
                  ? "bg-[#006b3f] text-white"
                  : "border border-gray-200 text-gray-600 hover:border-[#006b3f]"
              }`}
            >
              {p}
            </button>
          ))}
          {totalPages > 5 && <span className="text-gray-400 text-sm px-1">...</span>}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-1.5 rounded border border-gray-200 disabled:opacity-40 hover:border-[#006b3f] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

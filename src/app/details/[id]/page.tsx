"use client";
import { useState } from "react";
import Link from "next/link";
import { use } from "react";
import {
  ArrowLeft, ChevronDown, ChevronRight, Download, ZoomIn, ZoomOut,
  ExternalLink, Bookmark, Search
} from "lucide-react";
import { REGULATIONS, REGULATION_SECTIONS, HONEY_PAGE_CONTENT } from "@/data";
import { TagBadge } from "@/components/shared/TagBadge";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DetailsPage({ params }: PageProps) {
  const { id } = use(params);
  const regulation = REGULATIONS.find((r) => r.id === id) ?? REGULATIONS[0];

  const [expandedSections, setExpandedSections] = useState<string[]>(["s2"]);
  const [activeSection, setActiveSection] = useState("s2-8-2");
  const [zoom, setZoom] = useState(100);
  const [sectionSearch, setSectionSearch] = useState("");

  const toggleSection = (sid: string) => {
    setExpandedSections((prev) =>
      prev.includes(sid) ? prev.filter((s) => s !== sid) : [...prev, sid]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Back */}
      <Link href="/library" className="inline-flex items-center gap-1.5 text-[#006b3f] text-sm font-medium mb-4 hover:underline">
        <ArrowLeft className="w-4 h-4" />
        Back to Library
      </Link>

      {/* Title */}
      <h1 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{regulation.title}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        <TagBadge label={`Category: ${regulation.category}`} variant="category" />
        <TagBadge label={`Type: ${regulation.type}`} variant="type" />
        <TagBadge label={`Year: ${regulation.year}`} variant="year" />
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-5">
        {/* Left: Sections tree */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-fit">
          <div className="p-3 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Sections</p>
            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2 py-1.5">
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                value={sectionSearch}
                onChange={(e) => setSectionSearch(e.target.value)}
                placeholder="Search section..."
                className="flex-1 outline-none text-xs text-gray-600 placeholder-gray-400"
              />
            </div>
          </div>
          <div className="p-2 max-h-[500px] overflow-y-auto">
            {REGULATION_SECTIONS.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left hover:bg-gray-50 transition-colors"
                >
                  {section.children?.length ? (
                    expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    )
                  ) : (
                    <span className="w-3.5" />
                  )}
                  <span className="text-xs text-gray-700 font-medium">
                    {section.number}. {section.title}
                  </span>
                </button>

                {expandedSections.includes(section.id) && section.children?.map((child) => (
                  <div key={child.id} className="ml-4">
                    <button
                      onClick={() => {
                        if (child.children?.length) toggleSection(child.id);
                        else setActiveSection(child.id);
                      }}
                      className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left transition-colors ${
                        activeSection === child.id
                          ? "bg-[#e8f5ee] text-[#006b3f]"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      {child.children?.length ? (
                        expandedSections.includes(child.id) ? (
                          <ChevronDown className="w-3 h-3 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        )
                      ) : (
                        <span className="w-3" />
                      )}
                      <span className="text-xs">{child.number} {child.title}</span>
                    </button>

                    {expandedSections.includes(child.id) && child.children?.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSection(sub.id)}
                        className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left ml-4 transition-colors ${
                          activeSection === sub.id
                            ? "bg-[#e8f5ee] text-[#006b3f] font-semibold"
                            : "hover:bg-gray-50 text-gray-600"
                        }`}
                      >
                        <span className="text-xs">{sub.number} {sub.title}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: PDF Viewer */}
        <div className="space-y-4">
          {/* PDF toolbar */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-800 flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2 text-white text-xs">
                <span className="opacity-70">Page</span>
                <span className="font-semibold">147</span>
                <span className="opacity-70">/</span>
                <span className="opacity-70">367</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setZoom((z) => Math.max(50, z - 10))}
                  className="p-1.5 text-white hover:bg-gray-700 rounded transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-white text-xs px-2">{zoom}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 10))}
                  className="p-1.5 text-white hover:bg-gray-700 rounded transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-600 mx-1" />
                <button className="p-1.5 text-white hover:bg-gray-700 rounded transition-colors">
                  <Download className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 text-white hover:bg-gray-700 rounded transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* PDF content area */}
            <div className="bg-gray-100 p-6 min-h-[400px]">
              <div
                className="bg-white rounded shadow-lg mx-auto p-8 max-w-xl"
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
              >
                <h2 className="text-base font-bold text-gray-900 mb-4">{HONEY_PAGE_CONTENT.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{HONEY_PAGE_CONTENT.body}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="bg-yellow-200 px-0.5">{HONEY_PAGE_CONTENT.highlighted}</span>
                </p>
                <p className="text-xs text-gray-400 mt-6 border-t border-gray-100 pt-4">
                  {HONEY_PAGE_CONTENT.page}
                </p>
              </div>
            </div>
          </div>

          {/* Source info + related */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Source Information</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div>
                  <span className="text-gray-400">Regulation: </span>
                  <span className="text-[#006b3f] font-medium">{regulation.title}</span>
                </div>
                <div><span className="text-gray-400">Section: </span>2.8.2 Honey Standards</div>
                <div><span className="text-gray-400">Page: </span>147</div>
                <div><span className="text-gray-400">Last Updated: </span>{regulation.lastUpdated}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Related Regulations</h3>
              <div className="space-y-2">
                {["Honey Standards (Quality Control) Order, 2003", "Coconut Milk Products Standards, 2018"].map((r) => (
                  <div key={r} className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#006b3f] mt-1.5 flex-shrink-0" />
                    <button className="text-xs text-[#006b3f] hover:underline text-left">{r}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bookmark */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 border border-[#006b3f] text-[#006b3f] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e8f5ee] transition-colors">
              <Bookmark className="w-4 h-4" />
              Save Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

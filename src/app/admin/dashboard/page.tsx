"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Upload, FileText, List, FlaskConical,
  ScrollText, Settings, LogOut, ChevronUp, Eye
} from "lucide-react";
import { ADMIN_FILES, ADMIN_STATS } from "@/data";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { AdminFile } from "@/types";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Upload Regulation", icon: Upload, active: false },
  { label: "Manage Regulations", icon: FileText, active: false },
  { label: "Indexing Queue", icon: List, active: false },
  { label: "Indexed Documents", icon: ScrollText, active: false },
  { label: "System Logs", icon: FlaskConical, active: false },
  { label: "Settings", icon: Settings, active: false },
  { label: "Logout", icon: LogOut, active: false },
];

export default function AdminDashboardPage() {
  const [files] = useState<AdminFile[]>(ADMIN_FILES);

  return (
    <div className="flex min-h-[calc(100vh-56px)] bg-[#f8fafb]">
      {/* Sidebar */}
      <div className="w-56 bg-[#1a2e22] flex flex-col flex-shrink-0">
        {/* Logo area */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#006b3f] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <span className="text-white font-bold text-sm">fssai</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            item.label === "Logout" ? (
              <Link key={item.label} href="/admin" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors mt-4">
                <item.icon className="w-4 h-4" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.label}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors ${
                  item.active
                    ? "bg-[#006b3f] text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          ))}
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Welcome header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Welcome, Admin 👋
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">Manage regulations, indexing and system settings</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#006b3f] flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <button className="flex items-center gap-1 text-sm text-gray-700 font-medium">
              Admin
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {ADMIN_STATS.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upload button */}
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 bg-[#006b3f] hover:bg-[#004d2c] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            <Upload className="w-4 h-4" />
            Upload New Regulation
          </button>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">Recent Uploads</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {["File Name", "Category", "Uploaded Date", "Status", "Action"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{file.category}</td>
                    <td className="px-5 py-3 text-sm text-gray-600">{file.uploadedDate}</td>
                    <td className="px-5 py-3">
                      <StatusBadge status={file.status} />
                    </td>
                    <td className="px-5 py-3">
                      <button className="flex items-center gap-1 text-xs text-[#006b3f] font-medium hover:underline">
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

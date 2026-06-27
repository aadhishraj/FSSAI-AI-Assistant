"use client";
import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  variant?: "category" | "type" | "year" | "status";
  className?: string;
}

const variantStyles = {
  category: "bg-[#e8f5ee] text-[#006b3f] border border-[#b8dfc9]",
  type: "bg-blue-50 text-blue-700 border border-blue-200",
  year: "bg-gray-100 text-gray-600 border border-gray-200",
  status: "bg-[#fff8e6] text-[#92400e] border border-[#fcd34d]",
};

export function TagBadge({ label, variant = "category", className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

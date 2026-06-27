"use client";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "Indexed" | "Indexing" | "Pending" | "indexed" | "indexing" | "pending";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toLowerCase();
  const styles = {
    indexed: "bg-green-100 text-green-700",
    indexing: "bg-yellow-100 text-yellow-700",
    pending: "bg-gray-100 text-gray-600",
  };
  const labels = {
    indexed: "Indexed",
    indexing: "Indexing",
    pending: "Pending",
  };
  return (
    <span className={cn("px-2 py-0.5 rounded text-xs font-semibold", styles[normalized as keyof typeof styles])}>
      {labels[normalized as keyof typeof labels]}
    </span>
  );
}

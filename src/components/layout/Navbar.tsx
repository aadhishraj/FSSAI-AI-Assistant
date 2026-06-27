"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FssaiLogo } from "@/components/shared/FssaiLogo";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Regulations", href: "/library" },
  { label: "Library", href: "/library" },
  { label: "History", href: "/history" },
  { label: "Bookmarks", href: "/bookmarks" },
  { label: "Admin", href: "/admin" },
];

// Deduplicate nav items (Home shows / , Library and Regulations share /library)
const NAV = [
  { label: "Home", href: "/" },
  { label: "Regulations", href: "/library" },
  { label: "Library", href: "/library" },
  { label: "History", href: "/history" },
  { label: "Bookmarks", href: "/bookmarks" },
  { label: "Admin", href: "/admin" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FssaiLogo size="sm" />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label + item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded transition-colors",
                    isActive
                      ? "text-[#006b3f] border-b-2 border-[#006b3f] rounded-none pb-[10px]"
                      : "text-gray-600 hover:text-[#006b3f]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Admin button */}
          <Link
            href="/admin"
            className="bg-[#006b3f] hover:bg-[#004d2c] text-white text-sm font-semibold px-4 py-1.5 rounded-md transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

interface FssaiLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export function FssaiLogo({ size = "md", variant = "full" }: FssaiLogoProps) {
  const sizeMap = { sm: 28, md: 36, lg: 48 };
  const px = sizeMap[size];

  return (
    <div className="flex items-center gap-2">
      {/* Logo mark */}
      <svg width={px} height={px} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#006b3f" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Arial">
          fssai
        </text>
      </svg>
      {variant === "full" && (
        <div className="flex flex-col leading-tight">
          <span className="text-[#006b3f] font-bold" style={{ fontSize: size === "sm" ? 14 : size === "md" ? 18 : 24 }}>
            fssai
          </span>
        </div>
      )}
    </div>
  );
}

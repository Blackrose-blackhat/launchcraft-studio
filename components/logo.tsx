"use client";

interface LogoProps {
  className?: string;
  /** "light" = for dark backgrounds, "dark" = for light backgrounds */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function RampLabLogo({
  className = "",
  variant = "light",
  size = "md",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#0a0a0a]";
  const accentColor = "#6ee7b7";
  const markBg = accentColor;
  const markText = "#0a0a0a";

  const sizeMap = {
    sm: { mark: 22, text: "text-base",  gap: "gap-2"   },
    md: { mark: 26, text: "text-xl",    gap: "gap-2.5" },
    lg: { mark: 30, text: "text-2xl",   gap: "gap-3"   },
  };
  const s = sizeMap[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {/* Mark — solid filled square with a bold "R/" */}
      <span
        className="inline-flex items-center justify-center rounded-[4px] font-bold leading-none shrink-0"
        style={{
          width: s.mark,
          height: s.mark,
          background: markBg,
          color: markText,
          fontSize: s.mark * 0.52,
          letterSpacing: "-0.04em",
          fontFamily: "inherit",
        }}
        aria-hidden="true"
      >
        R/
      </span>

      {/* Wordmark */}
      <span className={`${s.text} font-bold tracking-tight leading-none ${textColor}`}>
        Ramp<span style={{ color: accentColor }}>Lab</span>
      </span>
    </span>
  );
}

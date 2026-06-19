"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className, priority = false }: BrandLogoProps) {
  const { theme } = useTheme();
  const src = theme === "light" ? "/brand/main-logo-black.svg" : "/brand/main-logo-white.svg";

  return (
    <Image
      src={src}
      alt="Deal Radar NG"
      fill
      priority={priority}
      className={className ?? "object-contain object-left"}
      sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 300px"
    />
  );
}

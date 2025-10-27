import React from "react";

interface ReviewButtonProps {
  href: string;
  platform: "google" | "facebook";
  children: React.ReactNode;
}

export function ReviewButton({ href, platform, children }: ReviewButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all shadow-md hover:shadow-lg";
  const platformClasses = platform === "google"
    ? "bg-white text-black hover:bg-gray-100"
    : "bg-brand-green text-white hover:bg-green-700";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${platformClasses}`}
      aria-label={`Læs vores anmeldelser på ${platform === "google" ? "Google" : "Facebook"}`}
    >
      {children}
    </a>
  );
}

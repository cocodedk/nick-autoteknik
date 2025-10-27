import React from "react";

interface PhoneButtonProps {
  phone: string;
  phoneFormatted: string;
  variant?: "call" | "sms";
  className?: string;
  children?: React.ReactNode;
}

export function PhoneButton({
  phone,
  phoneFormatted,
  variant = "call",
  className = "",
  children,
}: PhoneButtonProps) {
  const href = variant === "call" ? `tel:${phoneFormatted}` : `sms:${phoneFormatted}`;
  const defaultText = variant === "call" ? `Ring: ${phone}` : `Send SMS`;

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${className}`}
      aria-label={variant === "call" ? `Ring til ${phone}` : `Send SMS til ${phone}`}
    >
      {children || defaultText}
    </a>
  );
}


import React from "react";

interface PhoneButtonProps {
  phone: string;
  phoneFormatted: string;
  variant?: "call" | "sms" | "whatsapp";
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
  const digits = phoneFormatted.replace(/\D/g, "");
  const href =
    variant === "call"
      ? `tel:${phoneFormatted}`
      : variant === "sms"
      ? `sms:${phoneFormatted}`
      : `https://wa.me/${digits}`;
  const defaultText =
    variant === "call" ? `Ring: ${phone}` : variant === "sms" ? `Send SMS` : `WhatsApp`;

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${className}`}
      aria-label={
        variant === "call"
          ? `Ring til ${phone}`
          : variant === "sms"
          ? `Send SMS til ${phone}`
          : `Skriv på WhatsApp til ${phone}`
      }
    >
      {children || defaultText}
    </a>
  );
}

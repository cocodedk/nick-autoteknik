import React from "react";
import type { Service } from "@/components/shared/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded p-6 border-2 border-black hover:border-brand-red transition-all hover:shadow-lg group">
      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brand-red transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-700">
        {service.description}
      </p>
    </div>
  );
}

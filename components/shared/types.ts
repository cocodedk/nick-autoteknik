export interface BusinessInfo {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  cvr: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface Service {
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface ContentData {
  business: BusinessInfo;
  hero: {
    tagline: string;
    subtitle: string;
    usps: string[];
  };
  services: Service[];
  reviews: {
    googleUrl: string;
    facebookUrl: string;
  };
  footer: {
    tagline: string;
    links: Array<{ label: string; href: string }>;
  };
}


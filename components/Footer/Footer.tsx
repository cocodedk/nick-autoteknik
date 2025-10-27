import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  businessName: string;
  cvr: string;
  tagline: string;
  links: FooterLink[];
}

export function Footer({ businessName, cvr, tagline, links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {businessName}
            </h3>
            <p className="text-sm text-gray-400">
              {tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">
              Information
            </h4>
            <ul className="space-y-1 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-2">
              Firma
            </h4>
            <p className="text-sm text-gray-400">
              CVR: {cvr}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {businessName}. Alle rettigheder forbeholdes.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Designet og implementeret af
            {' '}
            <a
              href="https://cocode.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-red"
            >
              cocode.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

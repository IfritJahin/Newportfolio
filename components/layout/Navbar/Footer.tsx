'use client'

import React from "react";

type SocialLink = {
  label: string;
  href: string;
};

type FooterProps = {
  name?: string;
  socials?: SocialLink[];
};

const Footer = ({
  name = "Labiba",
  socials = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
  ],
}: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#532350] border-t border-[#6B2B5C]/15 mt-10">
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] tracking-wide text-[#ffffff]/60">
          © {year} {name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] tracking-wide text-[#ffffff] hover:text-[#B0489C] transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
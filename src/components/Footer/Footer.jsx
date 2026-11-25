import React from "react";
import Brand from "../Brand/Brand";
import { GoArrowUpRight } from "react-icons/go";

export const Footer = () => {
  const socialLinks = [
    { id: 1, path: "/", name: "Github" },
    { id: 2, path: "/work", name: "Linkedin" },
    { id: 3, path: "/pricing", name: "Email" },
  ];
  return (
    <div className="px-15">
      <div className="py-5 border-t border-t-border flex flex-col gap-5">
        <div className="flex justify-between">
          <Brand />
          <div className="social flex gap-4">
            {socialLinks.map((socialLink) => (
              <a
                id={socialLink.id}
                href={socialLink.path}
                className="flex items-center gap-2"
              >
                {socialLink.name}
                <GoArrowUpRight />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-secondary text-xs font-mono">
          <span>&copy; 2026 Ammar Meshaal</span>
          <span>Built with purpose. Made to feel different.</span>
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { GitHubIcon, LoveIcon } from "@/assets/icons";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Join Community Line */}
          <div className="flex items-center gap-6 sm:gap-10 justify-center flex-wrap">
            <span className="text-gray-900 font-medium">Join community</span>
            <span className="text-gray-900">hello@campusguide</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-900 hover:opacity-70 transition"
            >
              <GitHubIcon size={20} />
              Github
            </a>
          </div>

          {/* Built with Love & Supported by with Logo */}
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <span className="text-gray-900">Built with love</span>
            <LoveIcon size={18} />
            <span className="text-gray-900">Supported by</span>
            <div className="relative w-48 h-16">
              <Image
                src="/youthmappers.png"
                alt="Youth Mappers"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Copyright Line */}
          <div className="text-center text-gray-600 text-sm">
            © Copyright {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE_CONFIG, waLink } from "@/lib/constants";
import clsx from "clsx";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={SITE_CONFIG.logoUrl}
              alt={SITE_CONFIG.name}
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter font-medium text-brand-navy hover:text-brand-red transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-outline text-sm px-4 py-2">
              Get a Quote
            </Link>
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-4 py-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-inter font-medium text-brand-navy hover:text-brand-red hover:bg-gray-50 px-4 py-3 rounded-xl transition-all duration-200 text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-outline w-full justify-center"
              >
                Get a Quote
              </Link>
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

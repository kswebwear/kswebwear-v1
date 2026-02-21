import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SITE_CONFIG, waLink } from "@/lib/constants";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Get a Quote", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Image
              src={SITE_CONFIG.logoUrl}
              alt={SITE_CONFIG.name}
              width={140}
              height={48}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6">
              Custom T-shirt printing in Tallawong. Events, businesses
              & group orders. Minimum 2 shirts per order.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-whatsapp transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-sora font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white font-inter text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sora font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 font-inter text-sm">
                  {SITE_CONFIG.location}
                  <br />
                  <span className="text-gray-500 text-xs">Local pickup available</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-white font-inter text-sm transition-colors duration-200"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-whatsapp flex-shrink-0" />
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-whatsapp font-inter text-sm transition-colors duration-200"
                >
                  {SITE_CONFIG.whatsapp}
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 text-sm px-5 py-2.5"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 font-inter text-xs text-center md:text-left">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. Tallawong, NSW Australia.
          </p>
          <p className="text-gray-600 font-inter text-xs">
            Not a clothing store — 100% custom printing.
          </p>
        </div>
      </div>
    </footer>
  );
}

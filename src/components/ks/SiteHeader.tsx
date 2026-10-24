"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import LogoMark from "./LogoMark";
import { SITE_CONFIG, waLink } from "@/lib/constants";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: SITE_CONFIG.designerUrl, label: "Design tool" },
];

const isExternal = (href: string) => href.startsWith("http");
const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

const linkClass = "inline-flex min-h-ks-tap items-center text-[15px] font-medium text-ks-ink no-underline hover:text-ks-muted";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-ks-line bg-ks-paper">
      <div className="ks-container flex items-center justify-between gap-x-8 gap-y-4 py-3.5 md:py-[1.125rem]">
        <Link
          href="/"
          aria-label={`${SITE_CONFIG.name} home`}
          className="flex items-center gap-3 text-ks-ink no-underline"
        >
          <LogoMark />
          <span className="ks-title text-lg tracking-[-0.01em]">{SITE_CONFIG.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass} {...(isExternal(link.href) ? externalProps : {})}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href={waLink("default")} className="hidden md:inline-flex">
          Get a quote
        </Button>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-ks-tap w-ks-tap items-center justify-center border border-ks-line text-ks-ink md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-ks-line md:hidden">
          <div className="ks-container flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkClass} border-b border-ks-line last:border-b-0`}
                {...(isExternal(link.href) ? externalProps : {})}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

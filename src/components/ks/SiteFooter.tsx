import Link from "next/link";
import LogoMark from "./LogoMark";
import { SITE_CONFIG } from "@/lib/constants";

const linkClass = "inline-flex min-h-6 items-center text-ks-paper no-underline hover:underline";
const colHead = "ks-label text-ks-on-dark-muted";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ks-ink text-[15px] text-ks-on-dark max-md:pb-[calc(var(--ks-btn-h)+3rem)]">
      <div className="ks-container flex flex-col gap-12 pb-8 pt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-xl text-ks-paper">
              <LogoMark size={36} onDark />
              <span className="ks-title">{SITE_CONFIG.name}</span>
            </span>
            <span className="leading-normal">
              Custom DTF t-shirt printing.
              <br />
              {SITE_CONFIG.location}.
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className={colHead}>Contact</span>
            <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
              WhatsApp 0410 369 036
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>{SITE_CONFIG.email}</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className={colHead}>Site</span>
            <Link href="/#work" className={linkClass}>Work</Link>
            <Link href="/#pricing" className={linkClass}>Pricing</Link>
            <Link href="/#faq" className={linkClass}>FAQ</Link>
            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className={colHead}>Follow</span>
            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
            <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-ks-body pt-5 font-ks-mono text-ks-label text-ks-on-dark-muted">
          <span>
            © {year} {SITE_CONFIG.name}
            {SITE_CONFIG.abn && ` · ABN ${SITE_CONFIG.abn}`}
          </span>
          <span>{SITE_CONFIG.legalName}</span>
        </div>
      </div>
    </footer>
  );
}

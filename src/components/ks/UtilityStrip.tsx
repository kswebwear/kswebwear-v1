import { SITE_CONFIG } from "@/lib/constants";

export default function UtilityStrip() {
  return (
    <div className="bg-ks-ink font-ks-mono text-ks-label tracking-[0.04em] text-ks-paper">
      <div className="ks-container flex flex-wrap justify-between gap-x-6 gap-y-2 py-2.5">
        <span>DTF PRINTING · TALLAWONG NSW 2762 · FROM 2 SHIRTS</span>
        <a
          href={SITE_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-6 items-center text-ks-paper no-underline hover:underline"
        >
          WHATSAPP 0410 369 036 →
        </a>
      </div>
    </div>
  );
}

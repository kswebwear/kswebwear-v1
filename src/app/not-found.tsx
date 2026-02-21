import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center">
      <div className="section-container text-center py-20">
        <div className="text-8xl font-sora font-bold text-brand-navy/10 mb-4">404</div>
        <h1 className="font-sora font-bold text-3xl text-brand-navy mb-4">
          Page Not Found
        </h1>
        <p className="font-inter text-brand-muted text-lg mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist. But your custom tee can. Let&apos;s get you to the
          right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-4 justify-center">
            <Home size={18} />
            Back to Home
          </Link>
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-4"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

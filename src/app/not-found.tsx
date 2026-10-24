import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";
import Button from "@/components/ks/Button";
import PageHero from "@/components/ks/PageHero";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="Page not found."
      intro="This page doesn't exist. But your custom tee can. Let's get you to the right place."
    >
      <Button href="/" size="lg">
        Back to home
      </Button>
      <Button href={waLink("default")} variant="secondary" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
        Chat on WhatsApp
      </Button>
    </PageHero>
  );
}

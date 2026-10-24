"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import Button from "@/components/ks/Button";
import { SITE_CONFIG, waLink } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  message: string;
};

const serviceOptions = [
  "Event / Celebration Tees",
  "Small Business Order",
  "Group / Team Order",
  "Bulk Order (10+ shirts)",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const now = Date.now();
    if (now - lastSubmitTime < 5000) return;
    setLastSubmitTime(now);

    const message = encodeURIComponent(
      `Hi! I'd like to enquire about custom printing.\n\n` +
        `Name: ${data.name.trim()}\n` +
        `Email: ${data.email.trim()}\n` +
        `Phone: ${data.phone?.trim() || "Not provided"}\n` +
        `Service: ${data.service}\n` +
        `Quantity: ${data.quantity?.trim() || "Not specified"}\n\n` +
        `Message: ${data.message.trim()}`
    );

    window.open(`${SITE_CONFIG.whatsappLink}?text=${message}`, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 border border-ks-line bg-ks-paper p-6 md:p-8">
        <h3 className="ks-title text-ks-h3">WhatsApp opened.</h3>
        <p className="text-base leading-[1.55] text-ks-body">
          Your message has been pre-filled in WhatsApp. Just hit send and we&apos;ll get back to you shortly.
        </p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="border border-ks-line bg-ks-paper p-6 md:p-8">
      <p className="mb-6 border-b border-ks-line pb-6 text-base text-ks-body">
        <span className="font-semibold text-ks-ink">Prefer to chat directly?</span>{" "}
        <a
          href={waLink("default")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ks-accent underline underline-offset-4 hover:text-ks-ink"
        >
          Message us on WhatsApp
        </a>
        . We reply same day.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className="ks-label mb-2 block text-ks-muted">
            Full Name <span className="text-ks-accent">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={`ks-input ${errors.name ? "border-ks-accent" : ""}`}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name is too short" },
              maxLength: { value: 100, message: "Name is too long" },
            })}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-ks-accent">{errors.name.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="ks-label mb-2 block text-ks-muted">
              Email <span className="text-ks-accent">*</span>
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className={`ks-input ${errors.email ? "border-ks-accent" : ""}`}
              {...register("email", {
                required: "Email is required",
                maxLength: { value: 254, message: "Email is too long" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-ks-accent">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="ks-label mb-2 block text-ks-muted">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="04XX XXX XXX"
              className="ks-input"
              {...register("phone", {
                maxLength: { value: 20, message: "Phone number is too long" },
              })}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="ks-label mb-2 block text-ks-muted">
            What do you need? <span className="text-ks-accent">*</span>
          </label>
          <select
            className={`ks-input ${errors.service ? "border-ks-accent" : ""}`}
            {...register("service", { required: "Please select a service" })}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service...
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-sm text-ks-accent">{errors.service.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="ks-label mb-2 block text-ks-muted">
            Approximate Quantity
          </label>
          <input
            type="text"
            placeholder="e.g. 1, 10, 25, not sure yet..."
            className="ks-input"
            {...register("quantity", {
              maxLength: { value: 50, message: "Too long" },
            })}
          />
        </div>

        {/* Message */}
        <div>
          <label className="ks-label mb-2 block text-ks-muted">
            Tell us about your project <span className="text-ks-accent">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Describe your design idea, shirt colour, any deadline, or just say hi..."
            className={`ks-input resize-none ${errors.message ? "border-ks-accent" : ""}`}
            {...register("message", {
              required: "Please describe your project",
              minLength: { value: 10, message: "Please give us a bit more detail" },
              maxLength: { value: 5000, message: "Message is too long (max 5000 characters)" },
            })}
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-ks-accent">{errors.message.message}</p>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-ks-body">
          Submitting this form will open WhatsApp with your message pre-filled.
          We&apos;ll reply same day (Mon–Sat).
        </p>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          icon={<Send size={18} aria-hidden="true" />}
          className={isSubmitting ? "pointer-events-none opacity-60" : undefined}
        >
          {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
        </Button>
      </form>
    </div>
  );
}

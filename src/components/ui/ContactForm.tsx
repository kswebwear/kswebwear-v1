"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  message: string;
};

const serviceOptions = [
  "Custom T-Shirts (Individual)",
  "Oversized Tees",
  "Custom Hoodies",
  "Gym / PT Merch",
  "Starter Business Pack (10 tees)",
  "Team Pack (25 tees)",
  "Brand Builder Pack (50 tees)",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Build a WhatsApp message from form data
    const message = encodeURIComponent(
      `Hi! I'd like to enquire about custom printing.\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone || "Not provided"}\n` +
        `Service: ${data.service}\n` +
        `Quantity: ${data.quantity || "Not specified"}\n\n` +
        `Message: ${data.message}`
    );

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/61410369036?text=${message}`, "_blank");

    // Mark as submitted
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-brand-whatsapp" />
        </div>
        <h3 className="font-sora font-bold text-xl text-brand-navy mb-2">
          WhatsApp Opened!
        </h3>
        <p className="font-inter text-brand-muted text-sm mb-6">
          Your message has been pre-filled in WhatsApp. Just hit send and
          we&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      {/* WhatsApp prompt */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
        <MessageCircle size={18} className="text-brand-whatsapp mt-0.5 flex-shrink-0" />
        <p className="font-inter text-sm text-gray-700">
          <span className="font-semibold">Prefer to chat directly?</span>{" "}
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-whatsapp font-semibold hover:underline"
          >
            Message us on WhatsApp
          </a>{" "}
          — we reply same day.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={`form-input ${errors.name ? "border-brand-red" : ""}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-brand-red text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
              Email <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className={`form-input ${errors.email ? "border-brand-red" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-brand-red text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="04XX XXX XXX"
              className="form-input"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
            What do you need? <span className="text-brand-red">*</span>
          </label>
          <select
            className={`form-input ${errors.service ? "border-brand-red" : ""}`}
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
            <p className="text-brand-red text-xs mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
            Approximate Quantity
          </label>
          <input
            type="text"
            placeholder="e.g. 1, 10, 25, not sure yet..."
            className="form-input"
            {...register("quantity")}
          />
        </div>

        {/* Message */}
        <div>
          <label className="font-inter font-medium text-sm text-brand-navy block mb-1.5">
            Tell us about your project <span className="text-brand-red">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Describe your design idea, shirt colour, any deadline, or just say hi..."
            className={`form-input resize-none ${errors.message ? "border-brand-red" : ""}`}
            {...register("message", {
              required: "Please describe your project",
              minLength: { value: 10, message: "Please give us a bit more detail" },
            })}
          />
          {errors.message && (
            <p className="text-brand-red text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Disclaimer */}
        <p className="font-inter text-brand-muted text-xs">
          Submitting this form will open WhatsApp with your message pre-filled.
          We&apos;ll reply same day (Mon–Sat).
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-whatsapp justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
        </button>
      </form>
    </div>
  );
}

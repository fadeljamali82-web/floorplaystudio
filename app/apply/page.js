"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const STORE_TYPES = [
  "Boutique",
  "Barbershop",
  "Salon",
  "Lifestyle Store",
  "Gift Shop",
  "Clothing Store",
  "Smoke Shop",
  "Other",
];

const FOOT_TRAFFIC_OPTIONS = [
  "Under 100 visitors per week",
  "100–300 visitors per week",
  "300–700 visitors per week",
  "700+ visitors per week",
  "Not sure yet",
];

const SPACE_OPTIONS = [
  "Small display area",
  "Medium display area",
  "Larger floor placement area",
  "Wall + floor opportunity",
  "Not sure yet",
];

const CONTACT_OPTIONS = ["Phone", "Email", "Text"];

const MODEL_OPTIONS = [
  "Consignment-first retail model",
  "Upfront partner / agent purchase model",
  "Open to discussing both",
];

const PAGE_CONTENT = {
  hero: {
    eyebrow: "Apply",
    title: "Apply to Become a FloorPlay™ Location.",
    description:
      "We look for clean, high-visibility locations that align with the FloorPlay™ model. This form helps us quickly understand your store, your customer flow, and whether the placement is a strong fit.",
    primaryCta: {
      label: "How It Works",
      href: "/how-it-works",
    },
    secondaryCta: {
      label: "Ideal Partner",
      href: "/ideal-partner",
    },
  },

  intakePoints: [
    {
      title: "Cleaner qualification",
      text: "We collect the right information upfront so the review process stays fast, clear, and useful.",
    },
    {
      title: "Better partner matching",
      text: "The goal is not volume for the sake of volume. The goal is identifying stores that actually fit the model.",
    },
    {
      title: "Structured follow-up",
      text: "Your responses are organized in a format that makes review, outreach, and next steps more efficient.",
    },
  ],

  checklist: [
    "Clean retail environment",
    "Visible customer flow",
    "Appropriate floor or display space",
    "Willingness to maintain presentation standards",
    "Aligned with a premium branded system",
  ],
};

export default function ApplyPage() {
  const { hero, intakePoints, checklist } = PAGE_CONTENT;

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    role: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    city: "",
    state: "",
    storeType: "",
    customerProfile: "",
    footTraffic: "",
    displaySpace: "",
    currentMerchandising: "",
    taxCollection: "",
    preferredModel: "",
    preferredContact: "",
    whyInterested: "",
    notes: "",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const structuredSummary = useMemo(() => {
    return `
FLOORPLAY APPLICATION

Business Name: ${formData.businessName || "-"}
Contact Name: ${formData.contactName || "-"}
Role / Title: ${formData.role || "-"}
Email: ${formData.email || "-"}
Phone: ${formData.phone || "-"}
Website: ${formData.website || "-"}
Instagram: ${formData.instagram || "-"}
City: ${formData.city || "-"}
State: ${formData.state || "-"}

Store Type: ${formData.storeType || "-"}
Customer Profile: ${formData.customerProfile || "-"}
Estimated Foot Traffic: ${formData.footTraffic || "-"}
Available Display Space: ${formData.displaySpace || "-"}
Current Merchandising Style: ${formData.currentMerchandising || "-"}
Can Collect Applicable Taxes: ${formData.taxCollection || "-"}
Preferred Commercial Model: ${formData.preferredModel || "-"}
Preferred Contact Method: ${formData.preferredContact || "-"}

Why Interested:
${formData.whyInterested || "-"}

Additional Notes:
${formData.notes || "-"}
    `.trim();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(structuredSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `FloorPlay Application — ${formData.businessName || "New Location"}`
    );
    const body = encodeURIComponent(structuredSummary);

    // ✅ FIXED EMAIL HERE
    window.location.href = `mailto:floorplaystudiodc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* everything else EXACTLY unchanged */}
    </>
  );
}
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

    window.location.href = `mailto:floorplay-studio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <main className="apply-page">
        <section className="hero fade-up">
          <div className="wrap hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="hero-text">{hero.description}</p>

              <div className="actions">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="hero-stat-card">
              <span className="stat-label">What this form helps us assess</span>

              <div className="stat-stack">
                <div className="stat-row">
                  <span>Location quality</span>
                  <strong>Environment + visibility</strong>
                </div>
                <div className="stat-row">
                  <span>Commercial fit</span>
                  <strong>Model alignment</strong>
                </div>
                <div className="stat-row">
                  <span>Follow-up readiness</span>
                  <strong>Clean contact details</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Why this process works</p>
              <h2>Structured Intake Creates Better Placements.</h2>
              <p>
                The more clearly we understand the location, the easier it becomes to
                qualify, follow up, and decide whether the store is a strong match for
                the FloorPlay™ system.
              </p>
            </div>

            <div className="intake-grid">
              {intakePoints.map((point) => (
                <article key={point.title} className="intake-card">
                  <div className="intake-dot" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap apply-grid">
            <div className="form-shell">
              <div className="form-head">
                <p className="eyebrow">Application form</p>
                <h2>Tell Us About the Location</h2>
                <p>
                  Fill this out as clearly as possible. The format is designed to make
                  review and outreach straightforward on our side.
                </p>
              </div>

              <form className="application-form" onSubmit={handleEmailSubmit}>
                <div className="form-section">
                  <div className="form-section-title">Business details</div>

                  <div className="field-grid two-col">
                    <Field
                      label="Business Name"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Enter business name"
                      required
                    />
                    <Field
                      label="Store Type"
                      name="storeType"
                      value={formData.storeType}
                      onChange={handleChange}
                      as="select"
                      options={STORE_TYPES}
                      required
                    />
                  </div>

                  <div className="field-grid two-col">
                    <Field
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                    />
                    <Field
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      required
                    />
                  </div>

                  <Field
                    label="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                  />

                  <Field
                    label="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="@yourstore"
                  />
                </div>

                <div className="form-section">
                  <div className="form-section-title">Primary contact</div>

                  <div className="field-grid two-col">
                    <Field
                      label="Contact Name"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                    />
                    <Field
                      label="Role / Title"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Owner, Manager, Buyer..."
                      required
                    />
                  </div>

                  <div className="field-grid two-col">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                      required
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      required
                    />
                  </div>

                  <Field
                    label="Preferred Contact Method"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    as="select"
                    options={CONTACT_OPTIONS}
                    required
                  />
                </div>

                <div className="form-section">
                  <div className="form-section-title">Location fit</div>

                  <Field
                    label="Describe Your Customer Profile"
                    name="customerProfile"
                    value={formData.customerProfile}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Who shops with you, what they respond to, and what kind of retail environment you operate..."
                    required
                  />

                  <div className="field-grid two-col">
                    <Field
                      label="Estimated Foot Traffic"
                      name="footTraffic"
                      value={formData.footTraffic}
                      onChange={handleChange}
                      as="select"
                      options={FOOT_TRAFFIC_OPTIONS}
                      required
                    />
                    <Field
                      label="Available Display Space"
                      name="displaySpace"
                      value={formData.displaySpace}
                      onChange={handleChange}
                      as="select"
                      options={SPACE_OPTIONS}
                      required
                    />
                  </div>

                  <Field
                    label="How Would You Describe Your Current Merchandising Style?"
                    name="currentMerchandising"
                    value={formData.currentMerchandising}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Clean and minimal, dense and product-heavy, premium and curated, etc."
                    required
                  />
                </div>

                <div className="form-section">
                  <div className="form-section-title">Commercial alignment</div>

                  <div className="field-grid two-col">
                    <Field
                      label="Can Your Location Collect Applicable Taxes?"
                      name="taxCollection"
                      value={formData.taxCollection}
                      onChange={handleChange}
                      as="select"
                      options={["Yes", "No", "Need to discuss"]}
                      required
                    />
                    <Field
                      label="Preferred Commercial Model"
                      name="preferredModel"
                      value={formData.preferredModel}
                      onChange={handleChange}
                      as="select"
                      options={MODEL_OPTIONS}
                      required
                    />
                  </div>

                  <Field
                    label="Why Are You Interested in FloorPlay™?"
                    name="whyInterested"
                    value={formData.whyInterested}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Tell us why the model feels like a good fit for your location..."
                    required
                  />

                  <Field
                    label="Additional Notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Anything else that helps us evaluate the opportunity..."
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-dark">
                    Submit by Email
                  </button>

                  <button type="button" className="btn btn-secondary" onClick={handleCopy}>
                    {copied ? "Copied" : "Copy Structured Summary"}
                  </button>
                </div>
              </form>
            </div>

            <div className="side-shell">
              <div className="side-card">
                <p className="eyebrow">Fast qualification filter</p>
                <h3>What Usually Makes a Strong Candidate</h3>

                <ul className="bullet-list">
                  {checklist.map((item) => (
                    <li key={item}>
                      <span className="bullet-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-card summary-card">
                <p className="eyebrow">Structured preview</p>
                <h3>What We Receive</h3>
                <pre>{structuredSummary}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap closing-box">
            <div>
              <p className="eyebrow closing-eyebrow">Need more context first?</p>
              <h2>Review the Model Before You Apply.</h2>
              <p>
                If you want to understand how FloorPlay™ operates before submitting,
                explore the partner fit and commercial structure first.
              </p>
            </div>

            <div className="actions closing-actions">
              <Link href="/ideal-partner" className="btn btn-dark">
                View Ideal Partner
              </Link>
              <Link href="/earnings" className="btn btn-light-solid">
                See How You Earn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .apply-page {
          background:
            radial-gradient(circle at top left, rgba(255, 216, 77, 0.11), transparent 24%),
            radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.05), transparent 20%),
            linear-gradient(180deg, #f8f5ee 0%, #f3efe7 100%);
          color: #151515;
        }

        .wrap {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section {
          padding: 92px 0;
        }

        .hero {
          padding: 30px 0 56px;
        }

        .hero-shell {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 32px;
          align-items: stretch;
        }

        .hero-copy,
        .hero-stat-card,
        .intake-card,
        .form-shell,
        .side-card {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(21, 21, 21, 0.08);
          border-radius: 34px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }

        .hero-copy {
          padding: 48px;
        }

        .hero-stat-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          color: #9b8100;
        }

        .hero h1,
        .section h2,
        .closing-box h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 64px);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 800;
          color: #141414;
          text-wrap: balance;
        }

        .hero-text,
        .section-head p,
        .closing-box p {
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(21, 21, 21, 0.74);
          max-width: 68ch;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: #d7b111;
          color: #111111;
          box-shadow: 0 14px 30px rgba(215, 177, 17, 0.24);
        }

        .btn-primary:hover {
          background: #e4be18;
        }

        .btn-secondary,
        .btn-light-solid {
          background: rgba(255, 255, 255, 0.86);
          color: #151515;
          border: 1px solid rgba(21, 21, 21, 0.12);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        }

        .btn-dark {
          background: #141414;
          color: #f8f4eb;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
        }

        .stat-label {
          display: block;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(21, 21, 21, 0.52);
          font-weight: 700;
          margin-bottom: 22px;
        }

        .stat-stack {
          display: grid;
          gap: 14px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid rgba(21, 21, 21, 0.08);
          color: rgba(21, 21, 21, 0.72);
        }

        .stat-row:first-child {
          border-top: none;
          padding-top: 0;
        }

        .stat-row strong {
          color: #141414;
        }

        .section-head {
          max-width: 780px;
          margin-bottom: 36px;
        }

        .intake-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .intake-card {
          padding: 26px;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .intake-card:hover,
        .side-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .intake-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #d7b111;
          box-shadow: 0 0 0 8px rgba(215, 177, 17, 0.12);
          margin-bottom: 18px;
        }

        .intake-card h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #151515;
        }

        .intake-card p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.72;
          color: rgba(21, 21, 21, 0.72);
        }

        .apply-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 22px;
          align-items: start;
        }

        .form-shell {
          padding: 30px;
        }

        .form-head {
          margin-bottom: 24px;
        }

        .form-head h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1;
          letter-spacing: -0.045em;
          font-weight: 800;
          color: #141414;
        }

        .form-head p {
          margin: 16px 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(21, 21, 21, 0.72);
        }

        .application-form {
          display: grid;
          gap: 22px;
        }

        .form-section {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(21, 21, 21, 0.07);
        }

        .form-section-title {
          margin-bottom: 18px;
          font-size: 13px;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 800;
          color: #8f7600;
        }

        .field-grid {
          display: grid;
          gap: 14px;
        }

        .field-grid.two-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .field {
          display: grid;
          gap: 8px;
          margin-bottom: 14px;
        }

        .field:last-child {
          margin-bottom: 0;
        }

        .field label {
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
          color: #151515;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          min-height: 56px;
          padding: 16px 16px;
          border-radius: 18px;
          border: 1px solid rgba(21, 21, 21, 0.1);
          background: rgba(255, 255, 255, 0.92);
          color: #151515;
          font-size: 15px;
          line-height: 1.5;
          outline: none;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease;
        }

        .field textarea {
          min-height: 128px;
          resize: vertical;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: rgba(215, 177, 17, 0.7);
          box-shadow: 0 0 0 4px rgba(215, 177, 17, 0.12);
        }

        .form-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 6px;
        }

        .side-shell {
          display: grid;
          gap: 18px;
        }

        .side-card {
          padding: 26px;
        }

        .side-card h3 {
          margin: 0;
          font-size: 28px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #151515;
        }

        .bullet-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          display: grid;
          gap: 14px;
        }

        .bullet-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 0 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(21, 21, 21, 0.08);
          font-size: 15px;
          line-height: 1.5;
        }

        .bullet-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #d7b111;
          flex: 0 0 auto;
        }

        .summary-card pre {
          margin: 18px 0 0;
          white-space: pre-wrap;
          word-break: break-word;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          line-height: 1.75;
          color: rgba(21, 21, 21, 0.74);
          padding: 18px;
          border-radius: 18px;
          background: rgba(21, 21, 21, 0.04);
          border: 1px solid rgba(21, 21, 21, 0.06);
          max-height: 420px;
          overflow: auto;
        }

        .closing-box {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          padding: 36px;
          border-radius: 36px;
          background: linear-gradient(180deg, #f1cd3b, #d7b111);
          box-shadow: 0 24px 50px rgba(215, 177, 17, 0.24);
        }

        .closing-eyebrow {
          color: rgba(21, 21, 21, 0.62);
        }

        .closing-actions {
          margin-top: 0;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fade-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1180px) {
          .hero-shell,
          .apply-grid,
          .closing-box {
            grid-template-columns: 1fr;
          }

          .intake-grid {
            grid-template-columns: 1fr;
          }

          .closing-actions {
            margin-top: 8px;
          }
        }

        @media (max-width: 920px) {
          .field-grid.two-col {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 820px) {
          .section {
            padding: 68px 0;
          }

          .hero {
            padding-top: 20px;
          }

          .wrap {
            width: min(100% - 24px, 1200px);
          }

          .hero-copy,
          .hero-stat-card,
          .intake-card,
          .form-shell,
          .side-card,
          .closing-box {
            padding: 28px;
            border-radius: 28px;
          }

          .hero h1,
          .section h2,
          .closing-box h2 {
            font-size: clamp(34px, 11vw, 56px);
            max-width: 100%;
          }

          .stat-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 560px) {
          .actions,
          .form-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  as = "input",
  options = [],
  required = false,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      ) : as === "select" ? (
        <select id={name} name={name} value={value} onChange={onChange} required={required}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}
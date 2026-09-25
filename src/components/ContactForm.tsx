"use client";

import React, { useState } from "react";
import { EMAIL, FORM_ENDPOINT } from "@/data/portfolio";
import { Icon } from "./Icons";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<{
    type: "ok" | "info" | "";
    message: string;
  }>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) newErrors.email = true;
    if (!formData.type) newErrors.type = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "", message: "" });
      return;
    }

    setLoading(true);

    try {
      if (!FORM_ENDPOINT) {
        // Fallback to mailto link
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${
          formData.company || "-"
        }\nProject type: ${formData.type}\nBudget: ${
          formData.budget || "-"
        }\n\n${formData.message}`;

        const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
          "Project enquiry from " + formData.name
        )}&body=${encodeURIComponent(body)}`;

        const a = document.createElement("a");
        a.href = mailtoUrl;
        a.target = "_top";
        document.body.appendChild(a);
        a.click();
        a.remove();

        setStatus({
          type: "ok",
          message:
            "Your email app should open with the message ready to send. If it doesn't, write directly to " +
            EMAIL +
            ".",
        });
        setLoading(false);
        return;
      }

      // If FORM_ENDPOINT is configured
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus({
        type: "ok",
        message: "Message sent successfully. Thank you, I'll reply soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        type: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "info",
        message: `The form couldn't send your message right now. Please email ${EMAIL} directly.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" id="cf" noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <div className={`field ${errors.name ? "err" : ""}`}>
          <label htmlFor="n">Name</label>
          <input
            id="n"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            aria-describedby="n-e"
            aria-invalid={errors.name}
          />
          <span className="msg" id="n-e">
            Enter your name.
          </span>
        </div>

        <div className={`field ${errors.email ? "err" : ""}`}>
          <label htmlFor="e">Email</label>
          <input
            id="e"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            aria-describedby="e-e"
            aria-invalid={errors.email}
          />
          <span className="msg" id="e-e">
            Enter a valid email address.
          </span>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="c">Company (optional)</label>
          <input
            id="c"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={`field ${errors.type ? "err" : ""}`}>
          <label htmlFor="t">Project type</label>
          <select
            id="t"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            aria-describedby="t-e"
            aria-invalid={errors.type}
          >
            <option value="">Select one</option>
            <option>Business website</option>
            <option>Landing page</option>
            <option>UI/UX design</option>
            <option>WordPress</option>
            <option>Shopify or e-commerce</option>
            <option>Figma to code</option>
            <option>Something else</option>
          </select>
          <span className="msg" id="t-e">
            Choose a project type.
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="b">Budget</label>
        <select
          id="b"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Not sure yet</option>
          <option>Around ₹15,000</option>
          <option>Around ₹30,000</option>
          <option>₹50,000+</option>
        </select>
      </div>

      <div className={`field ${errors.message ? "err" : ""}`}>
        <label htmlFor="m">Message</label>
        <textarea
          id="m"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          aria-describedby="m-e"
          aria-invalid={errors.message}
        />
        <span className="msg" id="m-e">
          Tell me a little about your project.
        </span>
      </div>

      {status.message && (
        <div
          id="fs"
          role="status"
          className={`alert ${status.type}`}
        >
          <Icon name={status.type === "ok" ? "i-check" : "i-info"} />
          <span>{status.message}</span>
        </div>
      )}

      <button
        className={`btn btn-primary ${loading ? "loading" : ""}`}
        type="submit"
        id="sb"
        disabled={loading}
      >
        {loading ? "Sending" : "Send message"}
      </button>
    </form>
  );
}

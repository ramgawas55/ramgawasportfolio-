"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Unable to send message.");
      }
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "contact_submit",
          path: "/contact",
          email: form.email,
        }),
      }).catch(() => {});
      setForm(initialState);
      toast.success("Message sent. Expect a response within 24 hours.");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      eyebrow="contact"
      title="Start a conversation"
      description="Share your brief, timeline, and goals. I respond quickly with clarity and next steps."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6"
        >
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              Name
            </label>
            <input
              aria-label="Name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] px-4 py-3 text-sm text-[#e6ffe9] outline-none focus:border-[#4dff8a]"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              Email
            </label>
            <input
              aria-label="Email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] px-4 py-3 text-sm text-[#e6ffe9] outline-none focus:border-[#4dff8a]"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              Message
            </label>
            <textarea
              aria-label="Message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="mt-2 min-h-[160px] w-full rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] px-4 py-3 text-sm text-[#e6ffe9] outline-none focus:border-[#4dff8a]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full border border-[#4dff8a]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#4dff8a] transition hover:bg-[#4dff8a] hover:text-[#0b0f0b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="space-y-4 rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6 text-sm text-[#8aa18a]">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#4dff8a]">
            Direct channel
          </div>
          <p>
            Preferred for detailed briefs, infrastructure audits, and product
            discovery workshops.
          </p>
          <div className="rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] p-4 text-[#e6ffe9]">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              Email
            </div>
            <div className="mt-2 text-lg">{profile.email}</div>
          </div>
          <div className="rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] p-4 text-[#e6ffe9]">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              LinkedIn
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-lg text-[#4dff8a] transition hover:text-[#ff2d55]"
            >
              {profile.linkedin}
            </a>
          </div>
          <div className="rounded-2xl border border-[#1f2a20] bg-[#0b0f0b] p-4 text-[#e6ffe9]">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
              Availability
            </div>
            <div className="mt-2 text-lg">Weekdays 10:00–19:00 IST</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

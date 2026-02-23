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
      title="Let’s connect"
      description="Send a message or reach me directly through the channels below."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6"
        >
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
              Name
            </label>
            <input
              aria-label="Name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-[#1a1a1a] bg-[#000000] px-4 py-3 text-sm text-[#ffffff] outline-none focus:border-[#ff3b30]"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
              Email
            </label>
            <input
              aria-label="Email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-[#1a1a1a] bg-[#000000] px-4 py-3 text-sm text-[#ffffff] outline-none focus:border-[#ff3b30]"
              required
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
              Message
            </label>
            <textarea
              aria-label="Message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="mt-2 min-h-[160px] w-full rounded-2xl border border-[#1a1a1a] bg-[#000000] px-4 py-3 text-sm text-[#ffffff] outline-none focus:border-[#ff3b30]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full border border-[#ff3b30]/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#ff3b30] transition hover:bg-[#ff3b30] hover:text-[#000000] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="space-y-4 rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6 text-sm text-[#c9c9c9]">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff3b30]">
            Direct channels
          </div>
          <p>
            Reach me for infrastructure consulting, automation work, or DevOps
            roles.
          </p>
          <div className="grid gap-4">
            <div className="group flex items-center gap-4 rounded-2xl border border-[#1a1a1a] bg-[#000000] p-4 text-[#ffffff] transition hover:border-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.25)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] text-[#ff3b30] transition group-hover:text-[#ff4d22]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M22 16.9v2a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 11.1a16 16 0 0 0 4.81 4.81l1.47-1.16a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  Phone
                </div>
                <a
                  href={`tel:${profile.phone}`}
                  className="mt-2 block text-lg text-[#ff3b30] transition hover:text-[#ff4d22]"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl border border-[#1a1a1a] bg-[#000000] p-4 text-[#ffffff] transition hover:border-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.25)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] text-[#ff3b30] transition group-hover:text-[#ff4d22]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  Email
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 block text-lg text-[#ff3b30] transition hover:text-[#ff4d22]"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl border border-[#1a1a1a] bg-[#000000] p-4 text-[#ffffff] transition hover:border-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.25)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] text-[#ff3b30] transition group-hover:text-[#ff4d22]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  LinkedIn
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg text-[#ff3b30] transition hover:text-[#ff4d22]"
                >
                  linkedin.com/in/ram-gawas-2215a12a7
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl border border-[#1a1a1a] bg-[#000000] p-4 text-[#ffffff] transition hover:border-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.25)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] text-[#ff3b30] transition group-hover:text-[#ff4d22]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4" />
                  <path d="M7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M17 22v-4a4 4 0 0 0-3-3.87" />
                  <path d="M21 7a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  GitHub
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg text-[#ff3b30] transition hover:text-[#ff4d22]"
                >
                  github.com/ramgawas55
                </a>
              </div>
            </div>
            <div className="group flex items-center gap-4 rounded-2xl border border-[#1a1a1a] bg-[#000000] p-4 text-[#ffffff] transition hover:border-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.25)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] text-[#ff3b30] transition group-hover:text-[#ff4d22]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-5 w-5"
                >
                  <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
                  Location
                </div>
                <div className="mt-2 text-lg text-[#ffffff]">
                  {profile.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadCaptureModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Check if already shown in this session
        const hasBeenShown = sessionStorage.getItem("lead_modal_shown");
        if (hasBeenShown) return;

        // Show after 20 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            sessionStorage.setItem("lead_modal_shown", "true");
        }, 20000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsVisible(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, url: window.location.href }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit. Please try again.");
            }

            setStatus("success");
            localStorage.setItem("visitor_email", email.trim());

            // Auto close after 3 seconds of success success
            setTimeout(() => {
                closeModal();
            }, 3000);

        } catch (err: unknown) {
            setStatus("error");
            const errMessage = err instanceof Error ? err.message : "Something went wrong.";
            setErrorMessage(errMessage);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#000000]/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#050505] p-6 shadow-2xl neon-border"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 text-[#c9c9c9] hover:text-[#ffffff] transition"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-6 text-center"
                            >
                                <div className="mb-4 rounded-full bg-[#1a1a1a] p-3 text-[#ff3b30] border border-[#ff3b30]/30 shadow-[0_0_15px_rgba(255,59,48,0.2)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-[#ffffff]">Thank You!</h3>
                                <p className="text-sm text-[#c9c9c9]">I&apos;ve received your email and will be in touch soon.</p>
                            </motion.div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#ffffff]">Stay Connected</h3>
                                    <p className="mt-2 text-sm text-[#c9c9c9]">
                                        Leave your email to get updates and connect directly. I will reach out to you shortly.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (status === "error") setStatus("idle");
                                            }}
                                            className="w-full rounded-xl border border-[#1a1a1a] bg-[#000000] px-4 py-3 text-sm text-[#ffffff] placeholder:text-[#c9c9c9]/60 focus:border-[#ff3b30]/50 focus:outline-none focus:ring-1 focus:ring-[#ff3b30]/50 transition"
                                            placeholder="you@example.com"
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    {status === "error" && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-xs text-[#ff4d22]"
                                        >
                                            {errorMessage}
                                        </motion.p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff3b30] px-4 py-3 text-sm font-medium text-[#000000] transition hover:bg-[#ff3b30]/90 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Keep in Touch"
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    const val = email.trim();
    if (!EMAIL_REGEX.test(val)) {
      setError(true);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-2.5">
        <p className="py-2 text-base leading-[1.6] text-white" role="status">
          Got it. Check your inbox within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col overflow-hidden rounded-2xl sm:flex-row sm:rounded-full">
        <Input
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          aria-label="Email address"
          aria-invalid={error}
          aria-describedby={error ? "email-capture-error" : "email-capture-hint"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className={`border-b-0 sm:border-b sm:border-r-0 ${
            error ? "border-brand" : ""
          }`}
        />
        <button
          type="button"
          onClick={submit}
          className="whitespace-nowrap bg-brand px-7 py-4 font-display text-base tracking-[0.08em] text-white transition-opacity hover:opacity-85"
        >
          Send Me The Audit
        </button>
      </div>
      {error && (
        <p id="email-capture-error" className="text-xs leading-[1.5] text-brand" role="alert">
          Enter a valid email so we know where to send the audit.
        </p>
      )}
      <p id="email-capture-hint" className="mt-0.5 text-xs leading-[1.5] text-muted">
        We reply within 48 hours. No spam. No newsletter.
      </p>
    </div>
  );
}

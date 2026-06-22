"use client";

import { useState } from "react";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";

export default function MobileContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="mobile-contact"
      className="relative isolate overflow-hidden bg-[#040404] px-4 py-14 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Radial gold glow overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55%] bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,190,11,0.10),transparent_70%)]" />

      {/* Section label */}
      <div className="flex items-center gap-2">
        <span
          className="text-[13px] text-[#FFBE0B]"
          style={{ fontFamily: FA_REGULAR }}
          aria-hidden="true"
        >{""}</span>
        <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFBE0B]">
          Contact Us
        </span>
      </div>

      {/* Heading */}
      <h2
        className="mt-3 text-[clamp(30px,8.5vw,44px)] font-bold leading-[1.08] tracking-[-0.035em] text-white"
      >
        Let&apos;s Have a Chat
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-[15px] leading-[1.65] text-[#8B8B8B]">
        Questions about our products/services, orders, or just want to say
        hello? We&apos;re here to help.
      </p>

      {/* Contact info row */}
      <div className="mt-8 flex flex-col gap-4">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,190,11,0.12)] text-[14px] text-[#FFBE0B]"
            style={{ fontFamily: FA_SOLID }}
            aria-hidden="true"
          >{""}</span>
          <span className="text-[14px] font-medium text-[#D1D1D1]">
            +92 987 75463
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,190,11,0.12)] text-[14px] text-[#FFBE0B]"
            style={{ fontFamily: FA_SOLID }}
            aria-hidden="true"
          >{""}</span>
          <span className="text-[14px] font-medium text-[#D1D1D1]">
            hello@markoagency.com
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(255,190,11,0.12)] text-[14px] text-[#FFBE0B]"
            style={{ fontFamily: FA_SOLID }}
            aria-hidden="true"
          >{""}</span>
          <span className="text-[14px] font-medium text-[#D1D1D1]">
            123 Digital Street, New York, USA
          </span>
        </div>
      </div>

      {/* Contact form */}
      <div className="mt-10 rounded-[20px] border border-[#1F1F1F] bg-[#0A0A0A] p-5">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <span
              className="text-[40px] text-[#FFBE0B]"
              style={{ fontFamily: FA_SOLID }}
              aria-hidden="true"
            >{""}</span>
            <p className="text-[17px] font-bold text-[#D1D1D1]">
              Message Sent!
            </p>
            <p className="text-[14px] text-[#8B8B8B]">
              Thank you for reaching out. We&apos;ll get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
              className="mt-2 rounded-full border border-[#FFBE0B] px-6 py-2 text-[14px] font-semibold text-[#FFBE0B]"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: First Name + Last Name */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-[#8B8B8B] mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full rounded-[12px] border border-[#1F1F1F] bg-[#0E0E0E] px-4 py-3 text-[15px] text-[#D1D1D1] placeholder-[#4a4a4a] outline-none focus:border-[#FFBE0B] transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[13px] font-semibold text-[#8B8B8B] mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full rounded-[12px] border border-[#1F1F1F] bg-[#0E0E0E] px-4 py-3 text-[15px] text-[#D1D1D1] placeholder-[#4a4a4a] outline-none focus:border-[#FFBE0B] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="mt-4">
              <label className="block text-[13px] font-semibold text-[#8B8B8B] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-[12px] border border-[#1F1F1F] bg-[#0E0E0E] px-4 py-3 text-[15px] text-[#D1D1D1] placeholder-[#4a4a4a] outline-none focus:border-[#FFBE0B] transition-colors"
              />
            </div>

            {/* Row 3: Phone Number */}
            <div className="mt-4">
              <label className="block text-[13px] font-semibold text-[#8B8B8B] mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 8900"
                className="w-full rounded-[12px] border border-[#1F1F1F] bg-[#0E0E0E] px-4 py-3 text-[15px] text-[#D1D1D1] placeholder-[#4a4a4a] outline-none focus:border-[#FFBE0B] transition-colors"
              />
            </div>

            {/* Row 4: Message */}
            <div className="mt-4">
              <label className="block text-[13px] font-semibold text-[#8B8B8B] mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us how we can help…"
                rows={5}
                className="w-full min-h-[120px] resize-none rounded-[12px] border border-[#1F1F1F] bg-[#0E0E0E] px-4 py-3 text-[15px] text-[#D1D1D1] placeholder-[#4a4a4a] outline-none focus:border-[#FFBE0B] transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-[#0E0E0E] py-4 text-[15px] font-semibold text-[#D1D1D1] shadow-[-3px_-3px_7px_rgba(255,190,11,0.38)] transition-opacity active:opacity-80"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}



"use client";

import { useState } from "react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      {/* Chat panel */}
      {open && (
        <div
          className="animate-fade-in-up overflow-hidden rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.18)]"
          style={{ width: "min(420px, calc(100vw - 2rem))" }}
        >
          <iframe
            src="https://app.fopos.net/?customerSupportEmbed=1&key=4551ba0b2cfdb8640aa3fdba589b909f47a031a565eda371&aiName=InnoVAherb%20AI"
            title="InnoVAherb AI"
            height="580"
            loading="lazy"
            allow="microphone; clipboard-write"
            style={{ border: 0, display: "block", width: "100%", borderRadius: 16 }}
          />
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with InnoVAherb AI"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-[0_4px_24px_rgba(45,110,49,0.45)] transition-all duration-200 hover:scale-105 hover:bg-brand-800 hover:shadow-[0_4px_32px_rgba(45,110,49,0.55)] active:scale-95"
      >
        {/* Pulsing "online" dot — only when closed */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
          </span>
        )}

        {/* Icon: chat bubble when closed, X when open */}
        {open ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function ComingSoonBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Slide in after a short delay so it doesn't fire instantly on load
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 bg-white border border-green-100 shadow-xl shadow-green-100/50 rounded-2xl px-4 py-3 max-w-xs">
        <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shrink-0">
          <span className="text-lg">🚀</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800 leading-tight">Coming soon!</p>
          <p className="text-xs text-gray-500 mt-0.5 leading-tight">
            FitBowl is launching in your area soon.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
      {/* Pulsing dot accent */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full">
        <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
      </span>
    </div>
  );
}

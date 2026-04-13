"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Build Salad", href: "#salad-builder" },
    { label: "Why Us", href: "#why-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-green-50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-200">🥗</span>
          <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            FitBowl
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#salad-builder"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Order Now 🚀
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-50 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#salad-builder"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-5 py-3 rounded-xl text-center"
          >
            Order Now 🚀
          </a>
        </div>
      )}
    </nav>
  );
}

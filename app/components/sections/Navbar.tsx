"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Scribe
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-center text-sm font-medium px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
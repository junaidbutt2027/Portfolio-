"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hub-container">
      <header className="hub-header">
        <h1 className="hub-title">Portfolio Collection</h1>
        <p className="hub-subtitle">
          Select a layouts to preview and experience the premium portfolio designs
        </p>
      </header>

      <div className="hub-grid">
        {/* Card 1: Developer Portfolio */}
        <div className="hub-card">
          <div className="hub-card-body">
            <span className="hub-badge badge-developer">Dark Mode</span>
            <h2 className="hub-card-title">Developer Portfolio</h2>
            <p className="hub-card-description">
              A premium, tech-focused dark layout designed for software engineers, 
              product builders, and technical creators. Features modern animations 
              and clean styling.
            </p>
            <Link href="/developer" className="hub-btn btn-developer">
              Open Layout
            </Link>
          </div>
        </div>

        {/* Card 2: Freelancer Portfolio */}
        <div className="hub-card">
          <div className="hub-card-body">
            <span className="hub-badge badge-freelancer">Light Mode</span>
            <h2 className="hub-card-title">Freelancer Portfolio</h2>
            <p className="hub-card-description">
              A bright, creative, and dynamic layout tailored for independent contractors, 
              content creators, and design professionals. Optimised for versatility.
            </p>
            <Link href="/freelancer" className="hub-btn btn-freelancer">
              Open Layout
            </Link>
          </div>
        </div>

        {/* Card 3: Main Demo Portfolio */}
        <div className="hub-card">
          <div className="hub-card-body">
            <span className="hub-badge badge-main">Gradient Mode</span>
            <h2 className="hub-card-title">Main Home</h2>
            <p className="hub-card-description">
              A comprehensive landing page showcasing specializations, services, portfolio collections,
              educational/work history, client reviews, and all separate demo listings.
            </p>
            <Link href="/index" className="hub-btn btn-main">
              Open Layout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

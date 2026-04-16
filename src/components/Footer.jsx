import React from 'react';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background: #000000;
          border-top: 1px solid #1a1a1a;
          padding: 1.75rem 2.5rem;
        }
        .footer-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
        }
        .footer-copy span { color: #586F7C; }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #586F7C; }

        @media (max-width: 480px) {
          .footer-root  { padding: 1.5rem 1.4rem; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 8px; }
          .footer-links { gap: 14px; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <p className="footer-copy">
            © 2025 <span>Rishikesh Kumar</span> — All rights reserved
          </p>
          <div className="footer-links">
            {[
              { label: 'GitHub',   href: 'https://github.com/avasthirishi' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishikesh-awasthi-ba928b233' },
              { label: 'Email',    href: 'mailto:avasthirishi2@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="footer-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
import React, { useState, useEffect } from 'react';

const NAV = [
  { href: '#about',          label: 'About'      },
  { href: '#skills',         label: 'Skills'     },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects'   },
  { href: '#education',      label: 'Education'  },
  { href: '#certifications', label: 'Certs'      },
  { href: '#achievements',   label: 'Wins'       },
  { href: '#contact',        label: 'Contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`
        /* ── Navbar base ── */
        .navbar-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 64px;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        /* transparent — before scroll */
        .navbar-root.top {
          background: rgba(88, 111, 124, 0.7);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        /* solid — after scroll */
        .navbar-root.scrolled {
          background: rgba(88, 111, 124, 0.97);
          border-bottom: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 2px 24px rgba(0,0,0,0.14);
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .nav-logo-box {
          width: 38px; height: 38px; border-radius: 9px;
          background: #000000;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Roboto', sans-serif; font-weight: 900;
          font-size: 13px; color: #ffffff;
          letter-spacing: 0.5px;
        }
        .nav-logo-text {
          font-family: 'DM Mono', monospace;
          font-size: 13px; color: rgba(255,255,255,0.9); letter-spacing: 0.5px;
        }
        .nav-logo-text span { color: #ffffff; opacity: 0.6; }

        /* ── Desktop links ── */
        .nav-links {
          display: flex; align-items: center; gap: 2rem;
        }
        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px; color: rgba(255,255,255,0.65);
          text-decoration: none; letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #ffffff; }

        .nav-resume {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 8px 18px; background: #000000; color: #ffffff;
          border-radius: 7px; font-family: 'DM Mono', monospace;
          font-size: 11px; text-decoration: none;
          transition: all 0.2s; white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .nav-resume:hover {
          background: #1a1a1a;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }

        /* ── Hamburger ── */
        .nav-ham {
          display: none;
          background: none; border: none; cursor: pointer;
          color: #ffffff; font-size: 22px; padding: 4px; line-height: 1;
        }

        /* ── Mobile drawer ── */
        .nav-drawer {
          position: fixed;
          top: 64px; left: 0; right: 0;
          z-index: 999;
          background: rgba(60, 80, 90, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.15);
          display: flex; flex-direction: column; gap: 0;
          padding: 0.5rem 0;
        }
        .nav-drawer a {
          font-family: 'DM Mono', monospace;
          font-size: 13px; color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 0.85rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: background 0.15s, color 0.15s;
        }
        .nav-drawer a:hover { background: rgba(0,0,0,0.15); color: #ffffff; }
        .nav-drawer a:last-child { border-bottom: none; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-ham   { display: block; }
        }
        @media (max-width: 480px) {
          .navbar-root { padding: 0 1.2rem; }
        }
      `}</style>

      <nav className={`navbar-root ${scrolled ? 'scrolled' : 'top'}`}>

        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <div className="nav-logo-box">RA</div>
          <span className="nav-logo-text">
            rishikesh<span>.dev</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="nav-links">
          {NAV.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a
            href="https://drive.google.com/file/d/1nB2xsy6hKizy2izmwQyKt1oDMVnhlqKE/view"
            target="_blank" rel="noopener noreferrer"
            className="nav-resume"
          >
            Résumé ↗
          </a>
        </div>

        {/* Hamburger */}
        <button className="nav-ham" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          {NAV.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            href="https://drive.google.com/file/d/1nB2xsy6hKizy2izmwQyKt1oDMVnhlqKE/view"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé ↗
          </a>
        </div>
      )}
    </>
  );
}
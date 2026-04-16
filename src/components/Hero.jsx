import React, { useState, useEffect, useRef } from 'react';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/400-italic.css";

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Junior Dev @ NIELIT',
  'PHP & .NET Specialist',
];

function useTyping(strings, speed = 70, pause = 1800) {
  const [text, setText] = useState('');
  const [si, setSi]     = useState(0);
  const [ci, setCi]     = useState(0);
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const cur   = strings[si];
    let   delay = del ? speed / 2 : speed;
    if (!del && ci === cur.length) delay = pause;

    const t = setTimeout(() => {
      if (!del && ci < cur.length)        { setText(cur.slice(0, ci + 1)); setCi(c => c + 1); }
      else if (!del && ci === cur.length) { setDel(true); }
      else if (del && ci > 0)            { setText(cur.slice(0, ci - 1)); setCi(c => c - 1); }
      else                               { setDel(false); setSi(i => (i + 1) % strings.length); }
    }, delay);

    return () => clearTimeout(t);
  }, [ci, del, si]);

  return text;
}

const STATS = [
  { num: '1+',  label: 'YRS EXPERIENCE' },
  { num: '10+', label: 'PROJECTS BUILT'  },
  { num: '50+', label: 'CENTRES SERVED'  },
  { num: '8+',  label: 'CERTIFICATIONS'  },
];

const SOCIALS = [
  { label: 'GitHub',     href: 'https://github.com/avasthirishi' },
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/rishikesh-awasthi-ba928b233' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/avasthirishi2' },
  { label: 'LeetCode',   href: 'https://leetcode.com/u/avasthirishi/' },
  { label: 'Twitter',    href: 'https://x.com/rishi_avasthi' },
];

// const NAV_LINKS = [
//   { label: 'About',     href: '#about'    },
//   { label: 'Skills',    href: '#skills'   },
//   { label: 'Portfolio', href: '#projects' },
// ];

export default function Hero() {
  const typed     = useTyping(ROLES);
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');

    const resize = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const cols  = Math.floor(cv.width / 20);
    const drops = Array(cols).fill(1);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.font = '11px DM Mono,monospace';
      drops.forEach((y, i) => {
        const alpha = Math.random() > 0.5 ? 0.15 : 0.06;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 20, y * 20);
        if (y * 20 > cv.height && Math.random() > 0.977) drops[i] = 0;
        drops[i]++;
      });
    };

    const iv = setInterval(draw, 65);
    return () => { clearInterval(iv); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap');

        /* ── CSS variables ── */
        .h-wrap {
          --light:       #586F7C;
          --dark:        #000000;
          --dark-soft:   #0d0d0d;
          --dark-border: #1a1a1a;
          --off-white:   #eef1f3;
        }

        /* ── keyframes ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px) }
          to   { opacity:1; transform:translateY(0)    }
        }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatImg  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes diagSlide {
          from { clip-path:polygon(100% 0,100% 0,100% 100%,100% 100%); }
          to   { clip-path:polygon(12%  0,100% 0,100% 100%,0%   100%); }
        }
        @keyframes scrollPulse { 0%,100%{opacity:.35} 50%{opacity:.75} }
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-8px) }
          to   { opacity:1; transform:translateY(0)    }
        }

        /* ── reset ── */
        .h-wrap *, .h-wrap *::before, .h-wrap *::after {
          box-sizing:border-box; margin:0; padding:0;
        }

        /* ════════════════════════
           OUTER WRAPPER
        ════════════════════════ */
        .h-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--light);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* ════════════════════════
           NAVBAR
        ════════════════════════ */
        .h-nav {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.4rem 3rem;
        }

        .h-mark {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: var(--dark);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Roboto', sans-serif;
          font-weight: 900; font-size: 14px;
          color: var(--off-white);
          letter-spacing: .5px;
          flex-shrink: 0;
          text-decoration: none;
        }

        /* Desktop nav links */
        .h-nav-links {
          display: flex;
          align-items: center;
          gap: 2.4rem;
        }
        .h-nav-links a {
          font-family: 'DM Mono', monospace;
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,.72);
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: color .2s;
        }
        .h-nav-links a:hover { color: #fff; }

        // /* Contact pill */
        // .h-contact-pill {
        //   display: inline-flex; align-items: center;
        //   padding: 8px 20px;
        //   border-radius: 999px;
        //   border: 1px solid rgba(255,255,255,.35);
        //   font-family: 'DM Mono', monospace;
        //   font-size: 11px; color: #fff;
        //   text-decoration: none;
        //   letter-spacing: 1.5px; text-transform: uppercase;
        //   transition: all .2s;
        // }
        // .h-contact-pill:hover {
        //   background: #fff;
        //   color: var(--dark);
        //   border-color: #fff;
        // }

        /* Burger — hidden on desktop */
        .h-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none; border: none; cursor: pointer; padding: 6px;
        }
        .h-burger span {
          display: block; width: 24px; height: 2px;
          background: #fff; border-radius: 2px; transition: all .25s;
        }
        .h-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .h-burger.open span:nth-child(2) { opacity: 0; }
        .h-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile dropdown */
        .h-mobile-menu {
          display: none;
          position: absolute;
          top: 72px; left: 1rem; right: 1rem;
          background: var(--dark);
          border-radius: 12px;
          padding: 1.2rem 1.5rem;
          flex-direction: column;
          gap: 0;
          z-index: 200;
          animation: slideDown .22s ease forwards;
          border: 1px solid var(--dark-border);
        }
        .h-mobile-menu.open { display: flex; }
        .h-mobile-menu a {
          font-family: 'DM Mono', monospace;
          font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,.65);
          text-decoration: none;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 10px 0;
          border-bottom: 1px solid var(--dark-border);
          transition: color .2s;
        }
        .h-mobile-menu a:last-child { border-bottom: none; }
        .h-mobile-menu a:hover { color: #fff; }

        /* ════════════════════════
           SPLIT
        ════════════════════════ */
        .h-split {
          flex: 1;
          display: grid;
          grid-template-columns: 55% 45%;
          min-height: calc(100vh - 88px);
          position: relative;
        }

        /* ── LEFT ── */
        .h-left {
          background: var(--light);
          display: flex;
          flex-direction: column;
          padding: 0 3rem 2.5rem 3rem;
          position: relative;
          z-index: 2;
        }

        .h-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px;
        }

        .h-hi {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: rgba(255,255,255,.62);
          letter-spacing: 2px;
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 7px;
        }
        .h-hi::before { content: '>'; color: rgba(255,255,255,.38); }

        .h-name {
          font-family: 'Roboto', sans-serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 4.5vw, 4.8rem);
          line-height: 1.15;
          color: #000000;
          letter-spacing: -1.5px;
          white-space: nowrap;
          margin-bottom: 10px;
        }
         

        .h-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,.52);
          margin-bottom: 22px; letter-spacing: .2px;
        }

        .h-typed {
          font-family: 'DM Mono', monospace;
          font-size: 12px; color: rgba(255,255,255,.6);
          letter-spacing: 2px;
          display: flex; align-items: center; gap: 6px;
          min-height: 20px; margin-bottom: 18px;
        }
        .h-typed .p { color: rgba(255,255,255,.32); }
        .h-typed .t { color: rgba(255,255,255,.95); }

        .h-cursor {
          display: inline-block; width: 2px; height: 1em;
          background: #fff; margin-left: 1px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }

        .h-btns {
          display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px;
        }

        .h-btn-solid {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 11px 22px;
          background: var(--dark); color: var(--off-white);
          border: 1px solid rgba(0,0,0,.3);
          border-radius: 8px;
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500;
          text-decoration: none; transition: all .2s; letter-spacing: .4px;
        }
        .h-btn-solid:hover {
          background: #1a1a1a; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,.4);
        }

        .h-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 11px 22px; background: transparent;
          color: rgba(255,255,255,.85);
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 8px;
          font-family: 'DM Mono', monospace; font-size: 12px;
          text-decoration: none; transition: all .2s; letter-spacing: .4px;
        }
        .h-btn-ghost:hover {
          background: rgba(255,255,255,.12);
          border-color: rgba(255,255,255,.6);
          transform: translateY(-2px);
        }

        .h-links { display: flex; gap: 18px; flex-wrap: wrap; }
        .h-link {
          font-family: 'DM Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,.4);
          text-decoration: none; letter-spacing: 2px; text-transform: uppercase;
          transition: color .2s;
        }
        .h-link:hover { color: #fff; }

        /* ── RIGHT ── */
        .h-right {
          background: var(--dark);
          position: relative; overflow: hidden;
          clip-path: polygon(12% 0,100% 0,100% 100%,0% 100%);
          animation: diagSlide .9s cubic-bezier(.22,1,.36,1) .05s both;
        }

        .h-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size: 64px 64px;
        }

        /* ── PHOTO (desktop) ── */
        .h-photo {
          position: absolute;
          top: 70px; bottom: 0;
          left: 30%; transform: translateX(-40%);
          width: 62%; max-width: 400px;
          display: flex; align-items: flex-end; justify-content: center;
          z-index: 5;
          animation: floatImg 5s ease-in-out infinite;
        }
        .h-photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block;
          filter: drop-shadow(0 -16px 56px rgba(88,111,124,.45));
        }

        .h-deco {
          position: absolute; bottom: 1.5rem; right: 1.8rem; z-index: 6;
          font-family: 'DM Mono', monospace; font-size: 9px;
          color: rgba(255,255,255,.18); letter-spacing: 2px;
          text-align: right; line-height: 1.7;
        }

        /* scroll hint */
        .h-scroll {
          position: absolute; bottom: 96px; left: 2.6rem;
          display: flex; flex-direction: column; align-items: center; gap: 5px;
          z-index: 10;
          animation: scrollPulse 2.5s ease-in-out infinite;
        }
        .h-scroll span {
          font-family: 'DM Mono', monospace; font-size: 8px;
          color: rgba(255,255,255,.32); letter-spacing: 3px;
          writing-mode: vertical-rl; text-transform: uppercase;
        }
        .h-scroll-line {
          width: 1px; height: 34px;
          background: linear-gradient(to bottom, rgba(255,255,255,.28), transparent);
        }

        /* ════════════════════════
           STATS STRIP
        ════════════════════════ */
        .h-stats {
          background: var(--dark);
          border-top: 1px solid var(--dark-border);
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        .h-stat {
          text-align: center; padding: 1.5rem 1rem;
          border-right: 1px solid var(--dark-border);
          transition: background .2s; cursor: default;
        }
        .h-stat:last-child { border-right: none; }
        .h-stat:hover { background: #0d0d0d; }
        .h-stat-n {
          display: block;
          font-family: 'Syne', sans-serif; font-weight: 900;
          font-size: clamp(1.6rem,3vw,2.4rem);
          color: var(--light);
          line-height: 1; margin-bottom: 4px;
        }
        .h-stat-l {
          font-family: 'DM Mono', monospace; font-size: 9px;
          color: rgba(255,255,255,.28); letter-spacing: 3px; text-transform: uppercase;
        }

        /* fade-up utility */
        .fu  { opacity:0; animation:fadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }
        .fu1 { animation-delay:.10s; }
        .fu2 { animation-delay:.24s; }
        .fu3 { animation-delay:.40s; }
        .fu4 { animation-delay:.56s; }
        .fu5 { animation-delay:.72s; }

        /* ════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════ */

        @media (max-width:1100px) {
          .h-name  { font-size: clamp(2.2rem,3.8vw,4rem); }
          .h-left  { padding: 0 2rem 2rem 2rem; }
          .h-photo { width: 68%; }
          .h-nav   { padding: 1.4rem 2rem; }
        }

        /* ── Tablet / stacked ── */
        @media (max-width:900px) {
          /* show burger, hide desktop nav */
          .h-nav-links    { display: none; }
          .h-contact-pill { display: none; }
          .h-burger       { display: flex; }

          .h-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          /* dark image panel on top */
          .h-right {
            order: 1;
            height: 56vw;
            min-height: 260px;
            max-height: 440px;
            clip-path: none;
            animation: none;
          }

          /* IMAGE: fill panel height, centre horizontally */
          .h-photo {
            top: 0; bottom: 0;
            left: 50%; transform: translateX(-50%);
            width: auto; max-width: none;
            height: 100%;
            animation: none;
          }
          .h-photo img {
            width: auto; height: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: bottom center;
          }

          .h-deco  { display: none; }
          .h-left  { order: 2; padding: 2.5rem 2rem; }
          .h-text  { padding-top: 0; }
          .h-name  { font-size: clamp(2.4rem,8vw,4rem); white-space: normal; }
          .h-scroll { display: none; }

          .h-stats { grid-template-columns: repeat(2,1fr); }
          .h-stat:nth-child(2) { border-right: none; }
          .h-stat:nth-child(3) { border-top: 1px solid var(--dark-border); }
        }

        /* ── Phone ── */
        @media (max-width:560px) {
          .h-nav { padding: 1.1rem 1.2rem; }

          .h-right {
            height: 74vw;
            min-height: 240px;
            max-height: 370px;
          }
          .h-photo {
            top: 0; bottom: 0;
            left: 50%; transform: translateX(-50%);
            width: auto; height: 100%;
          }
          .h-photo img {
            height: 100%; width: auto;
            object-fit: contain;
            object-position: bottom center;
          }

          .h-left { padding: 2rem 1.4rem 2.5rem; }
          .h-name { font-size: clamp(2rem,10vw,3.2rem); letter-spacing:-1px; white-space:normal; }
          .h-btns { flex-direction: column; }
          .h-btn-solid, .h-btn-ghost { text-align:center; justify-content:center; }
          .h-links { gap: 12px; }
          .h-link  { font-size: 9px; }
          .h-stats { grid-template-columns: repeat(2,1fr); }
        }

        /* ── Extra-small ── */
        @media (max-width:380px) {
          .h-right { height: 80vw; min-height: 220px; }
          .h-name  { font-size: 1.9rem; }
          .h-stat  { padding: 1.1rem 0.5rem; }
          .h-stat-l { font-size: 8px; letter-spacing: 1.5px; }
        }
      `}</style>

      <div className="h-wrap" id="hero">

        {/* ════ NAVBAR ════ */}
         <nav className="h-nav fu">
          {/* <a href="#hero" className="h-mark">RA</a>  */}

          {/* <div className="h-nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div> */}
{/* 
          <a href="#contact" className="h-contact-pill">Contact me</a> */}

          <button
            className={`h-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile menu */}
        {/* <div className={`h-mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div> */}

        {/* ════ SPLIT ════ */}
        <div className="h-split">

          {/* LEFT */}
          <div className="h-left">
            <div className="h-text">

              <div className="fu fu1">
                <div className="h-hi">Hi, I am</div>
                <h1 className="h-name">Rishikesh <span className='span' >Awasthi</span></h1>
                <p className="h-role">Front-end Developer / Full Stack Engineer</p>
              </div>

              <div className="fu fu2">
                <div className="h-typed">
                  <span className="p">&gt;</span>
                  <span className="t">{typed}</span>
                  <span className="h-cursor" />
                </div>

                <div className="h-btns">
                  <a href="#projects" className="h-btn-solid">View Work →</a>
                  <a href="#contact"  className="h-btn-ghost">Get In Touch</a>
                  <a
                    href="https://drive.google.com/file/d/132_iTPyYBG7doyAxQLayc66-WEZAUJ1V/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-btn-ghost"
                  >↓ Resume</a>
                </div>
              </div>

              <div className="h-links fu fu3">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-link"
                  >{s.label}</a>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="h-right">
            <canvas
              ref={canvasRef}
              style={{
                position:'absolute', inset:0,
                width:'100%', height:'100%',
                opacity:.18, pointerEvents:'none',
              }}
            />
            <div className="h-grid-bg" />

            <div className="h-photo fu fu2">
              <img src="/rishikesh_image.png" alt="Rishikesh Awasthi" />
            </div>

            <div className="h-deco">
              JUNIOR DEVELOPER<br />@ NIELIT HQ · DELHI
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="h-scroll">
          <span>Scroll</span>
          <div className="h-scroll-line" />
        </div>

        {/* ════ STATS ════ */}
        <div className="h-stats">
          {STATS.map(s => (
            <div key={s.label} className="h-stat">
              <span className="h-stat-n">{s.num}</span>
              <span className="h-stat-l">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
import React, { useState } from 'react';
import { SiInfosys, SiHackerrank, SiUnstop } from 'react-icons/si';
import { FaAws, FaBuilding, FaPython } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

const CERTS = [
  {
    name: 'Web Development Internship',
    org: 'NIELIT Ropar',
    icon: '/nielit.png',
    iconColor: '#4dd0e1',
  },
  {
    name: 'Frontend Developer (React)',
    org: 'HackerRank',
    icon: <SiHackerrank />,
    iconColor: '#00ea64',
  },
  {
    name: 'Problem Solving (Basic)',
    org: 'HackerRank',
    icon: <SiHackerrank />,
    iconColor: '#00ea64',
  },
  {
    name: 'Python Training Certificate',
    org: 'Excellence Technology',
    icon: <FaPython />,
    iconColor: '#ffe082',
  },
  {
    name: 'Python Foundation Certification',
    org: 'Infosys',
    icon: <SiInfosys />,
    iconColor: '#007cc3',
  },
  {
    name: 'Programming Fundamentals Python (Part 1 & 2)',
    org: 'Infosys',
    icon: <SiInfosys />,
    iconColor: '#007cc3',
  },
  {
    name: 'AWS Cloud Computing',
    org: 'Infosys',
    icon: <FaAws />,
    iconColor: '#ff9900',
  },
  {
    name: 'Angular Framework',
    org: 'Infosys',
    icon: <SiInfosys />,
    iconColor: '#007cc3',
  },
  {
    name: 'Advanced Data Science',
    org: 'Unstop',
    icon: <SiUnstop />,
    iconColor: '#7c3aed',
  },
];

export default function Certifications() {
  const [hov, setHov] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        .cert-section {
          padding: 7rem 0;
          background: #000000;
        }
        .cert-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .cert-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          color: #586F7C;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .cert-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.35);
        }
        .cert-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 3rem 0;
        }
        .cert-title em {
          font-style: normal;
          font-weight: 600;
          color: #586F7C;
        }

        /* Single column list */
        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 2.5rem;
        }

        /* Each row — full width, single cert */
        .cert-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: all 0.25s;
          cursor: default;
          position: relative;
        }
        .cert-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.22);
          transform: translateX(4px);
        }

        /* Index number */
        .cert-index {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 1px;
          width: 22px;
          flex-shrink: 0;
          text-align: right;
        }

        /* Company logo icon box */
        .cert-logo-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          transition: all 0.25s;
        }

        /* Text block */
        .cert-text { flex: 1; min-width: 0; }

        .cert-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.4;
          margin: 0 0 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-org-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cert-org-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          flex-shrink: 0;
        }
        .cert-org {
          font-family: 'DM Mono', monospace;
          font-size: 10.5px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.5px;
        }

        /* Verified badge */
        .cert-verified {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 4px 10px;
          border-radius: 5px;
          background: rgba(111,207,151,0.08);
          color: #6fcf97;
          border: 1px solid rgba(111,207,151,0.20);
          white-space: nowrap;
          letter-spacing: 1px;
          flex-shrink: 0;
          transition: opacity 0.25s;
        }

        /* Arrow hint */
        .cert-arrow {
          font-size: 13px;
          color: rgba(255,255,255,0.18);
          flex-shrink: 0;
          transition: all 0.25s;
          font-family: 'DM Mono', monospace;
        }
        .cert-card:hover .cert-arrow {
          color: rgba(255,255,255,0.5);
          transform: translateX(2px);
        }

        .cert-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.4px;
          transition: all 0.2s;
        }
        .cert-cta:hover {
          background: rgba(88,111,124,0.15);
          border-color: #586F7C;
          color: #8fa8b5;
          transform: translateY(-2px);
        }

        @media (max-width: 560px) {
          .cert-inner    { padding: 0 1.2rem; }
          .cert-section  { padding: 5rem 0; }
          .cert-name     { font-size: 12.5px; white-space: normal; }
          .cert-index    { display: none; }
        }
      `}</style>

      <section id="certifications" className="cert-section">
        <div className="cert-inner">

          <p className="cert-eyebrow">Certifications</p>

          <h2 className="cert-title">
            What I've <em>Earned</em>
          </h2>

          <div className="cert-list">
            {CERTS.map((c, i) => (
              <div
                key={i}
                className="cert-card"
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                {/* Index */}
                <span className="cert-index">0{i + 1}</span>

                {/* Company logo */}
                <div
                  className="cert-logo-box"
                  style={{
                    color: c.iconColor,
                    borderColor: hov === i ? `${c.iconColor}44` : 'rgba(255,255,255,0.10)',
                    background: hov === i ? `${c.iconColor}12` : 'rgba(0,0,0,0.4)',
                    filter: hov === i ? `drop-shadow(0 0 6px ${c.iconColor}55)` : 'none',
                  }}
                >
                  {typeof c.icon === 'string' ? (
                    <img src={c.icon} alt={c.org} style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                  ) : (
                    c.icon
                  )}
                </div>

                {/* Text */}
                <div className="cert-text">
                  <p className="cert-name">{c.name}</p>
                  <div className="cert-org-row">
                    <span className="cert-org-dot" />
                    <span className="cert-org">{c.org}</span>
                  </div>
                </div>

                {/* Verified badge */}
                <span
                  className="cert-verified"
                  style={{ opacity: hov === i ? 1 : 0 }}
                >
                  ✓ Verified
                </span>

                {/* Arrow */}
                <span className="cert-arrow">→</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://drive.google.com/drive/folders/1TMsQwqdZruEMq2D4TAucOMyRgAHxtV_w"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-cta"
            >
              View All Certificates ↗
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
import React, { useEffect, useRef, useState } from 'react';

import {
  SiJavascript, SiPhp, SiCplusplus, SiMysql, SiDotnet,
  SiHtml5, SiReact, SiTailwindcss, SiBootstrap, SiReactrouter,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiPostman, SiWireshark, SiKalilinux,
} from 'react-icons/si';

import {
  FaNetworkWired, FaShieldAlt, FaSearch, FaDatabase, FaCss3Alt,
} from 'react-icons/fa';

import { MdSecurity } from 'react-icons/md';
import { VscJson }    from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';

const groups = [
  {
    title: 'Languages',
    items: [
      { n: 'JavaScript', icon: <SiJavascript />,  color: '#F7DF1E' },
      { n: 'PHP',        icon: <SiPhp />,          color: '#aaa8ff' },
      { n: 'C++',        icon: <SiCplusplus />,    color: '#7eb8f7' },
      { n: 'SQL',        icon: <SiMysql />,        color: '#6fb3d2' },
      { n: 'C# (.NET)',  icon: <SiDotnet />,       color: '#b39ddb' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { n: 'HTML5',        icon: <SiHtml5 />,        color: '#ff8a65' },
      { n: 'CSS3',         icon: <FaCss3Alt />,      color: '#64b5f6' },
      { n: 'React.js',    icon: <SiReact />,         color: '#80deea' },
      { n: 'Tailwind',    icon: <SiTailwindcss />,   color: '#4dd0e1' },
      { n: 'Bootstrap',   icon: <SiBootstrap />,     color: '#ce93d8' },
      { n: 'React Router',icon: <SiReactrouter />,  color: '#ef9a9a' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { n: 'Node.js',    icon: <SiNodedotjs />,    color: '#a5d6a7' },
      { n: 'Express.js', icon: <SiExpress />,      color: '#eeeeee' },
      { n: 'PHP',        icon: <SiPhp />,          color: '#aaa8ff' },
      { n: 'MySQL',      icon: <SiMysql />,        color: '#6fb3d2' },
      { n: 'MongoDB',    icon: <SiMongodb />,      color: '#a5d6a7' },
    ],
  },
  {
    title: 'Tools & Concepts',
    items: [
      { n: 'Git',        icon: <SiGit />,          color: '#ff8a65' },
      { n: 'REST / JWT', icon: <VscJson />,        color: '#ffe082' },
      { n: 'Postman',    icon: <SiPostman />,      color: '#ffb74d' },
      { n: 'OOP / MVC',  icon: <BiCodeCurly />,   color: '#ffffff' },
    ],
  },
  {
    title: 'Cybersecurity',
    items: [
      { n: 'OWASP ZAP', icon: <FaShieldAlt />, color: '#f48024' },
      { n: 'Wireshark',  icon: <SiWireshark />,    color: '#80deea' },
      { n: 'Nmap',       icon: <FaNetworkWired />, color: '#a5d6a7' },
      { n: 'Kali Linux', icon: <SiKalilinux />,    color: '#b0bec5' },
      { n: 'Metasploit', icon: <MdSecurity />,     color: '#ef9a9a' },
    ],
  },
  {
    title: 'Cyber Forensics',
    items: [
      { n: 'Autopsy',     icon: <FaSearch />,       color: '#ce93d8' },
      { n: 'FTK Imager',  icon: <FaDatabase />,     color: '#ffb74d' },
      { n: 'Griffeye',    icon: <FaShieldAlt />,    color: '#ef9a9a' },
      { n: 'Magnet AXIOM',icon: <FaShieldAlt />,    color: '#80deea' },
    ],
  },
];

function IconTile({ n, icon, color }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="skill-tile"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'rgba(0,0,0,0.32)' : 'rgba(0,0,0,0.18)',
        borderColor: hov ? `${color}55` : 'rgba(255,255,255,0.10)',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 8px 28px ${color}22` : 'none',
      }}
    >
      <div
        className="skill-tile-icon"
        style={{
          color,
          filter: hov ? `drop-shadow(0 0 8px ${color}88)` : 'none',
          transition: 'filter 0.25s',
        }}
      >
        {icon}
      </div>
      <span
        className="skill-tile-label"
        style={{ color: hov ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)' }}
      >
        {n}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .skills-section {
          padding: 7rem 0;
          background: #000000;
        }
        .skills-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .skills-eyebrow {
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
        .skills-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.2);
        }

        .skills-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #eef1f3;
          margin: 0 0 4rem 0;
        }
        .skills-title em {
          font-style: normal;
          font-weight: 600;
          color: #586F7C;
        }

        .skills-group {
          margin-bottom: 3rem;
          opacity: 0;
        }
        .skills-group.visible {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) forwards;
        }

        .skills-group-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skills-group-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .skills-icon-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 96px;
          height: 96px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          cursor: default;
          transition: all 0.25s;
          flex-shrink: 0;
        }

        .skill-tile-icon {
          font-size: 32px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-tile-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-align: center;
          line-height: 1.3;
          transition: color 0.25s;
          padding: 0 6px;
        }

        @media (max-width: 600px) {
          .skills-inner    { padding: 0 1.4rem; }
          .skills-section  { padding: 5rem 0; }
          .skill-tile      { width: 82px; height: 82px; }
          .skill-tile-icon { font-size: 26px; }
        }
      `}</style>

      <section id="skills" className="skills-section" ref={ref}>
        <div className="skills-inner">

          <p className="skills-eyebrow">Technical Skills</p>
          <h2 className="skills-title">
            What I <em>Work With</em>
          </h2>

          {groups.map((g, gi) => (
            <div
              key={g.title}
              className={`skills-group${visible ? ' visible' : ''}`}
              style={{ animationDelay: `${gi * 0.08}s` }}
            >
              <p className="skills-group-label">{g.title}</p>
              <div className="skills-icon-grid">
                {g.items.map(s => (
                  <IconTile key={s.n + gi} n={s.n} icon={s.icon} color={s.color} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
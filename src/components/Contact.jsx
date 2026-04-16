import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const SOCIALS = [
  { label: 'LinkedIn',   icon: <FaLinkedin />,  href: 'https://www.linkedin.com/in/rishikesh-awasthi-ba928b233' },
  { label: 'GitHub',     icon: <FaGithub />,    href: 'https://github.com/avasthirishi' },
  { label: 'HackerRank', icon: <FaHackerrank />,href: 'https://www.hackerrank.com/profile/avasthirishi2' },
  { label: 'LeetCode',   icon: <SiLeetcode />,  href: 'https://leetcode.com/u/avasthirishi/' },
  { label: 'Twitter',    icon: <FaXTwitter />,  href: 'https://x.com/rishi_avasthi' },
  { label: 'WhatsApp',   icon: <FaWhatsapp />,  href: 'https://wa.me/916209291653?text=Hi%20Rishikesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!' },
];

export default function Contact() {
  const formRef = useRef();
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [form, setForm]   = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('avasthirishi2@gmail.com');
    setEmailCopied(true); setTimeout(() => setEmailCopied(false), 2000);
  };
  const copyPhone = () => {
    navigator.clipboard.writeText('+916209291653');
    setPhoneCopied(true); setTimeout(() => setPhoneCopied(false), 2000);
  };
  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success'); setForm({ from_name: '', from_email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error'); setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <style>{`
        .contact-section {
          padding: 7rem 0;
          background: #000000;
        }
        .contact-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .contact-eyebrow {
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
        .contact-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.35);
        }
        .contact-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 4rem 0;
        }
        .contact-title em {
          font-style: normal;
          font-weight: 600;
          color: #586F7C;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #F4F4F9;
          line-height: 1.85;
          margin-bottom: 1.75rem;
        }

        /* info rows */
        .contact-info-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 1.75rem; }
        .contact-info-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0,0,0,2.5);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          transition: all 0.2s;
          text-decoration: none;
        }
        .contact-info-row:hover {
          background: rgba(0,0,0,0.28);
          border-color: rgba(255,255,255,0.28);
          transform: translateX(3px);
        }
        .contact-info-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: rgba(255,255,255,0.8);
          flex-shrink: 0;
        }
        .contact-info-val {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          flex: 1;
        }
        .contact-info-val.muted { color: rgba(255,255,255,0.45); }
        .copy-btn {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 4px 10px;
          border-radius: 5px;
          background: rgba(0,0,0,0.3);
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .copy-btn:hover {
          background: #000000;
          color: #ffffff;
          border-color: rgba(255,255,255,0.3);
        }
        .wa-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 4px 10px;
          border-radius: 5px;
          background: rgba(37,211,102,0.12);
          color: #6fcf97;
          border: 1px solid rgba(37,211,102,0.25);
          white-space: nowrap;
        }

        /* Form */
        .contact-sublabel {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.38);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .contact-form { display: flex; flex-direction: column; gap: 14px; }
        .contact-form label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .contact-input {
          width: 100%;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          padding: 11px 14px;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.28); }
        .contact-input:focus {
          border-color: rgba(255,255,255,0.45);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.06);
        }
        .contact-submit {
          align-self: flex-start;
          padding: 12px 26px;
          background: #000000;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.4px;
        }
        .contact-submit:hover:not(:disabled) {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .contact-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .feedback-success {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #6fcf97;
          background: rgba(111,207,151,0.08);
          border: 1px solid rgba(111,207,151,0.25);
          padding: 11px 16px; border-radius: 8px; line-height: 1.7;
        }
        .feedback-error {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #f7a8b0;
          background: rgba(247,168,176,0.08);
          border: 1px solid rgba(247,168,176,0.25);
          padding: 11px 16px; border-radius: 8px; line-height: 1.7;
        }

        /* Right: socials */
        .contact-find-label {
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          color: #ffffff;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1rem;
          margin-top: 6rem;
        }
        .social-list { display: flex; flex-direction: column; gap: 10px; }
        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s;
        }
        .social-link:hover {
          background: rgba(0,0,0,0.28);
          border-color: rgba(255,255,255,0.3);
          transform: translateX(4px);
        }
        .social-icon-box {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; color: rgba(255,255,255,0.85);
          flex-shrink: 0;
        }
        .social-label {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.75);
          flex: 1;
        }
        .social-arrow { color: rgba(255,255,255,0.3); font-size: 14px; }
        .contact-avail {
          margin-top: 1.25rem;
          padding: 1rem 1.4rem;
          background: #000000;
          border-radius: 12px;
          border-left: 2px solid rgba(88,111,124,0.6);
        }
        .contact-avail p {
          margin: 0;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          line-height: 1.9;
        }
        .contact-avail .prompt { color: #8fa8b5; }
        .contact-avail .val    { color: rgba(255,255,255,0.7); }
        .contact-avail .ok     { color: #6fcf97; }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 560px) {
          .contact-inner   { padding: 0 1.4rem; }
          .contact-section { padding: 5rem 0; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">

          <p className="contact-eyebrow">Contact</p>
          <h2 className="contact-title">
            Get In <em>Touch</em>
          </h2>

          <div className="contact-grid">

            {/* LEFT */}
            <div>
              <p className="contact-desc">
                I'm currently open to new opportunities — full-time roles, freelance projects,
                or even just a conversation about tech. Feel free to reach out via email, phone,
                or WhatsApp. My inbox is always open.
              </p>

              <div className="contact-info-list">
                {/* Email */}
                <div className="contact-info-row">
                  <div className="contact-info-icon"><FaEnvelope /></div>
                  <span className="contact-info-val">avasthirishi2@gmail.com</span>
                  <button className="copy-btn" onClick={copyEmail}>
                    {emailCopied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                {/* Phone */}
                <div className="contact-info-row">
                  <div className="contact-info-icon"><MdCall /></div>
                  <span className="contact-info-val">+91 6209291653</span>
                  <button className="copy-btn" onClick={copyPhone}>
                    {phoneCopied ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/916209291653?text=Hi%20Rishikesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank" rel="noopener noreferrer"
                  className="contact-info-row"
                  style={{ color: 'inherit' }}
                >
                  <div className="contact-info-icon" style={{ color: '#6fcf97' }}><FaWhatsapp /></div>
                  <span className="contact-info-val">WhatsApp — +91 6209291653</span>
                  <span className="wa-badge">Chat ↗</span>
                </a>
                {/* Location */}
                <div className="contact-info-row">
                  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                  <span className="contact-info-val muted">Dwarka, New Delhi, India</span>
                </div>
              </div>

              <p className="contact-sublabel">Or send a message directly</p>
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="time"
                  value={new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} readOnly />

                <div>
                  <label>Your Name</label>
                  <input className="contact-input" name="from_name" value={form.from_name}
                    onChange={handleChange} required placeholder="Your Name" />
                </div>
                <div>
                  <label>Your Email</label>
                  <input className="contact-input" name="from_email" type="email"
                    value={form.from_email} onChange={handleChange} required
                    placeholder="your.email@example.com" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea className="contact-input" name="message" value={form.message}
                    onChange={handleChange} required rows={4}
                    style={{ resize: 'vertical', minHeight: '110px' }}
                    placeholder="Hi Rishikesh, I'd like to discuss..." />
                </div>

                <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>

                {status === 'success' && (
                  <div className="feedback-success">
                    ✓ Message sent successfully!<br />I'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="feedback-error">
                    ✗ Something went wrong. Please email me directly at avasthirishi2@gmail.com
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT */}
            <div>
              <p className="contact-find-label">Find me on:</p>
              <div className="social-list">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="social-link">
                    <div className="social-icon-box">{s.icon}</div>
                    <span className="social-label">{s.label}</span>
                    <span className="social-arrow">↗</span>
                  </a>
                ))}
              </div>

              <div className="contact-avail">
                <p>
                  <span className="prompt">&gt;</span>{' '}
                  Response time: <span className="val">Within 24 hours</span><br />
                  <span className="prompt">&gt;</span>{' '}
                  Availability: <span className="ok">✦ Open to opportunities</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
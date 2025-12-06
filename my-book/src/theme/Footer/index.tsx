import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterCopyright from '@theme/Footer/Copyright';
import './customFooter.css';

export default function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) return null;
  const { copyright, style } = footer;

  return (
    <footer className={`custom-footer ${style}`}>
      <div className="footer-container">
        {/* Column 1: Book description */}
        <div className="footer-column">
          <h3>Book</h3>
          <p className="footer-paragraph">
            "Physical AI & Humanoid Robotics" explores robotics and AI, making learning engaging, practical, and accessible for everyone.
          </p>
        </div>

        {/* Column 2: Connect with me */}
        <div className="footer-column">
          <h3>Connect with Me</h3>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/samrashafiq16/" target="_blank" className="social-icon">
            
              <div className='foot-icon'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 5 3.9 6.1 2.4 6.1C1 6.1 0 5 0 3.5C0 2.1 1 1 2.4 1C3.9 1 4.98 2.1 4.98 3.5ZM.2 8.1H4.7V24H.2V8.1ZM8.6 8.1H13V10.2H13.1C13.8 9 15.4 7.7 18 7.7C23 7.7 24 11 24 15.8V24H19.5V16.8C19.5 14.4 19.5 11.3 16.3 11.3C13 11.3 12.6 14 12.6 16.6V24H8.1V8.1H8.6Z"/>
              </svg>
              </div>
              <div className="foot-icon-name">
              <div>LinkedIn</div>
              </div>
            </a>

            <a href="https://github.com/samra82" target="_blank" className="social-icon">
              <div className='foot-icon'>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.08 3.34 12.61C3.25 12.37 2.84 11.68 2.5 11.49C2.22 11.34 1.82 10.93 2.49 10.92C3.12 10.91 3.57 11.49 3.72 11.74C4.51 13.07 5.78 12.69 6.27 12.48C6.34 11.96 6.55 11.61 6.78 11.41C4.95 11.21 3.04 10.52 3.04 7.52C3.04 6.66 3.36 5.96 3.89 5.42C3.81 5.22 3.52 4.41 3.97 3.31C3.97 3.31 4.63 3.1 6.02 4.13C6.65 3.95 7.34 3.86 8.03 3.86C8.72 3.86 9.41 3.95 10.04 4.13C11.43 3.09 12.09 3.31 12.09 3.31C12.54 4.41 12.25 5.22 12.17 5.42C12.7 5.96 13.02 6.66 13.02 7.52C13.02 10.53 11.11 11.2 9.28 11.4C9.56 11.64 9.8 12.1 9.8 12.82C9.8 13.86 9.79 14.95 9.79 15.21C9.79 15.42 9.94 15.67 10.34 15.59C13.51 14.53 15.8 11.54 15.8 8C15.8 3.58 12.42 0 8 0Z"/>
              </svg>
              </div>
              <div className="foot-icon-name">
              <div>GitHub</div>
              </div>
            </a>

            <a href="mailto:samrashafiq82@gmail.com" className="social-icon">
              <div className='foot-icon'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
              </div>
              <div className="foot-icon-name">
              <div>Email</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        {copyright && <FooterCopyright copyright={copyright} />}
      </div>
    </footer>
  );
}

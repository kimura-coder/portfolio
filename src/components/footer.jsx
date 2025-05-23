import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       <div className="contact-info">
        <p>📞 +254 746 520 817</p>
          <p>📍 Mombasa, Kenya</p>
          </div> 
        <div className="social-links">
          <a href="https://github.com/kimura-coder" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/alfred-kimura-2a20b6230/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         <a href="https://x.com/MwangiKimura" target="_blank" rel="noopener noreferrer">Twitter</a>
          
          
          <a href="mailto:kimuraalfred@gmail.com">Email</a>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Alfred Mwangi Kimura. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

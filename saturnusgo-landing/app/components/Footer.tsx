'use client';

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">SaturnusGo</div>
        <SocialLinks size="sm" />
        <div className="footer__legal">© {new Date().getFullYear()} SaturnusGo. All rights reserved.</div>
      </div>
    </footer>
  );
}
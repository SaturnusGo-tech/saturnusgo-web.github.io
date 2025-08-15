'use client';

type Size = 'sm' | 'lg';

export default function SocialLinks({ size = 'sm' }: { size?: Size }) {
  return (
    <nav className={`social social--${size}`}>
      {/* TODO: вставь свои ссылки */}
      <a href="https://x.com/saturnusgo?s=21" target="_blank" rel="noreferrer" aria-label="Twitter">X</a>
      <a href="https://www.instagram.com/saturnusgo?igsh=MTA4OXNuYTF5bGZmNw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
      <a href="https://www.linkedin.com/in/mercury-rucks-1b1a11376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
    </nav>
  );
}

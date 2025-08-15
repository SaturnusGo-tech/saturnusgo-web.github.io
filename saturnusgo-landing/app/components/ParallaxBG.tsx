'use client';
import { useEffect } from 'react';

export default function ParallaxBG(){
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      document.documentElement.style.setProperty('--par-y1', `${y * -0.05}px`);
      document.documentElement.style.setProperty('--par-y2', `${y * -0.12}px`);
    };
    const onMouse = (e: MouseEvent) => {
      const cx = window.innerWidth/2, cy = window.innerHeight/2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      document.documentElement.style.setProperty('--tilt-x', `${dy * 4}deg`);
      document.documentElement.style.setProperty('--tilt-y', `${dx * -4}deg`);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('mousemove', onMouse);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMouse); };
  }, []);
  return (
    <>
      <div className="bg-par bg-par--far" aria-hidden />
      <div className="bg-par bg-par--near" aria-hidden />
    </>
  );
}
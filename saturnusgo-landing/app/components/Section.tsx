import { PropsWithChildren } from 'react';

export default function Section({
  id, kicker, title, subtitle, children
}: PropsWithChildren<{ id?: string; kicker?: string; title: string; subtitle?: string; }>) {
  return (
    <section id={id} className="section reveal">
      <div className="section__head">
        {kicker && <div className="kicker">{kicker}</div>}
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
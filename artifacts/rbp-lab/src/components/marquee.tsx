import { type CSSProperties, type ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  ariaLabel?: string;
};

export function Marquee({ children, speed = 28, ariaLabel }: MarqueeProps) {
  const items = Array.isArray(children) ? children : [children];
  const style = { '--duration': `${speed}s` } as CSSProperties & { '--duration': string };

  return (
    <div className="marquee" aria-label={ariaLabel}>
      <div className="marquee-track" style={style}>
        <div className="marquee-group">{items}</div>
        <div className="marquee-group" aria-hidden="true">{items}</div>
      </div>
    </div>
  );
}
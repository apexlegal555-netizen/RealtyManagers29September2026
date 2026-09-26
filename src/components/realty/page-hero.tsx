import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string; children?: ReactNode }) {
  return <section className="page-hero"><img src={image} alt={imageAlt} className="page-hero-image" width={1408} height={1008} /><div className="page-hero-shade" /><div className="page-hero-inner"><Reveal><span className="eyebrow light-eyebrow"><span className="eyebrow-line" />{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</Reveal></div><span className="hero-side-label">REALTY MANAGERS / PERSPECTIVES</span></section>;
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function CtaBand({ title = "Let’s make the next move count.", description = "A more considered approach to real estate starts with a conversation." }: { title?: string; description?: string }) {
  return <section className="cta-band"><div className="content-width cta-band-inner"><Reveal><span className="eyebrow light-eyebrow"><span className="eyebrow-line" />LET’S CONNECT</span><h2>{title}</h2><p>{description}</p></Reveal><Button variant="orange" size="large" asChild><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button></div></section>;
}

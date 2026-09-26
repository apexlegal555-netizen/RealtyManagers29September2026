import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/realty/reveal";
import { PageHero } from "@/components/realty/page-hero";
import { submitInquiry } from "@/lib/inquiries.functions";
import city from "@/assets/realty-city.jpg";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact Realty Managers | Start a Conversation" }, { name: "description", content: "Contact Realty Managers about RERA verification, district franchise opportunities, or bank-backed escrow guidance." },
  { property: "og:title", content: "Contact Realty Managers | Start a Conversation" }, { property: "og:description", content: "Share your property, partnership, or transaction enquiry with Realty Managers." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });
function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");
    try {
      await submitInquiry({ data: { full_name: String(values.get("full_name") ?? ""), email: String(values.get("email") ?? ""), phone: String(values.get("phone") ?? ""), interest: String(values.get("interest") ?? "General enquiry") as "General enquiry" | "RERA verification" | "District franchise" | "Escrow guidance", message: String(values.get("message") ?? ""), website: String(values.get("website") ?? "") } });
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }
  return <main><PageHero eyebrow="START A CONVERSATION" title="Let’s move forward, together." description="A question, an opportunity, or a new perspective—we’d be glad to hear from you." image={city} imageAlt="Contemporary residential district illuminated at dusk" /><section className="content-width contact-layout"><Reveal><span className="eyebrow"><span className="eyebrow-line" />GET IN TOUCH</span><h2>What can we help you explore?</h2><p>Share a little about what you have in mind. Whether you’re looking into a project, a partnership, or a transaction, we’ll direct your enquiry to the right conversation.</p></Reveal><Reveal delay={0.1}><form className="contact-form" onSubmit={handleSubmit}><div className="field"><label htmlFor="full_name">Full name *</label><input id="full_name" name="full_name" required minLength={2} maxLength={120} placeholder="Your name" /></div><div className="field"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" required maxLength={254} placeholder="you@example.com" /></div><div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" maxLength={30} placeholder="Optional" /></div><div className="field"><label htmlFor="interest">I'm interested in *</label><select id="interest" name="interest" required defaultValue="General enquiry"><option>General enquiry</option><option>RERA verification</option><option>District franchise</option><option>Escrow guidance</option></select></div><div className="field field-full"><label htmlFor="message">Your message *</label><textarea id="message" name="message" required minLength={10} maxLength={2000} placeholder="Tell us a little about your enquiry..." /></div><div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div><Button type="submit" variant="orange" size="large" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send enquiry"}<ArrowUpRight /></Button>{status === "success" && <p role="status" className="form-status success">Thank you. Your enquiry has been received.</p>}{status === "error" && <p role="alert" className="form-status error">We couldn’t send your enquiry. Please try again.</p>}</form></Reveal></section></main>;
}

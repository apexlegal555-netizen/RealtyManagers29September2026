import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/rera-verification", label: "RERA Verification" },
  { to: "/nri", label: "NRI" },
  { to: "/franchises", label: "Franchise" },
  { to: "/about-us", label: "About Us" },
  { to: "/managers", label: "Managers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-header-inner">
      <Link to="/" className="brand" aria-label="Realty Managers home" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-text">REALTY<span>MANAGERS</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <Link key={link.to} to={link.to as any} activeProps={{ className: "active" }}>{link.label}</Link>)}
        
        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger">Countries <ChevronDown size={14} /></span>
          <div className="nav-dropdown-content">
            <div className="nav-dropdown-inner">
              <Link to={"/countries/india" as any}>India</Link>
              <Link to={"/countries/usa" as any}>USA</Link>
              <Link to={"/countries/canada" as any}>Canada</Link>
            </div>
          </div>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" aria-label="Search" />
          <button className="search-btn" aria-label="Submit Search">
            <Search size={16} />
          </button>
        </div>
      </nav>
      <div className="header-actions"><Button variant="outlineLight" size="pill" asChild><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button><Button variant="navIcon" size="icon" className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map(link => <Link key={link.to} to={link.to as any} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <div className="mobile-dropdown-placeholder" style={{ padding: '14px 0', borderBottom: '1px solid oklch(1 0 0 / 12%)' }}>
        <span style={{ fontSize: '13px', opacity: 0.82, marginBottom: '8px', display: 'block' }}>Countries</span>
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px', gap: '12px' }}>
          <Link to={"/countries/india" as any} onClick={() => setOpen(false)}>India</Link>
          <Link to={"/countries/usa" as any} onClick={() => setOpen(false)}>USA</Link>
          <Link to={"/countries/canada" as any} onClick={() => setOpen(false)}>Canada</Link>
        </div>
      </div>
      <div style={{ padding: '14px 0', borderBottom: '1px solid oklch(1 0 0 / 12%)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Search size={16} style={{ color: 'var(--on-dark)' }} />
        <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'var(--on-dark)', fontSize: '13px', outline: 'none', width: '100%' }} />
      </div>
      <Link to="/contact" onClick={() => setOpen(false)}>Get in touch</Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><div><Link to="/" className="brand brand-footer"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-text">REALTY<span>MANAGERS</span></span></Link><p>Clarity in every real estate decision.</p></div><nav aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/rera-verification">RERA Verification</Link><Link to="/franchises">Franchise</Link><Link to="/managers">Managers</Link><Link to="/nri">NRI</Link><Link to="/contact">Contact</Link></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Realty Managers. All rights reserved.</span><span>Built on trust. Designed for what’s next.</span></div></footer>;
}

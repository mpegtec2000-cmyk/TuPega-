"use client";
import { useState, useEffect } from "react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    name: "Campañas",
    href: "/dashboard/campanas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
      </svg>
    ),
  },
  {
    name: "Contactos",
    href: "/dashboard/contactos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: "Correos enviados",
    href: "/dashboard/enviados",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
  {
    name: "Respuestas",
    href: "/dashboard/respuestas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    name: "Rebotes",
    href: "/dashboard/rebotes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    name: "Configuración",
    href: "/dashboard/configuracion",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
];

interface Props {
  children: React.ReactNode;
  pathname: string;
  pageTitle?: string;
  pageSubtitle?: string;
}

export default function DashboardShell({ children, pathname, pageTitle = "Dashboard", pageSubtitle = "Resumen de tu campaña de postulación." }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F7F8FA", color: "#15171A", fontFamily: "'Inter', sans-serif" }}>

      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">✉️</div>
          <div>
            <div className="logo-name">Tu<span>Pega</span>!</div>
            <div className="logo-sub">Panel de campañas</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className={`nav-link ${isActive(item.href) ? "nav-link--active" : ""}`}>
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="help-widget">
            <div className="help-icon">💬</div>
            <div>
              <p className="help-title">¿Necesitas ayuda?</p>
              <p className="help-sub">Soporte disponible</p>
            </div>
          </div>
          <button className="help-btn">Contactar soporte</button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="main-area">

        {/* Desktop Header */}
        <header className="top-header">
          <div>
            <p className="header-greeting">Bienvenido de vuelta 👋</p>
            <h1 className="header-title">{pageTitle}</h1>
            <p className="header-sub">{pageSubtitle}</p>
          </div>
          <div className="header-actions">
            <div className="search-wrap">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <button className="notif-btn" aria-label="Notificaciones">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="notif-dot"></span>
            </button>
            <div className="user-avatar">M</div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="mobile-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <button onClick={() => setIsMobileMenuOpen(true)} className="mobile-menu-btn" aria-label="Abrir menú">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            </button>
            <span className="mobile-logo">Tu<span>Pega</span>!</span>
          </div>
          <div className="user-avatar">M</div>
        </header>

        {/* Content */}
        <div className="page-content">{children}</div>

        {/* Mobile Bottom Nav */}
        <nav className="mobile-bottom-nav">
          {menuItems.slice(0, 4).map((item) => (
            <a key={item.name} href={item.href} className={`bottom-nav-link ${isActive(item.href) ? "bottom-nav-link--active" : ""}`}>
              {item.icon}
              <span>{item.name.split(" ")[0]}</span>
            </a>
          ))}
          <button onClick={() => setIsMobileMenuOpen(true)} className="bottom-nav-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            <span>Más</span>
          </button>
        </nav>
      </main>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="mobile-logo">Tu<span>Pega</span>!</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="mobile-menu-btn">✕</button>
            </div>
            <nav style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                  className={`nav-link ${isActive(item.href) ? "nav-link--active" : ""}`}>
                  {item.icon}{item.name}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <style>{`
        .sidebar {
          width: 240px; background: #0f0f1a; color: #e0e0f0;
          display: flex; flex-direction: column; height: 100vh;
          position: sticky; top: 0; flex-shrink: 0;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 768px) { .sidebar { display: none; } }

        .sidebar-logo { padding: 1.5rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .logo-icon { font-size: 1.8rem; }
        .logo-name { font-size: 1.2rem; font-weight: 800; color: #fff; font-family: 'Space Grotesk', sans-serif; }
        .logo-name span { color: #9b6dff; }
        .logo-sub { font-size: 0.7rem; color: #5a5a7a; margin-top: 2px; }

        .sidebar-nav { flex: 1; padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 0.2rem; overflow-y: auto; }
        .nav-link {
          display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.75rem;
          border-radius: 8px; font-size: 0.875rem; font-weight: 500; color: #6060a0;
          text-decoration: none; transition: all 0.15s;
        }
        .nav-link:hover { background: rgba(255,255,255,0.05); color: #e0e0f0; }
        .nav-link--active { background: rgba(108,71,255,0.15); color: #9b6dff; }

        .sidebar-footer { padding: 1rem; border-top: 1px solid rgba(255,255,255,0.06); }
        .help-widget { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
        .help-icon { font-size: 1.2rem; }
        .help-title { font-size: 0.8rem; font-weight: 600; color: #e0e0f0; }
        .help-sub { font-size: 0.7rem; color: #5a5a7a; }
        .help-btn { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #9090b0; font-size: 0.8rem; font-weight: 600; padding: 0.5rem; border-radius: 8px; cursor: pointer; transition: all 0.15s; }
        .help-btn:hover { background: rgba(255,255,255,0.1); color: #e0e0f0; }

        .main-area { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }

        .top-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 2rem; background: #fff; border-bottom: 1px solid #e5e7eb;
        }
        @media (max-width: 768px) { .top-header { display: none; } }
        .header-greeting { font-size: 0.8rem; color: #9ca3af; margin-bottom: 0.1rem; }
        .header-title { font-size: 1.5rem; font-weight: 800; color: #111827; margin: 0; font-family: 'Space Grotesk', sans-serif; }
        .header-sub { font-size: 0.8rem; color: #9ca3af; margin-top: 0.1rem; }
        .header-actions { display: flex; align-items: center; gap: 1rem; }
        .search-wrap { position: relative; }
        .search-icon { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #9ca3af; }
        .search-input { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 100px; padding: 0.5rem 1rem 0.5rem 2.25rem; font-size: 0.875rem; width: 220px; outline: none; transition: all 0.2s; }
        .search-input:focus { border-color: #6c47ff; box-shadow: 0 0 0 3px rgba(108,71,255,0.1); }
        .notif-btn { position: relative; padding: 0.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #6b7280; }
        .notif-dot { position: absolute; top: 2px; right: 2px; width: 8px; height: 8px; background: #6c47ff; border-radius: 50%; border: 2px solid #fff; }
        .user-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #6c47ff, #9b6dff); color: white; font-weight: 700; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }

        .mobile-header {
          display: none; align-items: center; justify-content: space-between;
          padding: 0.75rem 1rem; background: #fff; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 40;
        }
        @media (max-width: 768px) { .mobile-header { display: flex; } }
        .mobile-logo { font-size: 1.1rem; font-weight: 800; color: #111827; font-family: 'Space Grotesk', sans-serif; }
        .mobile-logo span { color: #6c47ff; }
        .mobile-menu-btn { background: none; border: none; cursor: pointer; color: #374151; padding: 0.4rem; display: flex; align-items: center; justify-content: center; }

        .page-content { flex: 1; overflow-y: auto; padding: 2rem; padding-bottom: 5rem; }
        @media (max-width: 768px) { .page-content { padding: 1rem; padding-bottom: 5rem; } }

        .mobile-bottom-nav {
          display: none; position: fixed; bottom: 0; left: 0; right: 0;
          background: #fff; border-top: 1px solid #e5e7eb;
          padding: 0.5rem 1.5rem; justify-content: space-between; align-items: center; z-index: 40;
        }
        @media (max-width: 768px) { .mobile-bottom-nav { display: flex; } }
        .bottom-nav-link { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.4rem; font-size: 0.65rem; font-weight: 500; color: #9ca3af; text-decoration: none; background: none; border: none; cursor: pointer; transition: color 0.15s; }
        .bottom-nav-link svg { width: 20px; height: 20px; }
        .bottom-nav-link--active { color: #6c47ff; }
        .bottom-nav-link:hover { color: #374151; }

        .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 50; display: flex; }
        .drawer { width: 280px; background: #0f0f1a; display: flex; flex-direction: column; height: 100%; }
        .drawer-header { padding: 1.25rem 1rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); }
      `}</style>
    </div>
  );
}

"use client";
import { useState } from "react";

// ── SVG Icon Components ──────────────────────────────────────────────────────
const IconGrid = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);
const IconFilter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconInbox = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);
const IconAlertCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconBell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconHelpCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconDots = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);

// ── Logo Mark SVG ────────────────────────────────────────────────────────────
const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#7C5CFC"/>
    <path d="M8 10h16M8 10l8 7 8-7M8 10v12a1 1 0 001 1h14a1 1 0 001-1V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Nav Items ────────────────────────────────────────────────────────────────
const menuItems = [
  { name: "Dashboard",        href: "/dashboard",              icon: <IconGrid /> },
  { name: "Campañas",         href: "/dashboard/campanas",     icon: <IconFilter /> },
  { name: "Contactos",        href: "/dashboard/contactos",    icon: <IconUsers /> },
  { name: "Correos enviados", href: "/dashboard/enviados",     icon: <IconSend /> },
  { name: "Respuestas",       href: "/dashboard/respuestas",   icon: <IconInbox /> },
  { name: "Rebotes",          href: "/dashboard/rebotes",      icon: <IconAlertCircle /> },
  { name: "Configuración",    href: "/dashboard/configuracion",icon: <IconSettings /> },
];

// ── Types ────────────────────────────────────────────────────────────────────
interface Props {
  children: React.ReactNode;
  pathname: string;
  pageTitle?: string;
  pageSubtitle?: string;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function DashboardShell({ children, pathname, pageTitle = "Dashboard", pageSubtitle }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isActive = (href: string) => href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div className="shell">
      {/* ─── SIDEBAR ─────────────────────────────────────── */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <LogoMark />
            <div>
              <p className="brand-name">TuPega<span>!</span></p>
              <p className="brand-sub">Panel de campañas</p>
            </div>
          </div>

          <nav className="nav-list">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-item ${isActive(item.href) ? "nav-item--active" : ""}`}
              >
                <span className="nav-item__icon">{item.icon}</span>
                <span className="nav-item__label">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="help-card">
            <div className="help-card__icon"><IconHelpCircle /></div>
            <div className="help-card__text">
              <p className="help-card__title">¿Necesitas ayuda?</p>
              <p className="help-card__sub">Soporte disponible</p>
            </div>
          </div>
          <button className="help-card__btn">Contactar soporte</button>
        </div>
      </aside>

      {/* ─── MAIN AREA ───────────────────────────────────── */}
      <div className="main-wrap">

        {/* Desktop Header */}
        <header className="top-bar">
          <div className="top-bar__left">
            <p className="top-bar__greeting">Bienvenido de vuelta</p>
            <h1 className="top-bar__title">{pageTitle}</h1>
            {pageSubtitle && <p className="top-bar__sub">{pageSubtitle}</p>}
          </div>
          <div className="top-bar__right">
            <div className="search-box">
              <span className="search-box__icon"><IconSearch /></span>
              <input className="search-box__input" type="text" placeholder="Buscar..." aria-label="Buscar" />
            </div>
            <button className="icon-btn" aria-label="Notificaciones">
              <IconBell />
              <span className="icon-btn__dot" />
            </button>
            <button className="avatar" aria-label="Perfil de usuario">M</button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="mobile-bar">
          <button className="icon-btn-plain" onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
            <IconMenu />
          </button>
          <span className="mobile-brand">Tu<span>Pega</span>!</span>
          <button className="avatar avatar--sm" aria-label="Perfil">M</button>
        </header>

        {/* Page Content */}
        <main className="page-content">{children}</main>

        {/* Mobile Bottom Nav */}
        <nav className="bottom-nav" aria-label="Navegación principal">
          {menuItems.slice(0, 4).map((item) => (
            <a key={item.name} href={item.href} className={`bottom-nav__item ${isActive(item.href) ? "bottom-nav__item--active" : ""}`}>
              {item.icon}
              <span>{item.name.split(" ")[0]}</span>
            </a>
          ))}
          <button className="bottom-nav__item" onClick={() => setDrawerOpen(true)} aria-label="Más opciones">
            <IconDots /><span>Más</span>
          </button>
        </nav>
      </div>

      {/* ─── MOBILE DRAWER ───────────────────────────────── */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} aria-modal="true" role="dialog">
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer__header">
              <span className="mobile-brand">Tu<span>Pega</span>!</span>
              <button className="icon-btn-plain" onClick={() => setDrawerOpen(false)} aria-label="Cerrar menú"><IconX /></button>
            </div>
            <nav style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setDrawerOpen(false)}
                  className={`nav-item ${isActive(item.href) ? "nav-item--active" : ""}`}>
                  <span className="nav-item__icon">{item.icon}</span>
                  <span className="nav-item__label">{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <style>{`
        /* ── TOKENS ─────────────────────────────────────── */
        .shell {
          --sidebar-w: 248px;
          --sidebar-bg: #0A0818;
          --sidebar-border: rgba(255,255,255,0.06);
          --main-bg: #0D0B1E;
          --topbar-bg: rgba(13,11,30,0.85);
          --surface: rgba(255,255,255,0.04);
          --surface-2: rgba(255,255,255,0.07);
          --border: rgba(255,255,255,0.07);
          --border-2: rgba(255,255,255,0.12);
          --violet: #7C5CFC;
          --violet-dim: rgba(124,92,252,0.14);
          --text-1: #F0EEFF;
          --text-2: #9D9AB8;
          --text-3: #5C5878;
          --ease: cubic-bezier(0.16,1,0.3,1);
          display: flex;
          min-height: 100vh;
          background: var(--main-bg);
          color: var(--text-1);
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── SIDEBAR ─────────────────────────────────────── */
        .sidebar {
          width: var(--sidebar-w);
          background: var(--sidebar-bg);
          border-right: 1px solid var(--sidebar-border);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          flex-shrink: 0;
        }
        @media (max-width: 768px) { .sidebar { display: none; } }

        .sidebar-top { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 20px 18px;
          border-bottom: 1px solid var(--sidebar-border);
        }
        .brand-name { font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 700; color: var(--text-1); line-height: 1.2; }
        .brand-name span { color: var(--violet); }
        .brand-sub { font-size: 0.68rem; color: var(--text-3); margin-top: 1px; }

        .nav-list { flex: 1; padding: 12px 10px; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-2);
          text-decoration: none;
          transition: background 0.15s var(--ease), color 0.15s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }
        .nav-item:hover { background: var(--surface-2); color: var(--text-1); }
        .nav-item--active { background: var(--violet-dim); color: var(--violet); }
        .nav-item--active:hover { background: rgba(124,92,252,0.2); }
        .nav-item__icon { display: flex; align-items: center; flex-shrink: 0; }
        .nav-item__label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .sidebar-footer { padding: 14px; border-top: 1px solid var(--sidebar-border); display: flex; flex-direction: column; gap: 10px; }
        .help-card { display: flex; align-items: center; gap: 10px; }
        .help-card__icon { color: var(--text-3); display: flex; }
        .help-card__title { font-size: 0.8rem; font-weight: 600; color: var(--text-1); }
        .help-card__sub { font-size: 0.7rem; color: var(--text-3); }
        .help-card__btn {
          width: 100%; background: var(--surface-2); border: 1px solid var(--border-2);
          color: var(--text-2); font-size: 0.8rem; font-weight: 600; padding: 9px;
          border-radius: 10px; cursor: pointer; transition: all 0.15s;
        }
        .help-card__btn:hover { background: var(--surface); color: var(--text-1); }

        /* ── MAIN WRAP ───────────────────────────────────── */
        .main-wrap { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; min-width: 0; }

        /* ── TOP BAR ─────────────────────────────────────── */
        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          background: var(--topbar-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        @media (max-width: 768px) { .top-bar { display: none; } }
        .top-bar__greeting { font-size: 0.78rem; color: var(--text-3); margin-bottom: 2px; }
        .top-bar__title { font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700; line-height: 1.1; }
        .top-bar__sub { font-size: 0.8rem; color: var(--text-2); margin-top: 2px; }
        .top-bar__right { display: flex; align-items: center; gap: 12px; }

        .search-box { position: relative; }
        .search-box__icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-3); display: flex; pointer-events: none; }
        .search-box__input {
          background: var(--surface);
          border: 1px solid var(--border-2);
          border-radius: 999px;
          padding: 8px 16px 8px 36px;
          font-size: 0.875rem;
          width: 220px;
          color: var(--text-1);
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
        }
        .search-box__input::placeholder { color: var(--text-3); }
        .search-box__input:focus { border-color: var(--violet); box-shadow: 0 0 0 3px rgba(124,92,252,0.15); }

        .icon-btn {
          position: relative;
          width: 38px; height: 38px;
          background: var(--surface);
          border: 1px solid var(--border-2);
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-2);
          transition: all 0.15s;
        }
        .icon-btn:hover { background: var(--surface-2); color: var(--text-1); }
        .icon-btn__dot {
          position: absolute; top: 6px; right: 6px;
          width: 8px; height: 8px;
          background: var(--violet);
          border-radius: 50%;
          border: 2px solid var(--main-bg);
        }

        .icon-btn-plain { background: none; border: none; cursor: pointer; color: var(--text-2); display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: color 0.15s; }
        .icon-btn-plain:hover { color: var(--text-1); }

        .avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, var(--violet), #A78BFA);
          color: white; font-weight: 700; font-size: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0; border: none;
          font-family: 'Space Grotesk', sans-serif;
        }
        .avatar--sm { width: 32px; height: 32px; font-size: 0.8rem; }

        /* ── MOBILE BAR ──────────────────────────────────── */
        .mobile-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--sidebar-bg);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 40;
          flex-shrink: 0;
        }
        @media (max-width: 768px) { .mobile-bar { display: flex; } }
        .mobile-brand { font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--text-1); }
        .mobile-brand span { color: var(--violet); }

        /* ── PAGE CONTENT ────────────────────────────────── */
        .page-content { flex: 1; overflow-y: auto; padding: 32px; }
        @media (max-width: 768px) { .page-content { padding: 16px; padding-bottom: 80px; } }

        /* ── BOTTOM NAV ──────────────────────────────────── */
        .bottom-nav {
          display: none;
          position: fixed; bottom: 0; left: 0; right: 0;
          background: var(--sidebar-bg);
          border-top: 1px solid var(--border);
          padding: 8px 16px;
          justify-content: space-between;
          align-items: center;
          z-index: 40;
        }
        @media (max-width: 768px) { .bottom-nav { display: flex; } }
        .bottom-nav__item {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          padding: 4px 8px; font-size: 0.65rem; font-weight: 500;
          color: var(--text-3); text-decoration: none;
          background: none; border: none; cursor: pointer;
          transition: color 0.15s;
        }
        .bottom-nav__item svg { width: 20px; height: 20px; }
        .bottom-nav__item--active { color: var(--violet); }
        .bottom-nav__item:hover { color: var(--text-1); }

        /* ── DRAWER ──────────────────────────────────────── */
        .drawer-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 50;
          display: flex;
        }
        .drawer {
          width: 280px;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border);
          display: flex; flex-direction: column;
          height: 100%;
        }
        .drawer__header {
          padding: 20px 16px;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
}

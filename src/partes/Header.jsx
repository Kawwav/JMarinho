import React, { useState } from "react";
import "./Header.css";

const navLinks = [
  { label: "Início", href: "#inicio" },
  {
    label: "Imóveis",
    href: "#imoveis",
    dropdown: [
      {
        label: "Imóveis à Venda",
        sub: ["Apartamentos", "Casas", "Sobrados", "Chácaras"],
      },
      {
        label: "Imóveis para Locação",
        sub: ["Apartamentos", "Casas", "Sobrados", "Chácaras"],
      },
    ],
  },
  {
    label: "Comercial e Negócios",
    href: "#comercial",
    dropdown: [
      { label: "Barracões" },
      { label: "Casas Comerciais" },
      { label: "Conjuntos Comerciais" },
      { label: "Lojas" },
      { label: "Escritórios" },
      { label: "Imóveis para Indústria" },
      { label: "Prédios Comerciais" },
    ],
  },
  { label: "Documentos", href: "#documentos" },
  { label: "Sobre a JMarinho", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const NavItem = ({ link }) => {
  const [open, setOpen] = useState(false);
  const [hoveredSub, setHoveredSub] = useState(null);

  const hasDropdown = !!link.dropdown;

  return (
    <div
      className={`header__nav-item ${open ? "header__nav-item--open" : ""}`}
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setHoveredSub(null);
      }}
    >
      <a href={link.href} className="header__nav-link">
        <span className="header__nav-label">
          {link.label}
          {hasDropdown && (
            <svg
              className="header__nav-arrow"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <span className="header__nav-underline" />
      </a>

      {hasDropdown && open && (
        <div className="header__dropdown">
          {link.dropdown.map((item, i) => (
            <div
              key={i}
              className="header__dropdown-group"
              onMouseEnter={() => item.sub && setHoveredSub(i)}
              onMouseLeave={() => setHoveredSub(null)}
            >
              <span className="header__dropdown-item">
                {item.label}
                {item.sub && <span className="header__dropdown-arrow">›</span>}
              </span>

              {item.sub && hoveredSub === i && (
                <div className="header__dropdown-sub">
                  {item.sub.map((s, j) => (
                    <span key={j} className="header__dropdown-subitem">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="header"
      style={{ backgroundImage: "url('/cidade1.jpg')" }}
    >
      <div className="header__overlay" />

      <div className="header__content">
        <div className="header__logo">
          <img src="/image.png" alt="Jmarinho Logo" />
        </div>

        <nav className="header__nav anim-rise anim-rise--1">
          {navLinks.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </nav>

        <div className="header__hero">
          <h1 className="header__hero-title anim-rise anim-rise--2">
            A JMarinho tem o imóvel ideal para você
          </h1>
          <p className="header__hero-subtitle anim-rise anim-rise--3">
            Encontre seu próximo lar com quem entende do assunto
          </p>
          <a href="#imoveis" className="header__hero-btn anim-rise anim-rise--4">
            Ver Imóveis
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
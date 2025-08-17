import React from 'react';
import { GraduationCap, ArrowRight, Play } from 'lucide-react';
import './HeroSection.css';

const CampusVirtualHero = () => {
  return (
    <div className="campus-virtual-hero">
      {/* Background decorative elements */}
      <div className="background-decorative">
        {/* Large gradient circles */}
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
        <div className="gradient-circle-4"></div>
        
        {/* Small floating dots */}
        <div className="floating-dot floating-dot-1"></div>
        <div className="floating-dot floating-dot-2"></div>
        <div className="floating-dot floating-dot-3"></div>
        <div className="floating-dot floating-dot-4"></div>
      </div>

      {/* Header */}
      <header className="hero-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <GraduationCap />
              </div>
              <div className="logo-text">
                <h1>CampusVirtual</h1>
                <p>Modelo Dual Alemán</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="nav-menu">
              <a href="#inicio" className="nav-link">
                Inicio
              </a>
              <a href="#carreras" className="nav-link">
                Carreras
              </a>
              <a href="#modelo-dual" className="nav-link">
                Modelo Dual
              </a>
              <a href="#admisiones" className="nav-link">
                Admisiones
              </a>
            </nav>

            {/* CTA Button */}
            <button className="header-cta">
              Portal Estudiante
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="hero-main">
        {/* Badge */}
        <div className="hero-badge">
          <div className="badge-content">
            <div className="flex">
              <div className="badge-dot"></div>
              <span>✨ Educación del Futuro con Modelo Dual Alemán</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="hero-title">
          <h1>
            <span className="gradient-text">Campus Virtual</span>
            <span className="dark-text">del Mañana</span>
          </h1>
        </div>

        {/* Description */}
        <p className="hero-description">
          Experimenta la educación superior revolucionaria con nuestro modelo 
          dual alemán. Combina teoría de vanguardia con práctica empresarial 
          real, 100% virtual.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-buttons">
          <button className="cta-primary">
            Explorar Carreras
            <ArrowRight className="arrow-icon" />
          </button>
          
          <button className="cta-secondary">
            <Play className="play-icon" />
            Ver Demo Virtual
          </button>
        </div>

        {/* Statistics */}
        <div className="hero-stats">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number purple-pink">4</div>
                <div className="stat-label">Carreras Especializadas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number blue-cyan">100%</div>
                <div className="stat-label">Virtual</div>
              </div>
              <div className="stat-item">
                <div className="stat-number purple-pink">50%</div>
                <div className="stat-label">Práctica Empresarial</div>
              </div>
              <div className="stat-item">
                <div className="stat-number blue-cyan">24/7</div>
                <div className="stat-label">Acceso al Campus</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampusVirtualHero;
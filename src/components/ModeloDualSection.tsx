import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import './ModeloDualSection.css';

const ModeloDualSection = () => {
  const teoriaData = {
    icon: GraduationCap,
    title: '50% Teoría Académica',
    subtitle: 'Campus Virtual Avanzado',
    items: [
      {
        title: 'Metodologías Innovadoras',
        description: 'Aprendizaje interactivo con realidad virtual, simulaciones y laboratorios digitales.'
      },
      {
        title: 'Profesores Internacionales',
        description: 'Docentes certificados con experiencia en universidades alemanas y empresas globales.'
      },
      {
        title: 'Recursos Digitales',
        description: 'Biblioteca digital, plataformas especializadas y herramientas de vanguardia.'
      }
    ]
  };

  const practicaData = {
    icon: Building2,
    title: '50% Práctica Empresarial',
    subtitle: 'Experiencia Real en Empresas',
    items: [
      {
        title: 'Proyectos Reales',
        description: 'Trabaja en desafíos actuales de empresas líderes en tu área de especialización.'
      },
      {
        title: 'Mentores Empresariales',
        description: 'Acompañamiento personalizado de profesionales senior en tu campo de estudio.'
      },
      {
        title: 'Networking Profesional',
        description: 'Construye tu red profesional desde el primer día con conexiones estratégicas.'
      }
    ]
  };

  return (
    <div className="modelo-dual-section">
      {/* Fixed Header */}
      <header className="modelo-dual-header">
        <div className="header-container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <GraduationCap />
              </div>
              <div>
                <div className="logo-text">
                  CampusVirtual
                </div>
                <div className="logo-subtitle">Modelo Dual Alemán</div>
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
              <a href="#modelo-dual" className="nav-link active">
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

      {/* Main Content */}
      <main className="modelo-dual-main">
        <div className="main-container">
          {/* Section Header */}
          <div className="section-header">
            {/* Badge */}
            <div className="section-badge">
              Innovación Educativa
            </div>
            
            <h2 className="section-title">
              El <span className="gradient-text">Modelo Dual Alemán</span>
            </h2>
            
            <p className="section-description">
              Revoluciona tu educación con un sistema que combina la excelencia académica alemana 
              con la experiencia práctica empresarial, adaptado a la era digital.
            </p>
          </div>

          {/* Dual Model Content */}
          <div className="dual-model-grid">
            {/* Theory Side */}
            <div className="theory-side">
              <div className="theory-header">
                <div className="theory-icon">
                  <teoriaData.icon />
                </div>
                <div>
                  <h3 className="theory-title">{teoriaData.title}</h3>
                  <p className="theory-subtitle">{teoriaData.subtitle}</p>
                </div>
              </div>

              <div className="theory-items">
                {teoriaData.items.map((item, index) => (
                  <div key={index} className="theory-item">
                    <h4 className="theory-item-title">{item.title}</h4>
                    <p className="theory-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Side */}
            <div className="practice-side">
              <div className="practice-header">
                <div className="practice-icon">
                  <practicaData.icon />
                </div>
                <div>
                  <h3 className="practice-title">{practicaData.title}</h3>
                  <p className="practice-subtitle">{practicaData.subtitle}</p>
                </div>
              </div>

              <div className="practice-items">
                {practicaData.items.map((item, index) => (
                  <div key={index} className="practice-item">
                    <h4 className="practice-item-title">{item.title}</h4>
                    <p className="practice-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ventajas Competitivas Section */}
          <div className="ventajas-section">
            <h3 className="ventajas-title">Ventajas Competitivas</h3>
            
            <div className="ventajas-grid">
              {/* Educación Teórica Avanzada */}
              <div className="ventaja-card">
                <div className="ventaja-icon-container">
                  <div className="ventaja-icon blue">
                    <GraduationCap />
                  </div>
                </div>
                <h4 className="ventaja-title">Educación Teórica Avanzada</h4>
                <p className="ventaja-description">
                  Currículum académico de vanguardia basado en estándares alemanes de excelencia educativa.
                </p>
              </div>

              {/* Experiencia Empresarial Real */}
              <div className="ventaja-card">
                <div className="ventaja-icon-container">
                  <div className="ventaja-icon green">
                    <Building2 />
                  </div>
                </div>
                <h4 className="ventaja-title">Experiencia Empresarial Real</h4>
                <p className="ventaja-description">
                  Prácticas profesionales en empresas líderes desde el primer semestre de tu carrera.
                </p>
              </div>

              {/* Proyección Internacional */}
              <div className="ventaja-card">
                <div className="ventaja-icon-container">
                  <div className="ventaja-icon purple">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h4 className="ventaja-title">Proyección Internacional</h4>
                <p className="ventaja-description">
                  Oportunidades de intercambio y certificaciones reconocidas globalmente.
                </p>
              </div>

              {/* Aprendizaje Acelerado */}
              <div className="ventaja-card">
                <div className="ventaja-icon-container">
                  <div className="ventaja-icon orange">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="ventaja-title">Aprendizaje Acelerado</h4>
                <p className="ventaja-description">
                  Metodologías innovadoras que combinan teoría y práctica para un aprendizaje más efectivo.
                </p>
              </div>
            </div>
          </div>

          {/* Resultados Comprobados Section */}
          <div className="stats-section">
            <div className="stats-header">
              <h3 className="stats-title">Resultados Comprobados</h3>
              <p className="stats-description">
                Nuestros graduados están transformando el mercado laboral con su preparación excepcional.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-title">Empleabilidad Inmediata</div>
                <div className="stat-subtitle">de nuestros graduados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-title">Contratación Directa</div>
                <div className="stat-subtitle">por empresas partner</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-title">Incremento Salarial</div>
                <div className="stat-subtitle">vs. educación tradicional</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-title">Empresas Aliadas</div>
                <div className="stat-subtitle">en todo el país</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModeloDualSection;
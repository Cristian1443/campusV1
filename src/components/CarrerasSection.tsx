import React from 'react';
import { GraduationCap, ArrowRight, Code, Cog, TrendingUp, Megaphone, Clock, Users, Award } from 'lucide-react';
import './CarrerasSection.css';

const CarrerasSection = () => {
  const carreras = [
    {
      id: 'ing-software',
      title: 'Ingeniería de Software',
      description: 'Domina las tecnologías más avanzadas y metodologías ágiles para crear soluciones digitales innovadoras.',
      icon: Code,
      iconColor: 'blue',
      skills: ['Full Stack Development', 'Cloud Computing', 'AI & Machine Learning', 'DevOps'],
      duration: '4 años',
      partnerships: '50+ empresas tech',
      certification: 'Certificación Alemana'
    },
    {
      id: 'ing-industrial',
      title: 'Ingeniería Industrial',
      description: 'Optimiza procesos y sistemas productivos con tecnologías 4.0 y metodologías lean manufacturing.',
      icon: Cog,
      iconColor: 'orange',
      skills: ['Industria 4.0', 'Lean Manufacturing', 'Automatización', 'Gestión de Calidad'],
      duration: '4 años',
      partnerships: '40+ industrias',
      certification: 'Certificación Alemana'
    },
    {
      id: 'administracion',
      title: 'Administración de Empresas',
      description: 'Lidera organizaciones del futuro con estrategias innovadoras y visión global de negocios.',
      icon: TrendingUp,
      iconColor: 'green',
      skills: ['Estrategia Digital', 'Fintech', 'E-commerce', 'Liderazgo Global'],
      duration: '4 años',
      partnerships: '60+ empresas',
      certification: 'Certificación Alemana'
    },
    {
      id: 'marketing',
      title: 'Marketing Digital',
      description: 'Crea campañas disruptivas y construye marcas influyentes en el ecosistema digital.',
      icon: Megaphone,
      iconColor: 'purple',
      skills: ['Growth Hacking', 'Data Analytics', 'Social Media', 'Branding Digital'],
      duration: '4 años',
      partnerships: '45+ agencias',
      certification: 'Certificación Alemana'
    }
  ];

  return (
    <div className="carreras-section">
      {/* Fixed Header */}
      <header className="carreras-header">
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
              <a href="#carreras" className="nav-link active">
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

      {/* Main Content */}
      <main className="carreras-main">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">Carreras del Futuro</span>
            </h2>
            <p className="section-description">
              Programas académicos diseñados para formar líderes en la economía digital con el prestigioso modelo dual alemán.
            </p>
          </div>

          {/* Careers Grid */}
          <div className="carreras-grid">
            {carreras.map((carrera) => {
              const IconComponent = carrera.icon;
              return (
                <div key={carrera.id} className="carrera-card">
                  <div className="carrera-card-content">
                    {/* Card Header */}
                    <div className="card-header">
                      <div className={`carrera-icon ${carrera.iconColor}`}>
                        <IconComponent />
                      </div>
                      <div className="dual-badge">
                        Modelo Dual
                      </div>
                    </div>
                    
                    <h3 className="carrera-title">
                      {carrera.title}
                    </h3>
                    
                    <p className="carrera-description">
                      {carrera.description}
                    </p>

                    {/* Skills */}
                    <div className="skills-section">
                      <h4 className="skills-title">Especialidades Clave</h4>
                      <div className="skills-grid">
                        {carrera.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="info-grid">
                      <div className="info-item">
                        <Clock />
                        <div className="info-text">{carrera.duration}</div>
                      </div>
                      <div className="info-item">
                        <Users />
                        <div className="info-text">{carrera.partnerships}</div>
                      </div>
                      <div className="info-item">
                        <Award />
                        <div className="info-text">{carrera.certification}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="carrera-cta">
                      Más Información
                      <ArrowRight className="arrow-icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bottom-cta">
            <button className="bottom-cta-button">
              Ver Todas las Carreras
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarrerasSection;
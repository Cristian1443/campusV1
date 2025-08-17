import React from 'react';
import { Brain, MessageCircle, Rocket, BarChart3, Settings, Image as ImageIcon } from 'lucide-react';
import './StuttgartSection.css';

export const StuttgartSection = () => {

  const funcionalidades = [
    {
      icon: Brain,
      titulo: 'Asistencia Inteligente',
      descripcion: 'Disponible 24/7 para resolver tus dudas al instante.',
      color: 'pink'
    },
    {
      icon: MessageCircle,
      titulo: 'Guía Personalizada',
      descripcion: 'Recibe orientación adaptada a tu perfil y programa académico.',
      color: 'orange'
    },
    {
      icon: Rocket,
      titulo: 'Navegación Intuitiva',
      descripcion: 'Explora fácilmente cada rincón del campus sin perderte.',
      color: 'red'
    }
  ];

  const capacidades = [
    {
      icon: MessageCircle,
      titulo: 'Chat Inteligente',
      descripcion: 'Conversaciones naturales con comprensión contextual avanzada',
      color: 'green'
    },
    {
      icon: Brain,
      titulo: 'Aprendizaje Adaptativo',
      descripcion: 'Se adapta a tu estilo de aprendizaje y progreso académico',
      color: 'blue'
    },
    {
      icon: Rocket,
      titulo: 'Recomendaciones Inteligentes',
      descripcion: 'Sugerencias personalizadas para optimizar tu experiencia',
      color: 'purple'
    }
  ];

  return (
    <section className="stuttgart-section">
      {/* Header */}
      <header className="stuttgart-header">
        <div className="stuttgart-container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="logo-text">
                <h1>CampusVirtual</h1>
                <p>Modelo Dual Alemán</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="nav-menu">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#carreras" className="nav-link">Carreras</a>
              <a href="#modelo-dual" className="nav-link">Modelo Dual</a>
              <a href="#admisiones" className="nav-link">Admisiones</a>
            </nav>

            {/* CTA Button */}
            <button className="header-cta">
              Portal Estudiante
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="stuttgart-main">
        <div className="stuttgart-container">
          {/* Section Header */}
          <div className="stuttgart-section-header">
            <div className="stuttgart-badge">
              Tu Compañero Digital
            </div>
            <h2 className="stuttgart-title">
              Conoce a <span className="gradient-text">Stuttgart</span>
            </h2>
            <p className="stuttgart-description">
              Tu asistente virtual inteligente que te acompañará durante toda tu experiencia educativa en nuestro Mega Campus del Futuro.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="stuttgart-content-grid">
            {/* Stuttgart Character */}
            <div className="stuttgart-character-section">
              <div className="stuttgart-avatar-container">
                {/* Floating UI elements */}
                <div className="floating-ui floating-ui-1">
                  <div className="floating-icon">
                    <Settings />
                  </div>
                </div>
                <div className="floating-ui floating-ui-2">
                  <div className="floating-icon">
                    <BarChart3 />
                  </div>
                </div>
                <div className="floating-ui floating-ui-3">
                  <div className="floating-icon">
                    <ImageIcon />
                  </div>
                </div>

                {/* Main Avatar Card */}
                <div className="stuttgart-avatar-card">
                  <div className="avatar-header">
                    <div className="avatar-icons">
                      <div className="avatar-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="avatar-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="avatar-chart">
                      <BarChart3 />
                    </div>
                  </div>

                  <div className="avatar-main">
                    <div className="avatar-image">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0Qjc2ODgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzQjgyRjYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFkKSIgcng9IjEwIi8+PHRleHQgeD0iNTAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn6SWPC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3R1dHRnYXJ0PC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFJIEFzc2lzdGVudDwvdGV4dD48L3N2Zz4=" alt="Stuttgart - Asistente Virtual" />
                    </div>
                  </div>
                </div>

                {/* Animated dots */}
                <div className="floating-dot floating-dot-1"></div>
                <div className="floating-dot floating-dot-2"></div>
                <div className="floating-dot floating-dot-3"></div>
              </div>
            </div>

            {/* Description and Features */}
            <div className="stuttgart-info-section">
              <div className="stuttgart-quote">
                <h3>
                  "¡Hola! Soy tu guía en el Mega Campus del Futuro. 
                  Estoy aquí para potenciar tu aventura educativa y 
                  asegurar que aproveches al máximo cada recurso. 
                  ¡Empecemos!"
                </h3>
                <p>
                  Stuttgart es más que un asistente virtual; es tu compañero inteligente que 
                  evoluciona contigo. Diseñado con la última tecnología de IA, comprende tus 
                  necesidades académicas y te guía hacia el éxito.
                </p>
              </div>

              {/* Features */}
              <div className="stuttgart-features">
                {funcionalidades.map((func, index) => {
                  const IconComponent = func.icon;
                  return (
                    <div key={index} className="feature-item">
                      <div className={`feature-icon ${func.color}`}>
                        <IconComponent />
                      </div>
                      <div className="feature-content">
                        <h4>{func.titulo}</h4>
                        <p>{func.descripcion}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className="stuttgart-cta">
                <MessageCircle />
                Charlar con Stuttgart
              </button>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="capabilities-section">
            <div className="capabilities-grid">
              {capacidades.map((cap, index) => {
                const IconComponent = cap.icon;
                return (
                  <div key={index} className="capability-card">
                    <div className="capability-header">
                      <div className={`capability-icon ${cap.color}`}>
                        <IconComponent />
                      </div>
                    </div>
                    <div className="capability-content">
                      <h4>{cap.titulo}</h4>
                      <p>{cap.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
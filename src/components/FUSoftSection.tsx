import React from 'react';
import { Code, Zap, Shield, Users, Award, ArrowRight, CheckCircle, Rocket, Globe, Star } from 'lucide-react';
import './FUSoftSection.css';

const serviciosFUSoft = [
  {
    icon: Code,
    titulo: 'Desarrollo de Plataforma',
    descripcion: 'Arquitectura escalable y tecnología de vanguardia para la experiencia educativa más avanzada.',
    detalles: ['React & Node.js', 'Microservicios', 'Cloud Native', 'API First']
  },
  {
    icon: Shield,
    titulo: 'Seguridad & Privacidad',
    descripcion: 'Protección de datos estudiantiles con los más altos estándares de seguridad informática.',
    detalles: ['Encriptación E2E', 'GDPR Compliant', 'ISO 27001', 'Pentesting Regular']
  },
  {
    icon: Zap,
    titulo: 'Innovación Continua',
    descripcion: 'Actualizaciones constantes con las últimas tecnologías emergentes y tendencias educativas.',
    detalles: ['AI Integration', 'AR/VR Features', 'ML Analytics', 'IoT Campus']
  },
  {
    icon: Users,
    titulo: 'Soporte 24/7',
    descripcion: 'Equipo especializado disponible para garantizar el funcionamiento óptimo del campus virtual.',
    detalles: ['Soporte Técnico', 'Monitoreo Proactivo', 'SLA 99.9%', 'Respuesta <1h']
  }
];

const logros = [
  { numero: '99.9%', label: 'Uptime Garantizado', descripcion: 'Disponibilidad constante' },
  { numero: '10M+', label: 'Usuarios Activos', descripcion: 'En nuestras plataformas' },
  { numero: '50+', label: 'Países', descripcion: 'Con presencia global' },
  { numero: '15+', label: 'Años de Experiencia', descripcion: 'En desarrollo de software' }
];

const tecnologias = [
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'Node.js', category: 'Backend', icon: 'node' },
  { name: 'MongoDB', category: 'Database', icon: 'mongodb' },
  { name: 'AWS', category: 'Cloud', icon: 'aws' },
  { name: 'Docker', category: 'DevOps', icon: 'docker' },
  { name: 'Kubernetes', category: 'DevOps', icon: 'kubernetes' },
  { name: 'GraphQL', category: 'API', icon: 'graphql' },
  { name: 'Redis', category: 'Cache', icon: 'redis' },
  { name: 'WebRTC', category: 'Real-time', icon: 'webrtc' },
  { name: 'Unity 3D', category: 'Gaming', icon: 'unity' },
  { name: 'TensorFlow', category: 'AI/ML', icon: 'tensorflow' },
  { name: 'Blockchain', category: 'Web3', icon: 'blockchain' },
  { name: 'Python', category: 'Backend', icon: 'python' },
  { name: 'JavaScript', category: 'Language', icon: 'javascript' },
  { name: 'TypeScript', category: 'Language', icon: 'typescript' },
  { name: 'Angular', category: 'Frontend', icon: 'angular' },
  { name: 'Vue.js', category: 'Frontend', icon: 'vue' },
  { name: 'PHP', category: 'Backend', icon: 'php' },
  { name: 'Laravel', category: 'Framework', icon: 'laravel' },
  { name: 'Django', category: 'Framework', icon: 'django' }
];

// Duplicamos las tecnologías para el efecto de carrusel infinito
const tecnologiasInfinitas = [...tecnologias, ...tecnologias];

export function FUSoftSection() {
  return (
    <section className="fusoft-section">
      {/* Elementos decorativos de fondo */}
      <div className="fusoft-background">
        <div className="fusoft-gradient-1"></div>
        <div className="fusoft-gradient-2"></div>
      </div>

      <div className="fusoft-container">
        {/* Section Header */}
        <div className="fusoft-header">
          <div className="fusoft-badge">
            Alianza Estratégica
          </div>
          <h2 className="fusoft-title">
            Desarrollado por <span className="gradient-text">FUSoft</span>
          </h2>
          <p className="fusoft-description">
            Nuestra fábrica de software líder en innovación tecnológica, responsable de crear la 
            experiencia educativa virtual más avanzada del continente.
          </p>
        </div>

        {/* Partnership Overview */}
        <div className="fusoft-company-grid">
          {/* Company Info */}
          <div className="company-info">
            <div className="company-logo">
              <div className="company-icon">
                <Rocket />
              </div>
              <div className="company-logo-text">
                <h3>FUSoft Technologies</h3>
                <p>Fábrica de Software de Vanguardia</p>
              </div>
            </div>

            <div className="company-features">
              <div className="feature-item">
                <div className="feature-icon star">
                  <Star />
                </div>
                <div className="feature-content">
                  <h4>Líder en Innovación EdTech</h4>
                  <p>Especialistas en soluciones educativas digitales con más de 15 años de experiencia.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon globe">
                  <Globe />
                </div>
                <div className="feature-content">
                  <h4>Presencia Internacional</h4>
                  <p>Oficinas en 12 países y proyectos desplegados en más de 50 naciones.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon award">
                  <Award />
                </div>
                <div className="feature-content">
                  <h4>Certificaciones Premium</h4>
                  <p>ISO 27001, SOC 2, GDPR compliant y certificaciones de seguridad de nivel empresarial.</p>
                </div>
              </div>
            </div>

            <button className="company-cta">
              <Globe />
              Visitar FUSoft.com
              <ArrowRight className="arrow-icon" />
            </button>
          </div>

          {/* Achievement Stats */}
          <div className="achievements-section">
            <h3 className="achievements-title">Logros y Reconocimientos</h3>
            <div className="achievements-grid">
              {logros.map((logro, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-number">
                    {logro.numero}
                  </div>
                  <div className="achievement-label">{logro.label}</div>
                  <div className="achievement-description">{logro.descripcion}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <h3 className="services-title">Servicios Especializados</h3>
          <div className="services-grid">
            {serviciosFUSoft.map((servicio, index) => {
              const IconComponent = servicio.icon;
              const iconClasses = ['code', 'shield', 'zap', 'users'];
              return (
                <div key={index} className="service-card">
                  <div className="service-header">
                    <div className={`service-icon ${iconClasses[index]}`}>
                      <IconComponent />
                    </div>
                    <h4 className="service-title">{servicio.titulo}</h4>
                    <p className="service-description">{servicio.descripcion}</p>
                  </div>
                  <div className="service-details">
                    {servicio.detalles.map((detalle, idx) => (
                      <div key={idx} className="service-detail">
                        <div className="service-detail-icon">
                          <CheckCircle />
                        </div>
                        <span>{detalle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack Carousel */}
        <div className="tech-carousel-section">
          <h3 className="tech-carousel-title">Stack Tecnológico del Campus</h3>
          <p className="tech-carousel-subtitle">
            Tecnologías de vanguardia que potencian nuestra plataforma educativa
          </p>
          <div className="tech-carousel-container">
            <div className="tech-carousel-track">
              {tecnologiasInfinitas.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="tech-item">
                  <div className={`tech-icon ${tech.icon}`}>
                    {tech.name.charAt(0)}
                  </div>
                  <div className="tech-name">{tech.name}</div>
                  <div className="tech-category">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="benefits-section">
          <div className="benefits-content">
            <div className="benefits-header">
              <h3 className="benefits-title">¿Por qué elegimos FUSoft?</h3>
              <p className="benefits-description">
                La alianza estratégica con FUSoft nos permite ofrecer la plataforma educativa más avanzada, 
                segura y escalable del mercado, garantizando una experiencia excepcional para nuestros estudiantes.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Shield />
                </div>
                <h4 className="benefit-title">Seguridad Empresarial</h4>
                <p className="benefit-description">
                  Protección de datos con estándares militares y cumplimiento internacional.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Zap />
                </div>
                <h4 className="benefit-title">Rendimiento Óptimo</h4>
                <p className="benefit-description">
                  Arquitectura escalable que soporta millones de usuarios simultáneos.
                </p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Rocket />
                </div>
                <h4 className="benefit-title">Innovación Continua</h4>
                <p className="benefit-description">
                  Actualizaciones constantes con las últimas tecnologías emergentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Monitor, BookOpen, Beaker, Database, Heart, ArrowRight, Play, Users, X, CheckCircle, Award } from 'lucide-react';
import './RecorridoFuturoSection.css';

interface EspacioFuturo {
  id: string;
  titulo: string;
  descripcion: string;
  icon: React.ComponentType;
  color: string;
  categoria: string;
}

// Función helper para mapear colores de Tailwind a clases CSS
const getColorClass = (tailwindColor: string): string => {
  const colorMap: Record<string, string> = {
    'from-blue-500 to-cyan-500': 'blue',
    'from-green-500 to-emerald-500': 'green',
    'from-purple-500 to-pink-500': 'purple',
    'from-orange-500 to-red-500': 'orange',
    'from-pink-500 to-rose-500': 'pink',
    'from-indigo-500 to-purple-500': 'indigo'
  };
  return colorMap[tailwindColor] || 'blue';
};

const espaciosFuturo = [
  {
    id: 'aulas-virtuales',
    titulo: 'Aulas Virtuales',
    descripcion: 'Clases en línea real con tecnología inmersiva, interacciones sociales y aulas metaverso especializadas.',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    categoria: 'Educación'
  },
  {
    id: 'biblioteca-digital',
    titulo: 'Biblioteca Digital',
    descripcion: 'Acceso ilimitado a recursos académicos, Millones de libros y publicaciones, Buscadores inteligentes con IA.',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    categoria: 'Recursos'
  },
  {
    id: 'simuladores',
    titulo: 'Simuladores Prácticos',
    descripcion: 'Práctica profesional en entornos realistas, Laboratorios virtuales especializados, Simulaciones de tiempo real.',
    icon: Beaker,
    color: 'from-purple-500 to-pink-500',
    categoria: 'Práctica'
  },
  {
    id: 'espacios-coformacion',
    titulo: 'Espacios de Coformación',
    descripcion: 'Interacción social y grupo estudiantil, Eventos culturales y académicos, Comunidades de interés específico.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    categoria: 'Social'
  },
  {
    id: 'bienestar-universitario',
    titulo: 'Bienestar Universitario',
    descripcion: 'Servicios de salud y actividades para el desarrollo integral, Apoyo psicológico y mental, Actividades deportivas virtuales.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    categoria: 'Bienestar'
  },
  {
    id: 'sistema-gestion',
    titulo: 'Sistema de Gestión Académica SIGA',
    descripcion: 'Gestiona tu vida académica de manera integral, Consulta de calificaciones y notas, Trámites académicos en línea.',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    categoria: 'Gestión'
  }
];

export function RecorridoFuturoSection() {
  const [selectedEspacio, setSelectedEspacio] = useState<EspacioFuturo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEspacioClick = (espacio: EspacioFuturo) => {
    setSelectedEspacio(espacio);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEspacio(null);
  };

  return (
    <section className="recorrido-futuro-section">
      <div className="recorrido-futuro-container">
        {/* Section Header */}
        <div className="recorrido-futuro-header">
          <div className="recorrido-futuro-badge">
            Explora Cada Espacio
          </div>
          <h2 className="recorrido-futuro-title">
            Un <span className="gradient-text">Recorrido por el Futuro</span>
          </h2>
          <p className="recorrido-futuro-description">
            Explora cada rincón de nuestro campus y descubre espacios diseñados para potenciar tu experiencia educativa.
          </p>
        </div>

        {/* Future Spaces Grid */}
        <div className="espacios-grid">
          {espaciosFuturo.map((espacio) => {
            const IconComponent = espacio.icon;
            return (
              <div 
                key={espacio.id} 
                className="espacio-card"
                onClick={() => handleEspacioClick(espacio)}
              >
                {/* Gradient overlay */}
                <div className={`espacio-card-overlay ${getColorClass(espacio.color)}`}></div>
                
                <div className="espacio-card-content">
                  <div className="espacio-card-header">
                    <div className="espacio-header-top">
                      <div className={`espacio-icon ${getColorClass(espacio.color)}`}>
                        <IconComponent />
                      </div>
                      <div className="espacio-badge">
                        {espacio.categoria}
                      </div>
                    </div>
                    <h3 className="espacio-titulo">
                      {espacio.titulo}
                    </h3>
                    <p className="espacio-descripcion">
                      {espacio.descripcion}
                    </p>
                  </div>
                  
                  <button className="espacio-button">
                    <span>Explorar Espacio</span>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="recorrido-futuro-cta">
          <button className="cta-button-final">
            <Play className="arrow-icon" />
            Iniciar Recorrido Virtual Completo
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEspacio && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X />
            </button>
            
            <div className="modal-header">
              <div className="modal-title-section">
                <div className={`modal-icon ${getColorClass(selectedEspacio.color)}`}>
                  <selectedEspacio.icon />
                </div>
                <div>
                  <h3 className="modal-title">{selectedEspacio.titulo}</h3>
                  <div className="modal-badge">{selectedEspacio.categoria}</div>
                </div>
              </div>
              <p className="modal-description">{selectedEspacio.descripcion}</p>
            </div>

            <div className="modal-body">
              <div className="modal-sections">
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <CheckCircle className="green" />
                    Características Principales
                  </h4>
                  <div className="modal-list">
                    <div className="modal-list-item">
                      <div className="modal-list-dot primary"></div>
                      <span className="modal-list-text">Tecnología de vanguardia</span>
                    </div>
                    <div className="modal-list-item">
                      <div className="modal-list-dot primary"></div>
                      <span className="modal-list-text">Experiencia inmersiva</span>
                    </div>
                    <div className="modal-list-item">
                      <div className="modal-list-dot primary"></div>
                      <span className="modal-list-text">Acceso 24/7</span>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <Award className="blue" />
                    Beneficios Clave
                  </h4>
                  <div className="modal-list">
                    <div className="modal-list-item">
                      <div className="modal-list-dot blue"></div>
                      <span className="modal-list-text">Aprendizaje personalizado</span>
                    </div>
                    <div className="modal-list-item">
                      <div className="modal-list-dot blue"></div>
                      <span className="modal-list-text">Flexibilidad total</span>
                    </div>
                    <div className="modal-list-item">
                      <div className="modal-list-dot blue"></div>
                      <span className="modal-list-text">Resultados comprobados</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tecnologias-section">
                <h4 className="tecnologias-title">Tecnologías Utilizadas</h4>
                <div className="tecnologias-list">
                  <span className="tecnologia-badge">React</span>
                  <span className="tecnologia-badge">Node.js</span>
                  <span className="tecnologia-badge">AI/ML</span>
                  <span className="tecnologia-badge">Cloud</span>
                </div>
              </div>

              <div className="estadisticas-section">
                <h4 className="estadisticas-title">Estadísticas Destacadas</h4>
                <div className="estadisticas-grid">
                  <div className="estadistica-item">
                    <div className="estadistica-valor">95%</div>
                    <div className="estadistica-label">Satisfacción</div>
                  </div>
                  <div className="estadistica-item">
                    <div className="estadistica-valor">24/7</div>
                    <div className="estadistica-label">Disponibilidad</div>
                  </div>
                  <div className="estadistica-item">
                    <div className="estadistica-valor">10K+</div>
                    <div className="estadistica-label">Usuarios</div>
                  </div>
                </div>
              </div>

              <div className="modal-buttons">
                <button className="modal-button-primary" style={{ background: `linear-gradient(135deg, ${getColorGradient(getColorClass(selectedEspacio.color))})` }}>
                  <Users />
                  Iniciar en este espacio
                </button>
                <button className="modal-button-secondary">
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Función helper para obtener gradientes de color
const getColorGradient = (color: string): string => {
  const gradients: Record<string, string> = {
    blue: '#3b82f6, #1d4ed8',
    green: '#10b981, #047857',
    purple: '#8b5cf6, #7c3aed',
    orange: '#f97316, #ea580c',
    pink: '#ec4899, #be185d',
    indigo: '#6366f1, #4f46e5'
  };
  return gradients[color] || gradients.blue;
};
import React from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  BookOpen,
  Users,
  Award
} from 'lucide-react';
import './AdmisionesSection.css';

const AdmisionesSection = () => {
  const pasosAdmision = [
    {
      numero: 1,
      icon: FileText,
      color: 'blue',
      titulo: 'Solicitud de Admisión',
      descripcion: 'Completa el formulario online con tus datos personales y académicos.',
      tiempo: '15 minutos',
      acciones: [
        'Llenar formulario digital',
        'Adjuntar documentos básicos',
        'Seleccionar carrera de interés'
      ]
    },
    {
      numero: 2,
      icon: BookOpen,
      color: 'green',
      titulo: 'Evaluación Académica',
      descripcion: 'Revisión de tu perfil académico y entrevista personalizada.',
      tiempo: '2-3 días',
      acciones: [
        'Revisión de expediente',
        'Entrevista virtual',
        'Evaluación de competencias'
      ]
    },
    {
      numero: 3,
      icon: Users,
      color: 'purple',
      titulo: 'Entrevista Empresarial',
      descripcion: 'Conoce a las empresas partner y define tu proyecto profesional.',
      tiempo: '1 semana',
      acciones: [
        'Presentación a empresas',
        'Definición de proyecto',
        'Acuerdo de prácticas'
      ]
    },
    {
      numero: 4,
      icon: Award,
      color: 'orange',
      titulo: 'Confirmación y Matrícula',
      descripcion: 'Recibe tu carta de aceptación y completa el proceso de matrícula.',
      tiempo: '3-5 días',
      acciones: [
        'Carta de aceptación',
        'Pago de matrícula',
        'Acceso al campus virtual'
      ]
    }
  ];

  const requisitos = [
    'Título de bachiller o equivalente',
    'Promedio mínimo de 7.5/10',
    'Conocimientos básicos de inglés',
    'Disposición para trabajo remoto',
    'Dispositivo con conexión a internet',
    'Compromiso con el modelo dual'
  ];

  const cronograma = [
    {
      fase: 'Inscripciones',
      periodo: 'Enero - Marzo',
      descripcion: 'Proceso de admisión abierto',
      color: 'blue'
    },
    {
      fase: 'Evaluaciones',
      periodo: 'Febrero - Abril',
      descripcion: 'Entrevistas y evaluaciones',
      color: 'green'
    },
    {
      fase: 'Empresas',
      periodo: 'Marzo - Mayo',
      descripcion: 'Vinculación con empresas',
      color: 'purple'
    },
    {
      fase: 'Inicio',
      periodo: 'Agosto',
      descripcion: 'Inicio del programa',
      color: 'orange'
    }
  ];

  return (
    <section className="admisiones-section">
      <div className="admisiones-container">
        {/* Header de la sección */}
        <div className="admisiones-header">
          <div className="admisiones-badge">
            Proceso de Admisión
          </div>
          <h2 className="admisiones-title">
            Tu <span className="gradient-text">Camino al Éxito</span> Comienza Aquí
          </h2>
          <p className="admisiones-description">
            Un proceso de admisión simple y transparente diseñado para identificar 
            a los mejores talentos y conectarlos con las oportunidades del futuro.
          </p>
        </div>

        {/* Sección de pasos del proceso */}
        <div className="pasos-section">
          <h3 className="pasos-title">Proceso de Admisión en 4 Pasos</h3>
          <div className="pasos-grid">
            {pasosAdmision.map((paso, index) => {
              const IconComponent = paso.icon;
              return (
                <div key={index} className="paso-card">
                  <div className={`paso-number-badge ${paso.color}`}>
                    {paso.numero}
                  </div>
                  <div className="paso-card-content">
                    <div className="paso-header">
                      <div className={`paso-icon ${paso.color}`}>
                        <IconComponent />
                      </div>
                      <h4 className="paso-titulo">{paso.titulo}</h4>
                      <p className="paso-descripcion">{paso.descripcion}</p>
                    </div>
                    
                    <div className="paso-tiempo">
                      <Clock />
                      <span className="paso-tiempo-text">{paso.tiempo}</span>
                    </div>
                    
                    <div className="paso-acciones">
                      {paso.acciones.map((accion, accionIndex) => (
                        <div key={accionIndex} className="paso-accion">
                          <CheckCircle />
                          <span className="paso-accion-text">{accion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sección de requisitos y cronograma */}
        <div className="requisitos-cronograma">
          {/* Requisitos */}
          <div className="info-card">
            <div className="info-card-header">
              <h3 className="info-card-title">
                <FileText className="blue" />
                Requisitos de Admisión
              </h3>
              <p className="info-card-description">
                Asegúrate de cumplir con todos los requisitos antes de iniciar tu proceso de admisión.
              </p>
            </div>
            <div className="requisitos-lista">
              {requisitos.map((requisito, index) => (
                <div key={index} className="requisito-item">
                  <CheckCircle />
                  <span className="requisito-text">{requisito}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cronograma */}
          <div className="info-card">
            <div className="info-card-header">
              <h3 className="info-card-title">
                <Calendar className="purple" />
                Cronograma 2024
              </h3>
              <p className="info-card-description">
                Planifica tu proceso de admisión con nuestro cronograma detallado.
              </p>
            </div>
            <div className="cronograma-lista">
              {cronograma.map((item, index) => (
                <div key={index} className={`cronograma-item ${item.color}`}>
                  <div className="cronograma-info">
                    <h4>{item.fase}</h4>
                    <p>{item.descripcion}</p>
                  </div>
                  <div className={`cronograma-badge ${item.color}`}>
                    {item.periodo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="admisiones-cta">
          <h3 className="admisiones-cta-title">
            ¿Listo para Transformar tu Futuro?
          </h3>
          <p className="admisiones-cta-description">
            Únete a cientos de estudiantes que ya están construyendo su camino hacia el éxito 
            con nuestro modelo dual alemán.
          </p>
          <div className="admisiones-cta-buttons">
            <button className="cta-button-primary">
              Iniciar Admisión
              <ArrowRight />
            </button>
            <button className="cta-button-secondary">
              Contactar Asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmisionesSection;
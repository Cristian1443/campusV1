import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Monitor, BookOpen, Beaker, Database, Heart, CheckCircle, ArrowRight, Play, Users, Award } from 'lucide-react';

const espaciosFuturo = [
  {
    id: 'aulas-virtuales',
    titulo: 'Aulas Virtuales',
    descripcion: 'Clases en línea real con tecnología inmersiva, interacciones sociales y aulas metaverso especializadas.',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    categoria: 'Educación',
    detalles: {
      caracteristicas: [
        'Realidad virtual inmersiva con avatares personalizados',
        'Pizarras digitales interactivas colaborativas',
        'Transmisión en alta definición con audio espacial',
        'Grabación automática de clases para revisión posterior'
      ],
      beneficios: [
        'Aprendizaje más engaging y memorable',
        'Interacción en tiempo real con compañeros globales',
        'Acceso desde cualquier dispositivo',
        'Personalización del entorno de aprendizaje'
      ],
      tecnologias: ['WebRTC', 'Unity 3D', 'Spatial Audio', 'AI Teaching Assistant'],
      estadisticas: {
        satisfaccion: '96%',
        retencion: '40% mayor',
        participacion: '85% más activa'
      }
    }
  },
  {
    id: 'biblioteca-digital',
    titulo: 'Biblioteca Digital',
    descripcion: 'Acceso ilimitado a recursos académicos, Millones de libros y publicaciones, Buscadores inteligentes con IA.',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    categoria: 'Recursos',
    detalles: {
      caracteristicas: [
        'Más de 50 millones de recursos académicos digitales',
        'Búsqueda inteligente con procesamiento de lenguaje natural',
        'Recomendaciones personalizadas basadas en tu carrera',
        'Marcadores y notas sincronizadas en la nube'
      ],
      beneficios: [
        'Acceso 24/7 desde cualquier lugar del mundo',
        'Búsquedas más rápidas y precisas',
        'Recursos siempre actualizados',
        'Colaboración en tiempo real en documentos'
      ],
      tecnologias: ['Elasticsearch', 'NLP', 'Cloud Storage', 'Collaborative Editing'],
      estadisticas: {
        recursos: '50M+',
        idiomas: '25+',
        disponibilidad: '99.9%'
      }
    }
  },
  {
    id: 'simuladores',
    titulo: 'Simuladores Prácticos',
    descripcion: 'Práctica profesional en entornos realistas, Laboratorios virtuales especializados, Simulaciones de tiempo real.',
    icon: Beaker,
    color: 'from-purple-500 to-pink-500',
    categoria: 'Práctica',
    detalles: {
      caracteristicas: [
        'Simuladores de industrias reales con físicas precisas',
        'Laboratorios químicos, físicos y de ingeniería virtuales',
        'Simulaciones de mercados financieros en tiempo real',
        'Entornos de desarrollo de software replicados'
      ],
      beneficios: [
        'Práctica sin riesgos ni limitaciones físicas',
        'Experimentación ilimitada con materiales costosos',
        'Resultados inmediatos y análisis detallado',
        'Preparación realista para el mundo laboral'
      ],
      tecnologias: ['Unity 3D', 'Physics Engine', 'Real-time Data', 'AR/VR'],
      estadisticas: {
        precision: '99.5%',
        laboratorios: '200+',
        experimentos: 'Ilimitados'
      }
    }
  },
  {
    id: 'espacios-coformacion',
    titulo: 'Espacios de Coformación',
    descripcion: 'Interacción social y grupo estudiantil, Eventos culturales y académicos, Comunidades de interés específico.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    categoria: 'Social',
    detalles: {
      caracteristicas: [
        'Salas de estudio virtuales colaborativas',
        'Eventos y conferencias en espacios 3D',
        'Clubs estudiantiles con salas dedicadas',
        'Mentorías grupales con profesionales'
      ],
      beneficios: [
        'Networking global con estudiantes internacionales',
        'Desarrollo de habilidades blandas',
        'Apoyo académico peer-to-peer',
        'Experiencias culturales diversas'
      ],
      tecnologias: ['Social VR', 'Live Streaming', 'Community Management', 'Event Platform'],
      estadisticas: {
        estudiantes: '10,000+',
        eventos: '50/mes',
        clubs: '100+'
      }
    }
  },
  {
    id: 'bienestar-universitario',
    titulo: 'Bienestar Universitario',
    descripcion: 'Servicios de salud y actividades para el desarrollo integral, Apoyo psicológico y mental, Actividades deportivas virtuales.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    categoria: 'Bienestar',
    detalles: {
      caracteristicas: [
        'Consultas médicas y psicológicas virtuales',
        'Programas de mindfulness y meditación guiada',
        'Clases de fitness y yoga en tiempo real',
        'Seguimiento de bienestar con wearables'
      ],
      beneficios: [
        'Cuidado integral de la salud mental y física',
        'Acceso inmediato a profesionales de la salud',
        'Programas personalizados de bienestar',
        'Comunidad de apoyo y motivación'
      ],
      tecnologias: ['Telemedicine', 'Wearable Integration', 'AI Wellness', 'Biometric Tracking'],
      estadisticas: {
        satisfaccion: '98%',
        profesionales: '50+',
        programas: '30+'
      }
    }
  },
  {
    id: 'sistema-gestion',
    titulo: 'Sistema de Gestión Académica SIGA',
    descripcion: 'Gestiona tu vida académica de manera integral, Consulta de calificaciones y notas, Trámites académicos en línea.',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    categoria: 'Gestión',
    detalles: {
      caracteristicas: [
        'Dashboard personalizado con métricas académicas',
        'Gestión completa de matrículas y horarios',
        'Seguimiento en tiempo real del progreso académico',
        'Integración con calendarios y recordatorios'
      ],
      beneficios: [
        'Acceso inmediato a toda tu información académica',
        'Trámites 100% digitales sin papeleos',
        'Notificaciones inteligentes importantes',
        'Análisis predictivo de rendimiento'
      ],
      tecnologias: ['Cloud Database', 'Real-time Sync', 'Predictive Analytics', 'Mobile First'],
      estadisticas: {
        uptime: '99.99%',
        tramites: '100% digitales',
        respuesta: '<2 segundos'
      }
    }
  }
];

export function RecorridoFuturoSection() {
  return (
    <section id="recorrido-futuro" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 border-0">
            Explora Cada Espacio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Un <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Recorrido por el Futuro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora cada rincón de nuestro campus y descubre espacios diseñados para potenciar tu experiencia educativa.
          </p>
        </div>

        {/* Future Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {espaciosFuturo.map((espacio) => {
            const IconComponent = espacio.icon;
            return (
              <Dialog key={espacio.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer group relative overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${espacio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${espacio.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {espacio.categoria}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                        {espacio.titulo}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {espacio.descripcion}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto">
                        <span>Explorar Espacio</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${espacio.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl">{espacio.titulo}</DialogTitle>
                        <Badge variant="secondary" className="mt-1">
                          {espacio.categoria}
                        </Badge>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-relaxed">
                      {espacio.descripcion}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Características */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        Características Principales
                      </h4>
                      <div className="space-y-3">
                        {espacio.detalles.caracteristicas.map((caracteristica, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{caracteristica}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Beneficios */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-500" />
                        Beneficios Clave
                      </h4>
                      <div className="space-y-3">
                        {espacio.detalles.beneficios.map((beneficio, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {espacio.detalles.tecnologias.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Estadísticas */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-muted/50 to-background rounded-lg border border-border/50">
                    <h4 className="text-lg font-semibold mb-4">Estadísticas Destacadas</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(espacio.detalles.estadisticas).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex gap-4">
                    <Button className={`bg-gradient-to-r ${espacio.color} text-white border-0 flex-1`}>
                      <Play className="mr-2 h-4 w-4" />
                      Ver Demo Virtual
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Más Información
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 group">
            <Play className="mr-2 h-5 w-5" />
            Iniciar Recorrido Virtual Completo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
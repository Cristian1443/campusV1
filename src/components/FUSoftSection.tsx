import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, Zap, Shield, Users, Award, ArrowRight, CheckCircle, Rocket, Globe, Star } from 'lucide-react';

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

export function FUSoftSection() {
  return (
    <section id="fusoft-alianza" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/50 dark:to-green-900/50 text-blue-800 dark:text-blue-200 border-0">
            Alianza Estratégica
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Desarrollado por <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">FUSoft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra fábrica de software líder en innovación tecnológica, responsable de crear la experiencia educativa virtual más avanzada del continente.
          </p>
        </div>

        {/* Partnership Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-xl">
                <Rocket className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">FUSoft Technologies</h3>
                <p className="text-muted-foreground">Fábrica de Software de Vanguardia</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Líder en Innovación EdTech</p>
                  <p className="text-sm text-muted-foreground">Especialistas en soluciones educativas digitales con más de 15 años de experiencia.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Presencia Internacional</p>
                  <p className="text-sm text-muted-foreground">Oficinas en 12 países y proyectos desplegados en más de 50 naciones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Certificaciones Premium</p>
                  <p className="text-sm text-muted-foreground">ISO 27001, SOC 2, GDPR compliant y certificaciones de seguridad de nivel empresarial.</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0 px-8 py-3 group">
              <Globe className="mr-2 h-5 w-5" />
              Visitar FUSoft.com
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">Logros y Reconocimientos</h3>
            <div className="grid grid-cols-2 gap-6">
              {logros.map((logro, index) => (
                <Card key={index} className="text-center border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                      {logro.numero}
                    </div>
                    <div className="font-semibold text-sm mb-1">{logro.label}</div>
                    <div className="text-xs text-muted-foreground">{logro.descripcion}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Servicios Especializados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviciosFUSoft.map((servicio, index) => {
              const IconComponent = servicio.icon;
              return (
                <Card key={index} className="text-center border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group h-full">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{servicio.titulo}</CardTitle>
                    <CardDescription className="text-sm">{servicio.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {servicio.detalles.map((detalle, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{detalle}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Stack Tecnológico del Campus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Redis', 'WebRTC', 'Unity 3D', 'TensorFlow', 'Blockchain'].map((tech, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-muted/50 to-background border border-border/50 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
                <div className="font-semibold text-sm">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Por qué elegimos FUSoft?</h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              La alianza estratégica con FUSoft nos permite ofrecer la plataforma educativa más avanzada, 
              segura y escalable del mercado, garantizando una experiencia excepcional para nuestros estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-xl w-fit mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Seguridad Empresarial</h4>
              <p className="text-sm text-blue-100">Protección de datos con estándares militares y cumplimiento internacional.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-xl w-fit mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Rendimiento Óptimo</h4>
              <p className="text-sm text-blue-100">Arquitectura escalable que soporta millones de usuarios simultáneos.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-xl w-fit mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Innovación Continua</h4>
              <p className="text-sm text-blue-100">Actualizaciones constantes con las últimas tecnologías emergentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
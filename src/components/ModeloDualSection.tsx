import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Building2, Globe, Zap } from 'lucide-react';

const ventajas = [
  {
    icon: GraduationCap,
    title: 'Educación Teórica Avanzada',
    description: 'Currículum académico de vanguardia basado en estándares alemanes de excelencia educativa.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Building2,
    title: 'Experiencia Empresarial Real',
    description: 'Práticas profesionales en empresas líderes desde el primer semestre de tu carrera.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Proyección Internacional',
    description: 'Oportunidades de intercambio y certificaciones reconocidas globalmente.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Aprendizaje Acelerado',
    description: 'Metodologías innovadoras que combinan teoría y práctica para un aprendizaje más efectivo.',
    color: 'from-orange-500 to-red-500'
  }
];

const estadisticas = [
  { numero: '95%', label: 'Empleabilidad Inmediata', sublabel: 'de nuestros graduados' },
  { numero: '85%', label: 'Contratación Directa', sublabel: 'por empresas partner' },
  { numero: '40%', label: 'Incremento Salarial', sublabel: 'vs. educación tradicional' },
  { numero: '100+', label: 'Empresas Aliadas', sublabel: 'en todo el país' }
];

export function ModeloDualSection() {
  return (
    <section id="modelo-dual" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 border-0">
            Innovación Educativa
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            El <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modelo Dual Alemán</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Revoluciona tu educación con un sistema que combina la excelencia académica alemana 
            con la experiencia práctica empresarial, adaptado a la era digital.
          </p>
        </div>

        {/* Dual Model Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Theory Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">50% Teoría Académica</h3>
                <p className="text-muted-foreground">Campus Virtual Avanzado</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2">Metodologías Innovadoras</h4>
                <p className="text-sm text-muted-foreground">Aprendizaje interactivo con realidad virtual, simulaciones y laboratorios digitales.</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2">Profesores Internacionales</h4>
                <p className="text-sm text-muted-foreground">Docentes certificados con experiencia en universidades alemanas y empresas globales.</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2">Recursos Digitales</h4>
                <p className="text-sm text-muted-foreground">Biblioteca digital, plataformas especializadas y herramientas de vanguardia.</p>
              </div>
            </div>
          </div>

          {/* Practice Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">50% Práctica Empresarial</h3>
                <p className="text-muted-foreground">Experiencia Real en Empresas</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Proyectos Reales</h4>
                <p className="text-sm text-muted-foreground">Trabaja en desafíos actuales de empresas líderes en tu área de especialización.</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Mentores Empresariales</h4>
                <p className="text-sm text-muted-foreground">Acompañamiento personalizado de profesionales senior en tu campo de estudio.</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Networking Profesional</h4>
                <p className="text-sm text-muted-foreground">Construye tu red profesional desde el primer día con conexiones estratégicas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Ventajas Competitivas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((ventaja, index) => {
              const IconComponent = ventaja.icon;
              return (
                <Card key={index} className="text-center border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className={`mx-auto p-4 rounded-xl bg-gradient-to-br ${ventaja.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{ventaja.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{ventaja.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Resultados Comprobados</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Nuestros graduados están transformando el mercado laboral con su preparación excepcional.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.numero}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
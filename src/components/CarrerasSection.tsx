import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, Cog, TrendingUp, Megaphone, ArrowRight, Clock, Users, Award } from 'lucide-react';

const carreras = [
  {
    id: 'ing-software',
    title: 'Ingeniería de Software',
    description: 'Domina las tecnologías más avanzadas y metodologías ágiles para crear soluciones digitales innovadoras.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-orange-500 to-red-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-purple-500 to-pink-500',
    skills: ['Growth Hacking', 'Data Analytics', 'Social Media', 'Branding Digital'],
    duration: '4 años',
    partnerships: '45+ agencias',
    certification: 'Certificación Alemana'
  }
];

export function CarrerasSection() {
  return (
    <section id="carreras" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carreras del Futuro
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas académicos diseñados para formar líderes en la economía digital con el prestigioso modelo dual alemán.
          </p>
        </div>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {carreras.map((carrera) => {
            const IconComponent = carrera.icon;
            return (
              <Card key={carrera.id} className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${carrera.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${carrera.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 border-0">
                      Modelo Dual
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {carrera.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {carrera.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Especialidades Clave</h4>
                    <div className="flex flex-wrap gap-2">
                      {carrera.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{carrera.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{carrera.partnerships}</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{carrera.certification}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Más Información
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary/40 px-8 py-3 text-lg">
            Ver Todas las Carreras
          </Button>
        </div>
      </div>
    </section>
  );
}
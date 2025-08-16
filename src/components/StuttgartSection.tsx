import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Brain, MessageCircle, Rocket, Settings, BarChart3, Image as ImageIcon } from 'lucide-react';

const funcionalidades = [
  {
    icon: Brain,
    titulo: 'Asistencia Inteligente',
    descripcion: 'Disponible 24/7 para resolver tus dudas al instante.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: MessageCircle,
    titulo: 'Guía Personalizada',
    descripcion: 'Recibe orientación adaptada a tu perfil y programa académico.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Rocket,
    titulo: 'Navegación Intuitiva',
    descripcion: 'Explora fácilmente cada rincón del campus sin perderte.',
    color: 'from-red-500 to-pink-500'
  }
];

export function StuttgartSection() {
  return (
    <section id="stuttgart" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 text-green-800 dark:text-green-200 border-0">
            Tu Compañero Digital
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Conoce a <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Stuttgart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu asistente virtual inteligente que te acompañará durante toda tu experiencia educativa en nuestro Mega Campus del Futuro.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Stuttgart Character */}
          <div className="relative">
            <div className="relative p-8 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl">
              <div className="w-full h-64 max-w-md mx-auto bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-lg font-semibold">Stuttgart AI</div>
                  <div className="text-sm opacity-80">Asistente Virtual</div>
                </div>
              </div>
              {/* Floating UI elements */}
              <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
            </div>
            
            {/* Animated dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Description and Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                "¡Hola! Soy tu guía en el Mega Campus del Futuro. Estoy aquí para potenciar tu aventura educativa y asegurar que aproveches al máximo cada recurso. ¡Empecemos!"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stuttgart es más que un asistente virtual; es tu compañero inteligente que evoluciona contigo. 
                Diseñado con la última tecnología de IA, comprende tus necesidades académicas y te guía hacia el éxito.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {funcionalidades.map((func, index) => {
                const IconComponent = func.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-background border border-border/50">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${func.color} text-white flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{func.titulo}</h4>
                      <p className="text-sm text-muted-foreground">{func.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 px-8 py-3 group">
              <MessageCircle className="mr-2 h-5 w-5" />
              Charlar con Stuttgart
            </Button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-border/50 hover:border-green-300 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-6 w-6" />
              </div>
              <CardTitle>Chat Inteligente</CardTitle>
              <CardDescription>
                Conversaciones naturales con comprensión contextual avanzada
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-border/50 hover:border-blue-300 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle>Aprendizaje Adaptativo</CardTitle>
              <CardDescription>
                Se adapta a tu estilo de aprendizaje y progreso académico
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-border/50 hover:border-purple-300 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6" />
              </div>
              <CardTitle>Recomendaciones Inteligentes</CardTitle>
              <CardDescription>
                Sugerencias personalizadas para optimizar tu experiencia
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
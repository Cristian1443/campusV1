import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50"></div>
      
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-8 bg-blue-100 text-blue-800 border-0 px-4 py-2 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Educación del Futuro con Modelo Dual Alemán</span>
            </div>
          </Badge>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Virtual
            </span>
            <br />
            <span className="text-foreground">del Mañana</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experimenta la educación superior revolucionaria con nuestro modelo dual alemán. 
            Combina teoría de vanguardia con práctica empresarial real, 100% virtual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold group"
            >
              Explorar Carreras
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demo Virtual
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-sm text-muted-foreground">Carreras Especializadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Virtual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Práctica Empresarial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Acceso al Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
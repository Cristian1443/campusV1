import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Mantente Conectado con el Futuro
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Recibe las últimas noticias sobre innovación educativa, nuevas carreras y oportunidades exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:border-white/40"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    CampusVirtual
                  </span>
                  <span className="text-xs text-muted-foreground">Modelo Dual Alemán</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Revolucionando la educación superior con tecnología de vanguardia y el prestigioso modelo dual alemán.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2 h-auto border-primary/20 hover:border-primary/40">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 h-auto border-primary/20 hover:border-primary/40">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 h-auto border-primary/20 hover:border-primary/40">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 h-auto border-primary/20 hover:border-primary/40">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 h-auto border-primary/20 hover:border-primary/40">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="font-semibold mb-6">Programas Académicos</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Ingeniería de Software</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Ingeniería Industrial</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Administración de Empresas</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Marketing Digital</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Postgrados</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Certificaciones</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Portal Estudiante</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Admisiones</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Biblioteca Virtual</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Bolsa de Trabajo</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Soporte Técnico</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">Empresas Aliadas</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-muted-foreground">Av. Innovación 123</p>
                    <p className="text-muted-foreground">Ciudad Tecnológica, CT 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">info@campusvirtual.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 CampusVirtual. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Términos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
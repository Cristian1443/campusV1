import { Button } from './ui/button';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-purple-600">CampusVirtual</div>
                <div className="text-xs text-muted-foreground">Modelo Dual Alemán</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </a>
            <a href="#carreras" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Carreras
            </a>
            <a href="#modelo-dual" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Modelo Dual
            </a>
            <a href="#admisiones" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Admisiones
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
            Portal Estudiante
          </Button>
        </div>
      </div>
    </header>
  );
}
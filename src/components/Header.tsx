import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors duration-200">
              Inicio
            </a>
            <a href="#carreras" className="text-foreground hover:text-primary transition-colors duration-200">
              Carreras
            </a>
            <a href="#modelo-dual" className="text-foreground hover:text-primary transition-colors duration-200">
              Modelo Dual
            </a>
            <a href="#admisiones" className="text-foreground hover:text-primary transition-colors duration-200">
              Admisiones
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Portal Estudiante
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Inicio
              </a>
              <a href="#carreras" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Carreras
              </a>
              <a href="#modelo-dual" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Modelo Dual
              </a>
              <a href="#admisiones" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Admisiones
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 mt-4">
                Portal Estudiante
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
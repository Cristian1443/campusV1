import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-main">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              Mantente Conectado con el Futuro
            </h3>
            <p className="newsletter-description">
              Recibe las últimas noticias sobre innovación educativa, nuevas carreras y oportunidades exclusivas.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="brand-column">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <GraduationCap />
                </div>
                <div className="footer-logo-text">
                  <h4 className="footer-logo-title">CampusVirtual</h4>
                  <p className="footer-logo-subtitle">Modelo Dual Alemán</p>
                </div>
              </div>
              <p className="footer-description">
                Revolucionando la educación superior con tecnología de vanguardia y el prestigioso modelo dual alemán.
              </p>
              <div className="footer-social">
                <button className="social-button" aria-label="Facebook">
                  <Facebook />
                </button>
                <button className="social-button" aria-label="Twitter">
                  <Twitter />
                </button>
                <button className="social-button" aria-label="Instagram">
                  <Instagram />
                </button>
                <button className="social-button" aria-label="LinkedIn">
                  <Linkedin />
                </button>
                <button className="social-button" aria-label="YouTube">
                  <Youtube />
                </button>
              </div>
            </div>

            {/* Academic Programs Column */}
            <div className="links-column">
              <h4 className="links-title">Programas Académicos</h4>
              <ul className="links-list">
                <li><a href="#" className="footer-link">Ingeniería de Software</a></li>
                <li><a href="#" className="footer-link">Ingeniería Industrial</a></li>
                <li><a href="#" className="footer-link">Administración de Empresas</a></li>
                <li><a href="#" className="footer-link">Marketing Digital</a></li>
                <li><a href="#" className="footer-link">Postgrados</a></li>
                <li><a href="#" className="footer-link">Certificaciones</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="links-column">
              <h4 className="links-title">Servicios</h4>
              <ul className="links-list">
                <li><a href="#" className="footer-link">Portal Estudiante</a></li>
                <li><a href="#" className="footer-link">Admisiones</a></li>
                <li><a href="#" className="footer-link">Biblioteca Virtual</a></li>
                <li><a href="#" className="footer-link">Bolsa de Trabajo</a></li>
                <li><a href="#" className="footer-link">Soporte Técnico</a></li>
                <li><a href="#" className="footer-link">Empresas Aliadas</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="links-column">
              <h4 className="links-title">Contacto</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <div className="contact-address">
                    <span className="contact-text">Av. Innovación 123</span>
                    <span className="contact-text">Ciudad Tecnológica, CT 12345</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <span className="contact-text">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <span className="contact-text">info@campusvirtual.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2025 CampusVirtual. Todos los derechos reservados.
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacidad</a>
              <a href="#" className="footer-bottom-link">Términos</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              {/* Logo integrado con Torre Eiffel como A */}
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold text-gray-800" style={{fontFamily: 'serif'}}>P</span>
                
                {/* Torre Eiffel como A */}
                <div className="relative mx-1">
                  <svg width="24" height="32" viewBox="0 0 24 32" className="text-amber-700">
                    <defs>
                      <linearGradient id="eiffelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#92400e" />
                        <stop offset="100%" stopColor="#451a03" />
                      </linearGradient>
                    </defs>
                    {/* Base de la torre */}
                    <path d="M3 30 L21 30 L18 24 L6 24 Z" fill="url(#eiffelGradient)" />
                    {/* Segundo nivel */}
                    <path d="M6 24 L18 24 L16 18 L8 18 Z" fill="url(#eiffelGradient)" />
                    {/* Primer nivel */}
                    <path d="M8 18 L16 18 L14 12 L10 12 Z" fill="url(#eiffelGradient)" />
                    {/* Punta */}
                    <path d="M10 12 L14 12 L12 2 Z" fill="url(#eiffelGradient)" />
                    {/* Estructura interna */}
                    <line x1="12" y1="12" x2="12" y2="30" stroke="url(#eiffelGradient)" strokeWidth="1"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="url(#eiffelGradient)" strokeWidth="0.8"/>
                    <line x1="6" y1="27" x2="18" y2="27" stroke="url(#eiffelGradient)" strokeWidth="0.8"/>
                  </svg>
                </div>
                
                <span className="text-3xl font-bold text-gray-800" style={{fontFamily: 'serif'}}>RIS</span>
              </div>
              <div className="ml-3">
                <p className="text-xs text-amber-700 font-bold tracking-[0.2em] uppercase">
                  PRODUCCIONES
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="#agendar" className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors font-medium">
              Agendar Reunión
            </a>
            <a href="#galeria" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Galería
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Servicios
              </a>
              <a 
                href="#agendar" 
                className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors font-medium text-center"
                onClick={toggleMenu}
              >
                Agendar Reunión
              </a>
              <a 
                href="#galeria" 
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Galería
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-yellow-600 transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
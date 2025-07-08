import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center">
                {/* Logo integrado con Torre Eiffel como A */}
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-white" style={{fontFamily: 'serif'}}>P</span>
                  
                  {/* Torre Eiffel como A */}
                  <div className="relative mx-1">
                    <svg width="24" height="32" viewBox="0 0 24 32" className="text-amber-400">
                      <defs>
                        <linearGradient id="eiffelGradientFooter" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                      </defs>
                      {/* Base de la torre */}
                      <path d="M3 30 L21 30 L18 24 L6 24 Z" fill="url(#eiffelGradientFooter)" />
                      {/* Segundo nivel */}
                      <path d="M6 24 L18 24 L16 18 L8 18 Z" fill="url(#eiffelGradientFooter)" />
                      {/* Primer nivel */}
                      <path d="M8 18 L16 18 L14 12 L10 12 Z" fill="url(#eiffelGradientFooter)" />
                      {/* Punta */}
                      <path d="M10 12 L14 12 L12 2 Z" fill="url(#eiffelGradientFooter)" />
                      {/* Estructura interna */}
                      <line x1="12" y1="12" x2="12" y2="30" stroke="url(#eiffelGradientFooter)" strokeWidth="1"/>
                      <line x1="8" y1="21" x2="16" y2="21" stroke="url(#eiffelGradientFooter)" strokeWidth="0.8"/>
                      <line x1="6" y1="27" x2="18" y2="27" stroke="url(#eiffelGradientFooter)" strokeWidth="0.8"/>
                    </svg>
                  </div>
                  
                  <span className="text-3xl font-bold text-white" style={{fontFamily: 'serif'}}>RIS</span>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-amber-400 font-bold tracking-[0.2em] uppercase">
                    PRODUCCIONES
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en sesiones fotográficas para promociones escolares. 
              Vamos a tu colegio, presentamos nuestros servicios y coordinamos las sesiones 
              con cada familia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/51999888777" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#agendar" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
                  Agendar Reunión
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">+51 999 888 777</p>
                  <p className="text-gray-300">+51 555 444 333</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">info@parisproducciones.com</p>
                  <p className="text-gray-300">coordinacion@parisproducciones.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">Lima, Perú</p>
                  <p className="text-gray-300">Servicio a nivel nacional</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sáb: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Paris Producciones. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
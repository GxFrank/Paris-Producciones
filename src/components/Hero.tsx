import React from 'react';
import { Calendar, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-white">
          <path d="M20 106 L100 106 L86 80 L34 80 Z" fill="currentColor" opacity="0.3" />
          <path d="M34 80 L86 80 L76 53 L44 53 Z" fill="currentColor" opacity="0.3" />
          <path d="M44 53 L76 53 L66 26 L54 26 Z" fill="currentColor" opacity="0.3" />
          <path d="M54 26 L66 26 L60 6 Z" fill="currentColor" opacity="0.3" />
          <line x1="60" y1="26" x2="60" y2="106" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <line x1="44" y1="66" x2="76" y2="66" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
          <line x1="34" y1="93" x2="86" y2="93" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ¡Coordinadores de padres de familia!
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Agenda una Reunión
              <span className="text-amber-300 block">en tu Colegio</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Somos especialistas en sesiones fotográficas para promociones escolares. 
              <strong className="text-amber-300"> Vamos a tu colegio </strong> 
              a presentar nuestros servicios a todos los padres de familia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#agendar"
              className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Agendar Reunión Ahora
            </a>
            <a
              href="#servicios"
              className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Ver Servicios
            </a>
          </div>

          {/* Process Steps */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-amber-300 mb-6">¿Cómo funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Agenda</h4>
                <p className="text-gray-300 text-sm">Completa el formulario con los datos del colegio y coordina la fecha</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Presentamos</h4>
                <p className="text-gray-300 text-sm">Vamos al colegio y presentamos nuestros servicios a los padres</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Realizamos</h4>
                <p className="text-gray-300 text-sm">Coordinamos las sesiones fotográficas con cada familia</p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-amber-300">500+</h3>
              <p className="text-gray-300 text-sm">Reuniones Coordinadas</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-amber-300">1000+</h3>
              <p className="text-gray-300 text-sm">Familias Satisfechas</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-amber-300">200+</h3>
              <p className="text-gray-300 text-sm">Colegios Visitados</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-amber-300">15+</h3>
              <p className="text-gray-300 text-sm">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
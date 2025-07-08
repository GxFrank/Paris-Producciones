import React from 'react';
import { Camera, Image, Gift, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Sesiones Fotográficas",
      description: "Sesiones profesionales para promociones de inicial, primaria y secundaria con equipos de alta calidad.",
      features: ["Fotografía individual", "Fotos grupales", "Retratos artísticos", "Sesiones en estudio"]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Cuadros y Marcos",
      description: "Elaboración de cuadros personalizados y marcos elegantes para conservar los recuerdos más preciados.",
      features: ["Cuadros personalizados", "Marcos elegantes", "Diferentes tamaños", "Acabados premium"]
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Paquetes Promocionales",
      description: "Paquetes completos diseñados especialmente para promociones escolares con precios especiales.",
      features: ["Paquetes familiares", "Descuentos por grupo", "Opciones flexibles", "Calidad garantizada"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Servicios Premium",
      description: "Servicios adicionales para hacer de la promoción un evento memorable e inolvidable.",
      features: ["Álbumes digitales", "Retoque profesional", "Entrega rápida", "Garantía de calidad"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios fotográficos integrales para hacer de la promoción de tu hijo 
            un momento único e inolvidable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-800 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
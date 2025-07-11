import React from 'react';
import { Star, Quote } from 'lucide-react';

const Gallery: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Coordinadora de Padres - 5to Primaria",
      school: "Colegio San Martín",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      comment: "Excelente coordinación desde el primer contacto. Vinieron al colegio, hicieron una presentación súper profesional y todos los padres quedaron convencidos. Las fotos de promoción quedaron hermosas."
    },
    {
      name: "Carlos Ruiz",
      role: "Coordinador de Padres - 3ro Secundaria",
      school: "I.E. José Olaya",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      comment: "La reunión fue muy organizada y puntual. Explicaron todo claramente, los precios son justos y la calidad del trabajo es excelente. Recomiendo 100% para coordinadores que buscan un servicio confiable."
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Padres - Inicial",
      school: "Jardín Los Pequeños",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      comment: "Desde la primera reunión se notó el profesionalismo. Fueron muy pacientes con los niños pequeños y las fotos de promoción de inicial quedaron preciosas. Muy recomendable."
    },
    {
      name: "Roberto Silva",
      role: "Coordinador de Padres - 6to Primaria",
      school: "Colegio San Francisco",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      comment: "El proceso fue súper fácil. Llenamos el formulario, vinieron al colegio, presentaron sus servicios y coordinamos todo. Los padres quedaron encantados con los resultados."
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Testimonios de Coordinadores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lo que dicen los coordinadores de padres de familia que han trabajado con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-yellow-400 opacity-20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-amber-700 font-medium">{testimonial.school}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros trabajos más destacados en promociones escolares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image}
                alt={`Trabajo ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">Promoción Escolar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
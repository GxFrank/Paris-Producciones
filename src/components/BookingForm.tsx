import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, User, GraduationCap, CheckCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    coordinatorName: '',
    email: '',
    phone: '',
    schoolName: '',
    grade: '',
    section: '',
    estimatedParents: '',
    preferredDate: '',
    preferredTime: '',
    meetingLocation: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    setIsSubmitted(true);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <section id="agendar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                ¡Solicitud Enviada Exitosamente!
              </h2>
              <p className="text-lg text-green-700 mb-6">
                Gracias por contactarnos. Nos pondremos en contacto contigo dentro de las próximas 24 horas 
                para confirmar la reunión en <strong>{formData.schoolName}</strong>.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">Resumen de tu solicitud:</h3>
                <div className="text-left space-y-2 text-sm">
                  <p><strong>Coordinador:</strong> {formData.coordinatorName}</p>
                  <p><strong>Colegio:</strong> {formData.schoolName}</p>
                  <p><strong>Grado:</strong> {formData.grade}</p>
                  <p><strong>Fecha preferida:</strong> {formData.preferredDate}</p>
                  <p><strong>Hora preferida:</strong> {formData.preferredTime}</p>
                  <p><strong>Padres estimados:</strong> {formData.estimatedParents}</p>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Agendar Otra Reunión
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendar" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Paso 1: Coordina tu reunión
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Agenda una Reunión en tu Colegio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Completa este formulario y coordinaremos una reunión en tu colegio para presentar 
              nuestros servicios fotográficos a todos los padres de familia.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información del Coordinador */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-amber-700" />
                  Datos del Coordinador
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="coordinatorName"
                      value={formData.coordinatorName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="999 999 999"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Información del Colegio */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-amber-700" />
                  Información del Colegio
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nombre del Colegio *
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Nombre completo del colegio"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Grado/Nivel *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona el grado</option>
                      <option value="inicial">Inicial</option>
                      <option value="1ro-primaria">1ro Primaria</option>
                      <option value="2do-primaria">2do Primaria</option>
                      <option value="3ro-primaria">3ro Primaria</option>
                      <option value="4to-primaria">4to Primaria</option>
                      <option value="5to-primaria">5to Primaria</option>
                      <option value="6to-primaria">6to Primaria</option>
                      <option value="1ro-secundaria">1ro Secundaria</option>
                      <option value="2do-secundaria">2do Secundaria</option>
                      <option value="3ro-secundaria">3ro Secundaria</option>
                      <option value="4to-secundaria">4to Secundaria</option>
                      <option value="5to-secundaria">5to Secundaria</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Sección
                    </label>
                    <input
                      type="text"
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Ej: A, B, C, D"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Users className="w-4 h-4 inline mr-2" />
                      Número Estimado de Padres *
                    </label>
                    <input
                      type="number"
                      name="estimatedParents"
                      value={formData.estimatedParents}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Ej: 30"
                    />
                  </div>
                </div>
              </div>

              {/* Información de la Reunión */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-amber-700" />
                  Detalles de la Reunión
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Hora Preferida *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona una hora</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Lugar de la Reunión *
                  </label>
                  <input
                    type="text"
                    name="meetingLocation"
                    value={formData.meetingLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="Ej: Aula magna, Auditorio, Salón de usos múltiples"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Información Adicional
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="Horarios específicos, requisitos especiales, comentarios adicionales..."
                  />
                </div>
              </div>

              <div className="text-center pt-8 border-t border-gray-200">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar Solicitud de Reunión
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * Campos obligatorios. Te contactaremos dentro de las próximas 24 horas para confirmar los detalles.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, User, GraduationCap, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    
    if (name === 'phone') {
     const numbersOnly = value.replace(/\D/g, ''); 
      if (numbersOnly.length <= 9) {
        setFormData(prev => ({
          ...prev,
          [name]: numbersOnly
        }));
    }
    return;
  }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };



  // Validación básica para habilitar el botón "Siguiente"
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.coordinatorName && formData.email && formData.phone;
      case 2:
        return formData.schoolName && formData.grade && formData.estimatedParents;
      case 3:
        return formData.preferredDate && formData.preferredTime && formData.meetingLocation;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section id="agendar" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
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
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
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
                }}
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Agenda una Reunión en tu Colegio
            </h2>
            <p className="text-xl text-gray-600">
              Solo 3 pasos simples para coordinar la presentación
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-amber-700' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 1 ? 'bg-amber-700 border-amber-700 text-white' : 'border-gray-300'
                }`}>
                  1
                </div>
                <span className="ml-2 font-semibold hidden sm:block">Tus Datos</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${currentStep >= 2 ? 'bg-amber-700' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 2 ? 'text-amber-700' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 2 ? 'bg-amber-700 border-amber-700 text-white' : 'border-gray-300'
                }`}>
                  2
                </div>
                <span className="ml-2 font-semibold hidden sm:block">Del Colegio</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${currentStep >= 3 ? 'bg-amber-700' : 'bg-gray-300'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 3 ? 'text-amber-700' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 3 ? 'bg-amber-700 border-amber-700 text-white' : 'border-gray-300'
                }`}>
                  3
                </div>
                <span className="ml-2 font-semibold hidden sm:block">Reunión</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              
              {/* PASO 1: Datos del Coordinador */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <User className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Datos del Coordinador
                    </h3>
                    <p className="text-gray-600">
                      Cuéntanos quién eres y cómo contactarte
                    </p>
                  </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          maxLength={9}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="999999999"
                      />
                      {formData.phone.length > 0 && formData.phone.length < 9 && (
                        <p className="text-red-500 text-sm mt-1">
                          El teléfono debe tener exactamente 9 dígitos
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 2: Información del Colegio */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <GraduationCap className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Información del Colegio
                    </h3>
                    <p className="text-gray-600">
                      Detalles sobre el colegio y los estudiantes
                    </p>
                  </div>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Nombre completo del colegio"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Grado/Nivel *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Sección
                      </label>
                      <input
                        type="text"
                        name="section"
                        value={formData.section}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Ej: A, B, C"
                      />
                    </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Ej: 30"
                    />
                  </div>
                </div>
              )}

              {/* PASO 3: Detalles de la Reunión */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Calendar className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Detalles de la Reunión
                    </h3>
                    <p className="text-gray-600">
                      Cuándo y dónde te gustaría que vayamos
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Fecha Preferida *
                      </label>
                      <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
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

                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Ej: Aula magna, Auditorio, Salón de usos múltiples"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Comentarios Adicionales
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Horarios específicos, requisitos especiales..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Anterior
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`flex items-center px-8 py-3 rounded-lg font-semibold transition-all ${
                      isStepValid()
                        ? 'bg-amber-700 hover:bg-amber-800 text-white transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white transform hover:scale-105 shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Enviar Solicitud
                  </button>
                )}
              </div>

              {/* Progress indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  Paso {currentStep} de 3 - {
                    currentStep === 1 ? 'Tus datos personales' :
                    currentStep === 2 ? 'Información del colegio' :
                    'Detalles de la reunión'
                  }
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
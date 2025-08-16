import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, FileText, User, CreditCard, GraduationCap, Clock, ArrowRight } from 'lucide-react';

const pasosProceso = [
  {
    numero: 1,
    titulo: 'Registro Inicial',
    descripcion: 'Completa tu perfil básico y descarga el formulario de aplicación',
    icon: User,
    tiempo: '5 min',
    color: 'from-blue-500 to-cyan-500',
    acciones: ['Crear cuenta', 'Verificar email', 'Completar perfil básico']
  },
  {
    numero: 2,
    titulo: 'Documentación',
    descripcion: 'Sube todos los documentos requeridos para tu aplicación',
    icon: FileText,
    tiempo: '15 min',
    color: 'from-green-500 to-emerald-500',
    acciones: ['Certificado de bachillerato', 'Transcripts académicos', 'Ensayo motivacional', 'Carta de recomendación']
  },
  {
    numero: 3,
    titulo: 'Evaluación Virtual',
    descripcion: 'Presenta las pruebas de conocimiento y habilidades específicas',
    icon: GraduationCap,
    tiempo: '90 min',
    color: 'from-purple-500 to-pink-500',
    acciones: ['Test de aptitudes', 'Evaluación técnica', 'Entrevista virtual', 'Prueba de idiomas']
  },
  {
    numero: 4,
    titulo: 'Proceso de Pago',
    descripcion: 'Confirma tu matrícula y realiza el primer pago',
    icon: CreditCard,
    tiempo: '10 min',
    color: 'from-orange-500 to-red-500',
    acciones: ['Seleccionar plan de pago', 'Procesar matrícula', 'Recibir confirmación']
  }
];

const requisitos = [
  'Título de bachillerato o equivalente',
  'Promedio mínimo de 3.5/5.0',
  'Nivel de inglés B2 (certificado)',
  'Ensayo motivacional (500 palabras)',
  'Una carta de recomendación académica o profesional',
  'Entrevista virtual con el comité de admisiones'
];

export function AdmisionesSection() {
  return (
    <section id="admisiones" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 border-0">
            Tu Futuro Comienza Aquí
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Proceso de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Admisiones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y transparente diseñado para identificar a los futuros líderes de la transformación digital.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Pasos del Proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasosProceso.map((paso) => {
              const IconComponent = paso.icon;
              return (
                <Card key={paso.numero} className="relative overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  {/* Step number badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${paso.color} text-white flex items-center justify-center text-sm font-bold`}>
                      {paso.numero}
                    </div>
                  </div>

                  <CardHeader>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${paso.color} text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{paso.titulo}</CardTitle>
                    <CardDescription>{paso.descripcion}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{paso.tiempo}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {paso.acciones.map((accion, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{accion}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Requirements and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <Card className="border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Requisitos de Admisión</span>
              </CardTitle>
              <CardDescription>
                Asegúrate de cumplir con todos los requisitos antes de aplicar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requisitos.map((requisito, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{requisito}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span>Cronograma 2025</span>
              </CardTitle>
              <CardDescription>
                Fechas importantes para el proceso de admisiones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <div>
                    <div className="font-semibold">Apertura de Aplicaciones</div>
                    <div className="text-sm text-muted-foreground">Registro disponible</div>
                  </div>
                  <Badge className="bg-blue-600 text-white">1 Mar</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div>
                    <div className="font-semibold">Fecha Límite</div>
                    <div className="text-sm text-muted-foreground">Aplicaciones completas</div>
                  </div>
                  <Badge className="bg-green-600 text-white">15 Jun</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                  <div>
                    <div className="font-semibold">Resultados</div>
                    <div className="text-sm text-muted-foreground">Notificación de admisión</div>
                  </div>
                  <Badge className="bg-purple-600 text-white">30 Jul</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
                  <div>
                    <div className="font-semibold">Inicio de Clases</div>
                    <div className="text-sm text-muted-foreground">Primer semestre</div>
                  </div>
                  <Badge className="bg-orange-600 text-white">15 Ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Listo para Transformar tu Futuro?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a la próxima generación de profesionales formados con el modelo dual alemán. 
            Tu aventura hacia la excelencia profesional comienza con un solo clic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-0 px-8 py-3 group">
              Iniciar Aplicación
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3">
              Solicitar Información
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
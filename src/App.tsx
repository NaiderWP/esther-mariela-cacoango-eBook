import React, { useState } from "react";
import { BookOpen, AlertTriangle, CheckCircle, GraduationCap, ArrowDown, Sparkles } from "lucide-react";

// Helper component for the fallback Logo + Image to handle 0-byte or empty uploaded images gracefully
function UnemiLogo({ className = "h-16", size = "large" }: { className?: string, size?: "large" | "small" }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${size === "large" ? "justify-center" : ""}`}>
      {!hasError ? (
        <img
          src="/logo_unemi.png"
          alt="UNEMI Logo"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`${className} object-contain transition-all duration-300`}
        />
      ) : null}
      
      {/* If error occurs (e.g. 0-byte empty file), or next to it, ensure a beautiful high-end fallback is visible */}
      {(hasError || size === "large") && (
        <div className={`flex flex-col ${size === "large" ? "items-center text-center" : "items-start"}`}>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#004080] rounded-full flex items-center justify-center text-[10px] text-white font-extrabold shadow-sm">
              U
            </span>
            <span className="font-display font-black tracking-widest text-lg text-[#004080] uppercase">
              UNEMI
            </span>
          </div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mt-0.5 whitespace-nowrap">
            Universidad Estatal de Milagro
          </span>
        </div>
      )}
    </div>
  );
}

// Subcomponent representing a beautiful, structured numbered academic sheet
interface DocumentSheetProps {
  pageNumber: number;
  totalPageCount: number;
  children: React.ReactNode;
}

function DocumentSheet({ pageNumber, totalPageCount, children }: DocumentSheetProps) {
  return (
    <section className="mx-auto my-8 max-w-[850px] min-h-[1100px] w-full bg-white border border-slate-200/80 shadow-lg rounded-xs p-12 md:p-16 flex flex-col justify-between relative transition-all duration-300 print:my-0 print:border-none print:shadow-none print:p-8 print:min-h-screen">
      {/* Page Header (Only visible / structured elegantly on sheet mode) */}
      <div className="w-full mb-10">
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 text-xs tracking-wider uppercase text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <UnemiLogo className="h-6" size="small" />
          </div>
          <div className="flex items-center gap-1.5 text-[#FF6600] font-bold text-[10px] tracking-widest">
            <Sparkles className="w-3 h-3" /> E-LEARNING: TRENDS & CHALLENGES
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <div className="flex-1 flex flex-col justify-start text-slate-700 font-sans text-sm md:text-base leading-relaxed">
        {children}
      </div>

      {/* Page Footer */}
      <div className="w-full mt-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-1.5 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-[#004080]" />
          <span>Documento de Trabajo de Grado</span>
        </div>
        <div className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100 font-semibold font-mono text-[11px]">
          PÁG. {pageNumber} DE {totalPageCount}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const totalSheetsCount = 4;

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased py-6 px-4 flex flex-col items-center">
      
      {/* Floating hints for printable documents in development preview */}
      <div className="w-full max-w-[850px] bg-[#004080] text-white p-4 rounded-xl shadow-md mb-2 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FF6600]">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold leading-none uppercase">Ebook Académico Oficializado</h4>
            <p className="text-[10px] text-slate-200 mt-1">Formato de lectura y scroll continuo.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#004080] rounded-lg text-xs font-bold hover:bg-slate-100 transition-all cursor-pointer shadow-xs"
          >
            Imprimir / Guardar PDF
          </button>
        </div>
      </div>

      <div className="w-full max-w-[850px] flex flex-col gap-2">
        
        {/* HOJA 1: PORTADA EN FORMATO DE HOJA A4 */}
        <section className="mx-auto my-8 max-w-[850px] min-h-[1100px] w-full bg-white border border-slate-200/80 shadow-lg rounded-xs px-12 md:px-16 py-16 flex flex-col justify-between relative transition-all duration-300 print:my-0 print:border-none print:shadow-none print:min-h-screen">
          
          {/* Top Decorative bar */}
          <div className="w-full h-1.5 bg-gradient-to-r from-[#004080] via-[#FF6600] to-[#004080]" />

          {/* Central Block of Cover Page info */}
          <div className="flex-1 flex flex-col justify-center items-center my-8 text-center">
            
            {/* Main Logo Container */}
            <div className="mb-10">
              <UnemiLogo className="h-20" size="large" />
            </div>

            <div className="w-16 h-1 bg-[#FF6600] mb-8" />

            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF6600] mb-2 block">
              Documento de Trabajo Curricular
            </span>

            <h1 className="font-display font-black text-3xl md:text-4xl text-[#004080] tracking-tight leading-none uppercase mb-6 max-w-lg">
              E-LEARNING – TRENDS & CHALLENGES
            </h1>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 w-full max-w-lg space-y-3.5 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Unidad Curricular</span>
                <p className="text-xs md:text-sm font-bold text-slate-700">
                  Unidad 1: Essential aspects and components of e-learning
                </p>
              </div>

              <div className="h-[1px] bg-slate-200 w-full" />

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Temáticas Abordadas</span>
                <p className="text-xs font-semibold text-[#004080]">
                  Temas: 1, 2 y 3
                </p>
              </div>

              <div className="h-[1px] bg-slate-200 w-full" />

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Catedrático Tutor</span>
                <p className="text-xs md:text-sm font-bold text-slate-700 flex items-center justify-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#FF6600]" />
                  Mqtr. Jorge Zambrano Pachay
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium max-w-sm leading-relaxed mt-8">
              Compendio institucional editado para la asimilación autónoma del estudiante de grado.
            </p>
          </div>

          {/* Footer of the Cover page */}
          <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold bg-white">
            <span className="uppercase tracking-widest">Compendio de Lectura Obligatoria</span>
            <span className="font-mono bg-slate-50 px-3 py-1 rounded-md border border-slate-100 text-slate-600 font-semibold">
              PÁG. 1 DE {totalSheetsCount}
            </span>
          </div>

        </section>

        {/* HOJA 2: TEMA 1 */}
        <DocumentSheet pageNumber={2} totalPageCount={totalSheetsCount}>
          <div className="space-y-6">
            
            {/* Header Theme Title */}
            <div className="space-y-1.5 border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-[#FF6600]">Tema 1</span>
              <h2 className="text-lg md:text-xl font-display font-extrabold text-[#004080] uppercase tracking-tight">
                E-learning: ICT and educational system integration
              </h2>
            </div>

            {/* Definición Section */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Definición de E-Learning
              </h3>
              <p className="text-slate-600 font-medium text-[13px] md:text-sm pl-3 border-l-2 border-slate-200">
                E-learning significa "educación electrónica". Es una disciplina donde se combinan la teoría de la enseñanza y las tecnologías de red para permitir que los estudiantes completen sus cursos a través de una red informática (Internet o Intranet).
              </p>
            </div>

            {/* Conectivismo Section */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Conectivismo como teoría de aprendizaje
              </h3>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">
                El conectivismo se caracteriza como la mejora de cómo un estudiante aprende con el conocimiento y la percepción adquiridos mediante la adición de una red personal <span className="font-mono text-[11px] bg-slate-50 px-1 border border-slate-100 rounded-sm text-slate-400 font-medium">(Siemens, 2004)</span>.
              </p>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">
                Las socializaciones conectivistas ayudan al estudiante a estructurar (cognitivismo) y crear significado a partir de lo observado (constructivismo), estableciendo patrones reconocibles para usar en situaciones futuras (conectivismo).
              </p>
            </div>

            {/* Habilidades TIC Grid */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Habilidades TIC en e-learning
              </h3>
              <p className="text-slate-500 text-[12px] leading-relaxed">
                Las Tecnologías de la Información y la Comunicación (TIC) juegan un papel fundamental en e-learning. Es necesario:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {[
                  "Mejorar las habilidades TIC",
                  "Comprender el proceso de creación de contenidos",
                  "Conocer la evaluación en e-learning",
                  "Fomentar la cooperación entre estudiantes y docentes",
                  "Manejar herramientas virtuales y redes sociales para el aprendizaje"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#004080]/10 text-[#004080] flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-[12px] md:text-xs text-slate-600 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metas del E-learning */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Metas y Ventajas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#004080]/5 rounded-xl border border-[#004080]/15 space-y-2">
                  <span className="text-[10px] uppercase font-extrabold text-[#004080]">Metas (Campus Technology, 2018)</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Flexibilidad y accesibilidad</li>
                    <li>• Distribución mundial de bajo costo</li>
                    <li>• Ahorro de tiempo y costos de viaje</li>
                    <li>• Mejora de eficiencia en formación</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#FF6600]/5 rounded-xl border border-[#FF6600]/15 space-y-2">
                  <span className="text-[10px] uppercase font-extrabold text-[#FF6600]">Ventajas Principales</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Flexibilidad, accesibilidad y conveniencia</li>
                    <li>• Distribución global económica</li>
                    <li>• Multiplataforma sin trabas de sistema</li>
                    <li>• Amplia disponibilidad de navegadores</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitaciones y Contexto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="font-bold text-xs text-[#004080] uppercase tracking-wider">Limitaciones del E-Learning</h4>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li className="flex items-start gap-1 pb-1">
                    <span className="text-red-500 font-bold mr-1 shrink-0">•</span> 
                    Limitaciones de ancho de banda
                  </li>
                  <li className="flex items-start gap-1 pb-1">
                    <span className="text-red-500 font-bold mr-1 shrink-0">•</span> 
                    Pérdida de contacto humano directo
                  </li>
                  <li className="flex items-start gap-1 pb-1">
                    <span className="text-red-500 font-bold mr-1 shrink-0">•</span> 
                    Resistencia al cambio tradicional
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-red-500 font-bold mr-1 shrink-0">•</span> 
                    Programas estáticos o rígidos
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                <span className="text-[10px] uppercase font-extrabold text-slate-400 block tracking-widest">E-learning y COVID-19</span>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  La pandemia ha convertido al e-learning en la única alternativa educativa, pero no debe verse como algo negativo. Es una oportunidad para aprender sobre esta modalidad y aplicarla incluso después del aislamiento.
                </p>
              </div>
            </div>

          </div>
        </DocumentSheet>

        {/* HOJA 3: TEMA 2 */}
        <DocumentSheet pageNumber={3} totalPageCount={totalSheetsCount}>
          <div className="space-y-6">
            
            {/* Theme 2 Header */}
            <div className="space-y-1.5 border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-[#FF6600]">Tema 2</span>
              <h2 className="text-lg md:text-xl font-display font-extrabold text-[#004080] uppercase tracking-tight">
                Content Development
              </h2>
            </div>

            {/* Contenido para E-learning */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Contenido para e-learning
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                El contenido puede ser producido bajo requerimientos específicos para el óptimo aprendizaje en la red:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-1">
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <span className="font-extrabold text-[10px] text-[#004080] uppercase tracking-wider block">Autoaprendizaje</span>
                  <p className="text-xs text-slate-600">Soporte enfocado a ritmo propio con rutas personalizadas basadas de manera precisa en objetivos curriculares.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                  <span className="font-extrabold text-[10px] text-[#FF6600] uppercase tracking-wider block">Distribución Modular</span>
                  <p className="text-xs text-slate-600">Alojamiento formal en servidor web con acceso instantáneo vía plataforma LMS integrada o aula abierta virtual.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-1 sm:col-span-2">
                  <span className="font-extrabold text-[10px] text-slate-400 uppercase tracking-wider block">Enfoque Multimedia Diversificado</span>
                  <p className="text-xs text-slate-600">Uso consolidado de múltiples elementos síncronos e independientes: texto estructurado, gráficos informacionales, audios ilustrativos y videos.</p>
                </div>
              </div>
            </div>

            {/* Tipos de contenido */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Tipos de contenido e-learning
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border-l-4 border-[#004080] rounded-r-xl">
                  <h4 className="font-bold text-xs uppercase text-[#004080] tracking-wide mb-1">Asincrónico</h4>
                  <p className="text-[11px] leading-relaxed text-slate-600">Acceso libre al contenido fuera del espacio del aula física, adaptado al horario y planificación del alumno sin enlaces estrictos.</p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-[#FF6600] rounded-r-xl">
                  <h4 className="font-bold text-xs uppercase text-[#FF6600] tracking-wide mb-1">Sincrónico</h4>
                  <p className="text-[11px] leading-relaxed text-slate-600">Similar en tiempos a la enseñanza tradicional presencial, con interacciones y ponencias en vivo de forma computacional.</p>
                </div>
              </div>
            </div>

            {/* Competencias docentes */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Competencias docentes para e-learning
              </h3>
              <p className="text-slate-500 text-[11px] pl-1">
                La enseñanza digital requiere el despliegue de sólidas competencias metodológicas y de interacción:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Planificación y organización",
                  "Habilidades de comunicación",
                  "Trabajo colaborativo",
                  "Estrategias de interrogación",
                  "Dominio de la materia",
                  "Conocimiento de teorías de aprendizaje"
                ].map((comp, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-center">
                    <span className="text-[11px] font-bold text-slate-700 block">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles del instructor */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Roles del instructor en línea (ISTE, 2014)
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Investigador",
                  "Tecnólogo",
                  "Facilitador de contenido",
                  "Administrador o gestor",
                  "Diseñador",
                  "Asesor o consejero",
                  "Facilitador del proceso",
                  "Evaluador"
                ].map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#004080]/5 text-[#004080] border border-[#004080]/10 rounded-full text-xs font-bold font-mono"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </DocumentSheet>

        {/* HOJA 4: TEMA 3 */}
        <DocumentSheet pageNumber={4} totalPageCount={totalSheetsCount}>
          <div className="space-y-6">
            
            {/* Theme 3 Header */}
            <div className="space-y-1.5 border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-[#FF6600]">Tema 3</span>
              <h2 className="text-lg md:text-xl font-display font-extrabold text-[#004080] uppercase tracking-tight">
                Educational and cultural portals as a teaching-learning strategy
              </h2>
            </div>

            {/* Portales */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Definición de portales culturales-educativos
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-[#004080]">
                Los portales son puertas de entrada a sitios web. Los portales culturales son especializados: proporcionan acceso a recursos web culturales existentes y también contribuyen de manera directa a la producción y distribución de su propio contenido académico regional.
              </p>
            </div>

            {/* Estructura Propuesta */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Estructura de un portal educativo (Propuesta)
              </h3>
              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#004080] text-white font-mono text-[9px] font-extrabold rounded-md uppercase">Nivel 1</span>
                  <span className="text-xs font-bold text-slate-700">Noticias y Servicio de Información</span>
                </div>
                <div className="h-[1px] bg-slate-200" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#FF6600] text-white font-mono text-[9px] font-extrabold rounded-md uppercase">Nivel 2</span>
                    <span className="text-xs font-bold text-[#004080]">Educación (Organizada por Cursos)</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-4">
                    {[
                      "Información curso",
                      "Material didáctico",
                      "Blog / novedades",
                      "Calendario académico",
                      "Mensajería de tutor",
                      "Foro de dudas"
                    ].map((cur, i) => (
                      <span key={i} className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 text-center">
                        {cur}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-[1px] bg-slate-200" />
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-slate-400 text-white font-mono text-[9px] font-extrabold rounded-md uppercase">Nivel 3</span>
                  <span className="text-xs font-bold text-slate-700">Módulo de Investigación y Ensayos</span>
                </div>
              </div>
            </div>

            {/* Beneficios */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Beneficios de los recursos virtuales de aprendizaje
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed italic pr-4 pl-3 border-l-2 border-[#FF6600]">
                "La variedad de recursos facilita el uso informado y permite a los estudiantes crear el entorno de aprendizaje más adecuado para sus necesidades y preferencias personales" <span className="font-bold font-mono text-[10px] text-slate-500">(Tosun, 2018)</span>.
              </p>
            </div>

            {/* Herramientas Virtuales */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Principales tipos de herramientas virtuales
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Sistemas de gestión de aprendizaje (LMS)",
                  "Plataformas de experiencia de aprendizaje (LXP)",
                  "Herramientas de videoformación síncrona",
                  "Plataformas de microaprendizaje rápido",
                  "Gestores de proyectos y planificación",
                  "Herramientas de creación de contenido",
                  "Herramientas de gestión de contenido",
                  "Sistemas de comunicación abierta",
                  "Redes sociales de aprendizaje"
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1.5 bg-[#FF6600]/5 text-[#FF6600] border border-[#FF6600]/10 rounded-lg text-[11px] font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </DocumentSheet>

      </div>
    </div>
  );
}

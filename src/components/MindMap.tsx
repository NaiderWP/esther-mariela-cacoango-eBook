import React, { useState } from "react";
import { Play, Layers, Award, Sparkles, Server, Compass, CheckCircle } from "lucide-react";

interface MindMapProps {
  unitId: "unit-1" | "unit-2";
}

export default function MindMap({ unitId }: MindMapProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // SVG-based responsive structured conceptual diagram / mind map
  if (unitId === "unit-1") {
    return (
      <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 my-4 relative overflow-hidden">
        <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-semibold text-blue-700">
          <Sparkles className="w-3 h-3" /> Diagrama Unificado
        </div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-unemi-blue" /> Mapa Mental Conceptual Especializado
        </h4>

        {/* Responsive Flex / SVG Hybrid layout to ensure it looks amazing and doesn't clip on small displays */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between relative">
          {/* Central Root Node */}
          <div className="flex-1 flex items-center justify-center md:max-w-[200px]">
            <div 
              className={`w-full text-center p-4 rounded-xl border-2 transition-all duration-300 shadow-md ${
                hoveredNode === "root" ? "bg-blue-900 text-white border-blue-900 scale-105" : "bg-white text-unemi-blue border-unemi-blue"
              }`}
              onMouseEnter={() => setHoveredNode("root")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-unemi-orange">
                <Compass className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-xs uppercase leading-tight">ENTORNOS VIRTUALES Y TICs</h5>
              <p className="text-[9px] text-slate-500 mt-1">Ecosistema Global</p>
            </div>
          </div>

          {/* Connectors & Branches */}
          <div className="flex-[2] flex flex-col gap-4">
            {/* Branch 1 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-unemi-blue" />
                <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">1. Rol de las TICs</h6>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-orange">Punto de Vista</span>
                  Constructivismo Digital
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-orange">Estudiante</span>
                  Rol Activo y Central
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-orange">Impacto</span>
                  Socio-Democratización
                </div>
              </div>
            </div>

            {/* Branch 2 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-unemi-orange" />
                <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">2. Plataformas EVA</h6>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-blue">Administración</span>
                  Estructura LMS
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-blue">Tecnología</span>
                  Moodle Institucional
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-unemi-blue">Acceso</span>
                  Aula Virtual UNEMI
                </div>
              </div>
            </div>

            {/* Branch 3 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">3. Web 2.0 Colaborativa</h6>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-emerald-600">Creación</span>
                  Trabajo Co-creativo
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-emerald-600">Almacenamiento</span>
                  Nube Estructurada
                </div>
                <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                  <span className="font-semibold block text-emerald-600">Sinergia</span>
                  Inteligencia Colectiva
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unit 2 Mind Map
  return (
    <div className="w-full bg-orange-50/40 border border-orange-100 rounded-2xl p-4 my-4 relative overflow-hidden">
      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-50 text-[10px] font-semibold text-orange-700">
        <Sparkles className="w-3 h-3" /> Diagrama Unificado
      </div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-1.5">
        <Layers className="w-3.5 h-3.5 text-unemi-orange" /> Mapa Mental Conceptual Especializado
      </h4>

      <div className="flex flex-col md:flex-row gap-6 items-stretch justify-between relative">
        {/* Central Root Node */}
        <div className="flex-1 flex items-center justify-center md:max-w-[200px]">
          <div 
            className={`w-full text-center p-4 rounded-xl border-2 transition-all duration-300 shadow-md ${
              hoveredNode === "root" ? "bg-orange-600 text-white border-orange-600 scale-105" : "bg-white text-unemi-orange border-unemi-orange"
            }`}
            onMouseEnter={() => setHoveredNode("root")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-unemi-blue">
              <Server className="w-5 h-5" />
            </div>
            <h5 className="font-bold text-xs uppercase leading-tight">CIUDADANÍA Y CIBERSEGURIDAD</h5>
            <p className="text-[9px] text-slate-500 mt-1">Ética e Integridad</p>
          </div>
        </div>

        {/* Connectors & Branches */}
        <div className="flex-[2] flex flex-col gap-4">
          {/* Branch 1 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-unemi-blue" />
              <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">1. Huella Digital</h6>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-orange">Persistencia</span>
                Rastro Permanente
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-orange">Profesional</span>
                Identidad Académica
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-orange">Resguardo</span>
                Privacidad Proactiva
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-unemi-orange" />
              <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">2. Ciberseguridad</h6>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-blue">Acceso</span>
                MFA y Complejidad
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-blue">Amenaza</span>
                Ingeniería Social
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-unemi-blue">Prevención</span>
                Copias y Backups
              </div>
            </div>
          </div>

          {/* Branch 3 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h6 className="font-semibold text-xs text-unemi-blue uppercase tracking-wide">3. Netiqueta Académica</h6>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-indigo-600">Tono</span>
                Respeto sin Mayúsculas
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-indigo-600">Formalidad</span>
                Estructura del Correo
              </div>
              <div className="p-2 bg-slate-50 rounded-lg text-center text-[10px] text-slate-600 border border-slate-100">
                <span className="font-semibold block text-indigo-600">Diálogo</span>
                Resolución Pacífica
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

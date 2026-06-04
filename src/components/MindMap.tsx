import React, { useState } from "react";
import { Play, Layers, Award, Sparkles, Server, Compass, CheckCircle } from "lucide-react";

interface MindMapProps {
  unitId: "unit-1" | "unit-2";
  compact?: boolean;
}

export default function MindMap({ unitId, compact = false }: MindMapProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Styles based on 'compact' mode
  const outerPadding = compact ? "p-2 my-0.5" : "p-4 my-4";
  const headerMargin = compact ? "mb-1.5" : "mb-6";
  const centralNodePadding = compact ? "p-2.5" : "p-4";
  const nodeGap = compact ? "gap-2" : "gap-4";
  const innerFlexGap = compact ? "gap-3" : "gap-6";
  const branchPadding = compact ? "p-2" : "p-3.5";
  const subGridGap = compact ? "gap-1" : "gap-2";
  const subBoxPadding = compact ? "py-1 px-1.5" : "p-2";
  const subBoxText = compact ? "text-[8.5px]" : "text-[10px]";

  if (unitId === "unit-1") {
    return (
      <div className={`w-full bg-slate-50 border border-slate-100 rounded-2xl relative overflow-hidden ${outerPadding}`}>
        <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-semibold text-blue-700">
          <Sparkles className="w-3 h-3" /> Diagrama
        </div>
        {!compact && (
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-unemi-blue" /> Mapa Mental Conceptual Especializado
          </h4>
        )}

        <div className={`flex flex-col md:flex-row items-stretch justify-between relative ${innerFlexGap}`}>
          {/* Central Root Node */}
          <div className="flex-1 flex items-center justify-center md:max-w-[150px]">
            <div 
              className={`w-full text-center rounded-xl border-2 transition-all duration-300 shadow-md ${centralNodePadding} ${
                hoveredNode === "root" ? "bg-blue-900 text-white border-blue-900 scale-102" : "bg-white text-unemi-blue border-unemi-blue"
              }`}
              onMouseEnter={() => setHoveredNode("root")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-1 text-unemi-orange ${compact ? "w-7 h-7" : "w-10 h-10"}`}>
                <Compass className={compact ? "w-4 h-4" : "w-5 h-5"} />
              </div>
              <h5 className="font-bold text-[10.5px] uppercase leading-tight">ENTORNOS VIRTUALES Y TICs</h5>
              <p className="text-[8px] text-slate-500">Ecosistema Global</p>
            </div>
          </div>

          {/* Connectors & Branches */}
          <div className={`flex-[2] flex flex-col ${nodeGap}`}>
            {/* Branch 1 */}
            <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-unemi-blue" />
                <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">1. Rol de las TICs</h6>
              </div>
              <div className={`grid grid-cols-3 ${subGridGap}`}>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-orange max-sm:inline">Construcción</span>
                  Digital
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-orange max-sm:inline">Estudiante</span>
                  Rol Activo
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-orange max-sm:inline">Impacto</span>
                  Democracia
                </div>
              </div>
            </div>

            {/* Branch 2 */}
            <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-unemi-orange" />
                <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">2. Plataformas EVA</h6>
              </div>
              <div className={`grid grid-cols-3 ${subGridGap}`}>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-blue max-sm:inline">Admin</span>
                  LMS Moodle
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-blue max-sm:inline">Esencia</span>
                  UNEMI
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-unemi-blue max-sm:inline">Acceso</span>
                  Aula Virtual
                </div>
              </div>
            </div>

            {/* Branch 3 */}
            <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">3. Web 2.0 Sinergias</h6>
              </div>
              <div className={`grid grid-cols-3 ${subGridGap}`}>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-emerald-600 max-sm:inline">Creación</span>
                  Blogs / Wikis
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-emerald-600 max-sm:inline">Espacio</span>
                  Nube
                </div>
                <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                  <span className="font-semibold block text-emerald-600 max-sm:inline">Sinergia</span>
                  Colectiva
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
    <div className={`w-full bg-orange-50/40 border border-orange-100 rounded-2xl relative overflow-hidden ${outerPadding}`}>
      <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-50 text-[10px] font-semibold text-orange-700">
        <Sparkles className="w-3 h-3" /> Diagrama
      </div>
      {!compact && (
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-unemi-orange" /> Mapa Mental Conceptual Especializado
        </h4>
      )}

      <div className={`flex flex-col md:flex-row items-stretch justify-between relative ${innerFlexGap}`}>
        {/* Central Root Node */}
        <div className="flex-1 flex items-center justify-center md:max-w-[150px]">
          <div 
            className={`w-full text-center rounded-xl border-2 transition-all duration-300 shadow-md ${centralNodePadding} ${
              hoveredNode === "root" ? "bg-orange-600 text-white border-orange-600 scale-102" : "bg-white text-unemi-orange border-unemi-orange"
            }`}
            onMouseEnter={() => setHoveredNode("root")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className={`bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-1 text-unemi-blue ${compact ? "w-7 h-7" : "w-10 h-10"}`}>
              <Server className={compact ? "w-4 h-4" : "w-5 h-5"} />
            </div>
            <h5 className="font-bold text-[10.5px] uppercase leading-tight">CIUDADANÍA Y SEGURIDAD</h5>
            <p className="text-[8px] text-slate-500">Ética e Integridad</p>
          </div>
        </div>

        {/* Connectors & Branches */}
        <div className={`flex-[2] flex flex-col ${nodeGap}`}>
          {/* Branch 1 */}
          <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-unemi-blue" />
              <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">1. Huella Digital</h6>
            </div>
            <div className={`grid grid-cols-3 ${subGridGap}`}>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-orange max-sm:inline">Rastro</span>
                Permanente
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-orange max-sm:inline">Identidad</span>
                Social
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-orange max-sm:inline">Privacidad</span>
                Proactiva
              </div>
            </div>
          </div>

          {/* Branch 2 */}
          <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-unemi-orange" />
              <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">2. Ciberseguridad</h6>
            </div>
            <div className={`grid grid-cols-3 ${subGridGap}`}>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-blue max-sm:inline">Protección</span>
                MFA / Contraseñas
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-blue max-sm:inline">Amenaza</span>
                Phishing / Redes
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-unemi-blue max-sm:inline">Backups</span>
                Copias Nube
              </div>
            </div>
          </div>

          {/* Branch 3 */}
          <div className={`bg-white rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow ${branchPadding}`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <h6 className="font-semibold text-[10.5px] text-unemi-blue uppercase tracking-wide">3. Netiqueta Académica</h6>
            </div>
            <div className={`grid grid-cols-3 ${subGridGap}`}>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-indigo-600 max-sm:inline">Respeto</span>
                Sin Mayúsculas
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-indigo-600 max-sm:inline">Tono</span>
                Formal / Emails
              </div>
              <div className={`bg-slate-50 rounded-lg text-center border border-slate-100 leading-tight ${subBoxPadding} ${subBoxText}`}>
                <span className="font-semibold block text-indigo-600 max-sm:inline">Resolución</span>
                Pacífica
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

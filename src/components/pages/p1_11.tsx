import React, { useState } from "react";
import { GraduationCap, Sparkles, AlertCircle, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { DocumentSheet, UnemiLogo } from "../DocumentSheet";
import { 
  FigureConnectivism, 
  FigureProsCons, 
  FigureTicIntegration,
  FigureSyncAsync,
  FigureInstructorRoles
} from "../AcademicFigures";
import { TopicFormQR } from "../TopicFormQR";
import MindMap from "../MindMap";

export default function Page1_11({ onNavigate }: { onNavigate?: (pageNum: number) => void }) {
  const [p9_q1, setP9_q1] = useState<string | null>(null);
  const [p9_q2, setP9_q2] = useState<string | null>(null);
  const [p9_verified, setP9_verified] = useState<boolean>(false);
  const indexPages = [
    // Preliminary
    { group: "preliminary", num: 1, label: "Individual Coursework Cover Sheet" },
    { group: "preliminary", num: 2, label: "Interactive Table of Academic Contents" },
    { group: "preliminary", num: 3, label: "Course Work Introduction & Educational Scope" },
    // Unit 1
    { group: "unit1", num: 4, label: "Siemens' Connectivism learning theory in digital era" },
    { group: "unit1", num: 5, label: "Higher education ICT tools Integration metrics" },
    { group: "unit1", num: 6, label: "UNESCO global teachers ICT competency standards" },
    { group: "unit1", num: 7, label: "Computer LAN networks & technical system layouts" },
    { group: "unit1", num: 8, label: "Mind Map Summary — Unit 1: Virtual Learning Foundations" },
    { group: "unit1", num: 9, label: "Formative evaluation checkpoint & theory diagnostics" },
    { group: "unit1", num: 10, label: "Scientific guidelines for electronic content design" },
    { group: "unit1", num: 11, label: "Synchronous versus asynchronous virtual platforms" },
    { group: "unit1", num: 12, label: "The 8 major roles of the virtual tutor — Part I" },
    { group: "unit1", num: 13, label: "The 8 major roles of the virtual tutor — Part II" },
    { group: "unit1", num: 14, label: "Performance test & classroom active tutor case study" },
    { group: "unit1", num: 15, label: "Curative educational and research portals strategies" },
    { group: "unit1", num: 16, label: "Unified database structures & three portal pillars" },
    { group: "unit1", num: 17, label: "Digital tutoring taxonomy & web resource classifications" },
    { group: "unit1", num: 18, label: "Compliance checklists & portal evaluation diagnostics" },
    { group: "unit1", num: 19, label: "Social network platforms in digital class contexts" },
    { group: "unit1", num: 20, label: "Structural network advantages for dialogue & learning" },
    { group: "unit1", num: 21, label: "Development flows for co-creative social workspaces" },
    { group: "unit1", num: 22, label: "Comparative matrices of Web 1.0 vs. Web 2.0 paradigms" },
    { group: "unit1", num: 23, label: "Ethical netiquette guidelines & written classroom civility" },
    { group: "unit1", num: 24, label: "Unit 1 comprehensive e-assessment & closing test" },
    // Unit 2
    { group: "unit2", num: 25, label: "Digital LMS environment introduction & Unit 2 start" },
    { group: "unit2", num: 26, label: "Mind Map Summary — Unit 2: Ecosystems & Digital Civics" },
    { group: "unit2", num: 27, label: "E-Learning platforms as tactical learning structures" },
    { group: "unit2", num: 28, label: "Historical timelines & landmark LMS software evolution" },
    { group: "unit2", num: 29, label: "Gamification principles & active engagement methods" },
    { group: "unit2", num: 30, label: "Self-correcting online test for platform metrics" },
    { group: "unit2", num: 31, label: "Multi-stakeholder corresponsibility & active groups" },
    { group: "unit2", num: 32, label: "Student retention and dynamic engagement metrics" },
    { group: "unit2", num: 33, label: "Visual interactive collage of modular web applications" },
    { group: "unit2", num: 34, label: "Case reviews & final stakeholder interaction assessment" },
    { group: "unit2", num: 35, label: "SCORM systems & virtual software interoperability" },
    { group: "unit2", num: 36, label: "Unit 2 comprehensive e-assessment & closing test" },
    // References
    { group: "references", num: 37, label: "Academic bibliography & standard APA citations" },
    { group: "references", num: 38, label: "Technical Glossary of terms & directory appendix" }
  ];

  return (
    <>
      {/* PAGE 1: COVER PAGE IN LANDSCAPE FORMAT (CARÁTULA ACADÉMICA UNEMI) */}
      <section 
        id="page-1"
        className="mx-auto my-4 max-w-[1100px] min-h-[750px] w-full bg-white border-2 border-slate-300/80 shadow-xl rounded-xl p-10 flex flex-col justify-between relative transition-all duration-300 page-break print:my-0 print:border-none print:shadow-none print:min-h-screen print:rounded-none overflow-hidden select-none"
        style={{ 
          backgroundImage: "radial-gradient(circle at top right, rgba(230, 242, 255, 0.8), transparent 450px), radial-gradient(circle at bottom left, rgba(255, 238, 225, 0.7), transparent 450px)",
        }}
      >
        {/* Colorful top border strip represented as the institutional banner */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#004080] via-[#FF6600] to-[#004080] print:h-2" />

        {/* Outer frame border for a classic editorial/academic cover feeling */}
        <div className="absolute inset-4 border border-[#004080]/10 rounded-lg pointer-events-none print:inset-2" />

        {/* Academic Header (Centered) */}
        <div className="text-center mt-2 w-full flex flex-col items-center space-y-2 z-10">
          <UnemiLogo className="h-14 md:h-18 hover:scale-105 transition-transform duration-300" align="center" />
          
          <div className="space-y-0.5">
            <h2 className="text-xs md:text-sm font-black tracking-[0.18em] text-[#004080] uppercase">
              Universidad Estatal de Milagro
            </h2>
            <div className="h-[1.5px] w-24 bg-[#FF6600]/40 mx-auto mb-1" />
            <h3 className="text-[11px] md:text-xs font-bold text-slate-550 uppercase tracking-wider">
              Facultad de Ciencias de la Educación
            </h3>
            <span className="text-[10px] md:text-xs font-semibold text-[#004080] uppercase tracking-wider block">
              Pedagogy of National and Foreign Languages — On-Campus
            </span>
            <span className="text-[9px] md:text-[10px] font-medium text-slate-400 uppercase tracking-wide block">
              Pedagogía de los Idiomas Nacionales y Extranjeros — Presencial
            </span>
          </div>
        </div>

        {/* Central Title and Generated Header Image layout (No Spanish text, bigger image) */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-8 py-4 z-10 max-w-5xl mx-auto w-full px-4">
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#004080]/10 text-[#004080] text-[10px] md:text-[11px] font-black tracking-widest uppercase rounded-full border border-[#004080]/30 shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-[#004080] animate-pulse" />
              Coursework Assignment Portfolio
            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold uppercase text-[#FF6600] tracking-widest block">INDIVIDUAL COURSEWORK</span>
              <h1 className="font-display font-black text-4xl md:text-5xl text-[#004080] tracking-tight leading-none uppercase drop-shadow-2xs">
                E-learning Trends <br className="hidden md:block"/> and Challenges
              </h1>
              <div className="h-[2px] w-24 bg-[#FF6600]/40 md:mx-0 mx-auto" />
            </div>
          </div>

          {/* Generated Cover Illustration Banner - MUCH LARGER as requested */}
          <div className="w-[360px] md:w-[480px] shrink-0 border border-slate-200/80 shadow-lg rounded-2xl p-2.5 bg-white/90 backdrop-blur hover:shadow-xl transition-all duration-300">
            <img 
              src="/imagen_cover.png"
              alt="E-Learning Trends and Challenges Cover Illustration"
              className="w-full h-auto max-h-[240px] rounded-xl object-cover hover:scale-[1.01] transition-transform cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Metadata section in standard academic cover layout: Informative Grid (English) */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-md rounded-2xl p-5 select-none z-10 text-left">
          
          <div className="space-y-2.5 md:border-r md:border-slate-200/80 md:pr-6">
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-[#004080]/10 rounded-lg text-[#004080] shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[8.5px] uppercase font-bold text-slate-450 tracking-wider block">Subject / Module</span>
                <span className="text-[#004080] font-black text-xs md:text-sm uppercase leading-tight block">
                  E-learning Trends and Challenges
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-[#FF6600]/5 p-2 rounded-xl border border-[#FF6600]/15">
              <div className="p-1.5 bg-[#FF6600]/15 rounded-lg text-[#FF6600] shrink-0 mt-0.5 animate-pulse">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-[#FF6600] tracking-widest block">Student / Coursework Author</span>
                <span className="text-[#004080] font-black text-sm md:text-base uppercase block tracking-tight">
                  Esther Mariela Cacoango Cacoango
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 md:pl-6 flex flex-col justify-between">
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-slate-100 rounded-lg text-slate-605 shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[8.5px] uppercase font-bold text-slate-400 tracking-wider block">Academic Tutor</span>
                <span className="text-slate-600 font-extrabold text-[11px] md:text-xs uppercase block">
                  Mst. Jorge Zambrano Pachay
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-100">
              <div className="text-left">
                <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider block">Location & Academic Period</span>
                <span className="text-[#004080] font-bold text-[10px]">
                  Milagro, Ecuador • April - July 2026
                </span>
              </div>
              <div className="text-right">
                <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider block">Course Units</span>
                <span className="text-slate-700 font-bold text-[10px]">
                  Unit 1 & Unit 2
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer details showing classic location & year aligned to the bottom */}
        <div className="w-full pt-3 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold text-slate-400/80 border-t border-slate-200/40 z-10 select-none">
          <span>Universidad Estatal de Milagro — UNEMI • Coursework Assignment Portfolio</span>
          <span className="text-slate-500 font-mono tracking-widest uppercase my-1 md:my-0">
            Education Faculty • On-Campus Program CDX
          </span>
        </div>
      </section>

      {/* PAGE 2: TABLE OF CONTENTS (SOLO EL ÍNDICE INTERACTIVO COMPENSADO) */}
      <DocumentSheet pageNumber={2}>
        <div className="flex flex-col justify-between h-full space-y-4">
          <div className="space-y-1 text-center pb-2 border-b border-slate-100">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Systematic Curriculum Syllabus Map</span>
            <h2 className="text-xl font-display font-black text-[#004080] uppercase tracking-tight">
              Interactive Table of Academic Contents
            </h2>
            <p className="text-slate-550 text-[11px] max-w-2xl mx-auto font-medium">
              Click on any topic or section below to jump directly to its respective page in the coursework document portfolio.
            </p>
          </div>

          {/* Balanced Editorial Document Directory layout spanning full sheet width */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 md:gap-y-1.5 text-[10.5px] text-slate-600 font-semibold leading-normal flex-1 py-1">
            
            {/* Column 1 (Pages 1 to 18) - Prelims and Unit 1 (Part I) */}
            <div className="space-y-1">
              <p className="font-extrabold text-[#004080] uppercase text-[9px] border-b border-[#004080]/15 pb-1 mb-1 tracking-wider">
                Preliminary Section & Unit 1 (Foundations)
              </p>
              {indexPages.slice(0, 18).map((item) => (
                <button
                  key={item.num}
                  onClick={() => onNavigate?.(item.num)}
                  className="w-full flex items-center justify-between text-left hover:bg-[#004080]/5 hover:text-[#004080] px-2 py-[3px] rounded transition-colors group cursor-pointer text-[10.5px]"
                >
                  <span className="flex-1 flex items-baseline gap-1 mr-1 min-w-0">
                    <span className="font-bold text-slate-700 group-hover:text-[#004080] shrink-0 text-[10px]">
                      {item.num.toString().padStart(2, '0')}.
                    </span>
                    <span className="text-slate-600 group-hover:text-[#004080] font-semibold text-[10px] truncate">
                      {item.label}
                    </span>
                    <span className="flex-1 border-b border-dotted border-slate-200 group-hover:border-[#004080]/30 relative -top-1" />
                  </span>
                  <span className="font-mono text-[#004080] bg-slate-100 group-hover:bg-[#004080]/10 px-1.5 py-0.5 rounded leading-none text-[9px] shrink-0">
                    P. {item.num}
                  </span>
                </button>
              ))}
            </div>

            {/* Column 2 (Pages 19 to 38) - Unit 1 (Part II), Unit 2 & Appendices */}
            <div className="space-y-1 border-l border-slate-100 pl-8">
              <p className="font-extrabold text-[#FF6600] uppercase text-[9px] border-b border-[#FF6600]/15 pb-1 mb-1 tracking-wider">
                Unit 1 Social Networks & Unit 2 Systems
              </p>
              
              {/* Render pages 19 to 36 */}
              {indexPages.slice(18, 36).map((item) => (
                <button
                  key={item.num}
                  onClick={() => onNavigate?.(item.num)}
                  className="w-full flex items-center justify-between text-left hover:bg-[#FF6600]/5 hover:text-[#FF6600] px-2 py-[3px] rounded transition-colors group cursor-pointer text-[10.5px]"
                >
                  <span className="flex-1 flex items-baseline gap-1 mr-1 min-w-0">
                    <span className="font-bold text-slate-700 group-hover:text-[#FF6600] shrink-0 text-[10px]">
                      {item.num.toString().padStart(2, '0')}.
                    </span>
                    <span className="text-slate-600 group-hover:text-[#FF6600] font-semibold text-[10px] truncate">
                      {item.label}
                    </span>
                    <span className="flex-1 border-b border-dotted border-slate-200 group-hover:border-[#FF6600]/30 relative -top-1" />
                  </span>
                  <span className="font-mono text-[#FF6600] bg-orange-50 group-hover:bg-[#FF6600]/10 px-1.5 py-0.5 rounded leading-none text-[9px] shrink-0">
                    P. {item.num}
                  </span>
                </button>
              ))}

              <p className="font-extrabold text-slate-500 uppercase text-[9px] border-b border-slate-200 pb-1 mt-2 mb-1 tracking-wider">
                References & Technical Appendices
              </p>

              {/* Render references (pages 37 and 38) */}
              {indexPages.slice(36).map((item) => (
                <button
                  key={item.num}
                  onClick={() => onNavigate?.(item.num)}
                  className="w-full flex items-center justify-between text-left hover:bg-slate-100 hover:text-slate-800 px-2 py-[3px] rounded transition-colors group cursor-pointer text-[10.5px]"
                >
                  <span className="flex-1 flex items-baseline gap-1 mr-1 min-w-0">
                    <span className="font-bold text-slate-750 group-hover:text-slate-900 shrink-0 text-[10px]">
                      {item.num.toString().padStart(2, '0')}.
                    </span>
                    <span className="text-slate-600 group-hover:text-slate-900 font-semibold text-[10px] truncate">
                      {item.label}
                    </span>
                    <span className="flex-1 border-b border-dotted border-slate-200 group-hover:border-slate-300 relative -top-1" />
                  </span>
                  <span className="font-mono text-slate-600 bg-slate-100 group-hover:bg-slate-200 px-1.5 py-0.5 rounded leading-none text-[9px] shrink-0">
                    P. {item.num}
                  </span>
                </button>
              ))}
            </div>

          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-between text-[10px] text-slate-450 font-medium select-none">
            <span>Universidad Estatal de Milagro — UNEMI • Coursework Pedagogical Map</span>
            <span className="font-mono text-[#004080] bg-white border border-slate-205 px-2 py-0.5 rounded shadow-3xs uppercase text-[9px]">
              Syllabus Index Map
            </span>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 3: INTRODUCCIÓN GENERAL & JUSTIFICACIÓN CURRICULAR (BRAND NEW FOR 35-PAGE SYSTEM) */}
      <DocumentSheet pageNumber={3}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch h-full">
          
          {/* Left Column: Academic Introduction */}
          <div className="flex flex-col justify-between space-y-3.5 pr-4 border-r border-slate-100">
            <div className="space-y-2">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Preliminary • Study Guide</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                General Introduction to the Course
              </h2>
              <p className="text-slate-600 text-xs leading-[1.75]">
                The systemic integration of technological resources represents the core challenge of contemporary educational systems. Traditional knowledge transmission models are evolving, requiring instructors to master robust digital and pedagogical competencies. This visual coursework guide serves as an instructional framework to analyze the most influential theories, standards, and active methodologies driving the learning revolution across modern virtual platforms.
              </p>
            </div>
            <div className="p-3 bg-[#004080]/5 rounded-xl border border-slate-100">
              <span className="text-[8.5px] uppercase font-extrabold text-[#004080] tracking-wider block mb-1">General Module Structure</span>
              <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                A structured analysis of digital Era learning theories (Unit 1), followed by an in-depth examination of interactive e-learning platforms, virtual netiquette guidelines, engagement strategies, and student retention framework models (Unit 2).
              </p>
            </div>
          </div>

          {/* Right Column: Practical Justification */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#004080]">Preliminary • Academic Justification</span>
              <h2 className="text-base font-display font-bold text-[#FF6600] uppercase tracking-tight">
                Scientific Coursework Justification
              </h2>
              <p className="text-slate-600 text-xs leading-[1.75]">
                This coursework is designed to establish a solid scholarly foundation for modern digital pedagogy. By providing a rigorous sequence of technical modules alongside international teaching standards (such as the UNESCO ICT-CFT framework) and interactive digital content guidelines, this study guide serves as a practical blueprint to professionalize virtual instruction and foster educational accessibility in global environments.
              </p>
            </div>
            <div className="p-3 bg-orange-50/40 border border-orange-200/50 rounded-xl text-[10.5px] text-slate-705 leading-relaxed font-semibold">
              🌍 <strong>Global Educational Impact:</strong> The methodological design goes beyond simple physical classroom constraints, empowering the active online student and facilitating an inclusive, high-quality, globally-aligned university education.
            </div>
          </div>

        </div>
      </DocumentSheet>

      {/* PAGE 4: THEORETICAL ANCHOR (CONNECTIVISM) — CONTENT SHEET #1 */}
      <DocumentSheet pageNumber={4}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Strategic Foundations</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Connectivism as a Digital-Era Learning Model
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8]">
              Formulated by George Siemens, <strong>Connectivism</strong> holds that digital learning cannot be completely mapped as a solitary, internal activity. Modern knowledge resides inside complex personal network structures. 
            </p>
            <div className="p-3 bg-orange-50/40 border border-orange-200/50 rounded-xl">
              <span className="text-[9px] uppercase font-bold text-[#FF6600] tracking-wider block mb-0.5">Key Axiom</span>
              <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                "The connection between various informational nodes is more critical than our current state of immediate knowledge."
              </p>
            </div>
            <p className="text-slate-500 text-[10.5px] leading-relaxed">
              Learners interact with diverse databases, specialized articles, and digital communities to dynamically shape their professional foundations. This process develops a resilience to rapidly adapting requirements.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FigureConnectivism />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 5: ICT INTEGRATION — CONTENT SHEET #2 */}
      <DocumentSheet pageNumber={5}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigureProsCons />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                ICT Integration in Educational Systems
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8]">
              Technology integration in university classrooms has moved beyond basic computing labs. Under contemporary structural layouts, high-performance computing networks democratize access and enable customized study setups.
            </p>
            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 space-y-2">
              <span className="text-[10px] font-bold text-[#004080] uppercase tracking-widest block">The Integration Shift:</span>
              <p className="text-[11px] text-slate-505 leading-relaxed font-semibold">
                Rather than treating online platforms as storage space for PDF files, institutional integration works to reconstruct communication pathways between students, lecturers, and educational coordinators.
              </p>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 6: INTERNATIONAL COMPETENCY STANDARDS — CONTENT SHEET #3 (ENRICHED LAYOUT TO REMOVE WHITE SPACE) */}
      <DocumentSheet pageNumber={6}>
        <div className="space-y-3.5">
          <div className="space-y-1">
            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1 Continued</span>
            <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
              International Standards & The UNESCO Competency Model
            </h2>
          </div>

          <p className="text-slate-605 text-xs leading-relaxed">
            To organize digital classroom integration, international institutions have established standards to measure digital skills. The <strong>UNESCO ICT Competency Framework for Teachers (ICT-CFT)</strong> organizes these standards across six core educational dimensions, which we detail below to cover the full framework scope:
          </p>

          <div className="grid grid-cols-3 gap-3 text-[10.5px]">
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-[#004080] uppercase text-[8.5px] block">1. Understanding Policy</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Instructors understand how ICT policies align with national educational strategies to support digital equity goals.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-[#FF6600] uppercase text-[8.5px] block">2. Curriculum & Assessment</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Integrating digital tools into core curriculum paths and designing meaningful online formative tests.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-emerald-700 uppercase text-[8.5px] block">3. Pedagogy & Learning</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Designing student-led collaborative tasks, and leveraging LMS forums for discussion and knowledge deepening.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-teal-700 uppercase text-[8.5px] block">4. Application of Tools</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Operating specialized academic software, data visualizers, and online research indexing resources.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-indigo-700 uppercase text-[8.5px] block">5. Organization & Admin</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Structuring virtual learning classrooms and coordinating tech-driven workspace schedules efficiently.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50/70 border border-slate-200/80 rounded-xl space-y-0.5 shadow-3xs">
              <span className="font-bold text-slate-700 uppercase text-[8.5px] block">6. Teacher Professional Learning</span>
              <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                Engaging in scientific research networks to continuously update one's online teaching paradigms.
              </p>
            </div>
          </div>

          <div className="p-2.5 bg-orange-50/40 border border-orange-200/50 rounded-xl text-[10px] text-slate-700 font-semibold leading-relaxed">
            🚩 <strong>Educational Alignment Rule:</strong> Universities must systematically move their instructors from basic levels to deep knowledge creation, ensuring technology serves as an active partner in research, rather than a mere digital typewriter.
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 7: COMPUTER LAN NETWORKS — CONTENT SHEET #4 */}
      <DocumentSheet pageNumber={7}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-1">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1 Continued</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Computer LAN Networks & Technical Systems
              </h2>
              <p className="text-slate-650 text-xs leading-[1.75]">
                To support modern virtual colleges, universities must detail standard LAN (Local Area Net) network schemas and tech-led server infrastructure. Computer nodes, firewall filters, load balancers, and LMS servers orchestrate in unison to safeguard data transfer speeds and uptime indices.
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-[10.5px] text-slate-500 font-semibold leading-relaxed">
              <strong className="text-[#004080] uppercase text-[9px] block mb-0.5">System Integration Security:</strong>
              Classrooms require dedicated subnets protecting institutional assets from malware, utilizing firewall rules and DMZs to isolate private database arrays while routing student traffic to external internet hubs.
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <FigureTicIntegration maxHeightClass="max-h-[220px]" />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 8: DEDICATED MIND MAP - UNIT 1 SUMMARY */}
      <DocumentSheet pageNumber={8}>
        <div className="flex flex-col justify-between h-full space-y-3.5">
          <div className="space-y-1 text-center border-b border-slate-100 pb-2">
            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1 Summary Map</span>
            <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
              Mind Map Summary — Unit 1: Virtual Learning Foundations
            </h2>
            <p className="text-slate-500 text-[11px] leading-relaxed max-w-2xl mx-auto">
              This interactive academic mind map models the core architectural relationships inside Virtual Learning Environments (VLE), detailing links between users, student folders, and course modules.
            </p>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 relative overflow-hidden select-none">
            {/* Visual Corkboard/Whiteboard background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
            
            {/* Full Sheet Concept Map Visual */}
            <div className="w-full lg:w-4/7 h-full flex items-center justify-center z-10">
              <img 
                src="/src/assets/images/unit_1_concept_map_1780530353912.png" 
                alt="Mind Map Summary — Unit 1: Virtual Learning Foundations"
                className="max-h-[340px] max-w-full rounded-xl object-contain shadow-md border border-slate-200 bg-white p-2 hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Structured Legend explaining nodes in English */}
            <div className="w-full lg:w-3/7 space-y-3 z-10 bg-white border border-slate-200/80 p-4 rounded-xl shadow-2xs text-[10.5px]">
              <span className="font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-150 pb-1 text-[9px]">
                Concept Map Legend & Nodes:
              </span>
              <div className="space-y-2 text-slate-600 font-semibold leading-relaxed">
                <p>
                  <strong className="text-[#FF6600] text-[9.5px] uppercase">1. Student Entity (Centre):</strong> Represents the active coursework attendee, connecting credentials to personal dashboard hubs.
                </p>
                <p>
                  <strong className="text-[#004080] text-[9.5px] uppercase">2. LMS Core (Moodle):</strong> The central software that tracks student progress, grade submissions, and course completion states.
                </p>
                <p>
                  <strong className="text-emerald-700 text-[9.5px] uppercase">3. Resource Indexes:</strong> Links to external academic PDF catalogs, scientific journals, and teacher lesson forms.
                </p>
                <p>
                  <strong className="text-indigo-700 text-[9.5px] uppercase">4. Communication Gateways:</strong> Bridges synchronous webinar chats and forum discussion boards.
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-between text-[9px] text-slate-400 font-bold select-none">
            <span>UNEMI • ESD COURSEWORK DESIGN PORTFOLIO</span>
            <span className="font-mono text-[#004080] bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-3xs uppercase">
              Unit 1 Blueprint
            </span>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 9: DIAGNOSTIC SELF-ASSESSMENTS & COGNITIVE TESTS — CONTENT SHEET #5 (SHIFTED TO PAGE 9) */}
      <DocumentSheet pageNumber={9}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch pt-1">
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Interactive Form QR & Topic 1 Assessment
              </h2>
              <p className="text-slate-605 text-xs leading-[1.75]">
                Ensure alignment with UNESCO criteria and Siemens' connectivist model. Scan the QR code to access the official diagnostic evaluation, or complete the physical options panel. Use these assessments to gauge preliminary technology readiness.
              </p>
            </div>

            <div className="bg-slate-50/45 p-2 border border-slate-150 rounded-2xl">
              <TopicFormQR 
                topicId="U1T1"
                title="Topic 1.1 Reading Form"
                description="Diagnostic questionnaire on early ICT pedagogical skills and Connectivism learning theories."
                url="https://docs.google.com/forms/d/e/1FAIpQLScbXRA8KVeywe-UuAynaUhHyiMPFkUV41f6sw-kO_ZUPvY6ZA/viewform"
              />
            </div>
          </div>

          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between">
            <span className="text-sm font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users className="w-4.5 h-4.5 text-[#004080]" />
                Diagnostic Questionnaire — Topic 1
              </span>
              {p9_verified && (
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-mono font-bold animate-pulse">
                  Graded
                </span>
              )}
            </span>

            <div className="space-y-3.5 text-[11px] text-slate-705 font-semibold leading-normal flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-3xs space-y-2">
                  <p className="font-bold text-slate-800">Q1: Who formulated Connectivism as a learning theory for the digital era?</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    {[
                      { id: "A", text: "B.F. Skinner" },
                      { id: "B", text: "George Siemens", isCorrect: true },
                      { id: "C", text: "Lev Vygotsky" },
                      { id: "D", text: "Jean Piaget" }
                    ].map((opt) => {
                      const isSelected = p9_q1 === opt.id;
                      let btnClass = "border text-left py-1.5 px-2.5 rounded-lg transition-all duration-200 ";
                      if (p9_verified) {
                        if (opt.isCorrect) {
                          btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold shadow-3xs";
                        } else if (isSelected) {
                          btnClass += "bg-rose-50 border-rose-400 text-rose-800";
                        } else {
                          btnClass += "opacity-50 bg-slate-50 border-slate-200 text-slate-400";
                        }
                      } else {
                        btnClass += isSelected 
                          ? "border-[#004080] bg-[#004080]/10 text-[#004080] ring-1 ring-[#004080]" 
                          : "hover:bg-slate-50 border-slate-200 text-slate-650";
                      }
                      return (
                        <button
                          key={opt.id}
                          disabled={p9_verified}
                          onClick={() => setP9_q1(opt.id)}
                          className={btnClass + " cursor-pointer relative font-medium"}
                        >
                          <span className="font-bold mr-1">{opt.id})</span> {opt.text}
                          {p9_verified && opt.isCorrect && (
                            <span className="absolute right-2 top-1.5 text-emerald-600 font-bold">✓</span>
                          )}
                          {p9_verified && isSelected && !opt.isCorrect && (
                            <span className="absolute right-2 top-1.5 text-rose-600 font-bold">✗</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-3xs space-y-2">
                  <p className="font-bold text-slate-800">Q2: What is the main benefit of formal ICT integration in universities?</p>
                  <div className="grid grid-cols-1 gap-2 text-[10px]">
                    {[
                      { id: "A", text: "Completely replace teaching staff" },
                      { id: "B", text: "Democratize access to education and flexibilize schedules", isCorrect: true },
                      { id: "C", text: "Avoid face-to-face academic interactions entirely" }
                    ].map((opt) => {
                      const isSelected = p9_q2 === opt.id;
                      let btnClass = "border text-left py-1.5 px-2.5 rounded-lg transition-all duration-200 ";
                      if (p9_verified) {
                        if (opt.isCorrect) {
                          btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold shadow-3xs";
                        } else if (isSelected) {
                          btnClass += "bg-rose-50 border-rose-400 text-rose-800";
                        } else {
                          btnClass += "opacity-50 bg-slate-50 border-slate-200 text-slate-400";
                        }
                      } else {
                        btnClass += isSelected 
                          ? "border-[#004080] bg-[#004080]/10 text-[#004080] ring-1 ring-[#004080]" 
                          : "hover:bg-slate-50 border-slate-200 text-slate-650";
                      }
                      return (
                        <button
                          key={opt.id}
                          disabled={p9_verified}
                          onClick={() => setP9_q2(opt.id)}
                          className={btnClass + " cursor-pointer relative font-medium"}
                        >
                          <span className="font-bold mr-1">{opt.id})</span> {opt.text}
                          {p9_verified && opt.isCorrect && (
                            <span className="absolute right-3 top-1.5 text-emerald-600 font-bold">✓</span>
                          )}
                          {p9_verified && isSelected && !opt.isCorrect && (
                            <span className="absolute right-3 top-1.5 text-rose-600 font-bold">✗</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex gap-2 justify-end pt-2 border-t border-slate-100">
                {p9_verified ? (
                  <button
                    onClick={() => {
                      setP9_q1(null);
                      setP9_q2(null);
                      setP9_verified(false);
                    }}
                    className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-1.5 px-4 rounded-lg text-[10px] shadow-3xs hover:shadow-2xs transition-all cursor-pointer font-mono"
                  >
                    Reset Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (p9_q1 && p9_q2) {
                        setP9_verified(true);
                      } else {
                        alert("Please select answers to both questions first!");
                      }
                    }}
                    className="bg-[#004080] hover:bg-[#003060] text-white font-bold py-1.5 px-4 rounded-lg text-[10px] shadow-3xs hover:shadow-2xs transition-all cursor-pointer font-mono"
                  >
                    Grade Quiz
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 10: ELECTRONIC CONTENT DEVELOPMENT — CONTENT SHEET #6 (SHIFTED TO PAGE 10) */}
      <DocumentSheet pageNumber={10}>
        <div className="space-y-8 md:space-y-12 py-4 h-full flex flex-col justify-between">
          <div className="space-y-3">
            <div className="space-y-0.5 border-b border-slate-100 pb-2 flex justify-between items-end">
              <div>
                <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2</span>
                <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                  Technological Content Creation Standards
                </h2>
              </div>
              <span className="text-[10px] text-[#004080] font-bold uppercase font-sans">Curricular Content #10</span>
            </div>

            <p className="text-slate-600 text-xs md:text-[13px] leading-[1.8] pt-2">
              Designing electronic training assets requires strict alignment between technical choice and student needs. Rather than transcribing textbooks, contents must be interactive, modular, and designed to leverage both real-time or offline delivery.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-8 text-[11px] py-4">
            <div className="p-5 bg-orange-50/30 border border-orange-200/40 rounded-2xl space-y-2 min-h-[160px] flex flex-col justify-between shadow-3xs hover:shadow-2xs transition-shadow">
              <span className="font-extrabold text-[#FF6600] uppercase text-[9.5px] block">1. Pedagogical Usability</span>
              <p className="text-[10.5px] text-slate-600 leading-relaxed font-semibold">
                Creating materials that directly serve clear learning outcomes, avoiding visual clutter or unnecessary decorative widgets.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200/60 rounded-2xl space-y-2 min-h-[160px] flex flex-col justify-between shadow-3xs hover:shadow-2xs transition-shadow">
              <span className="font-extrabold text-[#004080] uppercase text-[9.5px] block">2. Standard Compatibility</span>
              <p className="text-[10.5px] text-slate-600 leading-relaxed font-semibold">
                Employing standard formats (PDF/A, HTML5, MP4) so materials run smoothly on any laptop, tablet, or smartphone.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200/60 rounded-2xl space-y-2 min-h-[160px] flex flex-col justify-between shadow-3xs hover:shadow-2xs transition-shadow">
              <span className="font-extrabold text-[#004080] uppercase text-[9.5px] block">3. Multi-Sensory Formats</span>
              <p className="text-[10.5px] text-slate-600 leading-relaxed font-semibold">
                Balancing text-dense manuals with dynamic slide presentations, video lectures, visual summaries, and interactive maps.
              </p>
            </div>
          </div>

          {/* Enriched Content Formats Compatibility & Specification Table to remove white space */}
          <div className="p-5 border border-slate-200/80 rounded-2xl bg-slate-50/50 grid grid-cols-4 gap-6 text-[10px] text-slate-510 font-semibold leading-relaxed shadow-3xs">
            <div>
              <span className="font-extrabold text-[#004080] uppercase block text-[8.5px] mb-1">SCORM Interactivity</span>
              Modular self-guided packages with sequential lockouts, tracking student completion status and grading ratios directly in our LMS.
            </div>
            <div>
              <span className="font-extrabold text-[#FF6600] uppercase block text-[8.5px] mb-1">MP4 Micro-Videos</span>
              Engaging 3-to-5 minute visual tutorials, natively playable on mobile smartphones without external software plugins.
            </div>
            <div>
              <span className="font-extrabold text-slate-700 uppercase block text-[8.5px] mb-1">PDF/A Doc Standard</span>
              Standardized text-searchable files for long-term academic indexing and synchronous/asynchronous deep reading.
            </div>
            <div>
              <span className="font-extrabold text-[#004080] uppercase block text-[8.5px] mb-1">HTML5 Templates</span>
              Lightweight responsive containers offering fast load speeds and simple embeds into standard browsers.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 11: SYNCHRONOUS VS ASYNCHRONOUS MODALITIES — CONTENT SHEET #7 (SHIFTED TO PAGE 11) */}
      <DocumentSheet pageNumber={11}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigureSyncAsync />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2 Modalities</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                E-Learning Formats: Sync vs. Async
              </h2>
            </div>
            <p className="text-slate-605 text-xs leading-[1.8] font-semibold text-slate-500">
              Selecting appropriate learning formats dictates course engagement levels. Figure 4 contrasts real-time group collaboration (Synchronous) against self-led calendar scheduling (Asynchronous).
            </p>
            
            <div className="bg-[#004080]/5 border border-[#004080]/15 rounded-xl p-3.5 space-y-1.5 text-[11px] shadow-3xs">
              <span className="font-bold text-[#004080] uppercase tracking-wider block">Coexistence Rule:</span>
              <p className="text-slate-500 leading-relaxed font-semibold">
                High-quality higher education programs do not pick one over the other. They combine both, scheduling real-time sessions for Q&A and debates, alongside self-paced materials for individual research.
              </p>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 12: THE 8 ROLES OF THE ONLINE INSTRUCTOR (1-4) — CONTENT SHEET #8 (SHIFTED TO PAGE 12) */}
      <DocumentSheet pageNumber={12}>
        <div className="space-y-4">
          <div className="space-y-0.5 border-b border-slate-100 pb-1">
            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2 Cont.</span>
            <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
              The 8 Roles of the Online Instructor — Part I
            </h2>
          </div>

          <p className="text-slate-600 text-xs leading-[1.8]">
            Online teaching requires more than just lecturing. Virtual tutors must operate across an 8-fold model of academic duties. Below are the first four essential roles that establish course structure:
          </p>

          <div className="grid grid-cols-2 gap-4 text-[11px] pt-1">
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/60 shadow-3xs leading-[1.75]">
              <strong className="text-[#004080] font-bold block mb-1 text-xs uppercase tracking-wide">1. The Researcher Role:</strong>
              Curates scientific findings, validates sources, updates bibliography lists, and integrates recent studies into curriculum worksheets.
            </div>

            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/60 shadow-3xs leading-[1.75]">
              <strong className="text-[#004080] font-bold block mb-1 text-xs uppercase tracking-wide">2. The Technologist Role:</strong>
              Configures and troubleshoots LMS spaces, schedules webinar software, integrates QR tools, and guides students past interface barriers.
            </div>

            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/60 shadow-3xs leading-[1.75]">
              <strong className="text-[#004080] font-bold block mb-1 text-xs uppercase tracking-wide">3. The Content Facilitator Role:</strong>
              Simplifies complex study texts, writes concise guides, records explanatory audio/video summaries, and points out crucial facts.
            </div>

            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/60 shadow-3xs leading-[1.75]">
              <strong className="text-[#004080] font-bold block mb-1 text-xs uppercase tracking-wide">4. The Administrator Role:</strong>
              Controls assignments schedules, structures portal calendars, drafts system notifications, and archives grades securely in core servers.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 13: THE 8 ROLES OF THE ONLINE INSTRUCTOR (5-8) — CONTENT SHEET #9 */}
      <DocumentSheet pageNumber={13}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigureInstructorRoles />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2 Cont.</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                The 8 Roles of the Online Instructor — Part II
              </h2>
            </div>
            <p className="text-slate-605 text-xs leading-[1.8] font-semibold text-slate-500">
              Figure 5 details the circular relationships inside the teacher's taxonomic roles. Here we outline the final four roles that support student-driven digital pathways:
            </p>

            <div className="space-y-2 text-[10.5px] text-slate-700 leading-relaxed font-semibold">
              <p>
                <strong className="text-[#FF6600] uppercase text-[9.5px]">5. The Designer:</strong> Configures course navigation schemas, ensures readability, and crafts visual layouts in line with institutional identity rules.
              </p>
              <p>
                <strong className="text-[#FF6600] uppercase text-[9.5px]">6. The Advisor:</strong> Monitors engagement panels, contacts struggling students, and schedules Zoom advisory slots.
              </p>
              <p>
                <strong className="text-[#FF6600] uppercase text-[9.5px]">7. The Process Facilitator:</strong> Fosters collaborative team assignments, moderate forum debates, and guides peer review tasks.
              </p>
              <p>
                <strong className="text-[#FF6600] uppercase text-[9.5px]">8. The Evaluator:</strong> Assembles rubric templates, conducts diagnostic tests, and provides regular, objective grading feedback.
              </p>
            </div>
          </div>
        </div>
      </DocumentSheet>
    </>
  );
}

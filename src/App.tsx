import React from "react";
import { 
  GraduationCap, ChevronRight, Printer, BookOpen, AlertCircle, Sparkles, MapPin, ExternalLink
} from "lucide-react";
import { 
  FigureTicIntegration, 
  FigureConnectivism, 
  FigureProsCons, 
  FigureSyncAsync, 
  FigureInstructorRoles, 
  FigurePortalStructure, 
  FigureToolsClassification, 
  FigureTimeline,
  FigureSocialAdvantages,
  FigureSocialLearningSpace,
  FigureWebComparison,
  FigureSocialBehaviorRules,
  FigurePlatformFacts,
  FigureTechEvolution,
  FigureLearningTrends,
  FigurePlatformActors,
  FigureStudentEngagement,
  FigureEngagementTools,
  FigurePlatformBenefits,
  FigureStandardizationCriteria,
  FigureFreeVsCommercial
} from "./components/AcademicFigures";
import { TopicFormQR } from "./components/TopicFormQR";

// Robust Logo Component that provides fallback rendering if logo_unemi.png fails or is empty
function UnemiLogo({ className = "h-24", align = "center" }: { className?: string, align?: "left" | "center" }) {
  const [hasError, ReactSetHasError] = React.useState(false);

  return (
    <div className={`flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"} justify-center`}>
      {!hasError ? (
        <img
          src="/logo_unemi.png"
          alt="UNEMI Logo"
          referrerPolicy="no-referrer"
          onError={() => ReactSetHasError(true)}
          className={`${className} object-contain transition-all duration-300`}
        />
      ) : (
        <GraduationCap className="w-8 h-8 text-[#004080]" />
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

function DocumentSheet({ pageNumber, children }: DocumentSheetProps) {
  return (
    <section 
      id={`page-${pageNumber}`}
      className="mx-auto my-6 max-w-[850px] min-h-[1100px] w-full bg-white border border-slate-200/80 shadow-md rounded-lg py-10 px-[1in] md:py-14 flex flex-col justify-between relative transition-all duration-300 print:my-0 print:border-none print:shadow-none print:py-8 print:px-[1in] print:min-h-screen"
    >
      {/* Page Header (Contains strictly the left-aligned logo, with absolutely no text or icons around it) */}
      <div className="w-full mb-4 flex justify-start border-b border-slate-100 pb-3">
        <UnemiLogo className="h-6" align="left" />
      </div>

      {/* Main Page Content */}
      <div className="flex-1 flex flex-col justify-start text-slate-700 font-sans text-xs md:text-[13px] lg:text-sm leading-relaxed">
        {children}
      </div>

      {/* Page Footer (Only PAGE X badge, elegantly formatted) */}
      <div className="w-full mt-6 pt-3 border-t border-slate-100 flex items-center justify-end text-xs text-slate-400 font-medium">
        <div className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100 font-semibold font-mono text-[10px]">
          PAGE {pageNumber}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const totalSheetsCount = 11;

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased py-6 px-4 flex flex-col items-center">
      
      {/* MULTIPAGE NAVIGATOR COLUMN (Floats aside on large viewports, completely hidden when printing) */}
      <div className="fixed left-4 top-24 hidden xl:flex flex-col gap-1.5 p-3 bg-white border border-slate-200 shadow-xs rounded-xl max-w-[200px] text-[11px] font-medium text-slate-500 print:hidden max-h-[80vh] overflow-y-auto">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">
          Jump to Page
        </span>
        {[...Array(totalSheetsCount)].map((_, i) => {
          const pageNum = i + 1;
          let label = `Page ${pageNum}`;
          if (pageNum === 1) label = "1. Cover Page";
          if (pageNum === 2) label = "2. Index & Intro";
          if (pageNum === 3) label = "3. Unit 1: Topic 1";
          if (pageNum === 4) label = "4. U1: Topic 1 Cont.";
          if (pageNum === 5) label = "5. Unit 1: Topic 2";
          if (pageNum === 6) label = "6. Unit 1: Topic 3";
          if (pageNum === 7) label = "7. Unit 1: Topic 4";
          if (pageNum === 8) label = "8. Unit 2: Topic 1";
          if (pageNum === 9) label = "9. Unit 2: Topic 2";
          if (pageNum === 10) label = "10. Unit 2: Topic 3";
          if (pageNum === 11) label = "11. Academic Annexes";
          
          return (
            <a 
              key={pageNum}
              href={`#page-${pageNum}`}
              className="px-2.5 py-1 rounded-md hover:bg-slate-50 hover:text-[#004080] transition-colors overflow-hidden text-ellipsis whitespace-nowrap block"
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="w-full max-w-[850px] flex flex-col gap-1">
        
        {/* SHEET 1: COVER PAGE IN A4 FORMAT */}
        <section 
          id="page-1"
          className="mx-auto my-6 max-w-[850px] min-h-[1100px] w-full bg-white border border-slate-200/80 shadow-md rounded-lg px-[1in] py-16 flex flex-col justify-between relative transition-all duration-300 print:my-0 print:border-none print:shadow-none print:px-[1in] print:min-h-screen"
        >
          {/* Top Decorative bar */}
          <div className="w-full h-1.5 bg-gradient-to-r from-[#004080] via-[#FF6600] to-[#004080] rounded-t-lg print:rounded-none" />

          {/* Central Block of Cover Page info */}
          <div className="flex-1 flex flex-col justify-center items-center my-8 text-center">
            
            {/* Main Logo Container */}
            <div className="mb-10">
              <UnemiLogo className="h-28" />
            </div>

            <div className="w-16 h-1 bg-[#FF6600] mb-8" />

            <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#FF6600] mb-3 block">
              Curricular Working Reference Book
            </span>

            {/* Centered Cover Title - Cleaned of icons */}
            <h1 className="font-display font-black text-3xl md:text-4xl text-[#004080] tracking-tight leading-none uppercase mb-8 max-w-lg">
              E-Learning – Trends & Challenges
            </h1>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xs">
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Official Course Units</span>
                <p className="text-xs md:text-sm font-bold text-slate-700">
                  Unit 1: Essential Aspects and Components of E-Learning <br />
                  Unit 2: Main E-Learning Systems and Platforms
                </p>
              </div>

              <div className="h-[1px] bg-slate-200 w-full" />

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Scientific Scope</span>
                <p className="text-xs font-bold text-[#004080] uppercase tracking-wide">
                  Complete Curriculum including 21 Analytical Figures
                </p>
              </div>

              <div className="h-[1px] bg-slate-200 w-full" />

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Academic Lead / Tutor</span>
                <p className="text-xs md:text-sm font-bold text-slate-700 flex items-center justify-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#FF6600]" />
                  Mst. Jorge Zambrano Pachay
                </p>
              </div>

              <div className="h-[1px] bg-slate-200 w-full" />

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold block">Student / Estudiante</span>
                <p className="text-xs md:text-sm font-bold text-slate-700 flex items-center justify-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#004080]/10 flex items-center justify-center text-[10px] text-[#004080] font-bold shrink-0">S</span>
                  Esther Mariela Cacoango Cacoango
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium max-w-md leading-relaxed mt-12 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
              Formally translated and compiled under State University of Milagro Standards for autonomous educational reinforcement.
            </p>
          </div>

          {/* Footer of the Cover page */}
          <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-end text-xs text-slate-400 font-bold bg-white">
            <span className="font-mono bg-slate-50 px-3 py-1 rounded-md border border-slate-100 text-slate-600 font-semibold text-[10px]">
              PAGE 1
            </span>
          </div>
        </section>


        {/* SHEET 2: INDEX & INTRO & HISTORICAL CONTEXT */}
        <DocumentSheet pageNumber={2} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Curriculum Design</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Academic Index & Introduction
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-[12px] md:text-sm">
              As technology and academic instruction converge, electronic learning (E-learning) has shifted from a novel experiment to a foundational paradigm of modern pedagogy. This handbook is structured as a progressive roadmap to analyze connection infrastructures, virtual taxonomies, digital interaction scopes, and administrative platform factors.
            </p>

            {/* Table of Contents Index */}
            <div className="bg-[#004080]/5 border border-[#004080]/10 rounded-xl p-4 md:p-5 space-y-3.5">
              <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block border-b border-[#004080]/10 pb-1">
                Structural Index of Content
              </span>
              <div className="space-y-2 text-xs text-slate-700 font-medium">
                <div>
                  <span className="text-[#004080] font-bold text-[10px] block uppercase">Unit 1: Essential Aspects and Components</span>
                  <div className="pl-3 mt-1 space-y-1 text-[11px]">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 1: ICT & Educational System Integration</span>
                      <span className="font-mono text-slate-400">Pages 3 - 4</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 2: Content Development & Teacher Competencies</span>
                      <span className="font-mono text-slate-400">Page 5</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 3: Educational and Cultural Portals as Strategies</span>
                      <span className="font-mono text-slate-400">Page 6</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 4: Social Networking as Learning Spaces</span>
                      <span className="font-mono text-slate-400">Page 7</span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-200 my-1" />

                <div>
                  <span className="text-[#004080] font-bold text-[10px] block uppercase">Unit 2: Main E-Learning Systems and Platforms</span>
                  <div className="pl-3 mt-1 space-y-1 text-[11px]">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 1: Learning Platforms as a New Training Space</span>
                      <span className="font-mono text-slate-400">Page 8</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 2: E-Learning Platforms and Their Services</span>
                      <span className="font-mono text-slate-400">Page 9</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>• Topic 3: Types of Educational Platforms (Free vs Commercial)</span>
                      <span className="font-mono text-slate-400">Page 10</span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-200 my-1" />

                <div className="flex justify-between items-center text-[#004080] font-bold text-[10px] uppercase">
                  <span>Additional Annexes, Glossary & Readings</span>
                  <span className="font-mono text-slate-400">Page 11</span>
                </div>
              </div>
            </div>

            {/* Historical Context Evolution & Fig 8 */}
            <div className="pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Evolutionary Context of Learning Technology
              </h3>
              <p className="text-slate-500 text-xs mt-1 mb-2">
                E-learning was not born in isolation; it evolved along with web technology epochs, transforming passive, flat repositories into highly structured, collaborative interactive systems.
              </p>
              
              <FigureTimeline />
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 3: UNIT 1 - TOPIC 1 (DEFINITION, ICT, CONNECTIVISM) */}
        <DocumentSheet pageNumber={3} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                E-Learning – ICT and Educational System Integration
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Students will be able to fully understand and use e-Learning as a new tool for teaching and learning.
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Definition of E-Learning
              </h3>
              <p className="text-slate-600 text-xs md:text-sm pl-3 border-l-2 border-[#004080] leading-relaxed">
                E-learning stands for <strong>"electronic education"</strong>. It is a pedagogical discipline where instructional theory and networking technologies combine, enabling students to complete their formal training through structured computer networks (commonly the Internet or Intranets).
              </p>
            </div>

            {/* Fig 1 */}
            <FigureTicIntegration />

            {/* Connectivism theory */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Connectivism as a Modern Learning Theory
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-2">
                According to <strong>Siemens (2004)</strong>, connectivism describes learning as an active phenomenon occurring through dynamic personal networks, bridging cognitivism and constructivism to establish patterns for future real-world situations.
              </p>
              
              <FigureConnectivism />
            </div>

            {/* Lessons Learned of Topic 1 section 1 */}
            <div className="bg-slate-50 border border-slate-150 p-3.5 rounded-xl text-xs text-slate-500 font-medium mt-2">
              <span className="text-[10px] uppercase font-bold text-[#004080] tracking-wider block mb-0.5">Topic Insight</span>
              "E-learning does not replace educational facilitators; rather, it transforms educators into active managers of network-based environments where physical bounds vanish."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 4: UNIT 1 - TOPIC 1 CONT. (ICT SKILLS, PROS & CONS, HIGHLIGHT) */}
        <DocumentSheet pageNumber={4} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 1 Cont.</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Required Skills, Pros & Cons Matrix
              </h2>
            </div>

            {/* ICT Skills */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Required ICT Skills
              </h3>
              <p className="text-slate-600 text-xs md:text-sm">
                To function successfully in advanced virtual environments, students and content curators must actively cultivate and demonstrate key digital competencies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-bold text-xs text-[#004080] block uppercase mb-1">Digital Fluency</span>
                  <p className="text-xs text-slate-500">Regularly improving tech knowledge and navigating complex digital frameworks with ease.</p>
                </div>
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-bold text-xs text-[#004080] block uppercase mb-1">Content Creation</span>
                  <p className="text-xs text-slate-500">Understanding intellectual structures to build digital learning assets and assessments.</p>
                </div>
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-bold text-xs text-[#004080] block uppercase mb-1">Educator Collaboration</span>
                  <p className="text-xs text-slate-500">Maintaining cooperation through communicative portals, blogs, and interactive forums.</p>
                </div>
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-bold text-xs text-[#004080] block uppercase mb-1">Tool Literacy</span>
                  <p className="text-xs text-slate-500">Competently applying virtual software systems, social interfaces, and cloud environments.</p>
                </div>
              </div>
            </div>

            {/* Fig 3 */}
            <div className="pt-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Strategic Advantages vs. Pedagogical Limitations
              </h3>
              <FigureProsCons />
            </div>

            <TopicFormQR 
              topicId="U1T1"
              title="Lectura Interactiva y Diagnóstico U1T1 - Integración de las TICs"
              description="Evaluación formativa sobre el rol de las Tecnologías de la Información y Comunicación en el sistema educativo nacional, ventajas metodológicas e integración sistémica."
              url="https://docs.google.com/forms/d/e/1FAIpQLScbXRA8KVeywe-UuAynaUhHyiMPFkUV41f6sw-kO_ZUPvY6ZA/viewform"
            />

            {/* Highlight Box Lessons Learned */}
            <div className="bg-orange-50/40 border border-orange-200/50 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-[#FF6600]">
                <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Lessons Learned • Topic 1</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed pl-6">
                <strong>Balancing Human Touch and Tech:</strong> E-learning does not replace classical teachers; it shifts them into facilitators of complex networks. The master criteria to prevent high dropout rates resides in keeping solid communication combined with flexible self-pacing.
              </p>
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 5: UNIT 1 - TOPIC 2 (CONTENT DEVELOPMENT & INSTRUCTOR ROLES) */}
        <DocumentSheet pageNumber={5} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Content Development & Teacher Competencies
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Students will understand the basic methodology required to produce electronic didactic content successfully.
                </p>
              </div>
            </div>

            {/* Asynchronous vs Synchronous Table content */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                E-Learning Modalities: Synchronous vs. Asynchronous
              </h3>
              <p className="text-slate-600 text-xs md:text-sm">
                Curricular design requires choosing appropriate modes to deliver materials according to student environments:
              </p>
              
              <FigureSyncAsync />
            </div>

            {/* Instructor Competencies and Roles */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                The 8 Roles of the Online Instructor
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mb-2">
                Evolving from traditional lecturers, online educators must act simultaneously across 8 operational roles: 
                <strong> Researcher, Technologist, Content Facilitator, Administrator, Designer, Advisor, Process Facilitator, and Evaluator</strong> (ISTE, 2014 standards).
              </p>
              
              <FigureInstructorRoles />
            </div>

            <TopicFormQR 
              topicId="U1T2"
              title="Lectura Interactiva y Diagnóstico U1T2 - Competencias Docentes y Metodología"
              description="Evaluación sobre los esquemas metodológicos para la creación de contenidos educativos y los 8 roles clave del docente virtual."
              url="https://docs.google.com/forms/d/e/1FAIpQLScI0tOKmdbpyAI67ZS-6lMVwcr08Vu5UOAAhPBTkB9_COMV8Q/viewform"
            />

            {/* Lessons Learned */}
            <div className="bg-[#004080]/5 border border-[#004080]/10 p-3.5 rounded-xl text-xs text-slate-700">
              <strong className="text-[#004080] uppercase text-[10px] tracking-wider block mb-0.5">Lessons Learned • Topic 2</strong>
              "Successful online programs depend directly on the structural quality of pedagogical contents and the technical-dialogic competencies of teachers, not just on platform capacity."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 6: UNIT 1 - TOPIC 3 (EDUCATIONAL PORTALS, FIGURES 6 AND 7) */}
        <DocumentSheet pageNumber={6} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 3</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Educational and Cultural Portals as Strategies
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Apply the benefits of using cultural portals as a teaching strategy in the educational process.
                </p>
              </div>
            </div>

            {/* Definicion Portales */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Educational Portals Definition & Structures
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-[#FF6600]">
                These act as gatekeepers or gateways to specialized, high-curation virtual spaces. Beyond simple repositories, they contain academic blogs, course news feeds, research columns, and localized databases.
              </p>
            </div>

            {/* Figure 6 Portal Structure */}
            <FigurePortalStructure />

            {/* Classification of Virtual tools and Fig 7 */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Taxonomy of Virtual Learning Tools (Tosun, 2018)
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mb-2">
                According to <strong>Tosun (2018)</strong>, organizing tools into categories (like LMS, LXP, Authoring tools, and Project Management utilities) allows students to design their custom, optimal learning environments.
              </p>
              
              <FigureToolsClassification />
            </div>

            <TopicFormQR 
              topicId="U1T3"
              title="Lectura Interactiva y Diagnóstico U1T3 - Portales Educativos y Clasificación"
              description="Evaluación sobre los portales educativos institucionales, curación de recursos didácticos y taxonomía estándar de herramientas web."
              url="https://docs.google.com/forms/d/e/1FAIpQLSd3kKE13DTf0dhlsMz8_1kpp0tRJYz_jJoR6kIG9jxICctJNg/viewform"
            />

            {/* Lessons Learned */}
            <div className="bg-slate-50 border border-slate-150 p-3.5 rounded-xl text-xs text-slate-600">
              <strong className="text-[#004080] uppercase text-[10px] tracking-wider block mb-0.5">Lessons Learned • Topic 3</strong>
              "Educational portals function not merely as static storage repositories, but as collaborative ecosystems where educators co-create certified academic paths."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 7: UNIT 1 - TOPIC 4 (SOCIAL NETWORKING, FIGURES 9, 10, 11, 12) */}
        <DocumentSheet pageNumber={7} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Social Networking as Learning Spaces
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Design resources using the advantages of networking in formative learning.
                </p>
              </div>
            </div>

            {/* Basis */}
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic border-l-4 border-slate-350 pl-3">
              "The increasingly widespread use of social network sites to expand and deepen one's social connections is a relatively new but potentially important phenomenon that has implications for teaching and learning." 
              <span className="text-[#004080] font-bold block not-italic font-sans text-[11px] mt-1">— Greenhow & Askari, 2017</span>
            </p>

            {/* Fig 9: Advantages */}
            <FigureSocialAdvantages />

            {/* Turning Social Networks into Learning Space and Fig 10 */}
            <div className="space-y-1.5 pt-1.5 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Methodologies & Evolutionary Steps
              </h3>
              <p className="text-slate-600 text-xs md:text-sm">
                Repurposing mainstream commercial social networks requires a modular process flow to turn casual sites into dedicated learning workspaces:
              </p>
              
              <FigureSocialLearningSpace />
            </div>

            {/* Web 1.0 vs Web 2.0 comparison and Fig 11 */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Evolution Matrix: Web 1.0 vs. Web 2.0
              </h3>
              
              <FigureWebComparison />
            </div>

            {/* Rules of behavior & Fig 12 */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Codes of Conduct and Safety
              </h3>
              
              <FigureSocialBehaviorRules />
            </div>

            <TopicFormQR 
              topicId="U1T4"
              title="Lectura Interactiva y Diagnóstico U1T4 - Redes Sociales como Espacio de Aprendizaje"
              description="Evaluación sobre la transformación de plataformas recreativas en redes académicas formales, ventajas institucionales y normas de netiqueta."
              url="https://docs.google.com/forms/d/e/1FAIpQLScRoXvD__eT2ZIb1Kmtjd0hxTSXyIGrF9MhEEJ_fgZLU1PVQA/viewform"
            />

            {/* Lessons Learned */}
            <div className="bg-orange-50/40 border border-orange-200 p-3.5 rounded-xl text-xs text-slate-700">
              <strong className="text-[#FF6600] uppercase text-[10px] tracking-wider block mb-0.5">Lessons Learned • Topic 4</strong>
              "Social networks represent more than passive leisure. When governed by explicit guidelines, structured curation, and robust tasks, they generate immense collaborative learning communities."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 8: UNIT 2 - TOPIC 1 (LEARNING PLATFORMS AS TRAINING SPACES, FIGURES 13, 14, 15) */}
        <DocumentSheet pageNumber={8} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 1</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Learning Platforms as a New Training Space
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Recognize the evolution of e-learning as a new academic tendency in the educational process.
                </p>
              </div>
            </div>

            {/* Platf definition */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Core Concept of Educational Platforms
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-[#004080]">
                A learning platform represents a virtual system designed to manage and deliver academic information, allowing students to access, repeat, and complete academic content without the limits of physical campuses or rigid schedules.
              </p>
            </div>

            {/* 7 Facts Box */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Seven Facts of Advanced Learning Platforms
              </h3>
              
              <FigurePlatformFacts />
            </div>

            {/* Evolution and Trends */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Evolution of Educational Tech Ecosystems
              </h3>
              
              <FigureTechEvolution />
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Five Current Pedagogical Trends
              </h3>
              
              <FigureLearningTrends />
            </div>

            <TopicFormQR 
              topicId="U2T1"
              title="Lectura Interactiva y Diagnóstico U2T1 - Plataformas como Espacio Formativo"
              description="Evaluación sobre plataformas virtuales de aprendizaje, tendencias pedagógicas emergentes y automatización del seguimiento estudiantil."
              url="https://docs.google.com/forms/d/e/1FAIpQLSfnUI_y1hg81_ION7RehCNdYxFn4ExwlEJ3Fz_shWJuPrT7tw/viewform"
            />

            {/* Lessons Learned */}
            <div className="bg-[#004080]/5 border border-[#004080]/10 p-3.5 rounded-xl text-xs text-slate-700">
              <strong className="text-[#004080] uppercase text-[10px] tracking-wider block mb-0.5">Lessons Learned • Topic 1</strong>
              "Modern software networks should behave not merely as file repositories, but as customized learning hubs that adapt dynamically to continuous education."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 9: UNIT 2 - TOPIC 2 (PLATFORMS AND SERVICES, ACTORS, FIGURES 16, 17, 18) */}
        <DocumentSheet pageNumber={9} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 2</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                E-Learning Platforms and Their Services
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Identify the main features and functions of learning platforms as resources in the educational process.
                </p>
              </div>
            </div>

            {/* Three Actors */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                The Three Vital Actors of the Platform
              </h3>
              
              <FigurePlatformActors />
            </div>

            {/* Engagement Factors */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Student Engagement Factors
              </h3>
              
              <FigureStudentEngagement />
            </div>

            {/* Technology tools for engagement */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Engagement Tools & Class Interaction
              </h3>
              
              <FigureEngagementTools />
            </div>

            <TopicFormQR 
              topicId="U2T2"
              title="Lectura Interactiva y Diagnóstico U2T2 - Servicios y Actores de Plataformas"
              description="Evaluación sobre los 3 actores fundamentales de los sistemas virtuales, factores de enganche del estudiante y herramientas de gamificación."
              url="https://docs.google.com/forms/d/e/1FAIpQLScqR6z96YnLp6vZGPTiAHXqAEYs7WQR_U-8JqAPRfpv_Ztrug/viewform"
            />

            {/* Lessons Learned */}
            <div className="bg-slate-50 border border-slate-150 p-3.5 rounded-xl text-xs text-slate-600">
              <strong className="text-[#004080] uppercase text-[10px] tracking-wider block mb-0.5">Lessons Learned • Topic 2</strong>
              "Active student interest is not an accidental trigger. It demands tools designed for communication, prompt dialogic feedback, and visual platforms supporting gamification."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 10: UNIT 2 - TOPIC 3 (TYPES OF PLATFORMS, FIGURES 19, 20, 21) */}
        <DocumentSheet pageNumber={10} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 3</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Types of Educational Platforms & Standards
              </h2>
            </div>

            {/* Objective Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-1 flex items-start gap-2">
              <div className="bg-[#FF6600]/10 text-[#FF6600] p-1.5 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6600] block">Learning Objective</span>
                <p className="text-xs text-slate-700 font-medium">
                  Implement the types of platforms for their features and accessibility as resources in the educational process.
                </p>
              </div>
            </div>

            {/* Platforms Benefits */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Educational Platform Benefits
              </h3>
              
              <FigurePlatformBenefits />
            </div>

            {/* Digital Standardization Metrics */}
            <div className="space-y-2 pt-2 border-t border-slate-100 border-dashed">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                E-Learning Standardization Criteria
              </h3>
              
              <FigureStandardizationCriteria />
            </div>

            {/* Free vs Commercial platforms */}
            <div className="space-y-2 pt-2 border-t border-slate-100 border-dashed">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Open Source (Free) vs. Commercial Softwares
              </h3>
              
              <FigureFreeVsCommercial />
            </div>

            <TopicFormQR 
              topicId="U2T3"
              title="Lectura Interactiva y Diagnóstico U2T3 - Redes, Estándares de Accesibilidad y Licencias"
              description="Evaluación sobre los criterios internacionales de estandarización en red, control de licencias comerciales frente a software libre de código abierto."
              url="https://docs.google.com/forms/d/e/1FAIpQLSeS4LV2guTcWYRcNaXa0tnTcxi7pGxX28uC4OHW86teJ2jbMA/viewform"
            />

            {/* Critical Note */}
            <div className="bg-orange-50/40 border border-orange-200 p-3.5 rounded-xl text-xs text-slate-700">
              <strong className="text-[#FF6600] uppercase text-[10px] tracking-wider block mb-0.5">Important Academic Insight</strong>
              "Free software does not mean free of cost. High-quality support, specialized developers, integration factors, and hosting infrastructures demand real institutional investments."
            </div>
          </div>
        </DocumentSheet>


        {/* SHEET 11: APPENDIX & REFERENCES (GLOSSARY) */}
        <DocumentSheet pageNumber={11} totalPageCount={totalSheetsCount}>
          <div className="space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Reference Section</span>
              <h2 className="text-lg md:text-xl font-display font-bold text-[#004080] uppercase tracking-tight">
                Academic Glossary & Bibliographic References
              </h2>
            </div>

            {/* Mini Intro */}
            <p className="text-slate-600 text-xs italic">
              Compendium of certified terms compiled under state standards for rapid citation in scientific working papers.
            </p>

            {/* Glossary Table */}
            <div className="border border-slate-250 rounded-xl overflow-hidden shadow-xs text-[11px] md:text-xs">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                    <th className="p-3 w-1/3">Term</th>
                    <th className="p-3 w-2/3">Academic Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">Asynchronous learning</td>
                    <td className="p-3 text-slate-500">Learning where students access content at different times, without real-time online physical interaction.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">Blended learning</td>
                    <td className="p-3 text-slate-500">Hybrid format matching conventional on-site lectures with advanced web course modules.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">Connectivism</td>
                    <td className="p-3 text-slate-500">Learning theory explaining cognitive growth through connection density inside digital social networks.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">E-learning</td>
                    <td className="p-3 text-slate-500">Instructional methodology mediated exclusively by electronic computers and network systems.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">Gamification</td>
                    <td className="p-3 text-slate-500">Incorporation of playful elements, checklists, and scoreboards into serious academic spaces.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">ICT</td>
                    <td className="p-3 text-slate-500">Information and Communication Technologies.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">LMS / LXP</td>
                    <td className="p-3 text-slate-500">Software used to administer, document, deliver, and track educational paths or experiences.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-3 font-semibold text-[#004080]">Web 2.0</td>
                    <td className="p-3 text-slate-500">Write-and-share dynamic internet era enabling blogs, video streaming, and social interaction.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bibliographic References Section */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <h3 className="font-bold text-xs md:text-sm text-[#004080] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-3 bg-[#FF6600] rounded-xs" />
                Bibliographic Citations (APA Style)
              </h3>
              
              <ul className="space-y-2 text-[11px] leading-relaxed text-slate-500 font-medium pl-2">
                <li className="pl-4 -indent-4 md:pl-5 md:-indent-5">
                  • <strong>Siemens, G. (2004).</strong> <em>Connectivism: A Learning Theory for the Digital Age.</em> elearnspace Journal.
                </li>
                <li className="pl-4 -indent-4 md:pl-5 md:-indent-5">
                  • <strong>Goldie, J. G. S. (2016).</strong> <em>Connectivism: A knowledge learning theory for the digital age.</em> Medical Teacher, 38(10), 1064-1069.
                </li>
                <li className="pl-4 -indent-4 md:pl-5 md:-indent-5">
                  • <strong>Ratheeswari, K. (2018).</strong> <em>Information communication technology in education.</em> Journal of Applied and Advanced Research, 3(1), 45-47.
                </li>
                <li className="pl-4 -indent-4 md:pl-5 md:-indent-5">
                  • <strong>Tosun, N. (2018).</strong> <em>Social Networks as a Learning and Teaching Environment.</em> Journal of Education and Training Studies, 6(11a), 194.
                </li>
                <li className="pl-4 -indent-4 md:pl-5 md:-indent-5">
                  • <strong>Ouadoud, M., Rida, N., & Chafiq, T. (2021).</strong> <em>Overview of E-learning Platforms for Teaching and Learning.</em> Int. Journal of Recent Contributions to Engineering Science & IT, 9(1), 50-70.
                </li>
              </ul>
            </div>
          </div>
        </DocumentSheet>

      </div>
    </div>
  );
}

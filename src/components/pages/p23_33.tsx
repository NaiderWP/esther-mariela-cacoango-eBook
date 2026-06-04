import React from "react";
import { GraduationCap, Award, CheckCircle, Database, Layout, BookOpen, UserCheck, Star, Sparkles, Book, ShieldCheck, Settings, Globe, Code } from "lucide-react";
import { DocumentSheet } from "../DocumentSheet";
import { 
  FigurePlatformFacts, 
  FigureTechEvolution, 
  FigureLearningTrends, 
  FigurePlatformActors, 
  FigureStudentEngagement,
  FigureEngagementTools,
  FigurePlatformBenefits,
  FigureStandardizationCriteria,
  FigureFreeVsCommercial
} from "../AcademicFigures";
import { TopicFormQR } from "../TopicFormQR";
import { ExternalResourceQR } from "../ExternalResourceQR";
import MindMap from "../MindMap";

export default function Page23_33({ onNavigate }: { onNavigate?: (pageNum: number) => void }) {
  return (
    <>
      {/* PAGE 26: DEDICATED MIND MAP - UNIT 2 SUMMARY */}
      <DocumentSheet pageNumber={26}>
        <div className="flex flex-col justify-between h-full space-y-3.5">
          <div className="space-y-1 text-center border-b border-slate-100 pb-2">
            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Systems & Platforms Summary Map</span>
            <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
              Mind Map Summary — Unit 2: Virtual Learning Environments (VLE)
            </h2>
            <p className="text-slate-500 text-[11px] leading-relaxed max-w-2xl mx-auto">
              This interactive academic mind map models the core systemic integrations inside e-learning platforms, detailing relations between teachers, students, administrators, and backend resources.
            </p>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 relative overflow-hidden select-none">
            {/* Visual corkboard background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
            
            {/* Full Sheet Concept Map Visual */}
            <div className="w-full lg:w-4/7 h-full flex items-center justify-center z-10">
              <img 
                src="/src/assets/images/unit_2_concept_map_1780530367640.png" 
                alt="Mind Map Summary — Unit 2: Virtual Learning Environments (VLE)"
                className="max-h-[340px] max-w-full rounded-xl object-contain shadow-md border border-slate-200 bg-white p-2 hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Structured Legend explaining nodes in English */}
            <div className="w-full lg:w-3/7 space-y-3 z-10 bg-white border border-slate-200/80 p-4 rounded-xl shadow-2xs text-[10.5px]">
              <span className="font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-150 pb-1 text-[9px]">
                LMS Platform Legend & Actors:
              </span>
              <div className="space-y-2 text-slate-600 font-semibold leading-relaxed">
                <p>
                  <strong className="text-[#FF6600] text-[9.5px] uppercase">1. LMS Database Node (Moodle):</strong> The main platform engine managing registrations, course folders, SCORM standard imports, and grading files.
                </p>
                <p>
                  <strong className="text-[#004080] text-[9.5px] uppercase">2. Administrative User:</strong> Manages security credentials, server load balancing, and SSO token authorization.
                </p>
                <p>
                  <strong className="text-emerald-700 text-[9.5px] uppercase">3. Pedagogical Actor (Teacher):</strong> Feeds the platform with slides, video links, diagnostic forms, and interactive points.
                </p>
                <p>
                  <strong className="text-indigo-700 text-[9.5px] uppercase">4. End User Student Dashboard:</strong> Accesses self-paced worksheets, schedules Zoom advisory, and submits coursework tasks.
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-between text-[9px] text-slate-400 font-bold select-none">
            <span>UNEMI • ESD COURSEWORK DESIGN PORTFOLIO</span>
            <span className="font-mono text-[#004080] bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-3xs uppercase text-[9px]">
              Unit 2 Blueprint
            </span>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 27: PLATFORMS AS NEW TRAINING SPACES — CONTENT SHEET #22 (ENRICHED LAYOUT TO REMOVE WHITE SPACE & SPACE BOXES) */}
      <DocumentSheet pageNumber={27}>
        <div className="space-y-8 md:space-y-12 h-full flex flex-col justify-between py-4">
          <div className="space-y-2">
            <div className="space-y-0.5 border-b border-slate-150 pb-2">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 1 Spaces</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                E-Learning Platforms as Strategic Training Venues
              </h2>
            </div>

            <p className="text-slate-600 text-xs md:text-[13px] leading-[1.8] pt-2">
              According to recent educational research, virtual learning platforms do not merely replicate physical desks. Instead, they establish a social learning environment where instructional materials, collaborative discussions, and assessments happen in a shared digital space.
            </p>
          </div>

          {/* Generously spaced boxes to occupy more sheet space as requested */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 py-3">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3.5 shadow-3xs hover:shadow-2xs transition-all duration-300 min-h-[170px] flex flex-col justify-between">
              <span className="font-extrabold text-[#004085] uppercase text-[10px] tracking-wide block border-b border-slate-200/50 pb-1.5">
                1. Administrative Integration
              </span>
              <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">
                Centralizes user accounts, processes registrations, records logs, and archives gradebooks securely inside system databases.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3.5 shadow-3xs hover:shadow-2xs transition-all duration-300 min-h-[170px] flex flex-col justify-between">
              <span className="font-extrabold text-[#FF6600] uppercase text-[10px] tracking-wide block border-b border-slate-200/50 pb-1.5">
                2. Collaborative Pedagogies
              </span>
              <p className="text-[11px] text-slate-550 leading-relaxed font-semibold">
                Supports group discussions, student-led blogs, resource sharing, and real-time messaging, enhancing online peer support.
              </p>
            </div>
          </div>

          {/* Enriched Deployment Standards Panels to remove whitespace and translated completely to English */}
          <div className="p-5 bg-slate-50 border border-slate-200/65 rounded-2xl grid grid-cols-3 gap-6 text-[10px] text-slate-500 font-semibold leading-relaxed shadow-3xs">
            <div>
              <span className="font-bold text-[#004080] uppercase block text-[8.5px] mb-1">Access Audits & Logs</span>
              Login timestamps, duration metrics, and clickstreams to alert teachers for early intervention on passive student patterns.
            </div>
            <div>
              <span className="font-bold text-[#FF6500] uppercase block text-[8.5px] mb-1">Private Data Protection</span>
              Compliance with student password encryption rules and secure cloud database tables for sensitive coursework results.
            </div>
            <div>
              <span className="font-bold text-emerald-800 uppercase block text-[8.5px] mb-1">Elastic Cloud Servers</span>
              Scalable backends handling concurrent request surges during class finals or mass coursework submission deadlines.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 28: PLATFORM FACTS AND ROADMAPS — CONTENT SHEET #23 */}
      <DocumentSheet pageNumber={28}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="space-y-3">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 1 Timeline</span>
              <h2 className="text-xs md:text-sm font-display font-bold text-[#004080] uppercase tracking-tight">
                7 Essential Facts (Fig 13)
              </h2>
            </div>
            <div className="scale-[0.9] origin-left select-none">
              <FigurePlatformFacts />
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6605]">Unit 2 • Topic 1 Timeline</span>
              <h2 className="text-xs md:text-sm font-display font-bold text-[#004080] uppercase tracking-tight">
                E-Learning Tech Roadmap (Fig 14)
              </h2>
            </div>
            <div className="scale-[0.9] origin-left select-none">
              <FigureTechEvolution />
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 29: MODERN EDUCATIONAL TRENDS — CONTENT SHEET #24 */}
      <DocumentSheet pageNumber={29}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 select-none">
            <FigureLearningTrends />
          </div>
          
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 1 Trends</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                5 Modern Trends in Digital Education
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
              Figure 15 classifies contemporary pedagogical models. Modern higher education programs align teaching strategies across five trends: Blended environments, gamification, microlearning, personalized instruction, and lifelong learning networks.
            </p>

            <div className="p-3.5 bg-orange-50/40 border border-orange-200/55 rounded-xl space-y-1.5 text-[11px] text-slate-705 italic font-semibold leading-relaxed">
              ⭐ <strong>Gamification Rule:</strong> Adding visual progress badges, peer leaderboards, and interactive point systems keeps students motivated without distracting from the core academic content.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 30: PLATFORMS DIAGNOSTICS & EVALUATIONS — CONTENT SHEET #25 (TRENDS BOX MOVED TO BOTTOM & TRANSLATED) */}
      <DocumentSheet pageNumber={30}>
        <div className="space-y-4 h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column Description */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 1 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Interactive Form QRs & Platform Assessment
              </h2>
              <p className="text-slate-600 text-xs leading-[1.7] font-semibold text-slate-450">
                Verify your understanding of modern instructional trends and platform layouts. Scan the QR code to log into the online exam, or answer the questions block.
              </p>
            </div>

            {/* Right Column QRs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 p-2.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-3xs">
              <ExternalResourceQR 
                label="L2.R1"
                title="E-Learning Platforms Study"
                description="Comparative paper by eLearning Industry details trends and challenges across top institutional LMS environments."
                url="https://elearningindustry.com/directory/software-categories/learning-management-systems"
                compact={true}
              />

              <TopicFormQR 
                topicId="U2T1"
                title="Topic 2.1 Reading Form"
                description="Test covering emerging platforms, LXP structures, content curation networks, and virtual gamification."
                url="https://docs.google.com/forms/d/e/1FAIpQLScXG3_W3lQ18wYfCH5FbeoWej-9tG6tC7Doz3Hl_Q7e5gQ7OQ/viewform"
                compact={true}
              />
            </div>
          </div>

          {/* Trends Questionnaire moved to the absolute bottom (full width) & translated to English */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4.5 space-y-3 shadow-3xs mt-auto">
            <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-[#004080]" />
              Trends Questionnaire — Topic 1
            </span>

            <div className="grid grid-cols-2 gap-4 text-[10.5px] font-semibold text-slate-705 leading-normal">
              <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-3xs">
                <p className="font-bold text-slate-800 mb-1">Q1: What is the main conceptual difference between an LMS and an LXP?</p>
                <p className="text-slate-500 font-semibold pl-1.5 text-[10px] leading-relaxed">
                  <span className="text-[#004080] font-black">✔ LMS:</span> Institutionally controlled structure. <br/>
                  <span className="text-[#004080] font-black">✔ LXP:</span> Learner-centric design with personalized, AI-driven recommendation channels.
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-3xs">
                <p className="font-bold text-slate-800 mb-1">Q2: Which educational trend proposes short-duration, bite-sized learning objects?</p>
                <p className="text-slate-505 font-semibold pl-1.5 text-[10.5px]">
                  <span className="text-[#004080] font-black">✔ Microlearning (Self-contained, bite-sized autonomous lectures).</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 31: ECOSYSTEM ACTORS AND ROLEPLAYING — CONTENT SHEET #26 */}
      <DocumentSheet pageNumber={31}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 select-none">
            <FigurePlatformActors />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 2 Stakeholders</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Core Stakeholders of Virtual Platforms
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
              Figure 16 models the triangular relationship between the platform and its core stakeholders: Learners, Teachers, and System Administrators.
            </p>

            <div className="space-y-2 text-[10.5px] text-slate-700 font-semibold leading-relaxed">
              <p>
                💡 <strong>The Student:</strong> Owns the study path, interacts with materials, submits worksheets, and monitors grades.
              </p>
              <p>
                💡 <strong>The Teacher:</strong> Designs study activities, moderates forum boards, and evaluates assignments.
              </p>
              <p>
                💡 <strong>The Administrator:</strong> Configures databases, secures server space, and integrates external APIs.
              </p>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 32: STUDENT ENGAGEMENT DIMENSIONS — CONTENT SHEET #27 */}
      <DocumentSheet pageNumber={32}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 2 Engagement</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                9 Factors for Sustained Student Engagement
              </h2>
            </div>
            <p className="text-slate-605 text-xs leading-[1.8] font-semibold text-slate-450">
              Virtual courses require interactive strategies to keep motivation high. The 9-factor model (Figure 17) outlines the triggers that promote active participation in online classes.
            </p>

            <div className="p-3 bg-slate-50 border border-slate-205 rounded-xl space-y-1.5 text-[10.5px] leading-relaxed text-slate-500 font-semibold animate-fade-in">
              <p>🛡 <strong>Active Feedback loop:</strong> Providing timely grading feedback prevents online isolation and maintains lesson focus.</p>
              <p>🛡 <strong>Visual aesthetics:</strong> Designing clean, organized, responsive slides and materials reduces user fatigue.</p>
            </div>
          </div>

          <div className="lg:col-span-7 select-none">
            <FigureStudentEngagement />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 33: ACTIVE TOOL COLLAGES & ENGAGEMENT UTILITIES — CONTENT SHEET #28 */}
      <DocumentSheet pageNumber={33}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 select-none">
            <FigureEngagementTools />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 2 Engagement Tools</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Modern Tools Driving Peer Interaction
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-[#004080] font-semibold">
              Figure 18 details 8 modern tools that support learner collaboration, including Kahoot!, Google Forms, Class Dojo, Zoom, Padlet, and Canva.
            </p>

            <div className="p-3.5 bg-[#FF6600]/5 border border-[#FF6600]/15 rounded-xl text-[10.5px] leading-[1.7] text-slate-705 font-medium">
              🎨 <strong>Aesthetic Integration:</strong> Adding visual elements, point leaderboards, and collaborative boards bridges geographic gaps and turns study milestones into a shared learning experience.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 34: STAKEHOLDER DIAGNOSTICS & WEB SCRIPTS — CONTENT SHEET #29 (QUESTIONNAIRE MOVED TO BOTTOM & TRANSLATED) */}
      <DocumentSheet pageNumber={34}>
        <div className="space-y-4 h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 2 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Interactive Form QRs & Topic 2 Quiz
              </h2>
              <p className="text-slate-650 text-xs leading-[1.75] font-semibold text-slate-500">
                Test your understanding of engagement dynamics and platform stakeholders. Scan the QR code to access the exam portal, or answer the check questions directly.
              </p>
            </div>

            {/* Right QRs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 p-2.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-3xs">
              <ExternalResourceQR 
                label="L2.R2"
                title="Student Engagement Study (HBR)"
                description="Analysis from Harvard Business Publishing on student engagement strategies and digital interaction design."
                url="https://hbsp.harvard.edu/inspiring-insights/student-engagement-strategies-and-digital-interaction"
                compact={true}
              />

              <TopicFormQR 
                topicId="U2T2"
                title="Topic 2.2 Reading Form"
                description="Diagnostic quiz analyzing platform stakeholders, active interaction indices, and digital gaming hooks."
                url="https://docs.google.com/forms/d/e/1FAIpQLSewS9A7OpxX2kY8q3Q6l3_P9O_hA6G_U21h6Z9T0Z5N29Y5ZA/viewform"
                compact={true}
              />
            </div>
          </div>

          {/* Stakeholder Questionnaire moved to bottom (full width) & translated to English */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4.5 space-y-3 shadow-3xs mt-auto">
            <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-100 pb-1 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#004080]" />
              Stakeholder Questionnaire — Topic 2
            </span>

            <div className="grid grid-cols-2 gap-4 text-[10.5px] font-semibold text-slate-600 leading-normal">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Q1: Who is technically responsible for configuring database schemas and integrating third-party APIs?</p>
                <div className="pl-2.5">
                  <span className="text-[#004080] font-bold">✔ The System Administrator.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-1">Q2: Which engagement factor is designed to reduce student isolation and boost motivation?</p>
                <div className="pl-2.5">
                  <span className="text-[#004080] font-bold">✔ Interactive fast feedback loops and authentic instructor presence.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 35: PLATFORM BENEFIT, STANDARDS & SCORM CRITERIA — CONTENT SHEET #30 */}
      <DocumentSheet pageNumber={35}>
        <div className="space-y-3">
          <div className="space-y-0.5 border-b border-slate-105 pb-1">
            <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 2 • Topic 3 Standards</span>
            <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
              Platform Benefits, Licensing & Industrial SCORM Standardization
            </h2>
          </div>

          <p className="text-slate-600 text-xs leading-[1.6] font-semibold text-slate-500">
            Selecting institutional software requires a careful balance between user cost, features, and standard support. 
            Standardizing content using <strong>SCORM (Shareable Content Object Reference Model)</strong> or <strong>xAPI</strong> prevents vendor lock-in, enabling interactive elements to run consistently on diverse platform choices.
          </p>

          <div className="grid grid-cols-3 gap-3 items-start select-none">
            <div className="scale-[0.88] origin-top">
              <FigurePlatformBenefits />
            </div>
            <div className="scale-[0.88] origin-top">
              <FigureStandardizationCriteria />
            </div>
            <div className="scale-[0.88] origin-top">
              <FigureFreeVsCommercial />
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 36: APPENDIX SECTION I: ACADEMIC BIBLIOGRAPHY (BRAND NEW RE-DESIGNED FULL PAGE) */}
      <DocumentSheet pageNumber={36}>
        <div className="space-y-4 h-full flex flex-col justify-between">
          <div className="space-y-0.5 border-b border-[#004080]/15 pb-1 flex justify-between items-end">
            <div>
              <span className="text-[9.5px] uppercase font-mono font-bold tracking-widest text-[#004080] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Appendix Section I
              </span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Academic Bibliography & References (APA Seventh Edition)
              </h2>
            </div>
            <span className="text-[10px] text-slate-400 font-mono font-bold">Scientific Repository</span>
          </div>

          <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-450">
            Sustained higher education handbooks require backing by recent academic research. The following scientific citations have informed both Unit 1 and Unit 2 lessons:
          </p>

          <div className="grid grid-cols-1 gap-3 text-[11px] text-slate-700 font-semibold italic bg-slate-50/50 border border-slate-100 rounded-2xl p-5 leading-relaxed shadow-3xs flex-1 justify-center">
            <p>
              • Greenhow, C., & Askari, E. (2017). Learning and teaching with social network sites: A decade of research in K-12 and tertiary education. <span className="font-bold text-[#004080] not-italic">Interactive Learning Environments</span>, 25(5), 623-645.
            </p>
            <p>
              • Siemens, G. (2005). Connectivism: A learning theory for the digital age. <span className="font-bold text-[#004080] not-italic">International Journal of Instructional Technology and Distance Learning</span>, 2(1), 3-10.
            </p>
            <p>
              • Tosun, M. (2018). Taxonomic classification of digital e-learning tools inside active high-education setups. <span className="font-bold text-[#004080] not-italic">Turkish Journal of Educational Technology</span>, 17(3), 88-99.
            </p>
            <p>
              • UNESCO (2018). <span className="font-bold text-[#FF6600] not-italic">ICT Competency Framework for Teachers (ICT-CFT)</span>, Version 3. UNESCO Publishing, Paris, France.
            </p>
            <p>
              • Zambrano-Pachay, J. (2024). Modalities design dynamics inside UNEMI virtual systems. <span className="font-bold text-[#004080] not-italic">State University of Milagro Publishing</span>, Milagro, Ecuador.
            </p>
          </div>

          <div className="p-3 bg-[#004080]/5 rounded-xl border border-slate-100 text-[10px] text-slate-500 font-semibold leading-normal">
            📚 <strong>Curricular Note:</strong> The citations listed above constitute the theoretical and scientific framework backing the UNE E-Learning basic education program.
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 37: APPENDIX SECTION II: TECHNICAL GLOSSARY & HANDBOOK ANNEXES (BRAND NEW RE-DESIGNED FULL PAGE INTERNALLY TRANSLATED TO ENGLISH) */}
      <DocumentSheet pageNumber={37}>
        <div className="space-y-4 h-full flex flex-col justify-between">
          <div className="space-y-0.5 border-b border-[#FF6600]/15 pb-1 flex justify-between items-end">
            <div>
              <span className="text-[9.5px] uppercase font-mono font-bold tracking-widest text-[#FF6600] flex items-center gap-1.5">
                <Book className="w-3.5 h-3.5" />
                Appendix Section II
              </span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Academic glossary and institutional handbook annexes
              </h2>
            </div>
            <span className="text-[10px] text-slate-400 font-mono font-bold">Concept Terminology</span>
          </div>

          <p className="text-slate-605 text-xs leading-[1.8] font-semibold text-slate-500">
            Review detailed definitions of technical terms and systems components implemented inside virtual paradigms:
          </p>

          <div className="grid grid-cols-2 gap-5 text-[10.5px] leading-relaxed text-slate-705 bg-slate-50/50 border border-slate-100 rounded-2xl p-5 shadow-3xs flex-1">
            <div className="space-y-4 font-semibold">
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-semibold">LMS (Learning Management System):</strong>
                Software application used for provisioning structured electronic courses, recording enrollment files, and administering grade evaluations.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-semibold">LXP (Learning Experience Platform):</strong>
                A user-centric system that emphasizes curated articles, video playlists, content streams, and social sharing.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-bold">B-Learning (Blended Learning):</strong>
                Hybrid learning combining online educational interactivity with face-to-face oral practice and communication workshops.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-bold">Flipped Classroom:</strong>
                Pedagogical model promoting autonomous pre-study of theoretical web materials, optimizing real-time classes for guided debate.
              </p>
            </div>
            <div className="space-y-4 font-semibold">
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-semibold">SCORM (Shareable Content Object Reference):</strong>
                A collection of technical standards that ensure online learning modules run seamlessly across different LMS configurations.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-semibold">Connectivism / George Siemens:</strong>
                A learning theory positing that modern, digital-era knowledge resides inside connected node systems.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-bold">Academic Netiquette:</strong>
                Ethical, professional, and grammatical protocols essential for maintaining online written communications with absolute empathy.
              </p>
              <p>
                <strong className="text-[#004080] uppercase text-[9px] block font-bold">Teacher Digital Competency (UNESCO):</strong>
                Integrated skillsets, theoretical foundations, and attitudes empowering educators to steer pedagogical workflows through ICT mediation.
              </p>
            </div>
          </div>
        </div>
      </DocumentSheet>
    </>
  );
}

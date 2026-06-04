import React from "react";
import { Sparkles, HelpCircle, HardDrive, AlertCircle, BookOpen, Globe, Compass, ShieldAlert, Users, Layers, Layout, Share2, Shield, Settings, Info } from "lucide-react";
import { DocumentSheet } from "../DocumentSheet";
import { 
  FigurePortalStructure, 
  FigureToolsClassification, 
  FigureSocialAdvantages, 
  FigureSocialLearningSpace,
  FigureWebComparison,
  FigureSocialBehaviorRules
} from "../AcademicFigures";
import { TopicFormQR } from "../TopicFormQR";
import { ExternalResourceQR } from "../ExternalResourceQR";
import MindMap from "../MindMap";

export default function Page12_22({ onNavigate }: { onNavigate?: (pageNum: number) => void }) {
  return (
    <>
      {/* PAGE 14: UNIT 1 • TOPIC 2 ASSESSMENT — CONTENT SHEET #10 (SHIFTED & BALANCED LAYOUT) */}
      <DocumentSheet pageNumber={14}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-1">
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 2 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Virtual Teaching Assessments & Resources
              </h2>
              <p className="text-slate-605 text-xs leading-[1.8] font-semibold">
                Validate your skills in design, advisory, and facilitation workflows. Scan the interactive QRs below or complete the case study question block on this sheet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50/50 p-2.5 rounded-2xl border border-slate-150">
              <ExternalResourceQR 
                label="L1.R2"
                title="Teaching Resources (SIT)"
                description="Guidelines from the Singapore Institute of Technology on online teaching enhancement and classroom communication."
                url="https://www.singaporetech.edu.sg/sit-teaching-and-learning-academy/teaching-resources/tech-enhanced-learning/CORT"
                compact={true}
              />

              <TopicFormQR 
                topicId="U1T2"
                title="Topic 1.2 Reading Form"
                description="Diagnostic questionnaire on virtual advisory workflows, micro-teaching guides, and administrative roles."
                url="https://docs.google.com/forms/d/e/1FAIpQLScI0tOKmdbpyAI67ZS-6lMVwcr08Vu5UOAAhPBTkB9_COMV8Q/viewform"
                compact={true}
              />
            </div>
          </div>

          {/* Right column: Actionable Academic Case study */}
          <div className="bg-[#004080]/5 border border-[#004080]/15 rounded-2xl p-5 space-y-3 flex flex-col justify-between h-full">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#004080] tracking-wider block border-b border-[#004080]/10 pb-1 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#004080]" />
                Classroom Case File: The Passive Online Learner
              </span>
              <p className="text-slate-605 italic text-[11px] leading-relaxed font-semibold">
                "An educator observes a student who frequently logs in to download study PDFs but has not posted in any group forums or submitted the initial assignments. The course relies heavily on cooperative learning."
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#004080]/10">
              <span className="text-[9.5px] uppercase font-black tracking-widest text-[#FF6600] block">Assessment Options & Rationale</span>
              <div className="space-y-2 text-[10.5px] text-slate-700 font-semibold leading-relaxed">
                <p><strong>Option A (Aministrator Response):</strong> Overwrite grades to zero and process an automated warning report to registrar offices without direct counseling.</p>
                <p className="text-[#004080] font-bold"><strong>Option B (The Multi-Role Advisor Response - Correct):</strong> Access LMS database metrics, email the student a friendly, supportive note, and schedule a 5-minute virtual check-in to identify and resolve systemic bottlenecks.</p>
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 15: EDUCATIONAL PORTALS STRATEGY — CONTENT SHEET #11 (ENRICHED LAYOUT FOR NO WHITE SPACE) */}
      <DocumentSheet pageNumber={15}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 3</span>
                <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                  Educational and Cultural Portals as Strategies
                </h2>
              </div>
              <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
                Educational portals act as gateways to structured, curated resources. Much more than simple websites, they provide secure single-sign-on access to library research databases, news feeds, student folders, and grading books.
              </p>

              <div className="p-3.5 bg-orange-50/40 border border-orange-200/50 rounded-2xl text-[10.5px] text-slate-705 leading-relaxed font-semibold">
                <span className="font-bold text-[#FF6600] uppercase text-[9px] block mb-1">Functional Objectives:</span>
                <ul className="list-disc pl-4 space-y-0.5">
                  <li>Provide unified entry portals linking all digital systems (SSO integration).</li>
                  <li>Support secure segmentation of data based on user roles and profiles.</li>
                  <li>Index institutional journal publications and research data with robust search tools.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/65 p-4.5 rounded-2xl space-y-3.5 h-full flex flex-col justify-center shadow-3xs">
              <div className="flex gap-3 items-start">
                <div className="bg-[#004080]/15 text-[#004080] p-2 rounded-xl shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-extrabold text-slate-800 text-xs block">Unified Strategic Portals</span>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-semibold">
                    By bringing communications and workflows into a single interface, portals prevent information loss, bridge geographic gaps, and improve student performance indices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enriched panel for WCAG and portal designing parameters to remove white space */}
          <div className="p-3 bg-[#004080]/5 border border-[#004080]/10 rounded-xl grid grid-cols-3 gap-3 text-[10px] text-slate-550 font-semibold leading-relaxed">
            <div>
              <span className="font-bold text-[#004080] uppercase text-[8px] block mb-0.5">Accessibility WCAG 2.1</span>
              Robust screen-reader friendly navigation, high-contrast assets, and scalable layouts for visual support.
            </div>
            <div>
              <span className="font-bold text-[#FF6600] uppercase text-[8px] block mb-0.5">Single Sign-On SSO</span>
              Seamless unified authentication across portals, library books, and research databases.
            </div>
            <div>
              <span className="font-bold text-emerald-800 uppercase text-[8px] block mb-0.5">API Modular Architecture</span>
              Scalable connections to third-party secure SaaS systems, calendar feeds, and directory nodes.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 16: PORTAL ARCHITECTURE SETUP — CONTENT SHEET #12 */}
      <DocumentSheet pageNumber={16}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigurePortalStructure />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 3 Portal Architect</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Pillars of Academic Portal Layouts
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-[#004080]">
              Figure 6 models how portals partition workspace channels into three structural pillars: 
              (1) News Feed feeds; (2) Class folders, schedules, and tools; and (3) Research journals and metadata folders.
            </p>
            
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[10.5px] text-slate-500 leading-relaxed font-semibold">
              ⭐ <strong>UNEMI Architectural Standard:</strong> Consistent with our scientific criteria, our main platform serves as a unified ecosystem where users find course guides, check academic publications, and submit work in a secure cloud environment.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 17: TAXONOMY OF VIRTUAL TOOLS — CONTENT SHEET #13 */}
      <DocumentSheet pageNumber={17}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 3 Taxonomy</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Taxonomic Organization of E-Learning Tools
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
              According to educational researchers like <strong>Tosun (2018)</strong>, organizing digital support services into logical taxonomies helps educators build structured, effective learning spaces. Figure 7 models the classification tree:
            </p>

            <div className="grid grid-cols-3 gap-2.5 text-[9px] text-slate-600 leading-relaxed font-semibold">
              <div className="p-2.5 bg-slate-50 border border-slate-150 rounded-lg">
                <span className="font-extrabold text-[#004080] uppercase block mb-1">Administrative</span>
                LMS platforms (Moodle), course scheduling, and grade reporting.
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-150 rounded-lg">
                <span className="font-extrabold text-[#FF6600] uppercase block mb-1">Cooperative</span>
                Shared word files, team wikis, and cloud storage folders.
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-150 rounded-lg">
                <span className="font-extrabold text-emerald-700 uppercase block mb-1">Interactive</span>
                Gamified quiz tools (Kahoot), video meetings, and online exams.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FigureToolsClassification />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 18: PORTAL DIAGNOSTICS & CHECKLISTS — CONTENT SHEET #14 (CHECKLIST BOX MOVED TO BOTTOM ALL THE WAY) */}
      <DocumentSheet pageNumber={18}>
        <div className="space-y-4 h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Upper Left: Intro */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 3 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Portal Evaluation Checklist & Diagnostic QRs
              </h2>
              <p className="text-slate-600 text-xs leading-[1.7] font-semibold text-slate-500">
                Evaluate administrative and design compliance with portal industry rubrics. Scan the QR code to sign in to the Google Forms test, or review the checklist parameters.
              </p>
            </div>

            {/* Upper Right: Form QR */}
            <div className="lg:col-span-6 p-2 bg-slate-50 border border-slate-200 rounded-2xl shadow-3xs flex items-center justify-center">
              <TopicFormQR 
                topicId="U1T3"
                title="Topic 1.3 Reading Form"
                description="Self-assessment on e-learning taxonomies and modern university portal architectures."
                url="https://docs.google.com/forms/d/e/1FAIpQLSd3kKE13DTf0dhlsMz8_1kpp0tRJYz_jJoR6kIG9jxICctJNg/viewform"
              />
            </div>
          </div>

          {/* Checklist Box moved and aligned at the absolute bottom */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4.5 shadow-3xs space-y-2.5 mt-auto">
            <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-100 pb-1 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#004080]" />
              Checklist: Portal Usability & compliance parameters
            </span>

            <div className="grid grid-cols-2 gap-4 text-[10.5px] font-semibold text-slate-600">
              <div className="p-2.5 bg-slate-50/70 rounded-xl space-y-1.5 border border-slate-100">
                <p className="font-bold text-[#004080] uppercase text-[8.5px]">Technical Checks</p>
                <div className="space-y-1 text-slate-500">
                  <p>✔ [ ] Unified login (SSO)</p>
                  <p>✔ [ ] Mobile device support</p>
                  <p>✔ [ ] Secure document encryption</p>
                </div>
              </div>

              <div className="p-2.5 bg-slate-50/70 rounded-xl space-y-1.5 border border-slate-100">
                <p className="font-bold text-[#FF6605] uppercase text-[8.5px]">Pedagogical Checks</p>
                <div className="space-y-1 text-slate-500">
                  <p>✔ [ ] Filtered bibliography indexes</p>
                  <p>✔ [ ] Multi-format content players</p>
                  <p>✔ [ ] Integrated student blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 19: SOCIAL NETWORKS IN EDUCATION — CONTENT SHEET #15 (ENRICHED LAYOUT FOR NO EXTRA WHITE SPACE) */}
      <DocumentSheet pageNumber={19}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4</span>
                <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                  Social Networks as Academic Spaces
                </h2>
              </div>
              
              <p className="text-slate-605 italic border-l-4 border-[#FF6600] pl-3.5 text-xs leading-[1.8] font-semibold">
                "The increasingly widespread use of social network sites to expand and deepen one's social connections is a relatively new but potentially important phenomenon that has implications for teaching and learning." 
                <span className="text-[#004080] font-bold block not-italic font-sans text-[10px] mt-1.5">— Greenhow & Askari, 2017</span>
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#004080]/5 p-5 border border-slate-200/60 rounded-2xl flex flex-col justify-center h-full">
              <span className="font-bold text-[#004080] uppercase text-[10px] block mb-2 tracking-wide">
                Transition: Leisure towards active research
              </span>
              <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                By introducing structured guidelines and moderation, social environments turn into virtual meeting points. Students share academic findings, coordinate team roles, and publish study bulletins.
              </p>
            </div>
          </div>

          {/* Enriched Implementation Standards Panel to eliminate whitespace */}
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl grid grid-cols-3 gap-3.5 text-[10px] text-slate-500 font-semibold leading-relaxed">
            <div>
              <span className="font-bold text-[#004080] uppercase text-[8px] block mb-0.5">1. Teacher Moderation</span>
              Define dedicated subject channels where monitors resolve academic queries and weed out personal chatter.
            </div>
            <div>
              <span className="font-bold text-[#FF6600] uppercase text-[8px] block mb-0.5">2. Privacy Safeguards</span>
              Deploy private workspaces separated from students' personal profiles, securing identity data.
            </div>
            <div>
              <span className="font-bold text-emerald-800 uppercase text-[8px] block mb-0.5">3. Co-Creative Blogging</span>
              Leverage micro-blogging tools and web digests for publishing collective research summaries.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 20: PEDAGOGICAL BENEFITS OF SOCIAL SPACES — CONTENT SHEET #16 */}
      <DocumentSheet pageNumber={20}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigureSocialAdvantages />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4 Benefits</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Educational Values of Social Environments
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
              Figure 9 profiles the 6 structural benefits of social network systems: youthful popularity, multi-format file support, instant message response rates, low skill entry barriers, and distance mitigation.
            </p>

            <div className="p-3.5 bg-[#FF6600]/5 border border-[#FF6600]/15 rounded-xl text-[11px] text-slate-750 font-semibold">
              📋 <strong>Operational Insight:</strong> Because students already use these platforms daily, administrative friction is minimized. Students naturally interact, form study cohorts, and review shared peer materials.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 21: REPURPOSING SOCIAL WORKFLOWS — CONTENT SHEET #17 */}
      <DocumentSheet pageNumber={21}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4 Workflow</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Repurposing Social Networks for Learning
              </h2>
            </div>
            <p className="text-slate-650 text-xs leading-[1.8] font-semibold">
              To transform open social media into structured academic spaces, virtual facilitators must apply the 4-phase workflow detailed in Figure 10:
            </p>

            <div className="space-y-2 text-[10.5px] text-slate-700 font-semibold">
              <p>
                <strong>Phase 1: Tool Selection</strong> — Picking a service that supports files organization and privacy.
              </p>
              <p>
                <strong>Phase 2: Space Customization</strong> — Setting up dedicated student rooms and study channels.
              </p>
              <p>
                <strong>Phase 3: Rule Definition</strong> — Publishing netiquette standards and writing guidelines.
              </p>
              <p>
                <strong>Phase 4: Content Sharing</strong> — Posting summaries and coordinate peer grading loops.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FigureSocialLearningSpace />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 22: WEB 1.0 VS WEB 2.0 COMPARATIVE MATRIX — CONTENT SHEET #18 */}
      <DocumentSheet pageNumber={22}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <FigureWebComparison />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4 Matrix</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Generational Transitions on the Web
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
              The foundations of social web education rest on Web 2.0 frameworks. This shifted users from passive readers (HTML, static screens, email) to active writers and co-creators (interactive feeds, blogs, cloud drives).
            </p>

            <div className="bg-[#004080]/5 border border-[#004080]/15 rounded-xl p-3.5 text-[10.5px] text-slate-605 font-medium">
              💡 <strong>Instructional Value:</strong> This shift makes active crowdsourcing and shared spreadsheets possible, turning isolated homework into an interactive, collaborative experience.
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 23: CODES OF CONDUCT AND CIVIL PROTOCOLS — CONTENT SHEET #19 */}
      <DocumentSheet pageNumber={23}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4 Conduct</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Codes of Conduct and Academic Netiquette
              </h2>
            </div>
            <p className="text-slate-600 text-xs leading-[1.8] font-[#004080] font-semibold">
              Promoting a civil workspace requires publishing rules describing student conduct. Netiquette ensures respectful academic communication:
            </p>

            <div className="bg-slate-50 border border-slate-250 rounded-xl p-3.5 space-y-2 text-[10.5px] text-slate-700 font-semibold leading-[1.7]">
              <p>🚫 <strong>Avoid All-Caps text:</strong> Writing in capital letters is interpreted as shouting in online communication.</p>
              <p>🔍 <strong>Verify scientific sources first:</strong> Check facts before posting links in academic groups.</p>
              <p>🔒 <strong>Maintain confidentiality bounds:</strong> Never share classmate files or study metrics outward.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FigureSocialBehaviorRules />
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 24: SOCIAL WEB ASSESSMENT & DIAGNOSTIC QRS — CONTENT SHEET #20 (FIXED BALANCED LAYOUT) */}
      <DocumentSheet pageNumber={24}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-1">
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#FF6600]">Unit 1 • Topic 4 Diagnostics</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Interactive Form QRs & Topic 4 Quiz
              </h2>
              <p className="text-slate-600 text-xs leading-[1.75] font-semibold text-slate-500">
                Ensure compliance with netiquette protocols and Web 2.0 rules. Scan the QR code to take the quiz, or answer the questions block directly on this sheet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-slate-50/50 p-2.5 rounded-2xl border border-slate-150">
              <ExternalResourceQR 
                label="L1.R3"
                title="Teaching with Social Networks"
                description="Study by Greenhow & Askari analyzing the pedagogical value of social platforms in tertiary educations."
                url="https://www.tandfonline.com/doi/full/10.1080/01587919.2017.1299562"
                compact={true}
              />

              <TopicFormQR 
                topicId="U1T4"
                title="Topic 1.4 Reading Form"
                description="Diagnostic quiz on written netiquette rules, digital footprinting, and active social learning."
                url="https://docs.google.com/forms/d/e/1FAIpQLScr1u6-i9M9qI7_4Z5UaKWe83xM6-N_eP1iTj7S9W_zXpP7pQ/viewform"
                compact={true}
              />
            </div>
          </div>

          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4.5 h-4.5 text-[#004080]" />
              Conduct Questionnaire — Topic 4
            </span>

            <div className="space-y-3.5 text-[11px] text-slate-705 font-semibold">
              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-3xs">
                <p className="font-bold text-slate-800 mb-1">Q1: What defines the term Netiquette (Netiquette)?</p>
                <div className="text-slate-500 font-semibold pl-2">
                  <span className="text-[#004080] font-black">✔ The body of courtesy rules and digital civic guidelines adapted for professional online communication.</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-3xs">
                <p className="font-bold text-slate-800 mb-1">Q2: In which phase of educational social platform redesign are these rules defined?</p>
                <div className="text-slate-500 font-semibold pl-2">
                  <span className="text-[#004080] font-black">✔ Phase 3: Setting Administrative Protocols and Written Netiquette Standards.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentSheet>

      {/* PAGE 25: UNIT 2 INTRO & STATE OF THE ART — CONTENT SHEET #21 (SHIFTED & FIXED BALANCED LAYOUT) */}
      <DocumentSheet pageNumber={25}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-1">
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-[#004080]">Unit 2 • Systems & Platforms</span>
              <h2 className="text-base font-display font-bold text-[#004080] uppercase tracking-tight">
                Main Virtual Learning Systems & Frameworks
              </h2>
              <p className="text-slate-600 text-xs leading-[1.8] font-semibold text-slate-500">
                Unit 2 focuses on e-learning systems, examining technical platforms like LMS (Learning Management Systems) and LXP (Learning Experience Platforms). These frameworks house course resources, track user trends, and host interactive tools.
              </p>
            </div>
            
            <div className="py-2 pl-3 border-l-2 border-[#FF6600]/80">
              <span className="font-bold text-[#FF6600] uppercase text-[9px] block">Unit 2 Structural Intent:</span>
              <p className="text-slate-705 leading-relaxed font-semibold">
                We study platform operations from three critical perspectives: (1) Administration (Moodle, licensing), (2) Pedagogy (gamification, engagement), and (3) Technical criteria (SCORM, interoperability standards).
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-slate-50 border border-slate-200/60 p-5 rounded-2xl space-y-2 h-full">
            <div className="space-y-1">
              <span className="font-extrabold text-[#004080] uppercase text-[10px] block">Interactive Mind-Mapping (Unit 2)</span>
              <p className="text-[10.5px] text-slate-500 leading-normal font-semibold font-sans">
                The detailed interactive Concept Map on Page 26 outlines the system relationships across Moodle platforms, courses, and student cohorts. Below is a preview card:
              </p>
            </div>
            <div className="pt-1 select-none flex-1 flex items-center justify-center border border-slate-200/60 p-2 rounded-xl bg-white">
              <img 
                src="/src/assets/images/unit_2_concept_map_1780530367640.png"
                alt="Unidad 2 Concept Map Preview (nanobanana)"
                className="w-full max-h-[190px] object-contain rounded-lg hover:scale-[1.01] transition-transform cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </DocumentSheet>
    </>
  );
}

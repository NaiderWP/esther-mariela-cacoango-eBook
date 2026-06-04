import React from "react";

interface BaseFigureProps {
  figureNumber: number;
  title: string;
  caption: string;
  imageSrc: string;
  maxHeightClass?: string;
}

// Beautiful Figure component that displays the real image with zero overlays, high visibility, and professional margins
function AcademicFigure({ figureNumber, title, caption, imageSrc, maxHeightClass = "max-h-[300px]" }: BaseFigureProps) {
  // Gracefully handle images with space in filename
  return (
    <figure className="my-5 border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50 p-4 shrink-0 transition-all hover:shadow-md">
      {/* Structural layout: Header showing "Figure X: Title" */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF6600]">
          Figure {figureNumber}
        </span>
        <span className="text-xs font-semibold text-slate-500 italic">
          {title}
        </span>
      </div>

      {/* Actual Image Area - Unobstructed and fully visible */}
      <div className="rounded-lg overflow-hidden bg-white border border-slate-100 p-2 flex justify-center items-center shadow-xs">
        <img 
          src={imageSrc} 
          alt={title}
          className={`w-full ${maxHeightClass} object-contain transition-all duration-300 select-none`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Official Foot-caption */}
      <figcaption className="mt-3 text-[11px] leading-relaxed text-slate-500 font-medium bg-slate-100/50 p-2.5 rounded border border-slate-100 pl-3 border-[#004080] border-l-4">
        <strong className="text-slate-700 font-bold">Figure {figureNumber}:</strong> {caption} 
        <span className="text-slate-400 font-mono text-[9px] block sm:inline sm:ml-2 mt-0.5 sm:mt-0">(Ref: {imageSrc.slice(1)})</span>
      </figcaption>
    </figure>
  );
}

// FIGURE 1: ICT Integration
export function FigureTicIntegration({ maxHeightClass = "max-h-[300px]" }: { maxHeightClass?: string }) {
  return (
    <AcademicFigure
      figureNumber={1}
      title="ICT Integration in Education"
      caption="Conceptual diagram showing the integration of ICT (Information and Communication Technologies) in the educational system. Displays full systemic connectivity representing computers, networks, virtual classrooms, teachers, and students in flat vector style."
      imageSrc="/gra 1.png"
      maxHeightClass={maxHeightClass}
    />
  );
}

// FIGURE 2: Connectivism in Learning
export function FigureConnectivism() {
  return (
    <AcademicFigure
      figureNumber={2}
      title="Learning Theory: Connectivism"
      caption="Concept of connectivism in high-tech learning. Represents a central neural nodes network connecting people, databases, and online academic resources in a dark cybernetic neon layout."
      imageSrc="/gra 2.png"
    />
  );
}

// FIGURE 3: Advantages vs Limitations
export function FigureProsCons() {
  return (
    <AcademicFigure
      figureNumber={3}
      title="Advantages and Limitations"
      caption="Bi-fold academic infographic displaying advantages vs. limitations of e-learning. Formatted with comparative checks and warning indicators to outline learning parameters."
      imageSrc="/gra 3.png"
    />
  );
}

// FIGURE 4: Asynchronous vs Synchronous E-learning
export function FigureSyncAsync() {
  return (
    <AcademicFigure
      figureNumber={4}
      title="Asynchronous vs. Synchronous Learning"
      caption="Comparative visualization showing autonomous self-paced learning (watching video lecture with time and calendar icons) versus real-time interactive collaboration (videoconferencing in a group)."
      imageSrc="/gra 4.png"
    />
  );
}

// FIGURE 5: Roles of the Online Instructor
export function FigureInstructorRoles() {
  return (
    <AcademicFigure
      figureNumber={5}
      title="Online Instructor Roles"
      caption="Circular taxonomic model detailing the 8 essential pedagogical roles of modern educators: Researcher, Technologist, Content Facilitator, Administrator, Designer, Advisor, Process Facilitator, and Evaluator."
      imageSrc="/gra 5.png"
    />
  );
}

// FIGURE 6: Educational Portal Structure
export function FigurePortalStructure() {
  return (
    <AcademicFigure
      figureNumber={6}
      title="Educational Portal Architecture"
      caption="Architectural block diagram describing an educational portal, organized into three functional pillars: News Feed, Education (with course folders, tools, calendars, blogs), and Research repositories."
      imageSrc="/gra 6.png"
    />
  );
}

// FIGURE 7: Virtual Learning Tools Classification
export function FigureToolsClassification() {
  return (
    <AcademicFigure
      figureNumber={7}
      title="Virtual Learning Tools Taxonomy"
      caption="Visual tree diagram classifying online tools into 9 standard categories including LMS, LXP, Video Training, Microlearning, Project Management, Content Creation/Management, and Communication."
      imageSrc="/gra 7.png"
    />
  );
}

// FIGURE 8: Historical Evolution of E-Learning
export function FigureTimeline() {
  return (
    <AcademicFigure
      figureNumber={8}
      title="E-Learning Evolution Timeline"
      caption="Evolutionary roadmap detailing Web 1.0 (static resources/forums), Web 2.0 (collaborative platforms, media sharing), and Emerging Trends (AI, virtual reality, and microlearning modules)."
      imageSrc="/gra 8.png"
    />
  );
}

// FIGURE 9: Advantages of Social Networks in Education
export function FigureSocialAdvantages() {
  return (
    <AcademicFigure
      figureNumber={9}
      title="Educational Benefits of Social Networks"
      caption="An academic infographic delineating 6 institutional benefits of social media engagement: youth popularity, instant responses, multi-format file hosting, low technical entry barriers, physical distance mitigation, and multi-faceted reactive collaboration."
      imageSrc="/gra 9.png"
    />
  );
}

// FIGURE 10: How to Turn a Social Network into a Learning Space
export function FigureSocialLearningSpace() {
  return (
    <AcademicFigure
      figureNumber={10}
      title="Repurposing Social Networks for Learning"
      caption="A step-by-step structural workflow rendering the 4 phases to transform general platforms into structured learning hubs: (1) Platform Selection, (2) Dedicated Hub Creation, (3) Protocol Establishment, and (4) Sharing & Active Community Engagement."
      imageSrc="/gra 10.png"
    />
  );
}

// FIGURE 11: Comparison: Web 1.0 vs Web 2.0
export function FigureWebComparison() {
  return (
    <AcademicFigure
      figureNumber={11}
      title="Comparative Matrix: Web 1.0 vs Web 2.0"
      caption="Dual comparison charting the generational transition from Web 1.0 (read-only static HTML, low bandwidth gateways, direct emails) to Web 2.0 (write/collaborative dynamically hosted services, high bandwidth streams, interactive feed communities)."
      imageSrc="/gra 11.png"
    />
  );
}

// FIGURE 12: Behavioral Rules in Educational Social Networks
export function FigureSocialBehaviorRules() {
  return (
    <AcademicFigure
      figureNumber={12}
      title="Codes of Conduct in Academic Networks"
      caption="Instructional poster listing the 5 guidelines of digital citizenship in education: consulting prior to publishing sensitive content, anti-cyberbullying protocols, professional staff-student bounds, well-informed commenting, and data confidentiality."
      imageSrc="/gra 12.png"
    />
  );
}

// FIGURE 13: 7 Facts About Educational Platforms
export function FigurePlatformFacts() {
  return (
    <AcademicFigure
      figureNumber={13}
      title="Seven Core Facts of Academic Platforms"
      caption="Structural graphic listing essential system facts: one-click course setup, adaptive grouping, zero-install requirements, customized web workshops, trackable dashboard analytics, mobile accessibility, and automated instant assessments."
      imageSrc="/gra 13.png"
    />
  );
}

// FIGURE 14: Evolution of E-Learning Technology
export function FigureTechEvolution() {
  return (
    <AcademicFigure
      figureNumber={14}
      title="Evolutionary Paths of Learning Tech"
      caption="Timeline mapping the tech evolution: CD-ROM static media (1990s), LMS corporate portals (2000s), Web 2.0 active social learning (2010s), and current/future AI-driven immersive microlearning spaces (2020s+)."
      imageSrc="/gra 14.png"
    />
  );
}

// FIGURE 15: Current Trends in E-Learning
export function FigureLearningTrends() {
  return (
    <AcademicFigure
      figureNumber={15}
      title="Five Modern E-Learning Trends"
      caption="A circular taxonomy displaying current learning trends: Blended Learning models, systematic Gamification, focused Microlearning, personalized pathways, and Continuous Lifelong loop learning."
      imageSrc="/gra 15.png"
    />
  );
}

// FIGURE 16: Three Actors of an E-Learning Platform
export function FigurePlatformActors() {
  return (
    <AcademicFigure
      figureNumber={16}
      title="Core Actors of the E-Learning Environment"
      caption="Triangular relational model placing the Platform at the core, surrounded by its three vital stakeholders: Learner, Teacher, and System Administrator, highlighting their mutual connections."
      imageSrc="/gra 16.png"
    />
  );
}

// FIGURE 17: 9 Factors of Student Engagement
export function FigureStudentEngagement() {
  return (
    <AcademicFigure
      figureNumber={17}
      title="Nine Factors for Student Engagement"
      caption="Grid detailing the 9 engagement triggers in online coursework: Clear Goals, Interactive Content, Rapid Feedback, Gamification, Active Collaboration, Personalization, Multimedia Assets, Schedule Flexibility, and Visible Instructor Presence."
      imageSrc="/gra 17.png"
    />
  );
}

// FIGURE 18: Technology Tools for Engagement
export function FigureEngagementTools() {
  return (
    <AcademicFigure
      figureNumber={18}
      title="Engagement Tools & Student Interaction"
      caption="Collage showing 8 modern technology tools that drive learner engagement: Kahoot!, Google Forms, Class Dojo, Prezi, Zoom, Padlet, Quizlet, and Canva templates."
      imageSrc="/gra 18.png"
    />
  );
}

// FIGURE 19: Benefits of Online Platforms
export function FigurePlatformBenefits() {
  return (
    <AcademicFigure
      figureNumber={19}
      title="Four Benefits of Ed-Tech Platforms"
      caption="Academic infographic displaying direct platform advantages: flexible & low-cost training, reduced travel constraints, continuous interaction loops, and minimal technical barriers for entry."
      imageSrc="/gra 19.png"
    />
  );
}

// FIGURE 20: Standardization Criteria
export function FigureStandardizationCriteria() {
  return (
    <AcademicFigure
      figureNumber={20}
      title="E-Learning Standardization Criteria"
      caption="Comparison matrix listing the 6 standardization dimensions: Accessibility, Interoperability, Reusability, Durability, Maintainability, and Adaptability with their definitions."
      imageSrc="/gra 20.png"
    />
  );
}

// FIGURE 21: Free vs Commercial Platforms
export function FigureFreeVsCommercial() {
  return (
    <AcademicFigure
      figureNumber={21}
      title="Comparative Study: Free vs. Commercial Software"
      caption="Bilateral matrix comparing Free/Open Source software (e.g., Moodle, Chamilo) to Commercial/Proprietary solutions (e.g., Coursera, eLearning Industry), highlighting that open-source software still carries maintenance, support, and hosting costs."
      imageSrc="/gra 21.png"
    />
  );
}

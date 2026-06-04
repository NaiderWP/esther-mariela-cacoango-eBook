import React from "react";
import { GraduationCap } from "lucide-react";

export function UnemiLogo({ className = "h-24", align = "center" }: { className?: string, align?: "left" | "center" }) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"} justify-center`}>
      {!hasError ? (
        <img
          src="/logo_unemi.png"
          alt="UNEMI Logo"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`${className} object-contain transition-all duration-300`}
        />
      ) : (
        <GraduationCap className="w-8 h-8 text-[#004080]" />
      )}
    </div>
  );
}

interface DocumentSheetProps {
  pageNumber: number;
  children: React.ReactNode;
}

export function DocumentSheet({ pageNumber, children }: DocumentSheetProps) {
  return (
    <section 
      id={`page-${pageNumber}`}
      className="mx-auto my-4 max-w-[1100px] min-h-[750px] w-full bg-white border border-slate-200/80 shadow-md rounded-lg py-8 px-[0.8in] flex flex-col justify-between relative transition-all duration-300 page-break print:my-0 print:border-none print:shadow-none print:py-6 print:px-[0.8in] print:min-h-screen print:max-h-screen print:rounded-none"
    >
      {/* Page Header */}
      <div className="w-full mb-3 flex justify-between items-center border-b border-slate-100 pb-2">
        <UnemiLogo className="h-6" align="left" />
        <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 font-mono">
          E-Learning — Trends & Challenges
        </div>
      </div>

      {/* Main Page Content - increased leading for line spacing and better look */}
      <div className="flex-1 flex flex-col justify-start text-slate-700 font-sans text-sm md:text-[14.5px] leading-[1.75]">
        {children}
      </div>

      {/* Page Footer */}
      <div className="w-full mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
        <span className="text-[9px] text-[#004080] font-bold uppercase tracking-wide">Universidad Estatal de Milagro — UNEMI</span>
        <div className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100 font-semibold font-mono text-[9.5px] print:border-none">
          PAGE {pageNumber}
        </div>
      </div>
    </section>
  );
}

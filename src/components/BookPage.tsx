import React from "react";
import { Award, BookOpen } from "lucide-react";

interface BookPageProps {
  pageNumber: number;
  totalPageCount?: number;
  children: React.ReactNode;
  id?: string;
  isSheetView: boolean; // whether to simulated printed page or continuous flow
  fontSizeClass: string; // text size scaling
  title?: string;
}

export default function BookPage({
  pageNumber,
  totalPageCount = 8,
  children,
  id,
  isSheetView,
  fontSizeClass,
  title
}: BookPageProps) {
  
  // Custom margin classes based on the view mode
  const containerClass = isSheetView
    ? "mx-auto my-8 max-w-[850px] min-h-[1100px] bg-white border border-slate-200 shadow-xl rounded-sm p-12 md:p-16 flex flex-col justify-between relative sheet-container transition-all duration-300"
    : "w-full max-w-4xl mx-auto py-12 px-6 border-b border-slate-100 flex flex-col justify-between";

  return (
    <section id={id || `sheet-${pageNumber}`} className={`${containerClass} scroll-mt-24 page-break`}>
      {/* Page Header (Only visible / structured elegantly on sheet mode) */}
      <div className="w-full mb-8">
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 text-xs tracking-wider uppercase text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-unemi-orange" />
            <span className="font-bold text-unemi-blue">UNEMI</span>
            <span className="hidden sm:inline">| Universidad Estatal de Milagro</span>
          </div>
          <div className="flex items-center gap-1 text-unemi-orange font-bold text-[10px]">
            <Award className="w-3 h-3" /> FORMACIÓN DE EXCELENCIA
          </div>
        </div>
        {title && pageNumber > 1 && (
          <div className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            {title}
          </div>
        )}
      </div>

      {/* Main Page Content */}
      <div className={`flex-1 flex flex-col justify-start text-slate-700 leading-relaxed ${fontSizeClass}`}>
        {children}
      </div>

      {/* Page Footer */}
      <div className="w-full mt-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-1.5 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-unemi-blue" />
          <span>EBOOK INTELIGENTE • UNIDADES 1 & 2</span>
        </div>
        <div className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100 font-semibold font-mono text-[11px] float-right">
          PÁG. {pageNumber} DE {totalPageCount}
        </div>
      </div>
    </section>
  );
}

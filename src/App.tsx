import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import Page1_11 from "./components/pages/p1_11";
import Page12_22 from "./components/pages/p12_22";
import Page23_33 from "./components/pages/p23_33";

export default function App() {
  const totalSheetsCount = 35;
  const [activeTab, setActiveTab] = useState<number>(1);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const handleScrollToPage = (pageNum: number) => {
    setActiveTab(pageNum);
    const element = document.getElementById(`page-${pageNum}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col items-center pb-12 relative select-text">
      
      {/* RENDER PAGES CONTAINER */}
      <main 
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target && target.tagName === "IMG") {
            const src = (target as HTMLImageElement).src;
            if (src) {
              setZoomedImg(src);
            }
          }
        }}
        className="w-full max-w-[1100px] flex flex-col gap-4 print:gap-0 mt-6 px-2 sm:px-4"
      >
        <Page1_11 onNavigate={handleScrollToPage} />
        <Page12_22 onNavigate={handleScrollToPage} />
        <Page23_33 onNavigate={handleScrollToPage} />
      </main>

      {/* REUSABLE ACADEMIC LIGHTBOX MODAL FOR ZOOMING IMAGES */}
      {zoomedImg && (
        <div 
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out select-none"
          onClick={() => setZoomedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white font-bold text-sm bg-slate-800 px-4 py-2 rounded-full border border-white/20 hover:bg-slate-700 transition"
              onClick={() => setZoomedImg(null)}
            >
              Cerrar Vista Grande [X]
            </button>
            <img 
              src={zoomedImg} 
              alt="Figura zoom UNEMI" 
              className="max-h-[80vh] max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl bg-white p-2"
              referrerPolicy="no-referrer"
            />
            <span className="text-white/60 text-xs mt-3 bg-slate-800/80 px-4 py-1.5 rounded-full font-mono">
              Haga clic en cualquier lado para cerrar
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

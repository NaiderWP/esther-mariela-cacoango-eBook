/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Book,
  BookOpen,
  FileText,
  Search,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  Shield,
  Clock,
  Compass,
  FileSpreadsheet,
  Check,
  User,
  GraduationCap,
  Calendar,
  AlertTriangle,
  Lightbulb,
  Printer
} from "lucide-react";
import { UNEMI_UNITS, GLOSSARY, REFERENCES } from "./data";
import BookPage from "./components/BookPage";
import MindMap from "./components/MindMap";

export default function App() {
  // View states
  const [isSheetView, setIsSheetView] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSheet, setActiveSheet] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [highlighterColor, setHighlighterColor] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<Record<string, boolean>>({});

  // Refs for scroll container
  const pageRefs = useRef<Record<string, HTMLElement | null>>({});

  const fontSizeClasses = {
    sm: "text-sm md:text-base leading-relaxed space-y-4",
    md: "text-base md:text-lg leading-relaxed space-y-5",
    lg: "text-lg md:text-xl leading-relaxed space-y-6"
  };

  // Track progress and current active sheet on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate continuous progress
      const totalScrollable = documentHeight - windowHeight;
      if (totalScrollable > 0) {
        setProgress(Math.min(100, Math.round((scrollPosition / totalScrollable) * 100)));
      }

      // Detect which sheet is currently target center
      let currentSheet = 1;
      const sheetsList = Array.from({ length: 8 }, (_, i) => i + 1);
      
      for (const num of sheetsList) {
        const el = pageRefs.current[`sheet-${num}`];
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element is within reasonable viewport view
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSheet = num;
            break;
          }
        }
      }
      setActiveSheet(currentSheet);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (pageNum: number) => {
    const el = pageRefs.current[`sheet-${pageNum}`];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleHighlight = (key: string) => {
    setHighlights((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper to render searchable & highlightable text blocks
  const renderText = (text: string, idKey: string) => {
    if (!searchQuery) {
      return (
        <span 
          onClick={() => highlighterColor && toggleHighlight(idKey)}
          className={`transition-colors duration-200 cursor-pointer ${
            highlights[idKey] ? "bg-amber-100 border-b border-amber-300" : "hover:bg-slate-50"
          }`}
          title={highlighterColor ? "Click para resaltar este fragmento" : undefined}
        >
          {text}
        </span>
      );
    }

    const index = text.toLowerCase().indexOf(searchQuery.toLowerCase());
    if (index === -1) {
      return (
        <span 
          onClick={() => highlighterColor && toggleHighlight(idKey)}
          className={highlights[idKey] ? "bg-amber-100 border-b border-amber-300" : ""}
        >
          {text}
        </span>
      );
    }

    const before = text.substring(0, index);
    const match = text.substring(index, index + searchQuery.length);
    const after = text.substring(index + searchQuery.length);

    return (
      <span 
        onClick={() => highlighterColor && toggleHighlight(idKey)}
        className={highlights[idKey] ? "bg-amber-100 border-b border-amber-300" : ""}
      >
        {before}
        <mark className="bg-orange-300 text-unemi-dark font-medium rounded-xs px-0.5">{match}</mark>
        {after}
      </span>
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-800 antialiased flex flex-col">
      {/* Top sticky navigation panel */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-3.5 flex justify-between items-center no-print text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-unemi-blue p-2 rounded-xl border border-blue-500/20 shadow-inner flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-unemi-orange animate-pulse" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block leading-none">
              Repositorio de Autoaprendizaje
            </span>
            <h1 className="font-display font-extrabold text-sm md:text-base tracking-tight text-white mt-0.5">
              UNEMI <span className="text-unemi-orange">eBook Interactivo</span> • Unidades 1 & 2
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Layout switch for fluid web vs printable book layout */}
          <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => setIsSheetView(true)}
              className={`px-3 py-1 text-xs rounded-md font-semibold transition-all ${
                isSheetView
                  ? "bg-unemi-blue text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Vista de Hojas Simbólicas (Formato Libro)"
            >
              Simulado A4
            </button>
            <button
              onClick={() => setIsSheetView(false)}
              className={`px-3 py-1 text-xs rounded-md font-semibold transition-all ${
                !isSheetView
                  ? "bg-unemi-blue text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Fila corrida para lectura fluida"
            >
              Flujo Web
            </button>
          </div>

          {/* Text Sizers */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button
              onClick={() => setFontSize("sm")}
              className={`w-7 h-7 flex items-center justify-center text-xs rounded-md font-bold ${
                fontSize === "sm" ? "bg-unemi-orange text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Texto Pequeño"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize("md")}
              className={`w-7 h-7 flex items-center justify-center text-xs rounded-md font-bold ${
                fontSize === "md" ? "bg-unemi-orange text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Texto Medio"
            >
              A
            </button>
            <button
              onClick={() => setFontSize("lg")}
              className={`w-7 h-7 flex items-center justify-center text-xs rounded-md font-bold ${
                fontSize === "lg" ? "bg-unemi-orange text-white" : "text-slate-400 hover:text-white"
              }`}
              title="Texto Grande"
            >
              A+
            </button>
          </div>

          {/* Quick Highlighter tool simulation */}
          <button
            onClick={() => setHighlighterColor((prev) => (prev ? null : "yellow"))}
            className={`w-9 h-9 hidden sm:flex items-center justify-center rounded-lg border transition-all ${
              highlighterColor
                ? "bg-amber-400/20 border-amber-400 text-amber-300"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
            title="Herramienta de Resaltado: Activa para marcar textos con un click en las hojas"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Simulate Print */}
          <button
            onClick={handlePrint}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all"
            title="Exportar o imprimir a PDF de alta resolución"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Visual top progress bar */}
      <div className="w-full h-1 bg-slate-800 sticky top-[69px] z-50 no-print">
        <div
          className="h-full bg-linear-to-r from-unemi-blue to-unemi-orange transition-all duration-300 shadow-inner"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Workspace Body */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch max-w-[1700px] w-full mx-auto relative">
        
        {/* Left Side Navigation Panel - Sticky Desk Drawer containing real-time Table of Contents and Stats */}
        <aside className="w-full lg:w-72 bg-slate-950 border-r border-slate-800/80 p-5 shrink-0 flex flex-col justify-between sticky lg:top-[74px] lg:h-[calc(100vh-74px)] overflow-y-auto no-print text-white">
          <div className="space-y-6">
            
            {/* Search Tool widget */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-unemi-orange" /> Búsqueda en el eBook
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar conceptos clave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 pl-3 pr-8 text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-unemi-orange focus:ring-1 focus:ring-unemi-orange"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-2.5 text-slate-500 hover:text-slate-300 text-xs"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Custom Interactive Table of Contents */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block pb-1 border-b border-slate-900">
                Índice de Contenidos
              </span>
              <nav className="space-y-1">
                {[
                  { page: 1, title: "Portada del Libro", icon: "💎" },
                  { page: 2, title: "Índice & Introducción", icon: "📋" },
                  { page: 3, title: "U1: TICs y Entornos EVA", icon: "🏛️" },
                  { page: 4, title: "U1: Web 2.0 y Mapa Mental", icon: "🌱" },
                  { page: 5, title: "U2: Huella y Ciberseguridad", icon: "🔒" },
                  { page: 6, title: "U2: Netiqueta y Mapa Mental", icon: "🤝" },
                  { page: 7, title: "Lecciones y Autoevaluación", icon: "💡" },
                  { page: 8, title: "Anexos: Glosario e Índices", icon: "📚" }
                ].map((item) => (
                  <button
                    key={item.page}
                    onClick={() => scrollToPage(item.page)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                      activeSheet === item.page
                        ? "bg-unemi-orange text-white shadow-md font-bold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-sm shrink-0">{item.icon}</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    <span className="text-[10px] bg-slate-900 text-slate-500 border border-slate-800 px-1.5 py-0.5 rounded-sm font-mono shrink-0">
                      p.{item.page}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Reading Assistance Tips */}
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-300 space-y-2">
              <span className="font-bold text-unemi-orange flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5" /> Consejo de Lectura:
              </span>
              <p className="leading-relaxed">
                Activa la vista de **Hojas A4** para experimentar un formato idéntico al de un libro impreso editado para la UNEMI.
              </p>
              {highlighterColor && (
                <p className="text-amber-300 font-medium">
                  ★ Modo Resaltado Activo: Haz clic en cualquier texto del libro para resaltarlo.
                </p>
              )}
            </div>
            
          </div>

          {/* Academic Footer Info */}
          <div className="pt-4 border-t border-slate-900 text-center space-y-1.5 text-[10px] text-slate-500">
            <p className="font-bold uppercase tracking-wider text-slate-400">Dirección de Grado</p>
            <p>© 2026 UNEMI. Universidad Estatal de Milagro. Todos los derechos reservados.</p>
          </div>
        </aside>

        {/* Dynamic Sheets Container (The eBook Workspace) */}
        <main className={`flex-1 overflow-x-hidden p-3 md:p-8 ${isSheetView ? "bg-slate-800" : "bg-white"}`}>
          
          {/* HOJA 1: PORTADA DEL LIBRO */}
          <div 
            ref={(el) => { pageRefs.current["sheet-1"] = el; }} 
            id="sheet-1"
            className="page-break"
          >
            {/* The Cover sheet uses custom padding and high impact institutional layout */}
            <div className="mx-auto my-8 max-w-[850px] min-h-[1100px] bg-white border border-slate-200 shadow-xl rounded-sm overflow-hidden flex flex-col justify-between relative transition-all duration-300">
              
              {/* Cover Top Decorative Ribbon */}
              <div className="w-full h-4 bg-linear-to-r from-unemi-blue via-unemi-orange to-unemi-blue" />

              {/* Cover Top section with University Seal and Brand */}
              <div className="px-12 md:px-16 pt-16 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-unemi-blue rounded-full flex items-center justify-center text-[10px] text-white font-black">U</span>
                    <span className="font-display font-black tracking-widest text-lg text-unemi-blue">UNEMI</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                    Universidad Estatal de Milagro
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-unemi-blue/10 border border-unemi-blue/20 text-unemi-blue px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider">
                    Ebook Académico Oficial
                  </span>
                </div>
              </div>

              {/* Central Title Section (High Craft, elegant visual balance) */}
              <div className="px-12 md:px-16 py-12 flex-1 flex flex-col justify-center">
                <div className="w-20 h-1 bg-unemi-orange mb-6" />
                
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-unemi-blue tracking-tight leading-none uppercase mb-4">
                  Guía Didáctica Interactiva
                  <span className="block text-unemi-orange font-light text-2xl md:text-3xl mt-2 tracking-wide lowercase italic normal-case">
                    de autoaprendizaje virtual
                  </span>
                </h2>

                <p className="text-sm md:text-base text-slate-500 font-medium max-w-lg leading-relaxed mb-8">
                  Compendio formativo exhaustivo de conceptos esenciales para las asignaturas del primer nivel en la era del conocimiento.
                </p>

                {/* Simulated visually rich book cover graphical banner using pure CSS styling */}
                <div className="w-full h-48 rounded-2xl bg-linear-to-tr from-unemi-blue to-indigo-950 p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
                  {/* Decorative glowing background mesh */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-unemi-orange/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-xl" />

                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
                      <GraduationCap className="w-5 h-5 text-unemi-orange" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-white/90">
                      Unidades Temáticas 1 y 2
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-white font-display font-extrabold text-lg md:text-xl uppercase tracking-wide leading-tight">
                      Entornos Virtuales, TIC y Ciudadanía Digital
                    </h3>
                    <p className="text-[10px] text-slate-300 font-mono font-medium">
                      Compilado técnico • Metodologías ágiles transversales
                    </p>
                  </div>
                </div>
              </div>

              {/* Cover Bottom Section (Author credentials and Date) */}
              <div className="px-12 md:px-16 pb-16 pt-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                <div className="space-y-1 text-slate-500">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Elaborado por:
                  </span>
                  <div className="font-bold text-xs text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-unemi-orange" />
                    Estudiante UNEMI de Excelente Rendimiento
                  </div>
                  <span className="text-[10px] block font-medium">Asignatura: Tecnologías para el Aprendizaje</span>
                </div>

                <div className="text-slate-500 text-left sm:text-right space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Publicación oficial:
                  </span>
                  <span className="font-bold text-xs text-slate-700 flex items-center justify-start sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-unemi-blue" />
                    Periodo 2026 - Mayo
                  </span>
                  <span className="text-[10px] block font-medium">Milagro, Guayas, Ecuador</span>
                </div>
              </div>

              {/* Sheet Number Footer */}
              <div className="w-full pb-4 border-t border-slate-100 px-12 md:px-16 flex items-center justify-between text-[11px] text-slate-400 font-bold bg-slate-50">
                <span className="uppercase tracking-widest">Compendio Virtual Docente</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  PÁG. 1 DE 8
                </span>
              </div>
            </div>
          </div>

          {/* HOJA 2: TABLA DE CONTENIDOS Y GENERAL APRENDIZAJES */}
          <div ref={(el) => { pageRefs.current["sheet-2"] = el; }} id="sheet-2">
            <BookPage pageNumber={2} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Estructura Curricular">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-unemi-blue uppercase tracking-tight flex items-center gap-2 mb-2">
                    <FileText className="w-6 h-6 text-unemi-orange" /> Índice Curricular Autogenerado
                  </h3>
                  <div className="w-12 h-1 bg-unemi-orange mb-4" />
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {renderText("Este documento está estructurado de acuerdo a las directrices pedagógicas de la Universidad Estatal de Milagro (UNEMI), con el propósito de optimizar el autoaprendizaje síncrono y asíncrono en sistemas interactivos.", "intro-1")}
                  </p>
                </div>

                {/* Beautiful custom responsive Table of contents index */}
                <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                  {[
                    { label: "Portada Institucional Académica", p: 1, desc: "Identidad Corporativa y Credenciales Universitarias" },
                    { label: "Índice Curricular de Contenidos", p: 2, desc: "Estructura del eBook, Generalidades e Introducción" },
                    { label: "Unidad 1: Entornos de Aprendizaje y Rol de TICs", p: 3, desc: "Temas 1 y 2 - El rol de la tecnología y Conceptos EVA" },
                    { label: "Unidad 1: Web 2.0 y Mapa Mental Unificado", p: 4, desc: "Tema 3 - Sistemas de co-creación y Diagrama de la Unidad" },
                    { label: "Unidad 2: Ciudadanía, Huella y Seguridad en Red", p: 5, desc: "Temas 1 y 2 - Rastro digital online y Ciberseguridad Práctica" },
                    { label: "Unidad 2: Netiqueta y Mapa Mental de Seguridad", p: 6, desc: "Tema 3 - Normativas de cortesía y comunicación formal" },
                    { label: "Lecciones Aprendidas & Checkpoint de Reflexión", p: 7, desc: "Sistemas de autoaprendizaje y retroalimentación interactiva" },
                    { label: "Anexos: Glosario de Conceptos & Bibliografía APA", p: 8, desc: "Índice de definiciones claves y referencias metodológicas" }
                  ].map((idx, i) => (
                    <div 
                      key={i} 
                      onClick={() => scrollToPage(idx.p)}
                      className="group flex justify-between items-center py-2 pb-2.5 border-b border-dashed border-slate-200 cursor-pointer hover:bg-white px-2 rounded-md transition-all"
                    >
                      <div className="space-y-0.5 truncate pr-4">
                        <span className="font-bold text-xs sm:text-sm text-unemi-blue group-hover:text-unemi-orange transition-colors">
                          {idx.label}
                        </span>
                        <p className="text-[10px] text-slate-400 font-medium truncate">{idx.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-12 text-right font-mono font-semibold text-xs text-slate-500">
                          Pág. {idx.p}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-unemi-orange transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-linear-to-r from-unemi-blue/5 to-transparent border-l-4 border-unemi-blue p-4 rounded-r-xl space-y-2 mt-6">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-unemi-blue flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-unemi-orange" /> Presentación General
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {renderText("Las Unidades 1 y 2 configuran la armadura inicial de habilidades digitales de primer nivel en la UNEMI. Desde el dominio procedimental del aula virtual (Entornos EVA), hasta los principios éticos y técnicos de resguardo cibernético, este eBook sintetiza el camino hacia una ciudadanía digital cívica, asertiva y de alto impacto.", "intro-presentation")}
                  </p>
                </div>
              </div>
            </BookPage>
          </div>

          {/* HOJA 3: UNIDAD 1 - CONCEPTOS Y TEMAS 1 Y 2 */}
          <div ref={(el) => { pageRefs.current["sheet-3"] = el; }} id="sheet-3">
            <BookPage pageNumber={3} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Unidad 1 • Entornos de Aprendizaje">
              <div className="space-y-6">
                
                {/* Unit Header Label */}
                <div className="bg-unemi-blue text-white p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-unemi-orange bg-white/15 px-2 py-0.5 rounded-full">
                    Unidad Curricular I
                  </span>
                  <h3 className="font-display font-extrabold text-base md:text-lg uppercase mt-2">
                    {UNEMI_UNITS[0].title}
                  </h3>
                </div>

                {/* Topic 1: Las TICs */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-blue text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">1</span>
                    {UNEMI_UNITS[0].topics[0].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[0].topics[0].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u1t1-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-blue-50/60 border-l-4 border-unemi-blue p-4 rounded-r-xl my-4">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-unemi-blue block mb-1">
                      Lección Aprendida y Reflexión Práctica:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[0].topics[0].reflection, "u1t1-refl")}"
                    </p>
                  </div>
                </div>

                {/* Topic 2: Entornos EVA */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-blue text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">2</span>
                    {UNEMI_UNITS[0].topics[1].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[0].topics[1].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u1t2-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-orange-50/60 border-l-4 border-unemi-orange p-4 rounded-r-xl">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-unemi-orange block mb-1">
                      Lección Aprendida y Consejos de Autonomía:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[0].topics[1].reflection, "u1t2-refl")}"
                    </p>
                  </div>
                </div>

              </div>
            </BookPage>
          </div>

          {/* HOJA 4: UNIDAD 1 - TEMA 3 Y MAPA MENTAL CONCEPTUAL */}
          <div ref={(el) => { pageRefs.current["sheet-4"] = el; }} id="sheet-4">
            <BookPage pageNumber={4} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Unidad 1 • Herramientas Web 2.0">
              <div className="space-y-6">
                
                {/* Topic 3: Web 2.0 */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-blue text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">3</span>
                    {UNEMI_UNITS[0].topics[2].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[0].topics[2].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u1t3-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 block mb-1">
                      Lección Aprendida y Sinergia Tecnológica:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[0].topics[2].reflection, "u1t3-refl")}"
                    </p>
                  </div>
                </div>

                {/* Integration of MindMap for Unit 1 */}
                <div className="pt-4 space-y-2">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Soporte Gráfico Integrado
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sintetiza de manera gráfica los conceptos correspondientes a las temáticas abordadas en la Unidad 1 de la UNEMI.
                  </p>
                  <MindMap unitId="unit-1" />
                </div>

              </div>
            </BookPage>
          </div>

          {/* HOJA 5: UNIDAD 2 - CONCEPTOS Y TEMAS 1 Y 2 */}
          <div ref={(el) => { pageRefs.current["sheet-5"] = el; }} id="sheet-5">
            <BookPage pageNumber={5} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Unidad 2 • Ciudadanía y Seguridad">
              <div className="space-y-6">
                
                {/* Unit Header Label */}
                <div className="bg-unemi-orange text-white p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-unemi-blue bg-white/20 px-2 py-0.5 rounded-full">
                    Unidad Curricular II
                  </span>
                  <h3 className="font-display font-extrabold text-base md:text-lg uppercase mt-2">
                    {UNEMI_UNITS[1].title}
                  </h3>
                </div>

                {/* Topic 1: Identidad Digital */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-orange text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">1</span>
                    {UNEMI_UNITS[1].topics[0].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[1].topics[0].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u2t1-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-blue-50/60 border-l-4 border-unemi-blue p-4 rounded-r-xl my-4">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-unemi-blue block mb-1">
                      Lección Aprendida y Autocuidado Online:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[1].topics[0].reflection, "u2t1-refl")}"
                    </p>
                  </div>
                </div>

                {/* Topic 2: Ciberseguridad */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-orange text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">2</span>
                    {UNEMI_UNITS[1].topics[1].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[1].topics[1].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u2t2-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-amber-50/60 border-l-4 border-amber-600 p-4 rounded-r-xl">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-700 block mb-1">
                      Lección Aprendida y Prácticas Preventivas:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[1].topics[1].reflection, "u2t2-refl")}"
                    </p>
                  </div>
                </div>

              </div>
            </BookPage>
          </div>

          {/* HOJA 6: UNIDAD 2 - TEMA 3 Y MAPA MENTAL CONCEPTUAL */}
          <div ref={(el) => { pageRefs.current["sheet-6"] = el; }} id="sheet-6">
            <BookPage pageNumber={6} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Unidad 2 • Netiqueta y Cortesía">
              <div className="space-y-6">
                
                {/* Topic 3: Netiqueta */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-unemi-blue flex items-center gap-2 border-b border-slate-100 pb-1 uppercase">
                    <span className="bg-unemi-orange text-white w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs">3</span>
                    {UNEMI_UNITS[1].topics[2].title}
                  </h4>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {UNEMI_UNITS[1].topics[2].bullets.map((bullet, idx) => (
                      <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed shadow-3xs hover:border-slate-300 hover:bg-white transition-all">
                        {renderText(bullet, `u2t3-b-${idx}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Lessons Learned Box (Callout) */}
                  <div className="bg-orange-50 border-l-4 border-unemi-orange p-4 rounded-r-xl">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-unemi-orange block mb-1">
                      Lección Aprendida y Empatía Escrita:
                    </span>
                    <p className="text-xs italic font-medium text-slate-700 leading-relaxed">
                      "{renderText(UNEMI_UNITS[1].topics[2].reflection, "u2t3-refl")}"
                    </p>
                  </div>
                </div>

                {/* Integration of MindMap for Unit 2 */}
                <div className="pt-4 space-y-2">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Soporte Gráfico Integrado
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Esquema comprensivo que detalla la relación ética en redes y principios de etiqueta estudiantil según el currículo.
                  </p>
                  <MindMap unitId="unit-2" />
                </div>

              </div>
            </BookPage>
          </div>

          {/* HOJA 7: LECCIONES GENERALES Y REFLEXIONES CHECKPOINT */}
          <div ref={(el) => { pageRefs.current["sheet-7"] = el; }} id="sheet-7">
            <BookPage pageNumber={7} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Revisión y Conclusiones">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-unemi-blue uppercase tracking-tight flex items-center gap-2 mb-2">
                    <Award className="w-6 h-6 text-unemi-orange" /> Compendio de Lecciones Clave
                  </h3>
                  <div className="w-12 h-1 bg-unemi-orange mb-4" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {renderText("Para garantizar el máximo nivel de asimilación del conocimiento teórico, las unidades concluyen en síntesis fundamentales que guían el accionar educativo cotidiano en el campus UNEMI.", "conclusion-intro")}
                  </p>
                </div>

                {/* Key Lessons Bento Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:shadow-xs transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-unemi-blue/10 flex items-center justify-center text-unemi-blue">
                      <GraduationCap className="w-4.5 h-4.5" />
                    </div>
                    <h5 className="font-bold text-xs uppercase text-unemi-blue">Autonomía del Aprendizaje</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderText("El éxito en plataformas EVA radica en la gestión sistemática del cronograma individual, convirtiendo los canales educativos en puentes continuos de asimilación de saberes.", "lesson-1")}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:shadow-xs transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Layers className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-bold text-xs uppercase text-unemi-blue">Poder Colaborativo Web</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderText("Las herramientas de la Web 2.0 demuestran que las mejores ideas nacen colectivamente tras el diálogo crítico y transparente asentado en repositorios estructurados.", "lesson-2")}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:shadow-xs transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                      <Shield className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-bold text-xs uppercase text-unemi-blue">Escudo de Privacidad</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderText("Nuestra huella digital moldea nuestra proyección laboral futura; resguardarla mediante contraseñas complejas, resguardos periódicos y MFA es una ética ineludible.", "lesson-3")}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:shadow-xs transition-shadow">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-unemi-orange">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-bold text-xs uppercase text-unemi-blue">Comunicación Empática</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {renderText("La netiqueta académica elimina malentendidos estructurales garantizando que los planteamientos y reflexiones en foros se efectúen en un ambiente de rigurosa cortesía.", "lesson-4")}
                    </p>
                  </div>
                </div>

                {/* Self check reflection lists */}
                <div className="border border-slate-100 bg-linear-to-b from-slate-50 to-white rounded-2xl p-5 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-500" /> Cuestionario Reflexivo Opcional de Auto-Verificación
                  </h4>
                  <ul className="space-y-3.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
                      <p>{renderText("¿Cómo planifico mi dedicación horaria semanal en el aula virtual de la universidad para evitar cuellos de botella con la entrega de tareas?", "q-1")}</p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
                      <p>{renderText("¿He realizado una búsqueda personal en internet para entender cuál es mi reputación digital pública actual ante futuros evaluadores?", "q-2")}</p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
                      <p>{renderText("¿Cumplo las directrices gramaticales y de estructura necesarias en mis correos electrónicos institucionales cuando interactúo con mis catedráticos?", "q-3")}</p>
                    </li>
                  </ul>
                </div>

              </div>
            </BookPage>
          </div>

          {/* HOJA 8: GLOSARIO DE TÉRMINOS Y REFERENCIAS METODOLÓGICAS (ANEXOS) */}
          <div ref={(el) => { pageRefs.current["sheet-8"] = el; }} id="sheet-8">
            <BookPage pageNumber={8} isSheetView={isSheetView} fontSizeClass={fontSizeClasses[fontSize]} title="Referencias y Glosario">
              <div className="space-y-6">
                
                {/* Glossary Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-display font-bold text-unemi-blue uppercase border-b border-slate-200 pb-1.5 flex items-center gap-2">
                    <Book className="w-5 h-5 text-unemi-orange" /> Glosario de Términos (Anexos I)
                  </h3>
                  <div className="grid grid-cols-1 gap-3.5 pt-1">
                    {GLOSSARY.map((term, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-all">
                        <span className="font-bold text-xs text-unemi-blue uppercase tracking-wide block mb-0.5">
                          {term.term}
                        </span>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          {renderText(term.definition, `glossary-def-${idx}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bibliographic References Section */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-lg font-display font-bold text-unemi-blue uppercase border-b border-slate-200 pb-1.5 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-unemi-orange" /> Referencias Bibliográficas (Anexos II)
                  </h3>
                  <ul className="space-y-3">
                    {REFERENCES.map((ref, idx) => (
                      <li key={idx} className="text-xs text-slate-500 pl-4 border-l-2 border-unemi-orange leading-relaxed">
                        <span className="font-bold text-slate-700">{ref.author}</span> ({ref.year}). <span className="italic">{ref.title}</span>. {ref.source}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fine final closure */}
                <div className="text-center py-6 border-t border-slate-100 space-y-2 mt-8">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-unemi-blue mx-auto border border-slate-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-unemi-blue">
                    Compilación para el éxito estudiantil
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold max-w-sm mx-auto">
                    Módulo de Autoaprendizaje Unidades 1 y 2. Desarrollado de manera íntegra según el plan docente.
                  </p>
                </div>

              </div>
            </BookPage>
          </div>

        </main>
      </div>
    </div>
  );
}

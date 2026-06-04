import React from "react";
import { ClipboardCheck, ExternalLink } from "lucide-react";

interface TopicFormQRProps {
  topicId: string;
  title: string;
  description: string;
  url: string;
  compact?: boolean;
}

export function TopicFormQR({ topicId, title, description, url, compact = false }: TopicFormQRProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}&margin=10`;

  if (compact) {
    return (
      <div className="border border-slate-200 bg-white rounded-xl p-3 flex flex-col justify-between items-center text-center gap-2 transition-all hover:bg-slate-50 hover:shadow-3xs h-full">
        {/* Information text area (Centered) */}
        <div className="space-y-1 flex flex-col items-center w-full">
          <div className="flex flex-col items-center gap-1">
            <span className="bg-[#004080] text-white font-mono font-bold text-[8.5px] px-2 py-0.5 rounded tracking-wider uppercase">
              {topicId}
            </span>
            <span className="text-[8.5px] uppercase font-bold tracking-widest text-[#FF6600] flex items-center justify-center gap-1">
              <ClipboardCheck className="w-3 h-3 text-[#FF6600]" />
              Interactive Assessment
            </span>
          </div>

          <h4 className="text-[11.5px] font-extrabold text-[#004080] tracking-tight leading-tight uppercase">
            {title}
          </h4>

          <p className="text-[10px] text-slate-500 leading-snug font-medium max-w-xs line-clamp-2">
            {description}
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center shrink-0 w-full">
          <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center w-20 h-20 shadow-3xs">
            <img
              src={qrCodeUrl}
              alt={`QR Code for ${topicId}`}
              className="w-full h-full object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-1">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[9.5px] font-extrabold text-[#FF6600] hover:text-[#e65c00] transition-colors uppercase tracking-wider"
            >
              Open Evaluation
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 border border-slate-200 bg-slate-50/50 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center gap-5 transition-all hover:bg-slate-50 hover:shadow-sm">
      {/* Information text area (Left/Main section) */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#004080] text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded tracking-wider uppercase">
            {topicId}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF6600] flex items-center gap-1">
            <ClipboardCheck className="w-3.5 h-3.5 shrink-0" />
            Interactive Assessment / Evaluación Interactiva
          </span>
        </div>

        <h4 className="text-sm font-bold text-[#004080] tracking-tight leading-snug">
          {title}
        </h4>

        <p className="text-xs text-slate-500 leading-relaxed font-medium">
          {description}
        </p>

        {/* Actionable button/link */}
        <div className="pt-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FF6600] hover:text-[#e65c00] transition-colors uppercase tracking-wider"
          >
            Open Evaluation Form / Abrir Formulario
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>
      </div>

      {/* QR Code Container (Right section) */}
      <div className="flex flex-col items-center shrink-0 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs max-w-[150px] sm:max-w-none">
        <div className="w-28 h-28 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
          <img
            src={qrCodeUrl}
            alt={`QR Code for ${topicId}`}
            className="w-full h-full object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mt-2">
          Scan QR Code
        </span>
      </div>
    </div>
  );
}

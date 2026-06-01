import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

interface ExternalResourceQRProps {
  label: string;
  title: string;
  description: string;
  url: string;
}

export function ExternalResourceQR({ label, title, description, url }: ExternalResourceQRProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}&margin=10`;

  return (
    <div className="my-5 border border-slate-200/80 bg-slate-50/40 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center gap-5 transition-all hover:bg-slate-50/80 hover:shadow-xs">
      {/* Information text area (Left/Main section) */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#FF6600] text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded tracking-wider uppercase">
            {label}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#004080] flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 shrink-0 text-[#FF6600]" />
            Extended Educational Resource / Recurso Complementario
          </span>
        </div>

        <h4 className="text-sm font-bold text-[#004080] tracking-tight leading-snug">
          {title}
        </h4>

        <p className="text-xs text-slate-500 leading-relaxed font-semibold">
          {description}
        </p>

        {/* Actionable button/link */}
        <div className="pt-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#004080] hover:text-[#FF6600] transition-colors uppercase tracking-wider"
          >
            Access Academic Reference / Ver Referencia
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>
      </div>

      {/* QR Code Container (Right section) */}
      <div className="flex flex-col items-center shrink-0 p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs max-w-[150px] sm:max-w-none">
        <div className="w-28 h-28 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
          <img
            src={qrCodeUrl}
            alt={`QR Code for ${label}`}
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

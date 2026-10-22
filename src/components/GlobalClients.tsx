import React from "react";
import { Globe, MapPin, Clock, MessageSquare } from "lucide-react";

export function GlobalClients() {
  return (
    <section className="py-24 md:py-36 bg-[#0C0E14] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold mb-8 border border-white/15">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>GLOBAL COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.12]">
            Built for businesses beyond borders.
          </h2>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-3xl">
            I&apos;ve worked with websites, brands and teams across different markets,
            including India, UK, USA and international clients.
          </p>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-14 max-w-3xl">
            Comfortable working remotely, coordinating requirements and collaborating
            across teams and time zones.
          </p>

          {/* 3 Remote collaboration cards with generous padding */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">Remote-Ready</div>
              <div className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Based in India, collaborating with clients worldwide
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">Time Zone Alignment</div>
              <div className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Flexible overlap with US, UK &amp; Asian business hours
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/25 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">Async &amp; Direct</div>
              <div className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Figma comments, Loom, Slack &amp; clear updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

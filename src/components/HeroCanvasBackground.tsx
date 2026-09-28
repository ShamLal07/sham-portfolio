"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes in gold/amber hues
    const particleCount = 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      size: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;
    let step = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.02;

      // 1. Draw glowing 3D cybernetic sine wave ribbons across the lower hero
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseHeight = height * (0.62 + w * 0.08);
        const waveColor =
          w === 0
            ? "rgba(239, 189, 48, 0.25)"
            : w === 1
            ? "rgba(247, 207, 95, 0.16)"
            : "rgba(255, 235, 150, 0.1)";

        ctx.strokeStyle = waveColor;
        ctx.lineWidth = 1.5;

        for (let x = 0; x <= width; x += 15) {
          const distortion =
            Math.sin(x * 0.005 + step + w) * 35 +
            Math.cos(x * 0.002 - step * 0.8) * 20 +
            (1 - Math.abs(x - mouseX) / width) * 15;
          const y = baseHeight + distortion;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 2. Connect particle network (Neural connections)
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.22;
            ctx.strokeStyle = `rgba(239, 189, 48, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & render particle nodes
      particles.forEach((p) => {
        // Gravitational reactivity toward mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 10) {
          p.x += (dx / dist) * 0.35;
          p.y += (dy / dist) * 0.35;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.pulse += 0.03;
        const pulseAlpha = Math.max(0.1, p.alpha + Math.sin(p.pulse) * 0.2);

        // Particle core
        ctx.fillStyle = `rgba(239, 189, 48, ${pulseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo for larger nodes
        if (p.size > 2) {
          ctx.fillStyle = `rgba(239, 189, 48, ${pulseAlpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Authentic High-Definition Real Studio Workstation Image */}
      <Image
        src="/hero-real-studio.jpg"
        alt="High-Performance Studio Engineering Workstation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[0.55] contrast-[1.15] scale-[1.02]"
      />

      {/* Deep Obsidian Scrim Layers for Flawless Text Readability */}
      <div className="absolute inset-0 bg-[#0E0E14]/50 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E14]/95 via-[#0E0E14]/60 to-[#0E0E14]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,14,20,0.5)_0%,rgba(14,14,20,0.92)_85%)]" />

      {/* Interactive WebGL/Canvas Particle & Wave Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85"
      />

      {/* Subtle Ambient Glowing Energy Orbs in Palette */}
      <div className="absolute top-[20%] left-[25%] w-[450px] h-[450px] rounded-full bg-[#EFBD30]/12 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-[#d9a514]/10 blur-[120px] pointer-events-none" />
    </div>
  );
}

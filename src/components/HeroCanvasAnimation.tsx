"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function HeroCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const colors = ["#F5781E", "#EA580C", "#D97706", "#0284C7", "#6366F1", "#475569"];

    // Mouse coordinates with smooth easing
    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000, radius: 180, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Initialize particles
    let particles: Particle[] = [];

    const initParticles = () => {
      const particleCount = width < 768 ? 36 : 70;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65,
          vy: (Math.random() - 0.5) * 0.65,
          radius: Math.random() * 2.2 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: Math.random() * 0.45 + 0.35,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // Gentle floating physics with slight wave motion
        p.x += p.vx + Math.sin(time + p.pulsePhase) * 0.15;
        p.y += p.vy + Math.cos(time + p.pulsePhase) * 0.15;

        // Wrap around borders
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Interactive Antigravity mouse interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            // Gentle gravitational pull then soft repulsion
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 3;
            p.y -= (dy / dist) * force * 3;

            // Draw glowing interactive line to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / mouse.radius) * 0.35;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Particle pulse glow
        const currentAlpha = p.baseAlpha + Math.sin(time * 2 + p.pulsePhase) * 0.15;
        const clampedAlpha = Math.max(0.15, Math.min(0.9, currentAlpha));

        // Render Particle Dot with ambient bloom
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = clampedAlpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw constellation connections between nearby particles
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = width < 768 ? 95 : 135;

          if (distBetween < maxDist) {
            const alpha = (1 - distBetween / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
      aria-hidden="true"
    />
  );
}

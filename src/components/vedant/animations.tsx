"use client";
import { useRef, useState, useEffect, createElement } from "react";
import type { ReactNode, ElementType } from "react";

// ─── Shared hook ──────────────────────────────────────────────────────────────

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
};

// ─── Delay map ────────────────────────────────────────────────────────────────

const DELAY: Record<number, string> = {
  0: "",
  1: "fade-up-delay-1",
  2: "fade-up-delay-2",
  3: "fade-up-delay-3",
  4: "fade-up-delay-4",
  5: "fade-up-delay-5",
  6: "fade-up-delay-6",
};

// ─── Shared props ─────────────────────────────────────────────────────────────

interface AnimProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  threshold?: number;
  className?: string;
}

interface PolyProps extends AnimProps {
  as?: ElementType;
}

// ─── FadeUp ───────────────────────────────────────────────────────────────────

export const FadeUp = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: PolyProps) => {
  const { ref, inView } = useInView(threshold);
  return createElement(
    Tag,
    {
      ref,
      className: `fade-up ${DELAY[delay]} ${inView ? "visible" : ""} ${className}`.trim(),
    },
    children
  );
};

// ─── FadeIn ───────────────────────────────────────────────────────────────────

export const FadeIn = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: PolyProps) => {
  const { ref, inView } = useInView(threshold);
  return createElement(
    Tag,
    {
      ref,
      className: `fade-in ${DELAY[delay]} ${inView ? "visible" : ""} ${className}`.trim(),
    },
    children
  );
};

// ─── SlideLeft ────────────────────────────────────────────────────────────────

export const SlideLeft = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
}: AnimProps) => {
  const { ref, inView } = useInView(threshold);
  return (
    <div
      ref={ref}
      className={`slide-left ${DELAY[delay]} ${inView ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

// ─── SlideRight ───────────────────────────────────────────────────────────────

export const SlideRight = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
}: AnimProps) => {
  const { ref, inView } = useInView(threshold);
  return (
    <div
      ref={ref}
      className={`slide-right ${DELAY[delay]} ${inView ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

// ─── ScaleUp ──────────────────────────────────────────────────────────────────

export const ScaleUp = ({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
}: AnimProps) => {
  const { ref, inView } = useInView(threshold);
  return (
    <div
      ref={ref}
      className={`scale-up ${DELAY[delay]} ${inView ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

// ─── StaggerChildren ──────────────────────────────────────────────────────────

interface StaggerProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  baseDelay?: number;
}

export const StaggerChildren = ({
  children,
  className = "",
  threshold = 0.15,
  baseDelay = 0,
}: StaggerProps) => {
  const { ref, inView } = useInView(threshold);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => {
        const delayIndex = Math.min(baseDelay + i, 6) as 0 | 1 | 2 | 3 | 4 | 5 | 6;
        return (
          <div
            key={i}
            className={`fade-up ${DELAY[delayIndex]} ${inView ? "visible" : ""}`.trim()}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

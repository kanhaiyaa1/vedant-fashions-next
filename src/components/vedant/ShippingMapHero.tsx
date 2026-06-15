"use client";
import { useEffect, useRef, useState } from "react";

const ROUTES = [
  { id: "jebel-ali",    label: "Jebel Ali",      country: "UAE",        x: 320, y: 290, transit: "18–22 days", color: "#c9a96e", delay: 0 },
  { id: "dammam",       label: "Dammam",          country: "Saudi",      x: 290, y: 265, transit: "20–24 days", color: "#c9a96e", delay: 0.3 },
  { id: "doha",         label: "Doha",            country: "Qatar",      x: 305, y: 282, transit: "20–23 days", color: "#c9a96e", delay: 0.6 },
  { id: "kuwait",       label: "Kuwait City",     country: "Kuwait",     x: 280, y: 252, transit: "19–22 days", color: "#c9a96e", delay: 0.9 },
  { id: "muscat",       label: "Muscat",          country: "Oman",       x: 348, y: 302, transit: "17–20 days", color: "#c9a96e", delay: 1.2 },
  { id: "manama",       label: "Manama",          country: "Bahrain",    x: 296, y: 276, transit: "19–22 days", color: "#c9a96e", delay: 1.5 },
  { id: "alexandria",   label: "Alexandria",      country: "Egypt",      x: 155, y: 230, transit: "18–22 days", color: "#c9a96e", delay: 1.8 },
  { id: "stpetersburg", label: "St. Petersburg",  country: "Russia",     x: 230, y: 80,  transit: "25–32 days", color: "#6e9ac9", delay: 2.1 },
];

const MUMBAI = { x: 480, y: 318 };

function routeLength(x: number, y: number) {
  return Math.sqrt((MUMBAI.x - x) ** 2 + (MUMBAI.y - y) ** 2);
}

function midControl(x: number, y: number) {
  const mx = (MUMBAI.x + x) / 2;
  const my = (MUMBAI.y + y) / 2 - 40;
  return { mx, my };
}

export default function ShippingMapHero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#1a1a1a] overflow-hidden">
      <div className="container-wide py-12">
        <div className="text-center mb-8">
          <p className="text-subheading text-gold mb-2">Export Logistics</p>
          <h2 className="text-display-md text-white">Shipping Routes from Mumbai</h2>
          <p className="text-body text-white/50 mt-3 max-w-xl mx-auto">
            Direct sea freight from JNPT Mumbai to 8 destination ports across the Middle East, GCC, and Russia.
          </p>
        </div>

        <div className="relative w-full" style={{ maxWidth: 800, margin: "0 auto" }}>
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            style={{ background: "#1a1a1a" }}
          >
            {/* Grid lines */}
            {[100, 200, 300, 400, 500, 600, 700].map((x) => (
              <line key={`vg-${x}`} x1={x} y1={0} x2={x} y2={500} stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
            ))}
            {[100, 200, 300, 400].map((y) => (
              <line key={`hg-${y}`} x1={0} y1={y} x2={800} y2={y} stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
            ))}

            {/* Simplified land mass outlines */}
            {/* Arabian Peninsula */}
            <path
              d="M 220 240 L 230 200 L 260 185 L 300 190 L 340 210 L 370 240 L 360 280 L 330 310 L 290 320 L 260 310 L 230 280 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />
            {/* Indian subcontinent */}
            <path
              d="M 430 220 L 500 200 L 550 210 L 570 240 L 560 280 L 540 320 L 510 360 L 490 380 L 470 370 L 450 340 L 440 300 L 430 260 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />
            {/* Egypt / North Africa */}
            <path
              d="M 100 200 L 200 195 L 210 230 L 190 260 L 140 265 L 110 240 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />
            {/* Turkey / Eastern Mediterranean */}
            <path
              d="M 130 130 L 250 120 L 280 145 L 260 165 L 200 160 L 140 155 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />
            {/* Russia / Eastern Europe simplified */}
            <path
              d="M 150 20 L 400 15 L 450 50 L 430 90 L 350 100 L 250 95 L 180 80 L 155 55 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />
            {/* Pakistan / Iran */}
            <path
              d="M 370 200 L 430 195 L 440 220 L 430 250 L 390 260 L 365 240 Z"
              fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"
            />

            {/* Water body (Arabian Sea / Persian Gulf tint) */}
            <rect x="210" y="230" width="270" height="150" fill="#0d1b2a" opacity="0.4" rx="4" />

            {/* Animated route lines */}
            {ROUTES.map((route) => {
              const len = routeLength(route.x, route.y) * 1.3;
              const { mx, my } = midControl(route.x, route.y);
              return (
                <path
                  key={route.id}
                  d={`M ${MUMBAI.x} ${MUMBAI.y} Q ${mx} ${my} ${route.x} ${route.y}`}
                  fill="none"
                  stroke={route.color}
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  strokeOpacity="0.85"
                  strokeLinecap="round"
                  style={started ? {
                    strokeDashoffset: 0,
                    animation: `drawRoute 2s ease-out ${route.delay}s both`,
                  } : { strokeDashoffset: len }}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from={len}
                    to="0"
                    dur="2s"
                    begin={started ? `${route.delay}s` : "indefinite"}
                    fill="freeze"
                  />
                </path>
              );
            })}

            {/* Destination markers */}
            {ROUTES.map((route) => (
              <g
                key={`marker-${route.id}`}
                style={started ? {
                  opacity: 1,
                  animation: `fadeIn 0.4s ease-out ${route.delay + 1.8}s both`,
                } : { opacity: 0 }}
              >
                {/* Ripple */}
                <circle cx={route.x} cy={route.y} r="10" fill="none" stroke={route.color} strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="6;14;6" dur="2.5s" begin={started ? `${route.delay + 1.8}s` : "indefinite"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" begin={started ? `${route.delay + 1.8}s` : "indefinite"} repeatCount="indefinite" />
                </circle>
                {/* Dot */}
                <circle cx={route.x} cy={route.y} r="4" fill={route.color} />
                {/* Label */}
                <text
                  x={route.x + (route.x < MUMBAI.x ? -10 : 10)}
                  y={route.y - 10}
                  fill="white"
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                  textAnchor={route.x < MUMBAI.x ? "end" : "start"}
                  opacity="0.9"
                >
                  {route.label}
                </text>
                <text
                  x={route.x + (route.x < MUMBAI.x ? -10 : 10)}
                  y={route.y + 0}
                  fill={route.color}
                  fontSize="8"
                  fontFamily="Inter, sans-serif"
                  textAnchor={route.x < MUMBAI.x ? "end" : "start"}
                  opacity="0.8"
                >
                  {route.transit}
                </text>
              </g>
            ))}

            {/* Mumbai origin marker */}
            <g>
              <circle cx={MUMBAI.x} cy={MUMBAI.y} r="18" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.2">
                <animate attributeName="r" values="10;22;10" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={MUMBAI.x} cy={MUMBAI.y} r="6" fill="#c9a96e" />
              <circle cx={MUMBAI.x} cy={MUMBAI.y} r="3" fill="#1a1a1a" />
              <text x={MUMBAI.x + 12} y={MUMBAI.y - 8} fill="white" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600" opacity="0.95">
                Mumbai (JNPT)
              </text>
              <text x={MUMBAI.x + 12} y={MUMBAI.y + 4} fill="#c9a96e" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.8">
                Origin Port
              </text>
            </g>

            {/* Legend */}
            <g transform="translate(20, 440)">
              <rect x="0" y="-14" width="240" height="52" rx="4" fill="#111111" opacity="0.8" />
              <circle cx="16" cy="0" r="4" fill="#c9a96e" />
              <text x="26" y="4" fill="white" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.7">GCC Routes</text>
              <circle cx="100" cy="0" r="4" fill="#6e9ac9" />
              <text x="110" y="4" fill="white" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.7">Russia Route</text>
              <circle cx="16" cy="20" r="6" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.5" />
              <circle cx="16" cy="20" r="3" fill="#c9a96e" />
              <text x="26" y="24" fill="white" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.7">Origin Port</text>
              <circle cx="100" cy="20" r="4" fill="#c9a96e" />
              <text x="110" y="24" fill="white" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.7">Destination Port</text>
            </g>
          </svg>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
          {[
            { value: "8", label: "Destination Ports" },
            { value: "17–22", label: "Days to GCC" },
            { value: "FOB / CIF / DDP", label: "Incoterms" },
            { value: "Weekly", label: "Liner Services" },
          ].map((s) => (
            <div key={s.label} className="text-center border border-white/10 rounded p-4">
              <p className="font-display text-xl font-semibold text-gold">{s.value}</p>
              <p className="text-caption text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

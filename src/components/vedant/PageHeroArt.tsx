'use client'
import React from 'react'

interface PageHeroArtProps {
  image: string
  opacity?: number
  blur?: number
  position?: string
  children: React.ReactNode
}

export default function PageHeroArt({
  image,
  opacity = 0.08,
  blur = 0,
  position = 'center',
  children,
}: PageHeroArtProps) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          opacity: 0.2,
          filter: 'blur(1px)',
          objectPosition: position,
          zIndex: 0,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, hsl(var(--background)) 95%)',
          zIndex: 1,
        }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}

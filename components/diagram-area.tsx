'use client'

import { useEffect, useRef } from 'react'

interface DiagramAreaProps {
  activeComponent: string | null
}

export default function DiagramArea({ activeComponent }: DiagramAreaProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  const components = [
    { id: 'solar-panel', name: 'Solar Panel', x: 50, y: 150, color: '#FFA500' },
    { id: 'scc', name: 'Solar Charge\nController', x: 250, y: 150, color: '#4CAF50' },
    { id: 'battery', name: 'Battery Bank', x: 450, y: 150, color: '#2196F3' },
    { id: 'inverter', name: 'Inverter', x: 650, y: 150, color: '#9C27B0' },
    { id: 'load', name: 'AC/DC Load', x: 850, y: 150, color: '#FF5722' },
  ]

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
  ]

  useEffect(() => {
    if (svgRef.current) {
      // SVG animations handled via CSS classes
    }
  }, [activeComponent])

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 400"
        className="w-full h-auto max-h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Draw connections/cables */}
        {connections.map((conn, idx) => {
          const fromComponent = components[conn.from]
          const toComponent = components[conn.to]
          return (
            <g key={`connection-${idx}`}>
              {/* Main cable line */}
              <line
                x1={fromComponent.x + 40}
                y1={fromComponent.y}
                x2={toComponent.x - 40}
                y2={toComponent.y}
                stroke="currentColor"
                strokeWidth="3"
                className="text-muted-foreground opacity-50"
              />
              {/* Arrow indicating flow direction */}
              <defs>
                <marker
                  id={`arrowhead-${idx}`}
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="currentColor" className="text-muted-foreground opacity-50" />
                </marker>
              </defs>
              <line
                x1={fromComponent.x + 40}
                y1={fromComponent.y}
                x2={toComponent.x - 40}
                y2={toComponent.y}
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground opacity-50"
                markerEnd={`url(#arrowhead-${idx})`}
              />
            </g>
          )
        })}

        {/* Draw components */}
        {components.map((comp) => {
          const isActive = activeComponent === comp.id
          return (
            <g key={comp.id}>
              {/* Component box */}
              <rect
                x={comp.x - 40}
                y={comp.y - 35}
                width="80"
                height="70"
                rx="8"
                fill={comp.color}
                opacity={isActive ? 1 : 0.7}
                className={`transition-all ${
                  isActive ? 'animate-pulse opacity-100 drop-shadow-lg' : 'opacity-70 hover:opacity-85'
                }`}
                style={{
                  animation: isActive ? 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                  filter: isActive ? 'drop-shadow(0 0 12px rgba(255,255,255,0.5))' : 'none',
                }}
              />

              {/* Component label */}
              <text
                x={comp.x}
                y={comp.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-bold text-white pointer-events-none"
                fill="white"
              >
                {comp.name.split('\n').map((line, i) => (
                  <tspan key={i} x={comp.x} dy={i === 0 ? 0 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          )
        })}

        {/* Add CSS animation */}
        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(255,255,255,0.5));
            }
            50% {
              opacity: 0.6;
              filter: drop-shadow(0 0 6px rgba(255,255,255,0.3));
            }
          }
        `}</style>
      </svg>
    </div>
  )
}

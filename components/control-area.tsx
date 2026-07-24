'use client'

import { useState } from 'react'
import { Search, Sun, Zap, Battery, Lightbulb, Plug } from 'lucide-react'

interface ControlAreaProps {
  activeComponent: string | null
  onSelectComponent: (componentId: string | null) => void
}

export default function ControlArea({ activeComponent, onSelectComponent }: ControlAreaProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const components = [
    {
      id: 'solar-panel',
      name: 'Solar Panel',
      description: 'PV Array - Converts sunlight to electricity',
      icon: Sun,
    },
    {
      id: 'scc',
      name: 'Solar Charge Controller',
      description: 'Regulates power from solar panel',
      icon: Zap,
    },
    {
      id: 'battery',
      name: 'Battery Bank',
      description: 'Stores electrical energy',
      icon: Battery,
    },
    {
      id: 'inverter',
      name: 'Inverter',
      description: 'Converts DC to AC power',
      icon: Lightbulb,
    },
    {
      id: 'load',
      name: 'AC/DC Load',
      description: 'Consumer devices and appliances',
      icon: Plug,
    },
  ]

  const filteredComponents = components.filter(
    (comp) =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Search Section */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
      </div>

      {/* Components List */}
      <div className="flex-1 overflow-y-auto">
        {filteredComponents.length > 0 ? (
          <div className="divide-y divide-border">
            {filteredComponents.map((comp) => {
              const Icon = comp.icon
              const isActive = activeComponent === comp.id

              return (
                <button
                  key={comp.id}
                  onClick={() => onSelectComponent(isActive ? null : comp.id)}
                  className={`w-full text-left p-4 transition-all hover:bg-accent hover:bg-opacity-50 ${
                    isActive
                      ? 'bg-accent bg-opacity-100 border-l-4 border-primary'
                      : 'bg-card border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isActive ? 'ring-2 ring-primary animate-pulse' : ''
                      }`}
                      style={{
                        backgroundColor:
                          comp.id === 'solar-panel'
                            ? '#FFA500'
                            : comp.id === 'scc'
                              ? '#4CAF50'
                              : comp.id === 'battery'
                                ? '#2196F3'
                                : comp.id === 'inverter'
                                  ? '#9C27B0'
                                  : '#FF5722',
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm transition-all ${
                          isActive ? 'text-primary' : 'text-card-foreground'
                        }`}
                      >
                        {comp.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {comp.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            <p className="text-sm">No components found</p>
          </div>
        )}
      </div>

      {/* Legend/Info Section */}
      <div className="p-4 border-t border-border bg-muted bg-opacity-50">
        <p className="text-xs text-muted-foreground text-center">
          Click on a component to highlight it in the diagram
        </p>
      </div>
    </div>
  )
}

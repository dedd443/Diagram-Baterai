'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import DiagramArea from '@/components/diagram-area'
import ControlArea from '@/components/control-area'

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <main className="flex flex-col h-screen max-w-7xl mx-auto">
        {/* Header */}
        <header className="border-b border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-card-foreground">
                PLTS Off-Grid System Diagram
              </h1>
              <p className="text-muted-foreground mt-1">
                Interactive solar power system visualization
              </p>
            </div>
            <Link
              href="/affiliate"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              <ShoppingBag className="w-4 h-4" />
              Affiliate
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Diagram Area */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-border overflow-auto bg-card">
            <DiagramArea activeComponent={activeComponent} />
          </div>

          {/* Control Area */}
          <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-border overflow-auto">
            <ControlArea 
              activeComponent={activeComponent} 
              onSelectComponent={setActiveComponent}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

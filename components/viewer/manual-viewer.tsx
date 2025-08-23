"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SidebarTree } from "./sidebar-tree"
import { ContentPanel } from "./content-panel"
import { X, Search, ChevronLeft, ChevronRight, Download, Menu } from "lucide-react"
import Link from "next/link"
import { Brand, Model, ManualSection } from "@/lib/mock-data"

interface ManualViewerProps {
  brand: Brand
  model: Model
  year: number
  sections: ManualSection[]
  currentSectionId: string
  currentSection: ManualSection
}

export function ManualViewer({ 
  brand, 
  model, 
  year, 
  sections, 
  currentSectionId, 
  currentSection 
}: ManualViewerProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
            
            <Link href="/" className="flex items-center space-x-2">
              <X className="h-5 w-5" />
              <span className="font-medium">Close Viewer</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{brand.name}</span>
              <span>•</span>
              <span>{model.name}</span>
              <span>•</span>
              <Badge variant="outline">{year}</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search manual..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            {/* Navigation */}
            <Button variant="ghost" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" disabled>
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Download (disabled for demo) */}
            <Button variant="ghost" size="icon" disabled title="Download feature coming soon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'w-80' : 'w-0'} 
          transition-all duration-200 border-r bg-muted/30 overflow-hidden lg:w-80
        `}>
          <div className="p-4 border-b">
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">
                {brand.name} {model.name}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{year}</Badge>
                <span>•</span>
                <span>{model.specs?.engine}</span>
              </div>
            </div>
          </div>
          
          <SidebarTree 
            sections={sections} 
            currentSectionId={currentSectionId}
            brand={brand.id}
            model={model.id}
            year={year}
          />
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-hidden">
          <ContentPanel 
            section={currentSection}
            brand={brand}
            model={model}
            year={year}
          />
        </main>
      </div>
    </div>
  )
}

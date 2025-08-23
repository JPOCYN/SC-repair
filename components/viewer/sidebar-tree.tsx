"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, FileText, Folder } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ManualSection } from "@/lib/mock-data"

interface SidebarTreeProps {
  sections: ManualSection[]
  currentSectionId: string
  brand: string
  model: string
}

export function SidebarTree({ sections, currentSectionId, brand, model }: SidebarTreeProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['overview', 'engine', 'transmission'])
  )

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const renderSection = (section: ManualSection, level: number = 0) => {
    const isExpanded = expandedSections.has(section.id)
    const isCurrent = section.id === currentSectionId
    const hasChildren = section.children && section.children.length > 0

    return (
      <div key={section.id}>
        <div 
          className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-lg mx-2 transition-colors ${
            isCurrent ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
          }`}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          {hasChildren ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0"
              onClick={() => toggleSection(section.id)}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
          ) : (
            <div className="w-4" />
          )}
          
          {hasChildren ? (
            <Folder className="h-4 w-4 flex-shrink-0" />
          ) : (
            <FileText className="h-4 w-4 flex-shrink-0" />
          )}
          
          {section.content ? (
            <Link 
              href={`/viewer/${brand}/${model}/${section.id}`}
              className="flex-1 text-left truncate"
            >
              {section.title}
            </Link>
          ) : (
            <button
              onClick={() => hasChildren && toggleSection(section.id)}
              className="flex-1 text-left truncate"
            >
              {section.title}
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div>
            {section.children?.map(child => renderSection(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="py-2">
        {sections.map(section => renderSection(section))}
      </div>
    </div>
  )
}

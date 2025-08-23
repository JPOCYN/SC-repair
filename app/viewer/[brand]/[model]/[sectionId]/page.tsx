import { ManualViewer } from '@/components/viewer/manual-viewer'
import { mockBrands, mockManualSections } from '@/lib/mock-data'
import { notFound } from 'next/navigation'

interface ViewerPageProps {
  params: {
    brand: string
    model: string
    sectionId: string
  }
}

export default function ViewerPage({ params }: ViewerPageProps) {
  const brand = mockBrands.find(b => b.id === params.brand)
  const model = brand?.models.find(m => m.id === params.model)

  if (!brand || !model) {
    notFound()
  }

  const currentSection = findSection(mockManualSections, params.sectionId)
  if (!currentSection) {
    notFound()
  }

  return (
    <ManualViewer
      brand={brand}
      model={model}
      sections={mockManualSections}
      currentSectionId={params.sectionId}
      currentSection={currentSection}
    />
  )
}

function findSection(sections: typeof mockManualSections, sectionId: string): any {
  for (const section of sections) {
    if (section.id === sectionId) {
      return section
    }
    if (section.children) {
      const found = findSection(section.children, sectionId)
      if (found) return found
    }
  }
  return null
}

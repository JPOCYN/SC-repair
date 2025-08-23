"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brand, Model, ManualSection } from "@/lib/mock-data"
import { FileText, Wrench, Zap, AlertTriangle } from "lucide-react"

interface ContentPanelProps {
  section: ManualSection
  brand: Brand
  model: Model
}

export function ContentPanel({ section, brand, model }: ContentPanelProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <span>{brand.name}</span>
            <span>•</span>
            <span>{model.name}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{section.title}</h1>
          
          {section.id === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Engine</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{model.specs?.engine}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Wrench className="h-5 w-5" />
                    <span>Power</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{model.specs?.power}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Top Speed</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{model.specs?.topSpeed}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          {section.content ? (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Documentation</span>
                  </CardTitle>
                  <CardDescription>
                    Professional repair manual content for {brand.name} {model.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p className="text-foreground leading-relaxed">
                    {section.content}
                  </p>
                  
                  {/* Mock technical content */}
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold">Technical Procedures</h3>
                    <div className="bg-muted/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-sm text-muted-foreground mb-2">PROCEDURE OVERVIEW</p>
                      <p>This section contains detailed step-by-step procedures for servicing and maintaining the {section.title.toLowerCase()} components of your {brand.name} {model.name}.</p>
                    </div>
                    
                    <h4 className="font-medium">Safety Precautions</h4>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800">Important Safety Information</p>
                          <p className="text-sm text-yellow-700 mt-1">
                            Always follow proper safety procedures when working on high-performance vehicles. Ensure the vehicle is properly secured and all safety equipment is used.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-medium">Required Tools</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Torque wrench (10-200 Nm)</li>
                      <li>• Socket set (metric)</li>
                      <li>• Digital multimeter</li>
                      <li>• Specialty diagnostic equipment</li>
                    </ul>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> This is demonstration content. Actual repair manuals would contain detailed technical diagrams, specifications, and comprehensive step-by-step procedures specific to each component and model year.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Section Overview</h3>
              <p className="text-muted-foreground">
                Select a subsection from the sidebar to view detailed repair information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

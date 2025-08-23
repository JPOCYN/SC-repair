"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, Car, Clock } from "lucide-react"
import { mockBrands } from "@/lib/mock-data"
import Link from "next/link"

interface BrandPreviewProps {
  hasActiveSubscription: boolean
}

export function BrandPreview({ hasActiveSubscription }: BrandPreviewProps) {
  return (
    <section id="brands" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
            <Car className="mr-2 h-4 w-4" />
            Premium Automotive Brands
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Supported Manufacturer Network
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive technical documentation for the world's most prestigious automotive manufacturers.
            <br />
            <span className="text-lg text-slate-500">Professional-grade manuals trusted by certified technicians and dealership service centers globally.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBrands.map((brand, index) => {
            const isAvailable = brand.available !== false
            const canAccess = hasActiveSubscription && isAvailable
            
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm ${!canAccess ? 'opacity-75' : ''} hover:scale-[1.02]`}
              >
                <CardContent className="p-8">
                  {!isAvailable && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  
                  {hasActiveSubscription && !isAvailable && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  
                  {!hasActiveSubscription && isAvailable && (
                    <div className="absolute top-4 right-4">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-5 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-3xl font-bold text-slate-700 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {/* Future: Replace with <img src={brand.logo} alt={brand.name} className="w-14 h-14 object-contain" /> */}
                      {brand.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{brand.name}</h3>
                      <p className="text-slate-600 font-medium">{brand.modelCount}+ Models Available</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-500 font-medium">Professional Grade Documentation</span>
                      </div>
                    </div>
                  </div>
                  
                  {canAccess ? (
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-semibold h-12 shadow-lg">
                      <Link href={`/viewer/${brand.id}/${brand.models[0]?.id}/overview`}>
                        <Car className="mr-2 h-5 w-5" />
                        Browse Models
                      </Link>
                    </Button>
                  ) : !isAvailable ? (
                    <Button variant="outline" className="w-full h-12 border-2 border-slate-200 text-slate-500 font-semibold" disabled>
                      <Clock className="mr-2 h-5 w-5" />
                      Coming Soon
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full h-12 border-2 border-amber-200 text-amber-600 font-semibold" disabled>
                      <Lock className="mr-2 h-5 w-5" />
                      Requires Subscription
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {!hasActiveSubscription && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Activate your subscription to unlock available brands
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

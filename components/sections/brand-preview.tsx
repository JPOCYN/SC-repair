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
    <section id="brands" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Premium Brands
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Automotive Brands</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive repair manuals for the world's most prestigious supercar manufacturers.
            <br />
            <span className="text-lg text-muted-foreground/80">Professional documentation trusted by certified technicians worldwide.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBrands.map((brand, index) => {
            const isAvailable = brand.available !== false
            const canAccess = hasActiveSubscription && isAvailable
            
            return (
              <Card 
                key={index} 
                className={`card-hover relative ${!canAccess ? 'opacity-75' : ''}`}
              >
                <CardContent className="p-6">
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
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 shadow-sm">
                      {/* Future: Replace with <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain" /> */}
                      {brand.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{brand.name}</h3>
                      <p className="text-muted-foreground">{brand.modelCount}+ Models Available</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">Professional Grade</span>
                      </div>
                    </div>
                  </div>
                  
                  {canAccess ? (
                    <Button asChild variant="default" className="w-full">
                      <Link href={`/viewer/${brand.id}/${brand.models[0]?.id}/overview`}>
                        <Car className="mr-2 h-4 w-4" />
                        Browse Models
                      </Link>
                    </Button>
                  ) : !isAvailable ? (
                    <Button variant="outline" className="w-full" disabled>
                      <Clock className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      <Lock className="mr-2 h-4 w-4" />
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

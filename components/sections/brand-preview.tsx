"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Car } from "lucide-react"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Brands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive repair manuals for the world's most prestigious supercar brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBrands.map((brand, index) => (
            <Card 
              key={index} 
              className={`card-hover relative ${!hasActiveSubscription ? 'opacity-75' : ''}`}
            >
              <CardContent className="p-6">
                {!hasActiveSubscription && (
                  <div className="absolute top-4 right-4">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{brand.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{brand.name}</h3>
                    <p className="text-muted-foreground">{brand.modelCount}+ Models</p>
                  </div>
                </div>
                
                {hasActiveSubscription ? (
                  <Button asChild variant="default" className="w-full">
                    <Link href={`/viewer/${brand.id}/${brand.models[0]?.id}/${brand.models[0]?.years[0]}/overview`}>
                      <Car className="mr-2 h-4 w-4" />
                      Browse Models
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    <Lock className="mr-2 h-4 w-4" />
                    Requires Subscription
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {!hasActiveSubscription && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Activate your subscription to unlock all brands and models
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Zap, Clock, Calendar } from "lucide-react"

interface PricingSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onActivateClick: () => void
}

const tiers = [
  {
    name: "Daily Access",
    price: "$9.99",
    period: "per day",
    icon: Clock,
    features: ["24-hour access", "All brand manuals", "Mobile responsive"],
    code: "DAILY123"
  },
  {
    name: "Weekly Access", 
    price: "$29.99",
    period: "per week",
    icon: Zap,
    popular: true,
    features: ["7-day access", "All brand manuals", "Advanced search", "Download PDFs"],
    code: "WEEK123"
  },
  {
    name: "Monthly Access",
    price: "$79.99", 
    period: "per month",
    icon: Calendar,
    features: ["30-day access", "All brand manuals", "Advanced search", "Download PDFs", "Priority support"],
    code: "MONTH123"
  },
  {
    name: "Yearly Access",
    price: "$799.99",
    period: "per year", 
    icon: Crown,
    premium: true,
    features: ["365-day access", "All brand manuals", "Advanced search", "Download PDFs", "Priority support", "Technical diagrams"],
    code: "YEAR123"
  }
]

export function PricingSheet({ open, onOpenChange, onActivateClick }: PricingSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
        <SheetHeader className="text-center mb-8">
          <SheetTitle className="text-2xl">Choose Your Subscription</SheetTitle>
          <SheetDescription>
            Select a plan to unlock access to all premium supercar repair manuals
          </SheetDescription>
        </SheetHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative ${
                tier.popular ? 'ring-2 ring-primary border-primary' : ''
              } ${tier.premium ? 'bg-gradient-to-b from-yellow-50 to-amber-50 border-yellow-300' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              
              {tier.premium && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-medium px-2 py-1 rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-2 p-2 rounded-full bg-primary/10">
                  <tier.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <Button 
                    className="w-full"
                    size="sm"
                    variant={tier.popular || tier.premium ? "default" : "outline"}
                    onClick={onActivateClick}
                  >
                    Activate with Code
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Code: {tier.code}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Purchase activation codes from our{" "}
            <Button variant="link" className="px-0 text-primary underline">
              Shopify store
            </Button>
          </p>
          <p className="text-sm text-muted-foreground">
            All plans include full access to our repair manual library with no hidden fees.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

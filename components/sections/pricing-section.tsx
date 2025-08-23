"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Zap, Clock, Calendar } from "lucide-react"
import { useState } from "react"
import { ActivationDialog } from "@/components/subscription/activation-dialog"

const tiers = [
  {
    name: "Daily Access",
    price: "$9.99",
    period: "per day",
    icon: Clock,
    features: [
      "24-hour access",
      "All brand manuals",
      "Mobile responsive",
      "Basic search"
    ],
    code: "Use code: DAILY123"
  },
  {
    name: "Weekly Access", 
    price: "$29.99",
    period: "per week",
    icon: Zap,
    popular: true,
    features: [
      "7-day access",
      "All brand manuals", 
      "Advanced search",
      "Download PDFs",
      "Priority support"
    ],
    code: "Use code: WEEK123"
  },
  {
    name: "Monthly Access",
    price: "$79.99", 
    period: "per month",
    icon: Calendar,
    features: [
      "30-day access",
      "All brand manuals",
      "Advanced search", 
      "Download PDFs",
      "Priority support",
      "Technical diagrams"
    ],
    code: "Use code: MONTH123"
  },
  {
    name: "Yearly Access",
    price: "$799.99",
    period: "per year", 
    icon: Crown,
    premium: true,
    features: [
      "365-day access",
      "All brand manuals",
      "Advanced search",
      "Download PDFs", 
      "Priority support",
      "Technical diagrams",
      "New releases first",
      "Bulk downloads"
    ],
    code: "Use code: YEAR123"
  }
]

export function PricingSection() {
  const [activationOpen, setActivationOpen] = useState(false)

  return (
    <>
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your needs. All plans include access to our complete library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <Card 
                key={index}
                className={`card-hover relative ${
                  tier.popular ? 'ring-2 ring-primary border-primary' : ''
                } ${tier.premium ? 'bg-gradient-to-b from-yellow-50 to-amber-50 border-yellow-300' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {tier.premium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-medium px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <tier.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full"
                      variant={tier.popular || tier.premium ? "default" : "outline"}
                      onClick={() => setActivationOpen(true)}
                    >
                      Activate with Code
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      {tier.code}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
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
        </div>
      </section>

      <ActivationDialog 
        open={activationOpen}
        onOpenChange={setActivationOpen}
      />
    </>
  )
}

"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Gift } from "lucide-react"

interface PricingSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onActivateClick: () => void
}

const tiers = [
  {
    name: "Access with Code",
    price: "Have a code?",
    period: "",
    icon: Gift,
    features: [
      "Use activation code to unlock access",
      "System detects plan from code",
      "All brand manuals included",
      "No hidden fees"
    ],
    code: "DAILY123 / WEEK123 / MONTH123 / YEAR123"
  }
]

export function PricingSheet({ open, onOpenChange, onActivateClick }: PricingSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
        <SheetHeader className="text-center mb-8">
          <SheetTitle className="text-2xl">Activate Your Access</SheetTitle>
          <SheetDescription>
            Enter your activation code in the next step. We’ll detect the plan automatically.
          </SheetDescription>
        </SheetHeader>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className="relative"
            >

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
                    onClick={onActivateClick}
                  >
                    Activate with Code
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Demo codes: {tier.code}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            After activation, you’ll have full access based on your code tier.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

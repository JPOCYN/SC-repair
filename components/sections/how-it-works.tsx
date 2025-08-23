import { Card, CardContent } from "@/components/ui/card"
import { LogIn, ShoppingCart, BookOpen } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: LogIn,
      title: "1. Sign In",
      description: "Create your account and sign in to access our platform"
    },
    {
      icon: ShoppingCart,
      title: "2. Get Activation Code",
      description: "Purchase an activation code from our Shopify store"
    },
    {
      icon: BookOpen,
      title: "3. Access Manuals", 
      description: "Activate your subscription and browse premium repair manuals"
    }
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get access to professional repair manuals in three simple steps.
            <br />
            <span className="text-lg text-muted-foreground/80">Designed for automotive professionals and enthusiasts.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            New to SC Repair? Our step-by-step guide makes it easy to get started.
          </p>
        </div>
      </div>
    </section>
  )
}

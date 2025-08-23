import { Card, CardContent } from "@/components/ui/card"
import { LogIn, ShoppingCart, BookOpen, Zap } from "lucide-react"

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
    <section id="features" className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200/50 px-4 py-2 text-sm font-semibold text-emerald-700 mb-6">
            <Zap className="mr-2 h-4 w-4" />
            Simple Three-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Get instant access to professional repair documentation in three simple steps.
            <br />
            <span className="text-lg text-slate-500">Streamlined for automotive professionals and certified technicians.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Card key={index} className="relative group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105">
              <CardContent className="pt-10 pb-10">
                <div className="mb-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            New to KKS Repair? Our step-by-step guide makes it easy to get started.
          </p>
        </div>
      </div>
    </section>
  )
}

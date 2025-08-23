"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

interface HeroProps {
  onAuthClick: (tab?: 'login' | 'signup') => void
}

export function Hero({ onAuthClick }: HeroProps) {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      
      <div className="container relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-2">🚀</span>
              <span className="text-white/90">Trusted by 1000+ automotive professionals</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Premium Supercar
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-white to-gray-300 bg-clip-text text-transparent">
                Repair Manuals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Access professional-grade repair documentation for the world's most exclusive supercars.
              <br />
              <span className="text-gray-300">Expert knowledge at your fingertips.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 min-w-[200px] font-semibold"
              onClick={() => onAuthClick('signup')}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:border-white/70 hover:text-white min-w-[200px] backdrop-blur-sm font-semibold"
              onClick={() => onAuthClick('login')}
            >
              Sign In
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Expert Quality</h3>
                <p className="text-gray-300 text-sm">Professional-grade documentation from certified sources</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Instant Access</h3>
                <p className="text-gray-300 text-sm">Get immediate access to repair manuals and technical diagrams</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Trusted by Professionals</h3>
                <p className="text-gray-300 text-sm">Used by mechanics and enthusiasts worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

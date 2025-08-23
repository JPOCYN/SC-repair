"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

interface HeroProps {
  onAuthClick: () => void
}

export function Hero({ onAuthClick }: HeroProps) {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Premium Supercar
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Repair Manuals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Access professional-grade repair documentation for the world's most exclusive supercars.
              Expert knowledge at your fingertips.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 min-w-[200px]"
              onClick={onAuthClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 min-w-[200px]"
              onClick={onAuthClick}
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

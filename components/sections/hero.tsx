"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"

interface HeroProps {
  onAuthClick: (tab?: 'login' | 'signup') => void
}

export function Hero({ onAuthClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div className="container relative py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-white/90 font-medium">Trusted by 1000+ automotive professionals worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              Professional
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Auto Repair
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-white/80">Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive technical documentation and repair manuals for the world's most exclusive supercars. 
              <br className="hidden md:block" />
              <span className="text-white/60 text-lg md:text-xl">Engineered for professionals, designed for excellence.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 min-w-[240px] font-semibold text-base h-14 shadow-xl shadow-blue-500/25"
              onClick={() => onAuthClick('signup')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 min-w-[240px] backdrop-blur-sm font-semibold text-base h-14"
              onClick={() => onAuthClick('login')}
            >
              Sign In
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10">
            <div className="flex flex-col items-center space-y-4 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Shield className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl text-white mb-2">Expert Quality</h3>
                <p className="text-white/60 text-sm leading-relaxed">Professional-grade documentation from certified manufacturers and industry experts</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Zap className="h-10 w-10 text-purple-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl text-white mb-2">Instant Access</h3>
                <p className="text-white/60 text-sm leading-relaxed">Immediate access to comprehensive repair manuals and detailed technical diagrams</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Users className="h-10 w-10 text-cyan-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl text-white mb-2">Trusted Globally</h3>
                <p className="text-white/60 text-sm leading-relaxed">Used by certified mechanics, technicians, and automotive professionals worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

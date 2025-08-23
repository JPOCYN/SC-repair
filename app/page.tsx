"use client"

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { BrandPreview } from '@/components/sections/brand-preview'
import { PricingSection } from '@/components/sections/pricing-section'
import { Footer } from '@/components/layout/footer'
import { AuthDialog } from '@/components/auth/auth-dialog'
import { useAuthState } from '@/hooks/use-auth'

export default function HomePage() {
  const { user, subscription } = useAuthState()
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => setAuthDialogOpen(true)} />
      
      <main>
        <Hero onAuthClick={() => setAuthDialogOpen(true)} />
        <HowItWorks />
        <BrandPreview hasActiveSubscription={!!subscription?.active} />
        <PricingSection />
      </main>

      <Footer />
      
      <AuthDialog 
        open={authDialogOpen} 
        onOpenChange={setAuthDialogOpen}
      />
    </div>
  )
}

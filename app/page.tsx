"use client"

import { useEffect, useState, Suspense } from 'react'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { BrandPreview } from '@/components/sections/brand-preview'
import { PricingSection } from '@/components/sections/pricing-section'
import { Footer } from '@/components/layout/footer'
import { AuthDialog } from '@/components/auth/auth-dialog'
import { ActivationDialog } from '@/components/subscription/activation-dialog'
import { PricingSheet } from '@/components/subscription/pricing-sheet'
import { useAuthState } from '@/hooks/use-auth'
import { useUrlState } from '@/hooks/use-url-state'

function HomePageContent() {
  const { user, subscription, loading } = useAuthState()
  const { getQuery, updateQuery } = useUrlState()
  
  // URL-driven modal states
  const authParam = getQuery('auth')
  const pricingParam = getQuery('pricing')
  const activateParam = getQuery('activate')

  // Handle auth flow based on state
  useEffect(() => {
    if (loading) return

    // If user just logged in and has no subscription, show pricing
    if (user && !subscription?.active && !pricingParam && !activateParam) {
      updateQuery({ pricing: '1' })
    }
  }, [user, subscription, loading, pricingParam, activateParam, updateQuery])

  const openAuth = (tab: 'login' | 'signup' = 'login') => {
    updateQuery({ auth: tab })
  }

  const closeAuth = () => {
    updateQuery({ auth: null })
  }

  const closePricing = () => {
    updateQuery({ pricing: null })
  }

  const closeActivation = () => {
    updateQuery({ activate: null })
  }

  const openActivation = () => {
    updateQuery({ activate: '1' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => openAuth()} />
      
      <main>
        <Hero onAuthClick={() => openAuth()} />
        <HowItWorks />
        <BrandPreview hasActiveSubscription={!!subscription?.active} />
        <PricingSection />
      </main>

      <Footer />
      
      {/* URL-driven modals */}
      <AuthDialog 
        open={!!authParam} 
        onOpenChange={(open) => open ? null : closeAuth()}
        defaultTab={authParam === 'signup' ? 'signup' : 'login'}
      />
      
      <PricingSheet
        open={!!pricingParam && !!user && !subscription?.active}
        onOpenChange={(open) => open ? null : closePricing()}
        onActivateClick={openActivation}
      />
      
      <ActivationDialog 
        open={!!activateParam}
        onOpenChange={(open) => open ? null : closeActivation()}
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <HomePageContent />
    </Suspense>
  )
}

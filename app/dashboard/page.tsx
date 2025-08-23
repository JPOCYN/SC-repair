"use client"

import { useEffect, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuthState } from '@/hooks/use-auth'
import { BrandPreview } from '@/components/sections/brand-preview'
import { User, Calendar, Settings, BookOpen, Clock, Car } from 'lucide-react'

function DashboardContent() {
  const { user, subscription, loading } = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  // Prevent redirect loop - if user is logged in, stay on dashboard
  useEffect(() => {
    if (user && loading === false) {
      // User is logged in and loading is complete, stay on dashboard
    }
  }, [user, loading])

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow container py-12 md:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Welcome back, {user.email.split('@')[0]}!
            </h1>
            <p className="text-xl text-muted-foreground">
              Your supercar repair manual dashboard
            </p>
          </div>

          {/* Primary CTA: Browse Brands */}
          <BrandPreview hasActiveSubscription={!!subscription?.active} />

          {/* Subscription Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Subscription Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Status:</span>
                    <Badge variant={subscription?.active ? "default" : "secondary"}>
                      {subscription?.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  {subscription?.active && subscription?.expiresAt && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Expires: {new Date(subscription.expiresAt).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/account')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Account
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pricing for inactive subscriptions */}
          {!subscription?.active && (
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800">Activate Your Subscription</CardTitle>
                <CardDescription className="text-amber-700">
                  You need an active subscription to access repair manuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => router.push('/?pricing=1')}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  View Pricing & Activate
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available Brands</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">McLaren currently available</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Manual Sections</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Comprehensive repair sections</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Coming Soon</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">More brands in development</p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Landing */}
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => router.push('/')}>Back to Home</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}

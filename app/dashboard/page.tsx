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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container py-12 md:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
              <User className="mr-2 h-4 w-4" />
              Professional Dashboard
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Welcome back, {user.email.split('@')[0]}!
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed">
              Your comprehensive KKS automotive repair documentation center
            </p>
          </div>

          {/* Primary CTA: Browse Brands */}
          <BrandPreview hasActiveSubscription={!!subscription?.active} />

          {/* Subscription Status */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                Subscription Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-700 text-lg">Status:</span>
                    <Badge 
                      variant={subscription?.active ? "default" : "secondary"} 
                      className={`px-3 py-1 text-sm font-semibold ${
                        subscription?.active 
                          ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
                          : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {subscription?.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  {subscription?.active && subscription?.expiresAt && (
                    <div className="flex items-center gap-3 text-slate-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">Expires: {new Date(subscription.expiresAt).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/account')}
                  className="bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700 font-semibold px-6 py-3"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Manage Account
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pricing for inactive subscriptions */}
          {!subscription?.active && (
            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-amber-800 mb-2">Activate Your Professional Access</CardTitle>
                <CardDescription className="text-amber-700 text-lg">
                  Unlock comprehensive repair documentation and technical manuals for premium automotive brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => router.push('/?pricing=1')}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-3 text-lg shadow-lg"
                >
                  View Pricing & Activate Access
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-slate-700">Available Brands</CardTitle>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900 mb-2">1</div>
                <p className="text-slate-600 font-medium">McLaren currently available</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-slate-700">Manual Sections</CardTitle>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900 mb-2">7</div>
                <p className="text-slate-600 font-medium">Comprehensive repair sections</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-slate-700">Coming Soon</CardTitle>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900 mb-2">5</div>
                <p className="text-slate-600 font-medium">More brands in development</p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Landing */}
          <div className="flex justify-center pt-8">
            <Button 
              variant="outline" 
              onClick={() => {
                // Allow navigation to home even when logged in
                if (typeof window !== 'undefined') {
                  sessionStorage.setItem('allowHomePage', 'true')
                }
                router.push('/')
              }}
              className="bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700 font-semibold px-8 py-3 text-lg"
            >
              Back to Home
            </Button>
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

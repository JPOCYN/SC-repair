"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useAuthState } from "@/hooks/use-auth"
import { User, Calendar, Key, Settings, CreditCard } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { ActivationDialog } from "@/components/subscription/activation-dialog"
import { useRouter } from "next/navigation"

function AccountPageContent() {
  const { user, subscription, logout } = useAuthState()
  const [activationOpen, setActivationOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onAuthClick={() => {}} />
      
      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and subscription details
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
                <CardDescription>
                  Your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input value={user.email} disabled />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input value={user.name || 'Not set'} placeholder="Enter your name" />
                  </div>
                </div>
                <Button variant="outline">Update Profile</Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Subscription</span>
                  <Badge variant={subscription?.active ? "default" : "secondary"}>
                    {subscription?.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                {subscription?.active && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Plan</span>
                      <span className="text-sm font-medium capitalize">
                        {subscription.tier}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Expires</span>
                      <span className="text-sm">
                        {formatDate(subscription.expiresAt)}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Subscription Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Subscription Management</span>
              </CardTitle>
              <CardDescription>
                Manage your subscription and access to premium features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {subscription?.active ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800">Active Subscription</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Your {subscription.tier} plan is active until {formatDate(subscription.expiresAt)}
                  </p>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Key className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800">No Active Subscription</span>
                  </div>
                  <p className="text-sm text-yellow-700 mb-3">
                    Activate a subscription to access premium repair manuals
                  </p>
                  <Button 
                    onClick={() => setActivationOpen(true)}
                    size="sm"
                  >
                    Activate Subscription
                  </Button>
                </div>
              )}
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => setActivationOpen(true)}
                >
                  <Key className="mr-2 h-4 w-4" />
                  Add Activation Code
                </Button>
                {subscription?.active && (
                  <Button variant="outline" disabled>
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Billing
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account Actions</CardTitle>
              <CardDescription>
                Manage your account settings and data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline">Download Data</Button>
                <Button variant="outline">Privacy Settings</Button>
                <Button variant="destructive" onClick={logout}>
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      
      <ActivationDialog 
        open={activationOpen}
        onOpenChange={setActivationOpen}
      />
    </div>
  )
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <AccountPageContent />
    </Suspense>
  )
}

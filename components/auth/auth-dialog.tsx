"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab?: "login" | "signup"
}

export function AuthDialog({ open, onOpenChange, defaultTab = "login" }: AuthDialogProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome to SC Repair
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-6">
            <LoginForm onSuccess={() => {
              onOpenChange(false)
              // Redirect will be handled by the useEffect in the parent component
            }} />
          </TabsContent>
          
          <TabsContent value="signup" className="mt-6">
            <SignupForm onSuccess={() => {
              onOpenChange(false)
              // Redirect will be handled by the useEffect in the parent component
            }} />
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-muted-foreground mt-4">
          By continuing you agree to our Terms and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  )
}

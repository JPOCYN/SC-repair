"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthState } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, Gift } from "lucide-react"

interface ActivationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ActivationDialog({ open, onOpenChange }: ActivationDialogProps) {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { user, activateSubscription } = useAuthState()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in first to activate your subscription.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await activateSubscription(code.toUpperCase())
      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Subscription activated!",
          description: "You now have access to all premium features.",
        })
        
        // Auto-close after success
        setTimeout(() => {
          setIsSuccess(false)
          setCode("")
          onOpenChange(false)
        }, 2000)
      } else {
        toast({
          title: "Invalid activation code",
          description: result.error || "Please check your code and try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setCode("")
    setIsSuccess(false)
    onOpenChange(false)
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center space-y-4 py-8">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Activation Successful!</h3>
              <p className="text-muted-foreground">Your subscription is now active</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5" />
            <span>Activate Subscription</span>
          </DialogTitle>
          <DialogDescription>
            Enter your activation code to unlock premium features
          </DialogDescription>
        </DialogHeader>

        {!user ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Please sign in first to activate your subscription
            </p>
            <Button onClick={handleClose}>
              Sign In
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="activation-code" className="text-sm font-medium">
                Activation Code
              </label>
              <Input
                id="activation-code"
                placeholder="Enter your activation code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="font-mono text-center tracking-wider"
                maxLength={10}
                required
              />
              <p className="text-xs text-muted-foreground">
                Code should be in format: DAILY123, WEEK123, etc.
              </p>
            </div>

            <div className="space-y-3">
              <Button type="submit" className="w-full" disabled={isLoading || !code.trim()}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Activate Subscription
              </Button>

              <div className="text-center text-xs text-muted-foreground space-y-1">
                <p>Demo codes:</p>
                <p>DAILY123 • WEEK123 • MONTH123 • YEAR123</p>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

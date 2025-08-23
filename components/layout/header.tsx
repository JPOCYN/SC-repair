"use client"

import { Button } from "@/components/ui/button"
import { useAuthState } from "@/hooks/use-auth"
import { Car, User, LogOut } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onAuthClick: () => void
}

export function Header({ onAuthClick }: HeaderProps) {
  const { user, logout } = useAuthState()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8" />
          <span className="text-xl font-bold">SC Repair</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="#brands" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Brands
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          {user ? (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/account">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={onAuthClick}>
                Sign In
              </Button>
              <Button variant="premium" size="sm" onClick={onAuthClick}>
                Create Account
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

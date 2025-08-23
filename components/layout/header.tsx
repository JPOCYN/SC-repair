"use client"

import { Button } from "@/components/ui/button"
import { useAuthState } from "@/hooks/use-auth"
import { Car, User, LogOut } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onAuthClick?: () => void
}

export function Header({ onAuthClick }: HeaderProps) {
  const { user, logout } = useAuthState()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-18 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          onClick={() => {
            // Allow navigation to home even when logged in
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('allowHomePage', 'true')
            }
          }}
        >
          <div className="w-12 h-10 bg-black rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 overflow-hidden">
            {/* KKS Logo */}
            <img 
              src="/kks-logo.svg" 
              alt="KKS Supercar" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                // Fallback to text if logo not found
                e.currentTarget.style.display = 'none';
                const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallbackElement) {
                  fallbackElement.style.display = 'flex';
                }
              }}
            />
            <div className="hidden items-center justify-center w-full h-full">
              <span className="text-white font-bold text-sm">KKS</span>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">KKS Repair</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {user ? (
            <>
              <Link 
                href="/" 
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/50"
                onClick={() => {
                  // Allow navigation to home even when logged in
                  if (typeof window !== 'undefined') {
                    sessionStorage.setItem('allowHomePage', 'true')
                  }
                }}
              >
                Home
              </Link>
              <Link 
                href="/dashboard" 
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/50"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="#features" 
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/50"
              >
                Features
              </Link>
              <Link 
                href="#brands" 
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100/50"
              >
                Brands
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-3">
          {user ? (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 font-semibold">
                <Link href="/account">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout} className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 font-semibold">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : onAuthClick ? (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={onAuthClick} className="text-slate-600 hover:text-slate-900 font-semibold">
                Sign In
              </Button>
              <Button 
                size="sm" 
                onClick={onAuthClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-semibold px-6 shadow-lg"
              >
                Create Account
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-slate-900 font-semibold">
                <Link href="/">
                  Sign In
                </Link>
              </Button>
              <Button 
                size="sm" 
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-semibold px-6 shadow-lg"
              >
                <Link href="/">
                  Create Account
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

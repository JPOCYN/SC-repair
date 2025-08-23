import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock delay for API calls
export const mockDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms))

// Local storage helpers
export const storage = {
  get: (key: string) => {
    if (typeof window === 'undefined') return null
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },
  
  set: (key: string, value: any) => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Handle quota exceeded or other errors
    }
  },
  
  remove: (key: string) => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}

// URL state management
export const urlState = {
  updateQuery: (params: Record<string, string | null>, router: any) => {
    const url = new URL(window.location.href)
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        url.searchParams.delete(key)
      } else {
        url.searchParams.set(key, value)
      }
    })
    router.replace(url.pathname + url.search, { scroll: false })
  }
}

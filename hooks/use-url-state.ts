"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export function useUrlState() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateQuery = useCallback((params: Record<string, string | null>) => {
    const url = new URL(window.location.href)
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        url.searchParams.delete(key)
      } else {
        url.searchParams.set(key, value)
      }
    })
    
    router.replace(url.pathname + url.search, { scroll: false })
  }, [router])

  const getQuery = useCallback((key: string): string | null => {
    return searchParams.get(key)
  }, [searchParams])

  const clearQuery = useCallback((keys: string[]) => {
    const params: Record<string, null> = {}
    keys.forEach(key => {
      params[key] = null
    })
    updateQuery(params)
  }, [updateQuery])

  return {
    updateQuery,
    getQuery,
    clearQuery,
    searchParams
  }
}

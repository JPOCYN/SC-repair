"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <div className="mb-4 text-4xl">🏎️</div>
          <Loader2 className="h-8 w-8 animate-spin mb-4" />
          <p className="text-lg font-medium">Loading SC Repair</p>
          <p className="text-sm text-muted-foreground">Please wait...</p>
        </CardContent>
      </Card>
    </div>
  )
}

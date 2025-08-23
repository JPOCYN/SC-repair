"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

interface DisclaimerProps {
  className?: string
}

export function Disclaimer({ className }: DisclaimerProps) {
  return (
    <div className={className}>
      <Alert className="border-amber-200 bg-amber-50">
        <Info className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 text-sm">
          <strong>Disclaimer:</strong> All documents and information displayed on this website are gathered from open-access sources on the internet and are intended for educational purposes only. Always consult official manufacturer documentation and certified professionals for actual repairs.
        </AlertDescription>
      </Alert>
    </div>
  )
}

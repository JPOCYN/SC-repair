import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/providers/query-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SC Repair - Premium Supercar Repair Manuals',
  description: 'Access professional repair manuals for luxury supercars. Expert-grade documentation for Ferrari, McLaren, Lamborghini, and more.',
  keywords: 'supercar repair, luxury car manual, Ferrari repair, McLaren service, Lamborghini maintenance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}

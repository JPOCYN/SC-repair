import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/providers/query-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KKS Repair - Premium Supercar Repair Manuals',
  description: 'Access professional repair manuals for luxury supercars. Expert-grade documentation for Ferrari, McLaren, Lamborghini, and more.',
  keywords: 'supercar repair, luxury car manual, Ferrari repair, McLaren service, Lamborghini maintenance, KKS repair',
  authors: [{ name: 'KKS Repair Team' }],
  creator: 'KKS Repair',
  publisher: 'KKS Repair',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kks-repair.com',
    title: 'KKS Repair - Premium Supercar Repair Manuals',
    description: 'Access professional repair manuals for luxury supercars. Expert-grade documentation for Ferrari, McLaren, Lamborghini, and more.',
    siteName: 'KKS Repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KKS Repair - Premium Supercar Repair Manuals',
    description: 'Access professional repair manuals for luxury supercars.',
  },
  manifest: '/manifest.json',
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

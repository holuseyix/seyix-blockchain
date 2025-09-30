import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { AuthProvider } from "@/lib/auth-context"
import { WalletProvider } from "@/lib/wallet-context"

export const metadata: Metadata = {
  title: "LaunchPad - Blockchain Project Launchpad & NFT Marketplace",
  description: "Professional blockchain project launchpad with NFT minting and trading",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <WalletProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </WalletProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

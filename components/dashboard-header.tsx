"use client"

import { Button } from "@/components/ui/button"
import { Wallet, Menu } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground">
                <path d="M20 12L4 4v16l16-8z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold">SolTracker</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              NFTs
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              DeFi
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Transactions
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

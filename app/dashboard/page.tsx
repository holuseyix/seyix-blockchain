"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, TrendingUp, Wallet, ImageIcon } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back, {user.name}!</h1>
            <p className="text-lg text-muted-foreground">Manage your projects, NFTs, and explore the marketplace</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">My Projects</CardTitle>
                <Rocket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Active launches</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">NFTs Owned</CardTitle>
                <ImageIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Total value: $4,250</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,450</div>
                <p className="text-xs text-success">+12.5% this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45.2 SOL</div>
                <p className="text-xs text-muted-foreground">≈ $4,200</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <a
                href="/projects/new"
                className="flex flex-col items-center justify-center p-6 border border-border rounded-lg hover:border-cyan-500 transition-colors cursor-pointer"
              >
                <Rocket className="h-8 w-8 mb-2 text-cyan-500" />
                <h3 className="font-semibold">Launch Project</h3>
                <p className="text-sm text-muted-foreground text-center">Start a new blockchain project</p>
              </a>
              <a
                href="/mint"
                className="flex flex-col items-center justify-center p-6 border border-border rounded-lg hover:border-purple-500 transition-colors cursor-pointer"
              >
                <ImageIcon className="h-8 w-8 mb-2 text-purple-500" />
                <h3 className="font-semibold">Mint NFT</h3>
                <p className="text-sm text-muted-foreground text-center">Create your digital collectible</p>
              </a>
              <a
                href="/marketplace"
                className="flex flex-col items-center justify-center p-6 border border-border rounded-lg hover:border-orange-500 transition-colors cursor-pointer"
              >
                <TrendingUp className="h-8 w-8 mb-2 text-orange-500" />
                <h3 className="font-semibold">Explore Market</h3>
                <p className="text-sm text-muted-foreground text-center">Browse and trade NFTs</p>
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

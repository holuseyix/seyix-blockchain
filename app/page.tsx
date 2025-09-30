"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Zap, Shield, TrendingUp, ArrowRight, Sparkles, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">LaunchPad</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#marketplace"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Marketplace
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span>Launch Your Blockchain Project Today</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              The Future of{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Blockchain
              </span>{" "}
              Starts Here
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Professional launchpad for blockchain projects with integrated NFT minting and trading. Connect your
              wallet and join the revolution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg h-12 px-8"
                >
                  Launch Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent">
                  Explore Projects
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Platform</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container px-4 py-24 bg-muted/30">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Everything You Need to Succeed</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools and features designed for blockchain innovators
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Project Launchpad</h3>
                  <p className="text-muted-foreground">
                    Launch your blockchain project with our comprehensive platform. Get visibility and connect with
                    investors.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">NFT Minting</h3>
                  <p className="text-muted-foreground">
                    Create and mint NFTs on Solana blockchain with our easy-to-use interface. No coding required.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">NFT Marketplace</h3>
                  <p className="text-muted-foreground">
                    Trade NFTs with low fees and instant transactions. Discover unique digital assets from creators
                    worldwide.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Secure & Trusted</h3>
                  <p className="text-muted-foreground">
                    Built with security first. Your assets are protected with industry-leading encryption and smart
                    contracts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Powered by Solana's high-performance blockchain. Experience instant transactions and low fees.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Global Community</h3>
                  <p className="text-muted-foreground">
                    Join thousands of creators, investors, and blockchain enthusiasts from around the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Launch?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join the future of blockchain innovation. Create your account and start building today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg h-12 px-8"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">LaunchPad</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The professional blockchain launchpad for the next generation of Web3 projects.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mint NFT
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LaunchPad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

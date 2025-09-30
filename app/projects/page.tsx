"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, Search, Plus } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "SolanaSwap",
    description: "Next-generation decentralized exchange on Solana with lightning-fast swaps",
    category: "DeFi",
    raised: 450000,
    goal: 500000,
    backers: 1250,
    daysLeft: 12,
    image: "/defi-trading-platform.jpg",
    status: "active",
  },
  {
    id: 2,
    name: "MetaVerse Land",
    description: "Own virtual real estate in the next generation metaverse built on Solana",
    category: "Metaverse",
    raised: 780000,
    goal: 1000000,
    backers: 2340,
    daysLeft: 8,
    image: "/metaverse-virtual-world.png",
    status: "active",
  },
  {
    id: 3,
    name: "CryptoArt Gallery",
    description: "Curated NFT marketplace for premium digital art and collectibles",
    category: "NFT",
    raised: 320000,
    goal: 400000,
    backers: 890,
    daysLeft: 15,
    image: "/nft-art-gallery.jpg",
    status: "active",
  },
  {
    id: 4,
    name: "GameFi Arena",
    description: "Play-to-earn gaming platform with competitive tournaments and rewards",
    category: "Gaming",
    raised: 600000,
    goal: 750000,
    backers: 3200,
    daysLeft: 5,
    image: "/gaming-esports-arena.jpg",
    status: "active",
  },
  {
    id: 5,
    name: "SolLend Protocol",
    description: "Decentralized lending and borrowing protocol with competitive rates",
    category: "DeFi",
    raised: 500000,
    goal: 500000,
    backers: 1800,
    daysLeft: 0,
    image: "/defi-lending-protocol.jpg",
    status: "funded",
  },
  {
    id: 6,
    name: "NFT Music Platform",
    description: "Revolutionary music streaming platform powered by NFTs and blockchain",
    category: "NFT",
    raised: 250000,
    goal: 600000,
    backers: 650,
    daysLeft: 20,
    image: "/music-streaming-platform.jpg",
    status: "active",
  },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Project Launchpad</h1>
              <p className="text-lg text-muted-foreground">Discover and support innovative blockchain projects</p>
            </div>
            <Link href="/projects/new">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Launch Project
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="nft">NFT</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
              <TabsTrigger value="metaverse">Metaverse</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:border-cyan-500/50 transition-colors">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <Badge variant={project.status === "funded" ? "default" : "secondary"}>
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">
                            ${(project.raised / 1000).toFixed(0)}K / ${(project.goal / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                            style={{ width: `${(project.raised / project.goal) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{project.backers.toLocaleString()} backers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{project.daysLeft > 0 ? `${project.daysLeft} days left` : "Funded"}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={project.status === "funded" ? "outline" : "default"}>
                        {project.status === "funded" ? "View Project" : "Back This Project"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

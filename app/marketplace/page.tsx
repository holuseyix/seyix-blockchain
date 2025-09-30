"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, TrendingUp, Flame } from "lucide-react"

const nfts = [
  {
    id: 1,
    name: "Cosmic Voyager #1234",
    collection: "Cosmic Voyagers",
    price: 12.5,
    image: "/nft-space-astronaut.jpg",
    creator: "SpaceArtist",
    trending: true,
  },
  {
    id: 2,
    name: "Digital Dreams #567",
    collection: "Digital Dreams",
    price: 8.3,
    image: "/nft-abstract-art.jpg",
    creator: "DreamWeaver",
    trending: false,
  },
  {
    id: 3,
    name: "Cyber Punk #890",
    collection: "Cyber Punks",
    price: 15.7,
    image: "/nft-cyberpunk-character.jpg",
    creator: "CyberCreator",
    trending: true,
  },
  {
    id: 4,
    name: "Ocean Depths #234",
    collection: "Ocean Collection",
    price: 6.9,
    image: "/nft-underwater-scene.jpg",
    creator: "OceanArtist",
    trending: false,
  },
  {
    id: 5,
    name: "Neon City #456",
    collection: "Neon Cities",
    price: 11.2,
    image: "/nft-neon-cityscape.jpg",
    creator: "NeonMaster",
    trending: true,
  },
  {
    id: 6,
    name: "Fantasy Realm #789",
    collection: "Fantasy Realms",
    price: 9.8,
    image: "/nft-fantasy-landscape.jpg",
    creator: "FantasyArt",
    trending: false,
  },
  {
    id: 7,
    name: "Retro Wave #123",
    collection: "Retro Waves",
    price: 7.5,
    image: "/nft-retro-aesthetic.jpg",
    creator: "RetroVibes",
    trending: false,
  },
  {
    id: 8,
    name: "Galactic Hero #345",
    collection: "Galactic Heroes",
    price: 14.3,
    image: "/nft-sci-fi-warrior.jpg",
    creator: "GalacticArt",
    trending: true,
  },
  {
    id: 9,
    name: "Nature Spirit #678",
    collection: "Nature Spirits",
    price: 10.1,
    image: "/nft-nature-creature.jpg",
    creator: "NatureArtist",
    trending: false,
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("trending")

  const filteredNfts = nfts
    .filter((nft) => {
      const matchesSearch =
        nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nft.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nft.creator.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "trending") return b.trending ? 1 : -1
      return 0
    })

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">NFT Marketplace</h1>
            <p className="text-lg text-muted-foreground">Discover, collect, and trade unique digital assets</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search NFTs, collections, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="recent">Recently Listed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="all">All NFTs</TabsTrigger>
              <TabsTrigger value="art">Art</TabsTrigger>
              <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
              <TabsTrigger value="music">Music</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredNfts.map((nft) => (
                  <Card
                    key={nft.id}
                    className="overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-lg cursor-pointer group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {nft.trending && (
                        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-600 border-0">
                          <Flame className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">{nft.collection}</p>
                        <h3 className="font-bold text-lg line-clamp-1">{nft.name}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-bold text-lg">{nft.price} SOL</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-xs text-muted-foreground">Creator</p>
                          <p className="text-sm font-medium">{nft.creator}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                        Buy Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/20">
            <CardContent className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Start Your Collection Today</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of collectors and creators in the fastest-growing NFT marketplace on Solana
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  onClick={() => (window.location.href = "/mint")}
                >
                  Create NFT
                </Button>
                <Button variant="outline" className="bg-transparent">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

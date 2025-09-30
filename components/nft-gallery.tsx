"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Grid3x3, List } from "lucide-react"
import { useState } from "react"

const nfts = [
  {
    id: 1,
    name: "Degen Ape #4521",
    collection: "Degenerate Ape Academy",
    image: "/cool-ape-nft-digital-art.jpg",
    floorPrice: "45.2 SOL",
    value: "$5,424.00",
    rarity: "Rare",
  },
  {
    id: 2,
    name: "Okay Bear #2891",
    collection: "Okay Bears",
    image: "/cute-bear-nft-pastel.jpg",
    floorPrice: "38.5 SOL",
    value: "$4,620.00",
    rarity: "Common",
  },
  {
    id: 3,
    name: "SMB #1234",
    collection: "Solana Monkey Business",
    image: "/monkey-nft-colorful.jpg",
    floorPrice: "52.8 SOL",
    value: "$6,336.00",
    rarity: "Epic",
  },
  {
    id: 4,
    name: "Mad Lad #7890",
    collection: "Mad Lads",
    image: "/cool-character-nft-3d.jpg",
    floorPrice: "89.3 SOL",
    value: "$10,716.00",
    rarity: "Legendary",
  },
  {
    id: 5,
    name: "Claynosaurz #3456",
    collection: "Claynosaurz",
    image: "/clay-dinosaur-nft-cute.jpg",
    floorPrice: "42.1 SOL",
    value: "$5,052.00",
    rarity: "Rare",
  },
  {
    id: 6,
    name: "Tensor #9876",
    collection: "Tensorians",
    image: "/futuristic-robot-nft.jpg",
    floorPrice: "28.7 SOL",
    value: "$3,444.00",
    rarity: "Common",
  },
]

const rarityColors = {
  Common: "bg-muted text-muted-foreground",
  Rare: "bg-primary/10 text-primary",
  Epic: "bg-purple-500/10 text-purple-500",
  Legendary: "bg-amber-500/10 text-amber-500",
}

export function NFTGallery() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>NFT Collection</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{nfts.length} NFTs • Total Value: $35,592.00</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nfts.map((nft) => (
                <div
                  key={nft.id}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold leading-tight">{nft.name}</h3>
                        <Badge className={rarityColors[nft.rarity as keyof typeof rarityColors]} variant="secondary">
                          {nft.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{nft.collection}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Floor Price</p>
                        <p className="text-sm font-medium">{nft.floorPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Value</p>
                        <p className="text-sm font-medium">{nft.value}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {nfts.map((nft) => (
                <div
                  key={nft.id}
                  className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="h-16 w-16 overflow-hidden rounded-lg bg-muted flex-shrink-0">
                    <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{nft.name}</h3>
                      <Badge className={rarityColors[nft.rarity as keyof typeof rarityColors]} variant="secondary">
                        {nft.rarity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{nft.collection}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-xs text-muted-foreground">Floor Price</p>
                      <p className="text-sm font-medium">{nft.floorPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Value</p>
                      <p className="text-sm font-medium">{nft.value}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

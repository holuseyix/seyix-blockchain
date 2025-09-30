"use client"

import type React from "react"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload, CheckCircle2, Sparkles } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"

export default function MintPage() {
  const [isMinting, setIsMinting] = useState(false)
  const [isMinted, setIsMinted] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const { walletAddress } = useWallet()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsMinting(true)
    // Simulate minting process
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsMinting(false)
    setIsMinted(true)
  }

  if (isMinted) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="container px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl">NFT Minted Successfully!</CardTitle>
                <CardDescription className="text-base">
                  Your NFT has been minted on the Solana blockchain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {imagePreview && (
                  <div className="mx-auto w-64 h-64 rounded-lg overflow-hidden border-2 border-border">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Minted NFT"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction:</span>
                    <span className="font-mono">
                      {Math.random().toString(36).substring(2, 15)}...
                      {Math.random().toString(36).substring(2, 6)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mint Address:</span>
                    <span className="font-mono">
                      {Math.random().toString(36).substring(2, 15)}...
                      {Math.random().toString(36).substring(2, 6)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1" onClick={() => setIsMinted(false)}>
                    Mint Another
                  </Button>
                  <Button
                    className="flex-1 bg-transparent"
                    variant="outline"
                    onClick={() => (window.location.href = "/marketplace")}
                  >
                    View in Marketplace
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container px-4 py-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Mint Your NFT</h1>
            <p className="text-lg text-muted-foreground">Create unique digital collectibles on Solana blockchain</p>
          </div>

          {!walletAddress && (
            <Card className="border-orange-500/50 bg-orange-500/10">
              <CardContent className="pt-6">
                <p className="text-center text-sm">
                  Please connect your wallet to mint NFTs. Click the "Connect Wallet" button in the header.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>NFT Details</CardTitle>
                <CardDescription>Provide information about your NFT</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMint} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nft-name">NFT Name</Label>
                    <Input id="nft-name" placeholder="My Awesome NFT" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your NFT and what makes it special"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collection">Collection</Label>
                    <Select>
                      <SelectTrigger id="collection">
                        <SelectValue placeholder="Select or create collection" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Create New Collection</SelectItem>
                        <SelectItem value="art">Digital Art Collection</SelectItem>
                        <SelectItem value="music">Music NFTs</SelectItem>
                        <SelectItem value="gaming">Gaming Assets</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="supply">Supply</Label>
                      <Input id="supply" type="number" placeholder="1" defaultValue="1" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="royalty">Royalty (%)</Label>
                      <Input id="royalty" type="number" placeholder="5" defaultValue="5" max="50" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Image</Label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-border border-dashed rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                        {imagePreview ? (
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        )}
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} required />
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                    disabled={isMinting || !walletAddress}
                  >
                    {isMinting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Minting NFT...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Mint NFT
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>How your NFT will appear</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square rounded-lg border-2 border-border overflow-hidden bg-muted flex items-center justify-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="NFT Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <Upload className="h-12 w-12 mx-auto mb-2" />
                        <p>Upload an image to preview</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Minting Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network:</span>
                    <span className="font-semibold">Solana Mainnet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minting Fee:</span>
                    <span className="font-semibold">0.01 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage:</span>
                    <span className="font-semibold">IPFS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard:</span>
                    <span className="font-semibold">Metaplex</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

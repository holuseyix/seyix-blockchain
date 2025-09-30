"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppHeader } from "@/components/app-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Upload } from "lucide-react"

export default function NewProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate project creation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/projects")
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container px-4 py-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Launch Your Project</h1>
            <p className="text-lg text-muted-foreground">Fill in the details below to launch your blockchain project</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Provide information about your project to attract backers</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" placeholder="Enter your project name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="defi">DeFi</SelectItem>
                      <SelectItem value="nft">NFT</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="metaverse">Metaverse</SelectItem>
                      <SelectItem value="dao">DAO</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project, its goals, and what makes it unique"
                    rows={5}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="goal">Funding Goal (USD)</Label>
                    <Input id="goal" type="number" placeholder="500000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Campaign Duration (days)</Label>
                    <Input id="duration" type="number" placeholder="30" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input id="website" type="url" placeholder="https://yourproject.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whitepaper">Whitepaper URL</Label>
                  <Input id="whitepaper" type="url" placeholder="https://yourproject.com/whitepaper.pdf" />
                </div>

                <div className="space-y-2">
                  <Label>Project Image</Label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer hover:border-cyan-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload project image</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Launching...
                      </>
                    ) : (
                      "Launch Project"
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

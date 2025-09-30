"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Loader2, CheckCircle2 } from "lucide-react"

export default function VerifyEmailPage() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const { verifyEmail, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.emailVerified) {
      router.push("/dashboard")
    }
  }, [user, router])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const success = await verifyEmail(code)
      if (success) {
        setIsVerified(true)
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      }
    } catch (error) {
      console.error("Verification failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold">Email Verified!</CardTitle>
            <CardDescription>Redirecting you to dashboard...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
          <CardDescription>
            We've sent a 6-digit code to <span className="font-medium text-foreground">{user?.email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="text-center text-2xl tracking-widest"
                maxLength={6}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              disabled={isLoading || code.length !== 6}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>
          </form>
          <div className="text-center">
            <Button variant="link" className="text-sm text-muted-foreground">
              Didn't receive the code? Resend
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

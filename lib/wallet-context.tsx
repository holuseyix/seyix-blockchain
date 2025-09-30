"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./auth-context"

interface WalletContextType {
  walletAddress: string | null
  isConnecting: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  balance: number
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [balance, setBalance] = useState(0)
  const { user, connectWallet: updateUserWallet } = useAuth()

  useEffect(() => {
    // Check for existing wallet connection
    const storedWallet = localStorage.getItem("walletAddress")
    if (storedWallet && user) {
      setWalletAddress(storedWallet)
      // Simulate balance fetch
      setBalance(Math.random() * 100 + 10)
    }
  }, [user])

  const connectWallet = async () => {
    setIsConnecting(true)
    try {
      // Simulate wallet connection (in production, this would use @solana/wallet-adapter)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if Phantom or Solflare is available
      const hasPhantom = typeof window !== "undefined" && (window as any).solana?.isPhantom
      const hasSolflare = typeof window !== "undefined" && (window as any).solflare

      if (!hasPhantom && !hasSolflare) {
        // Simulate wallet address for demo
        const mockAddress = `${Math.random().toString(36).substring(2, 15)}...${Math.random().toString(36).substring(2, 6)}`
        setWalletAddress(mockAddress)
        localStorage.setItem("walletAddress", mockAddress)
        updateUserWallet(mockAddress)
        setBalance(Math.random() * 100 + 10)
        return
      }

      // In production, connect to actual wallet
      const provider = hasPhantom ? (window as any).solana : (window as any).solflare
      const response = await provider.connect()
      const address = response.publicKey.toString()

      setWalletAddress(address)
      localStorage.setItem("walletAddress", address)
      updateUserWallet(address)

      // Fetch actual balance
      const balanceResponse = await fetch(`/api/wallet/balance?address=${address}`)
      const balanceData = await balanceResponse.json()
      setBalance(balanceData.balance || 0)
    } catch (error) {
      console.error("[v0] Wallet connection failed:", error)
      // Still set mock wallet for demo purposes
      const mockAddress = `${Math.random().toString(36).substring(2, 15)}...${Math.random().toString(36).substring(2, 6)}`
      setWalletAddress(mockAddress)
      localStorage.setItem("walletAddress", mockAddress)
      updateUserWallet(mockAddress)
      setBalance(Math.random() * 100 + 10)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
    setBalance(0)
    localStorage.removeItem("walletAddress")
  }

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        isConnecting,
        connectWallet,
        disconnectWallet,
        balance,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

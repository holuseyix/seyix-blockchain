"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  walletAddress?: string
  emailVerified: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  loginWithGoogle: () => Promise<void>
  verifyEmail: (code: string) => Promise<boolean>
  connectWallet: (address: string) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split("@")[0],
      emailVerified: true,
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
  }

  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      emailVerified: false,
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    localStorage.setItem("pendingVerification", "true")
  }

  const loginWithGoogle = async () => {
    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: "user@gmail.com",
      name: "Google User",
      emailVerified: true,
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
  }

  const verifyEmail = async (code: string) => {
    // Simulate email verification
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (code.length === 6 && user) {
      const updatedUser = { ...user, emailVerified: true }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
      localStorage.removeItem("pendingVerification")
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("pendingVerification")
  }

  const connectWallet = (address: string) => {
    if (user) {
      const updatedUser = { ...user, walletAddress: address }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        loginWithGoogle,
        verifyEmail,
        connectWallet,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

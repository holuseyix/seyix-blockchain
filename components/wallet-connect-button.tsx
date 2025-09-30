"use client"

import { Button } from "@/components/ui/button"
import { Wallet, Loader2, Check } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function WalletConnectButton() {
  const { walletAddress, isConnecting, connectWallet, disconnectWallet, balance } = useWallet()

  if (walletAddress) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Wallet className="mr-2 h-4 w-4 text-green-500" />
            <span className="hidden sm:inline">
              {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
            </span>
            <span className="sm:hidden">Connected</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Wallet Connected</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="px-2 py-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Address:</span>
              <span className="font-mono">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Balance:</span>
              <span className="font-semibold">{balance.toFixed(2)} SOL</span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnectWallet} className="text-destructive">
            Disconnect Wallet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={connectWallet} disabled={isConnecting} className="bg-transparent">
      {isConnecting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </>
      )}
    </Button>
  )
}

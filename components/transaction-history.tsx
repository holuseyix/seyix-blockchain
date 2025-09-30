"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Repeat, ShoppingBag, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const transactions = [
  {
    id: 1,
    type: "send",
    description: "Sent SOL",
    amount: "-12.5 SOL",
    usdValue: "-$1,500.00",
    to: "7xKX...9mPq",
    timestamp: "2 hours ago",
    status: "confirmed",
    signature: "5Kn8...xY2p",
  },
  {
    id: 2,
    type: "receive",
    description: "Received USDC",
    amount: "+2,500 USDC",
    usdValue: "+$2,500.00",
    from: "9Bvt...4kLm",
    timestamp: "5 hours ago",
    status: "confirmed",
    signature: "3Qw9...mN4r",
  },
  {
    id: 3,
    type: "swap",
    description: "Swapped SOL for USDC",
    amount: "25 SOL → 3,000 USDC",
    usdValue: "$3,000.00",
    protocol: "Jupiter",
    timestamp: "1 day ago",
    status: "confirmed",
    signature: "8Yx2...pL9k",
  },
  {
    id: 4,
    type: "nft",
    description: "Purchased NFT",
    amount: "-45.2 SOL",
    usdValue: "-$5,424.00",
    nft: "Degen Ape #4521",
    timestamp: "2 days ago",
    status: "confirmed",
    signature: "2Mn7...qR5t",
  },
  {
    id: 5,
    type: "receive",
    description: "Staking Rewards",
    amount: "+0.58 SOL",
    usdValue: "+$69.60",
    from: "Marinade Finance",
    timestamp: "3 days ago",
    status: "confirmed",
    signature: "6Tp4...wS8v",
  },
  {
    id: 6,
    type: "send",
    description: "Sent USDC",
    amount: "-500 USDC",
    usdValue: "-$500.00",
    to: "4Hm9...7nQx",
    timestamp: "4 days ago",
    status: "confirmed",
    signature: "9Zr1...bK3m",
  },
  {
    id: 7,
    type: "swap",
    description: "Swapped USDC for RAY",
    amount: "1,000 USDC → 2,340 RAY",
    usdValue: "$1,000.00",
    protocol: "Raydium",
    timestamp: "5 days ago",
    status: "confirmed",
    signature: "1Lp6...dF2n",
  },
  {
    id: 8,
    type: "receive",
    description: "Received SOL",
    amount: "+8.3 SOL",
    usdValue: "+$996.00",
    from: "3Cv8...5tWp",
    timestamp: "6 days ago",
    status: "confirmed",
    signature: "4Jk9...hG7q",
  },
]

const typeConfig = {
  send: {
    icon: ArrowUpRight,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    label: "Send",
  },
  receive: {
    icon: ArrowDownLeft,
    color: "text-success",
    bgColor: "bg-success/10",
    label: "Receive",
  },
  swap: {
    icon: Repeat,
    color: "text-primary",
    bgColor: "bg-primary/10",
    label: "Swap",
  },
  nft: {
    icon: ShoppingBag,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    label: "NFT",
  },
}

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{transactions.length} transactions</p>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((tx) => {
            const config = typeConfig[tx.type as keyof typeof typeConfig]
            const Icon = config.icon

            return (
              <div
                key={tx.id}
                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("rounded-lg p-3", config.bgColor)}>
                    <Icon className={cn("h-5 w-5", config.color)} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{tx.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {config.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {tx.to && <span>To: {tx.to}</span>}
                      {tx.from && <span>From: {tx.from}</span>}
                      {tx.protocol && <span>Via {tx.protocol}</span>}
                      {tx.nft && <span>{tx.nft}</span>}
                      <span>•</span>
                      <span>{tx.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={cn("font-medium", tx.type === "send" ? "text-destructive" : "text-foreground")}>
                      {tx.amount}
                    </p>
                    <p className="text-sm text-muted-foreground">{tx.usdValue}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

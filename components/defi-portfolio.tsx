"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Droplet, Coins, Zap, ExternalLink } from "lucide-react"

const defiPositions = [
  {
    id: 1,
    protocol: "Raydium",
    type: "Liquidity Pool",
    pair: "SOL-USDC",
    deposited: "$8,450.50",
    apy: "24.5%",
    earned: "$156.80",
    icon: Droplet,
    color: "text-blue-500",
  },
  {
    id: 2,
    protocol: "Marinade Finance",
    type: "Staking",
    pair: "mSOL",
    deposited: "$12,340.00",
    apy: "6.8%",
    earned: "$89.20",
    icon: Coins,
    color: "text-green-500",
  },
  {
    id: 3,
    protocol: "Orca",
    type: "Liquidity Pool",
    pair: "ORCA-USDC",
    deposited: "$5,250.00",
    apy: "18.3%",
    earned: "$67.40",
    icon: Droplet,
    color: "text-cyan-500",
  },
  {
    id: 4,
    protocol: "Jupiter",
    type: "Yield Farming",
    pair: "JUP-SOL",
    deposited: "$2,300.00",
    apy: "42.1%",
    earned: "$124.30",
    icon: Zap,
    color: "text-purple-500",
  },
]

const stakingOverview = [
  {
    validator: "Marinade Finance",
    staked: "102.5 SOL",
    value: "$12,300.00",
    rewards: "0.58 SOL",
    apy: "6.8%",
  },
  {
    validator: "Jito",
    staked: "45.2 SOL",
    value: "$5,424.00",
    rewards: "0.32 SOL",
    apy: "7.2%",
  },
]

export function DeFiPortfolio() {
  const totalDeposited = 28340.5
  const totalEarned = 437.7
  const avgApy = 22.9

  return (
    <div className="space-y-6">
      {/* DeFi Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Deposited</p>
              <p className="text-3xl font-bold">${totalDeposited.toLocaleString()}</p>
              <p className="text-sm text-success font-medium">+15.7% from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Earned</p>
              <p className="text-3xl font-bold">${totalEarned.toLocaleString()}</p>
              <p className="text-sm text-success font-medium">+$89.20 this week</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Average APY</p>
              <p className="text-3xl font-bold">{avgApy}%</p>
              <p className="text-sm text-muted-foreground">Across all positions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Positions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Active DeFi Positions</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{defiPositions.length} active positions</p>
            </div>
            <Button variant="outline" size="sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {defiPositions.map((position) => {
              const Icon = position.icon
              return (
                <div
                  key={position.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-lg bg-muted p-3 ${position.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{position.protocol}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{position.pair}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-xs text-muted-foreground">Deposited</p>
                      <p className="text-sm font-medium">{position.deposited}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">APY</p>
                      <p className="text-sm font-medium text-success">{position.apy}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Earned</p>
                      <p className="text-sm font-medium">{position.earned}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Staking Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Staking Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {stakingOverview.map((stake, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{stake.validator}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stake.staked} • {stake.value}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-success">{stake.apy} APY</p>
                    <p className="text-sm text-muted-foreground">Rewards: {stake.rewards}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Staking Progress</span>
                    <span>Active</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Copy, ExternalLink } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const chartData = [
  { date: "Jan", value: 32000 },
  { date: "Feb", value: 35000 },
  { date: "Mar", value: 33500 },
  { date: "Apr", value: 38000 },
  { date: "May", value: 42000 },
  { date: "Jun", value: 45231 },
]

const tokens = [
  {
    symbol: "SOL",
    name: "Solana",
    balance: "156.42",
    value: "$18,770.40",
    change: "+4.2%",
    changeType: "positive" as const,
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "12,450.00",
    value: "$12,450.00",
    change: "0.0%",
    changeType: "neutral" as const,
  },
  {
    symbol: "RAY",
    name: "Raydium",
    balance: "2,340.50",
    value: "$8,450.50",
    change: "+12.5%",
    changeType: "positive" as const,
  },
  {
    symbol: "ORCA",
    name: "Orca",
    balance: "1,850.75",
    value: "$5,560.99",
    change: "-2.3%",
    changeType: "negative" as const,
  },
]

export function WalletOverview() {
  const walletAddress = "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK"
  const shortAddress = `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`

  return (
    <div className="space-y-6">
      {/* Portfolio Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Portfolio Value</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Last 6 months</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">$45,231.89</p>
              <p className="text-sm text-success font-medium">+$7,531.89 (20.1%)</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                            <span className="font-bold text-foreground">${payload[0].value?.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Wallet Address & Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Wallet Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/50" />
              </div>
              <div>
                <p className="text-sm font-medium">Demo Wallet</p>
                <p className="text-sm text-muted-foreground font-mono">{shortAddress}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Send
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <ArrowDownLeft className="mr-2 h-4 w-4" />
              Receive
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Token Holdings */}
      <Card>
        <CardHeader>
          <CardTitle>Token Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tokens.map((token) => (
              <div
                key={token.symbol}
                className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">{token.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm text-muted-foreground">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.balance}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{token.value}</p>
                    <span
                      className={`text-sm font-medium ${
                        token.changeType === "positive"
                          ? "text-success"
                          : token.changeType === "negative"
                            ? "text-destructive"
                            : "text-muted-foreground"
                      }`}
                    >
                      {token.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

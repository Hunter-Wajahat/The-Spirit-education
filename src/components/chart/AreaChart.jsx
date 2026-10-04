

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  //  ChartConfig,
} from "@/components/ui/chart"
import axios from 'axios'

export const description = "A linear area chart"

const chartConfig = {
  desktop: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
}

export function ChartAreaLinear() {
  const [theChartData, setTheChartData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    async function getChartData() {
      try {
        const url = `${import.meta.env.VITE_SERVER_URL}/api/visiting_stats`
        const response = await axios.get(url, {
          withCredentials: true,
        })
        const stats = response.data.preSixMonthStats

        if (!Array.isArray(stats)) {
          throw new Error("Expected preSixMonthStats to be an array.")
        }

        setTheChartData(
          stats.map((stat) => ({
            month: new Date(stat.date).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            }),
            desktop: stat.vsitorCount,
          })),
        )
      } catch (requestError) {
        console.error("Failed to load visitor statistics:", requestError)
        setError("Failed to load visitor statistics.")
      }
    }
    getChartData()
  }, [])
  return (
    <Card className=" " style={{ padding: 10, marging: 10 }}>
      <CardHeader>
        <CardTitle>Area Chart - Linear</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <p role="alert">{error}</p>}
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={theChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {theChartData.length > 0
                ? `${theChartData[0].month} - ${theChartData[theChartData.length - 1].month}`
                : "Loading visitor statistics..."}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ChartAreaLinear;
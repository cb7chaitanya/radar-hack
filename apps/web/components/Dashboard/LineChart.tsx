"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useWallet } from "@solana/wallet-adapter-react"

export const description = "A line chart with a label"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineChartWithLabel() {
    const { publicKey } = useWallet()
    const tokenCountData = [
        {
          id: 1,
          userId: "user1",
          inputToken: 10,
          outputToken: 5,
          timestamp: "2023-02-20T14:30:00.000Z"
        },
        {
          id: 2,
          userId: "user1",
          inputToken: 15,
          outputToken: 10,
          timestamp: "2023-02-20T15:00:00.000Z"
        },
        {
          id: 3,
          userId: "user1",
          inputToken: 20,
          outputToken: 15,
          timestamp: "2023-02-20T15:30:00.000Z"
        },
        {
          id: 4,
          userId: "user2",
          inputToken: 5,
          outputToken: 0,
          timestamp: "2023-02-20T14:30:00.000Z"
        },
        {
          id: 5,
          userId: "user2",
          inputToken: 10,
          outputToken: 5,
          timestamp: "2023-02-20T15:00:00.000Z"
        },
        {
          id: 6,
          userId: "user2",
          inputToken: 15,
          outputToken: 10,
          timestamp: "2023-02-20T15:30:00.000Z"
        }
    ];
    const transformedData = tokenCountData.map((data) => {
      const date = new Date(data.timestamp);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    
      return {
        timestamp: formattedDate,
        totalToken: data.inputToken + data.outputToken,
      };
    });
    
    console.log(transformedData);
  return (
    <div className="w-3/4">
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Label</CardTitle>
        <CardDescription>Token Count Chart</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={transformedData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="totalToken"
              type="natural"
              stroke="#ffffff"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-xs md:text-lg">
          {publicKey?.toString()} 
        </div>
        <div className="leading-none text-muted-foreground">
          Showing Token Count for all the tokens that have been spent on prompting by the user 
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

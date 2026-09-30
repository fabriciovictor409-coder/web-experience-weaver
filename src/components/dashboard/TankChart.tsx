import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "18/09", caixa1: 72, caixa2: 42 },
  { day: "19/09", caixa1: 76, caixa2: 52 },
  { day: "20/09", caixa1: 76, caixa2: 53 },
  { day: "21/09", caixa1: 74, caixa2: 50 },
  { day: "22/09", caixa1: 77, caixa2: 53 },
  { day: "23/09", caixa1: 80, caixa2: 55 },
  { day: "24/09", caixa1: 78, caixa2: 54 },
];

export function TankChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="fillCaixa1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--water)" stopOpacity={0.45} />
              <stop offset="100%" stopColor="var(--water)" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="fillCaixa2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--leaf)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--leaf)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" strokeDasharray="3 6" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tickFormatter={(v: number) => `${v}%`}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: "var(--popover)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              fontSize: 12,
              color: "var(--popover-foreground)",
            }}
            formatter={(value: number, name: string) => [
              `${value}%`,
              name === "caixa1" ? "Caixa 1" : "Caixa 2",
            ]}
          />
          <Area
            type="monotone"
            dataKey="caixa1"
            stroke="var(--water)"
            strokeWidth={2}
            fill="url(#fillCaixa1)"
            dot={{ r: 3, fill: "var(--water)", strokeWidth: 0 }}
          />
          <Area
            type="monotone"
            dataKey="caixa2"
            stroke="var(--leaf)"
            strokeWidth={2}
            fill="url(#fillCaixa2)"
            dot={{ r: 3, fill: "var(--leaf)", strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

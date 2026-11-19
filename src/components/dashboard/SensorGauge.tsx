import { useEffect, useState } from "react";
import { StatusText, type Tone } from "./primitives";

type Zone = { until: number; className: string };

type SensorGaugeProps = {
  value: number;
  min: number;
  max: number;
  unit: string;
  zones: Zone[];
  /** amplitude da oscilação simulada do sensor */
  jitter?: number;
  format?: (value: number) => string;
  statusLabel: (value: number) => { label: string; tone: Tone };
};

const CX = 100;
const CY = 92;
const R = 78;

function polar(fraction: number) {
  const angle = Math.PI * (1 - fraction);
  return { x: CX + R * Math.cos(angle), y: CY - R * Math.sin(angle) };
}

function arcPath(from: number, to: number) {
  const start = polar(from);
  const end = polar(to);
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${R} ${R} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

export function SensorGauge({
  value,
  min,
  max,
  unit,
  zones,
  jitter = 0,
  format = (v) => v.toFixed(1).replace(".", ","),
  statusLabel,
}: SensorGaugeProps) {
  const [reading, setReading] = useState(value);

  useEffect(() => {
    if (jitter <= 0) return;
    const timer = setInterval(() => {
      setReading((current) => {
        const next = current + (Math.random() - 0.5) * 2 * jitter;
        return Math.min(max, Math.max(min, next));
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [jitter, min, max]);

  const fraction = Math.min(1, Math.max(0, (reading - min) / (max - min)));
  const needleLength = R - 16;
  const needleAngle = Math.PI * (1 - fraction);
  const needle = {
    x: CX + needleLength * Math.cos(needleAngle),
    y: CY - needleLength * Math.sin(needleAngle),
  };
  const status = statusLabel(reading);

  let zoneStart = min;
  const arcs = zones.map((zone) => {
    const from = (zoneStart - min) / (max - min);
    const to = (Math.min(zone.until, max) - min) / (max - min);
    zoneStart = zone.until;
    return { from, to, className: zone.className };
  });

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 108"
        className="w-full max-w-56"
        role="img"
        aria-label={`Leitura atual: ${format(reading)} ${unit}`}
      >
        {arcs.map((arc, index) => (
          <path
            key={index}
            d={arcPath(arc.from, Math.max(arc.to, arc.from + 0.004))}
            fill="none"
            strokeWidth="12"
            strokeLinecap="butt"
            className={arc.className}
          />
        ))}
        <line
          x1={CX}
          y1={CY}
          x2={needle.x.toFixed(2)}
          y2={needle.y.toFixed(2)}
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-foreground transition-all duration-700 ease-out"
        />
        <circle cx={CX} cy={CY} r="5" className="fill-foreground" />
      </svg>
      <p className="-mt-2 text-3xl font-bold tracking-tight tabular-nums">
        {format(reading)}
        <span className="ml-1 text-lg font-medium text-muted-foreground">{unit}</span>
      </p>
      <div className="mt-2">
        <StatusText tone={status.tone}>{status.label}</StatusText>
      </div>
    </div>
  );
}

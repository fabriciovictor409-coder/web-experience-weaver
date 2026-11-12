import {
  AlertCircle,
  Clock,
  CheckCircle2,
  ChevronRight,
  Droplet,
  Droplets,
  Sprout,
  CalendarDays,
  LineChart,
  Ticket,
  Bell,
  Activity,
  CloudRain,
  Filter,
  Waves,
  Wifi,
  Thermometer,
} from "lucide-react";
import { Panel, PanelHeader, Pill, StatusText, type Tone } from "./primitives";
import { TankChart } from "./TankChart";

/* ---------------- Stat cards ---------------- */

const stats = [
  {
    surface: "stat-critical",
    icon: AlertCircle,
    iconClass: "bg-destructive/20 text-destructive",
    label: "Problemas Críticos",
    value: "3",
    hint: "Requerem atenção imediata",
  },
  {
    surface: "stat-progress",
    icon: Clock,
    iconClass: "bg-warning/20 text-warning",
    label: "Chamados em Andamento",
    value: "8",
    hint: "Em processo de resolução",
  },
  {
    surface: "stat-resolved",
    icon: CheckCircle2,
    iconClass: "bg-success/20 text-success",
    label: "Problemas Resolvidos",
    value: "25",
    hint: "Últimos 30 dias",
  },
];

export function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((s) => (
        <button
          key={s.label}
          className={`${s.surface} group flex items-center gap-4 p-5 text-left transition-transform hover:-translate-y-0.5`}
        >
          <span className={`flex size-12 items-center justify-center rounded-full ${s.iconClass}`}>
            <s.icon className="size-6" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-medium text-foreground/85">{s.label}</span>
            <span className="block text-3xl font-bold tracking-tight">{s.value}</span>
            <span className="block text-xs text-muted-foreground">{s.hint}</span>
          </span>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
      ))}
    </div>
  );
}

/* ---------------- Water monitoring ---------------- */

const tanks = [
  {
    name: "Caixa 1",
    level: 78,
    capacity: "78.000 L",
    temp: "24,5",
    status: { label: "Normal", tone: "success" as Tone },
    bar: "bg-water",
  },
  {
    name: "Caixa 2",
    level: 54,
    capacity: "54.000 L",
    temp: "22,8",
    status: { label: "Atenção", tone: "warning" as Tone },
    bar: "bg-warning",
  },
];

const equipment = [
  { icon: Waves, name: "Bomba Submersa", state: "Ligada", tone: "success" as Tone },
  { icon: Waves, name: "Bomba Externa", state: "Ligada", tone: "success" as Tone },
  { icon: CloudRain, name: "Captação de Chuva", state: "Ativa", tone: "success" as Tone },
  { icon: Filter, name: "Filtro", state: "Funcionando", tone: "success" as Tone },
];

export function WaterPanel() {
  return (
    <Panel>
      <PanelHeader icon={<Droplet className="size-[18px]" />} title="Monitoramento das Caixas de Água" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.1fr]">
        {tanks.map((t) => (
          <div key={t.name} className="panel-inset p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-water/15 text-water">
                <Droplets className="size-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{t.name}</p>
                <p className="text-2xl font-bold tracking-tight">{t.level}%</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${t.bar}`} style={{ width: `${t.level}%` }} />
            </div>
            <div className="mt-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Temperatura da água</p>
                <p className="mt-1 flex items-center gap-1.5 text-lg font-bold tracking-tight">
                  <Thermometer className="size-4 text-warning" />
                  {t.temp}
                  <span className="text-sm font-medium text-muted-foreground">°C</span>
                </p>
              </div>
              <p className="text-xs text-muted-foreground">Capacidade: {t.capacity}</p>
            </div>
            <div className="mt-3">
              <Pill tone={t.status.tone}>{t.status.label}</Pill>
            </div>
          </div>
        ))}

        <ul className="flex flex-col justify-between gap-3">
          {equipment.map((e) => (
            <li key={e.name} className="flex items-center gap-3 border-b border-border pb-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <e.icon className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium">{e.name}</p>
                <StatusText tone={e.tone}>{e.state}</StatusText>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

/* ---------------- Irrigation ---------------- */

export function IrrigationPanel() {
  return (
    <Panel>
      <PanelHeader icon={<Sprout className="size-[18px]" />} title="Irrigação" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex size-36 items-center justify-center rounded-full border-[6px] border-primary/70 bg-primary/5">
            <div className="absolute inset-2 rounded-full border border-primary/20" />
            <Wifi className="size-10 text-primary" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Umidade do Solo</p>
          <p className="text-lg font-semibold text-primary">Adequada</p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="border-b border-border pb-3">
            <p className="text-xs text-muted-foreground">Status da Irrigação</p>
            <StatusText tone="success">Ativa</StatusText>
          </div>
          <div className="border-b border-border pb-3">
            <p className="text-xs text-muted-foreground">Bomba de Irrigação</p>
            <StatusText tone="success">Ligada</StatusText>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <CalendarDays className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground">Última Irrigação</p>
              <p className="text-sm font-medium">24/09/2025 - 11:45</p>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ---------------- Tank levels chart ---------------- */

export function TankLevelsPanel() {
  return (
    <Panel>
      <PanelHeader icon={<LineChart className="size-[18px]" />} title="Nível das Caixas Subterrâneas" />
      <TankChart />
      <div className="mt-3 flex items-center justify-center gap-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-water" /> Caixa 1
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-leaf" /> Caixa 2
        </span>
      </div>
    </Panel>
  );
}

/* ---------------- Tickets ---------------- */

const tickets = [
  {
    id: "#00482",
    category: "Elétrica",
    status: { label: "Em andamento", tone: "warning" as Tone },
    priority: { label: "Alta", tone: "destructive" as Tone },
    date: "24/09",
  },
  {
    id: "#00481",
    category: "Hidráulica",
    status: { label: "Aberto", tone: "destructive" as Tone },
    priority: { label: "Média", tone: "warning" as Tone },
    date: "24/09",
  },
  {
    id: "#00480",
    category: "Irrigação",
    status: { label: "Resolvido", tone: "success" as Tone },
    priority: { label: "Baixa", tone: "info" as Tone },
    date: "23/09",
  },
  {
    id: "#00479",
    category: "Estrutura",
    status: { label: "Em análise", tone: "info" as Tone },
    priority: { label: "Média", tone: "warning" as Tone },
    date: "22/09",
  },
  {
    id: "#00478",
    category: "Internet",
    status: { label: "Em manutenção", tone: "info" as Tone },
    priority: { label: "Alta", tone: "destructive" as Tone },
    date: "22/09",
  },
];

export function TicketsPanel() {
  return <ActivityPanel title="Histórico de Atividades Recentes" />;
}

export function SoilPanel() {
  return (
    <Panel>
      <PanelHeader icon={<Sprout className="size-[18px]" />} title="Monitoramento do Solo" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border-b border-border pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground"><Thermometer className="size-5 text-warning" />Temperatura do Solo</div>
          <p className="text-3xl font-bold">26<span className="ml-1 text-lg text-muted-foreground">°C</span></p>
          <div className="mt-3"><StatusText tone="success">Adequada</StatusText></div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground"><Droplet className="size-5 text-water" />Sensor de Umidade do Solo</div>
          <p className="text-3xl font-bold">62<span className="ml-1 text-lg text-muted-foreground">%</span></p>
          <div className="mt-3"><StatusText tone="success">Adequada</StatusText></div>
        </div>
      </div>
    </Panel>
  );
}

export function WaterQualityPanel() {
  return (
    <Panel>
      <PanelHeader icon={<Droplets className="size-5" />} title="Qualidade da Água" />
      <div>
        <div><p className="text-sm text-muted-foreground">pH da Água</p><p className="mt-2 text-3xl font-bold">6,8 <span className="text-lg text-muted-foreground">pH</span></p></div>
      </div>
    </Panel>
  );
}

/* ---------------- Alerts ---------------- */

const alerts = [
  { text: "Caixa 2 com nível baixo (54%)", time: "Há 2 horas", tone: "warning" as Tone },
  { text: "Umidade do solo abaixo do ideal", time: "Há 4 horas", tone: "success" as Tone },
  { text: "Manutenção de bomba externa", time: "Há 6 horas", tone: "warning" as Tone },
  { text: "Sensor de fumaça em alerta", time: "Há 8 horas", tone: "destructive" as Tone },
  { text: "Nova reclamação registrada #00482", time: "Há 10 horas", tone: "info" as Tone },
];

const toneBg: Record<Tone, string> = {
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  info: "bg-info",
  muted: "bg-muted-foreground",
};

export function AlertsPanel({ title = "Alertas Recentes" }: { title?: string }) {
  return (
    <Panel>
      <PanelHeader
        icon={<Bell className="size-[18px]" />}
        title={title}
      />
      <ul className="relative flex flex-col gap-4 pl-1">
        {alerts.map((a) => (
          <li key={a.text} className="flex items-start gap-3">
            <span className={`mt-1 size-2.5 shrink-0 rounded-full ${toneBg[a.tone]}`} />
            <div className="flex-1 leading-tight">
              <p className="text-sm font-medium">{a.text}</p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
            <ChevronRight className="mt-0.5 size-4 text-muted-foreground" />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/* ---------------- Activity ---------------- */

const activities = [
  {
    icon: Sprout,
    text: "Sensor de umidade do solo: valor adequado",
    time: "Há 15 minutos",
    tone: "info" as Tone,
  },
  {
    icon: Droplets,
    text: "Caixa 1 atingiu 78% da capacidade",
    time: "Há 32 minutos",
    tone: "info" as Tone,
  },
  { icon: Ticket, text: "Chamado #00482 criado (Elétrica)", time: "Há 1 hora", tone: "success" as Tone },
  {
    icon: Sprout,
    text: "Irrigação ativada (Setor Norte)",
    time: "Há 2 horas",
    tone: "success" as Tone,
  },
  { icon: Waves, text: "Bomba submersa ligada", time: "Há 3 horas", tone: "success" as Tone },
];

export function ActivityPanel({ title = "Histórico de Atividades Recentes" }: { title?: string }) {
  return (
    <Panel>
      <PanelHeader icon={<Activity className="size-[18px]" />} title={title} />
      <ul className="relative flex flex-col gap-4 border-l border-border pl-5">
        {activities.map((a) => (
          <li key={a.text} className="relative flex items-center gap-3">
            <span
              className={`absolute -left-[26px] size-2.5 rounded-full ring-4 ring-panel ${toneBg[a.tone]}`}
            />
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
              <a.icon className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-medium">{a.text}</p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

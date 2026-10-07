import { createContext, useContext, useState, type ReactNode } from "react";
import { Power, Sprout, Waves, Timer, Thermometer, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Panel, PanelHeader, StatusText } from "./primitives";

type FarmState = {
  irrigation: boolean;
  pump: boolean;
  duration: number;
  temperature: number;
  setIrrigation: (value: boolean) => void;
  setPump: (value: boolean) => void;
  saveSettings: (duration: number, temperature: number) => void;
};

const FarmContext = createContext<FarmState | null>(null);

export function FarmProvider({ children }: { children: ReactNode }) {
  const [irrigation, setIrrigation] = useState(false);
  const [pump, setPump] = useState(false);
  const [duration, setDuration] = useState(20);
  const [temperature, setTemperature] = useState(24);
  return <FarmContext.Provider value={{ irrigation, pump, duration, temperature, setIrrigation, setPump, saveSettings: (minutes, degrees) => { setDuration(minutes); setTemperature(degrees); } }}>{children}</FarmContext.Provider>;
}

function useFarm() {
  const state = useContext(FarmContext);
  if (!state) throw new Error("FarmProvider is required");
  return state;
}

export function IrrigationControls() {
  const farm = useFarm();
  return <div className="grid gap-4 md:grid-cols-2">
    <Panel>
      <PanelHeader icon={<Sprout className="size-5" />} title="Sistema de Irrigação" />
      <div className="mb-6 flex items-center justify-between gap-3">
        <StatusText tone={farm.irrigation ? "success" : "muted"}>{farm.irrigation ? "Ativo" : "Desativado"}</StatusText>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Timer className="size-4" />{farm.duration} min</span>
      </div>
      <Button className="w-full" variant={farm.irrigation ? "outline" : "default"} aria-pressed={farm.irrigation} onClick={() => farm.setIrrigation(!farm.irrigation)}><Power />{farm.irrigation ? "Desativar irrigação" : "Ativar irrigação"}</Button>
    </Panel>
    <Panel>
      <PanelHeader icon={<Waves className="size-5" />} title="Bomba de Irrigação" />
      <div className="mb-6"><StatusText tone={farm.pump ? "success" : "muted"}>{farm.pump ? "Ligada" : "Desligada"}</StatusText></div>
      <Button className="w-full" variant={farm.pump ? "outline" : "default"} aria-pressed={farm.pump} onClick={() => farm.setPump(!farm.pump)}><Power />{farm.pump ? "Desligar bomba" : "Ligar bomba"}</Button>
    </Panel>
  </div>;
}

export function FarmSettings() {
  const farm = useFarm();
  const [duration, setDuration] = useState(String(farm.duration));
  const [temperature, setTemperature] = useState(String(farm.temperature));
  const [saved, setSaved] = useState(false);
  return <form className="max-w-2xl" onSubmit={event => {
    event.preventDefault();
    const minutes = Number(duration);
    const degrees = Number(temperature);
    if (!Number.isFinite(minutes) || minutes < 1 || minutes > 1440 || !Number.isFinite(degrees) || degrees < 0 || degrees > 60) return;
    farm.saveSettings(minutes, degrees);
    setSaved(true);
  }}>
    <Panel>
      <PanelHeader icon={<Timer className="size-5" />} title="Parâmetros de Irrigação" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="duration" className="mb-2 flex items-center gap-2 text-sm font-medium"><Timer className="size-4 text-primary" />Duração da irrigação (min)</label><Input id="duration" type="number" min="1" max="1440" step="1" required value={duration} onChange={event => { setDuration(event.target.value); setSaved(false); }} /></div>
        <div><label htmlFor="temperature" className="mb-2 flex items-center gap-2 text-sm font-medium"><Thermometer className="size-4 text-water" />Temperatura adequada da água (°C)</label><Input id="temperature" type="number" min="0" max="60" step="0.1" required value={temperature} onChange={event => { setTemperature(event.target.value); setSaved(false); }} /></div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4"><Button type="submit"><Save />Salvar configurações</Button>{saved && <p role="status" className="text-sm text-success">Configurações aplicadas nesta sessão.</p>}</div>
    </Panel>
  </form>;
}
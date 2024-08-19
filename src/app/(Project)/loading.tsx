import { RefreshCw } from "lucide-react";

export default function projectLoading() {
  return (
    <div className="flex flex-row gap-1 items-center justify-center animate-pulse">
      <RefreshCw className="animate-spin-slow" />
      <h2 className="">Carregando Notas</h2>
    </div>
  );
}

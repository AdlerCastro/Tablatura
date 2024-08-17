import Notes from "@/components/molecules/Notes";
import Tab from "@/components/organisms/Tab";

export default function Home() {
  return (
    <div className="flex flex-row justify-between gap-2 px-2 py-4 h-main">
      <div className="flex flex-col gap-3 p-4 min-w-60 transition-all duration-300 items-center bg-zinc-800 border-t border-solid border-zinc-500 rounded-lg overflow-auto scrollbar scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full scrollbar-w-2">
        <h2 className="text-lg">Notas disponíveis</h2>
        <Notes />
      </div>
      <Tab />
    </div>
  );
}

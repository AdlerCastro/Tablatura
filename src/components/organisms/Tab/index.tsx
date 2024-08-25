import ShowNotesOnTab from "../ShowNotesOnTab";

export default function Tab() {
  return (
    <div className="flex flex-col h-full gap-10 p-4 w-full bg-zinc-800 rounded-lg border border-solid border-b-0 border-zinc-700 items-center overflow-auto">
      <h2>Tablatura</h2>
      <ShowNotesOnTab />
    </div>
  );
}

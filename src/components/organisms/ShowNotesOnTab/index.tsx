import { useTab } from "@/context/tab-provider";
import { NoteFormData } from "@/data/types/NoteFormData";

interface TablaturaProps {
  note: NoteFormData;
}

export default function ShowNotesOnTab() {
  const { notes } = useTab();

  function Tablatura({ note }: TablaturaProps) {
    const { title, tablature: tab } = note;

    return (
      <div className="flex flex-col gap-y-3 items-center">
        <h2 className="text-xl p-2 bg-orange-600/100 font-bold font-poppins rounded-md">
          {title}
        </h2>
        <span>---{tab.e == 0 ? "----" : `${tab.e}---`}---</span>
        <span>---{tab.B == 0 ? "----" : `${tab.B}---`}---</span>
        <span>---{tab.G == 0 ? "----" : `${tab.G}---`}---</span>
        <span>---{tab.D == 0 ? "----" : `${tab.D}---`}---</span>
        <span>---{tab.A == 0 ? "----" : `${tab.A}---`}---</span>
        <span>---{tab.E == 0 ? "----" : `${tab.E}---`}---</span>
      </div>
    );
  }

  return (
    // max-w-[1440px] === Impedir que a barra lateral das notas quebre
    <div className="w-full max-w-[1340px] h-full flex flex-row justify-center overflow-auto">
      {notes.map((note, index) => (
        <Tablatura key={index + 1} note={note.note} />
      ))}
    </div>
  );
}

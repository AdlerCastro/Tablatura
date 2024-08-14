import Fret from "@/components/atoms/Fret";
import Frets from "@/components/molecules/Frets";

export default function Neck() {
  return (
    <div className="group grid grid-rows-6 grid-cols-Frets justify-center bg-zinc-800 rounded-md py-5 px-2 items-center gap-2">
      <Frets id={"F1FirstFret"} />
      <Fret />

      <Frets id={"F2FirstFret"} />
      <Fret />

      <Frets id={"F3FirstFret"} />
      <Fret />

      <Frets id={"F3FirstFret"} />
      <Fret />

      <Frets id={"F3FirstFret"} />
      <Fret />
    </div>
  );
}

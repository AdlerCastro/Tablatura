import Frets from "@/components/molecules/Frets";
import Fret from "@/components/atoms/Fret";

export default function Neck() {
  return (
    <div className="grid grid-cols-Neck justify-center bg-zinc-800 rounded-md py-5 pr-4 items-center">
      <Frets />
      <Fret />
      <Frets />
      <Fret />
      <Frets />
      <Fret />
    </div>
  );
}

import Image from "next/image";
import {
  Shuffle,
  SkipBack,
  CirclePlay,
  SkipForward,
  Repeat,
  AudioLines,
} from "lucide-react";

export default function Header() {
  return (
    <div className="bg-zinc-950 w-full h-40 flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        {/* Time music */}
        <div className="my-1 w-96 flex flex-row relative items-center justify-center">
          <span className="border-t-4 w-full border-zinc-600 rounded-full" />
          <div className="w-full absolute left-0 h-1 flex flex-row items-center">
            <p className="w-20 h-full bg-zinc-50 rounded-l-full" />
            <span className="w-1 h-1 p-1 -ml-1 border border-zinc-50 bg-zinc-50 rounded-full" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Shuffle size={26} />
          <SkipBack size={26} />
          <CirclePlay size={26} />
          <SkipForward size={26} />
          <Repeat size={26} />
        </div>
        <div className="flex items-center justify-center">
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
          <AudioLines size={50} />
        </div>
      </div>
    </div>
  );
}

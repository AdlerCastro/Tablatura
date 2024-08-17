import React from "react";
import Neck from "../Neck";

export default function Tab() {
  return (
    <div className="flex flex-col gap-2 p-4 w-full bg-zinc-800 rounded-lg border border-solid border-b-0 border-zinc-700 items-center">
      <h2>Tablatura</h2>
      <Neck />
    </div>
  );
}

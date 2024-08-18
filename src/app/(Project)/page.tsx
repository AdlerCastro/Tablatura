"use client";

import Notes from "@/components/molecules/Notes";
import Tab from "@/components/organisms/Tab";
import Empty from "@/components/templates/Empty";
import { useState } from "react";

export default function Home() {
  const [buttonState, setButtonState] = useState(false);

  const handleClickButton = () => {
    setButtonState(!buttonState);
  };

  return (
    <div className="flex flex-row justify-between gap-2 px-2 py-4 h-main">
      <div
        className={`flex flex-row gap-3 p-4 min-w-64 ${
          buttonState ? "w-[800px]" : "w-64"
        } bg-zinc-800 border-t border-solid border-zinc-500 rounded-lg transition-all duration-300`}
      >
        <div className="flex flex-col gap-3 px-4 min-w-60 transition-all items-center overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full scrollbar-w-2">
          <h2 className="text-lg">Notas disponíveis</h2>
          <Notes onClickChange={handleClickButton} />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            buttonState ? "w-full block" : "w-0"
          }`}
        >
          <Empty />
        </div>
      </div>

      <Tab />
    </div>
  );
}

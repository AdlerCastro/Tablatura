"use client";

import { NoteFormData } from "@/data/types/NoteFormData";
import { createContext, ReactNode, useContext, useState } from "react";

interface TabNote {
  note: NoteFormData;
}

interface TabContextType {
  notes: TabNote[];
  addToTab: (note: NoteFormData) => void;
}

const TabContext = createContext({} as TabContextType);

export default function TabProvider({ children }: { children: ReactNode }) {
  const [tabNotes, setTabNotes] = useState<TabNote[]>([]);

  function addToTab(note: NoteFormData) {
    setTabNotes((prevNotes) => [...prevNotes, { note }]);
  }

  return (
    <TabContext.Provider value={{ notes: tabNotes, addToTab }}>
      {children}
    </TabContext.Provider>
  );
}

export const useTab = () => useContext(TabContext);

"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface TabNote {
  noteId: number;
}

interface TabContextType {
  notes: TabNote[];
  addToTab: (noteId: number) => void;
}

const TabContext = createContext({} as TabContextType);

export default function TabProvider({ children }: { children: ReactNode }) {
  const [tabNotes, setTabNotes] = useState<TabNote[]>([]);

  function addToTab(noteId: number) {
    setTabNotes((state) => {
      const noteInTab = state.some((note) => note.noteId === noteId);

      if (noteInTab) {
        return state.map((item) => {
          return item;
        });
      } else {
        return [...state, { noteId, quantity: 1 }];
      }
    });
  }

  return (
    <TabContext.Provider value={{ notes: tabNotes, addToTab }}>
      {children}
    </TabContext.Provider>
  );
}

export const useTab = () => useContext(TabContext);

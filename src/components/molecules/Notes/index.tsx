"use client";

import Button from "@/components/atoms/Button";

interface NotesProps {
  onClickChange: () => void;
}

export default function Notes({ onClickChange }: NotesProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        C
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        D
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        E
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        F
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        G
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        A
      </Button>
      <Button className="w-full hover:scale-105" onClick={onClickChange}>
        B
      </Button>
    </div>
  );
}

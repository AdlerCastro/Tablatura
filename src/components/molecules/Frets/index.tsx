interface FretProps {
  id: string;
}

export default function Frets({ id }: FretProps) {
  return (
    <div className="grid grid-rows-6 grid-cols-1 w-full h-full text-center gap-y-5">
      <input type="checkbox" name={id} id={id} />
      <label
        htmlFor={id}
        className="border border-solid bg-zinc-500 rounded-full h-3 group-checked:bg-zinc-50"
      ></label>
    </div>
  );
}

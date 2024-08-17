import Button from "@/components/atoms/Button";

export default function Notes() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Button className="w-full hover:scale-110">C</Button>
      <Button className="w-full hover:scale-110">D</Button>
      <Button className="w-full hover:scale-110">E</Button>
      <Button className="w-full hover:scale-110">F</Button>
      <Button className="w-full hover:scale-110">G</Button>
      <Button className="w-full hover:scale-110">A</Button>
      <Button className="w-full hover:scale-110">B</Button>
      <Button className="w-full hover:scale-110">C</Button>
    </div>
  );
}

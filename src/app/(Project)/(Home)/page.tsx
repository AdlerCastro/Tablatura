import Tab from "@/components/templates/Tab";

export default function Home() {
  //792px It's height is a tag body without tag head of layout

  return (
    <div className="h-full flex flex-col items-center py-4 px-2 gap-6">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-5xl font-poppins">Welcome to GuitarTabs Hub.</h1>
        <p className="text-sm text-zinc-300 font-poppins">
          Discover, Learn, and Play Your Favorite Songs.
        </p>
      </div>

      <Tab />
    </div>
  );
}

import Header from "@/components/organisms/Header";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-screen h-screen">
      <Header />
      {children}
    </main>
  );
}

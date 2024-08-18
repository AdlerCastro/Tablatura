import Header from "@/components/organisms/Header";
import TabProvider from "@/context/tab-provider";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TabProvider>
      <main className="mx-auto w-screen h-screen">
        <Header />
        {children}
      </main>
    </TabProvider>
  );
}

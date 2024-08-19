import Header from "@/components/organisms/Header";
import ReactQueryProvider from "@/context/ReactQuery-provider";
import TabProvider from "@/context/tab-provider";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <TabProvider>
        <main className="relative mx-auto w-screen h-screen">
          <Header />
          {children}
        </main>
      </TabProvider>
    </ReactQueryProvider>
  );
}

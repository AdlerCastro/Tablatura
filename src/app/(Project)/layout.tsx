import Header from "@/components/organisms/Header";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden w-full max-w-[2560px] h-screen mx-auto">
      <Header />
      {children}
    </div>
  );
}

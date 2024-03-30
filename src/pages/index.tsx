import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Contributors from "@/components/Contributors/Contributors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-4 items-center ${inter.className}`}
    >
      <Header title="List of Angular Github Contributors" />
      <Contributors />
    </main>
  );
}

import Image from "next/image";
import Hero from "@/components/Hero";
import SobreMi from "@/components/Sobre-mi";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
      <main className="flex flex-col  row-start-2 items-center px-4">
        
        <section className="flex flex-col items-center justify-center w-full ">
          <div className="w-full  flex justify-center items-center">
            <HeroImage />
          </div>
          <div className="w-full">
            <Hero />
          </div>
        </section>
        <SobreMi />
      </main>
  );
}

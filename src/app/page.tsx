import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Nav from "@/components/Nav";
// import Setup from "@/components/Setup";
import Versions from "@/components/Versions";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Latest/>
      {/* <Setup/> */}
      <Versions/>
    </div>
  );
}

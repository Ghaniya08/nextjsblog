import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
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

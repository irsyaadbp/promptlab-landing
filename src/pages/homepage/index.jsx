import GradientWrapper from "@/components/layouts/gradient-wrapper";
import Hero from "@/pages/homepage/section/Hero";
import GettingStarted from "@/pages/homepage/section/GettingStarted";
import Feature from "@/pages/homepage/section/Feature";
import Tools from "@/pages/homepage/section/Tools";
import Contact from "@/pages/homepage/section/Contact";

export default function Homepage() {
  return (
    <>
      <Hero />
      <div className="relative mt-[220px]">
        <GradientWrapper className="sticky inset-0" />
        <div className="relative">
          <GettingStarted />
          <Feature />
          <Tools />
          <Contact />
        </div>
      </div>
    </>
  );
}

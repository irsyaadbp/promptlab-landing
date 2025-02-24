import GradientWrapper from "@/components/layouts/gradient-wrapper";
import Hero from "@/pages/homepage/section/Hero";
import GettingStarted from "@/pages/homepage/section/GettingStarted";
import Feature from "@/pages/homepage/section/Feature";
import Tools from "@/pages/homepage/section/Tools";

export default function Homepage() {
  return (
    <>
      <Hero />
      <GradientWrapper className="mt-[220px] sticky">
        <GettingStarted />
        <Feature />
        <Tools />
      </GradientWrapper>
    </>
  );
}

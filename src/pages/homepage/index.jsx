import GradientWrapper from "@/components/layouts/gradient-wrapper";
import Hero from "@/pages/homepage/components/section/Hero";
import GettingStarted from "@/pages/homepage/components/section/GettingStarted";

export default function Homepage() {
  return (
    <>
      <Hero />
      <GradientWrapper className="mt-[220px]">
        <GettingStarted />
      </GradientWrapper>
    </>
  );
}

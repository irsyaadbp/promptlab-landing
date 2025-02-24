// import Particle from "@/assets/particles-texture.png";
import GradientLeft from "@/assets/circle-gradient-left.svg";
import GradientRight from "@/assets/circle-gradient-right.svg";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/magicui/particles";

export default function GradientWrapper({ children, className = "" }) {
  return (
    <div className={cn("relative", className)}>
      <img
        src={GradientLeft}
        className="absolute top-0 left-0"
        draggable={false}
      />
      <img
        src={GradientRight}
        className="absolute top-0 right-0"
        draggable={false}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      {children}
    </div>
  );
}

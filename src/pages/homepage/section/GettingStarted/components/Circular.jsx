import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[380px] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={80}>
        {icons.map((icon) => (
          <img key={icon.src} src={icon.src}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} />
    </div>
  );
}

const icons = [
  {
    src: "/openai.png",
  },
  {
    src: "/gemini.png",
  },
  {
    src: "/nike.png",
  },
  {
    src: "/claude.png",
  },
];

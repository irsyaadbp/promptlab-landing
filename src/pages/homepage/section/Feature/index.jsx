import Caption from "@/components/ui/caption";
import { Card } from "@/components/ui/card";
import Title from "@/components/ui/title";

export default function Feature() {
  return (
    <section className="py-12 relative">
      <div className="container px-4">
        <Card
          style={{
            background: "linear-gradient(180deg, #101D1E 0%, #173038 100%)",
          }}
          className="border-[#353535]"
        >
          <div className="py-16 px-12">
            <Title as="h4" className="text-2xl lg:text-[56px] text-center">
              Build Full-Stack Apps in Seconds
            </Title>
            <Caption className="md:text-base text-[#6D747E] text-center mt-4">
              PromptLab integrates with the best AI models, giving you the
              freedom to choose the right tool for the job.
            </Caption>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 mt-28">
              {features.map((feat, index) => (
                <div key={`${feat.title}-${index}`} className="flex gap-10">
                  <img src={feat.src} className="w-[132px]" />
                  <div className="flex flex-col gap-4">
                    <p className="text-lg">{feat.title}</p>
                    <p className="text-[#6D747E] text-lg">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Instant AI Coding",
    description: "Describe what you need, and AI writes the code for you.",
    src: "/feature-ai.png",
  },
  {
    title: "No Setup Required",
    description: "Run frontend, backend, and APIs directly in your browser.",
    src: "/feature-no-setup.png",
  },
  {
    title: "AI-Powered Debugging",
    description: "Get instant suggestions to fix and improve your code.",
    src: "/feature-debugging.png",
  },
  {
    title: "Live Collaboration",
    description: "Share projects and build together in real time.",
    src: "/feature-live-collaboration.png",
  },
];

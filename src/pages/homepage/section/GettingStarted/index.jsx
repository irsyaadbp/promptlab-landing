import IconGithub from "@/components/icon/github";
import { Button } from "@/components/ui/button";
import Caption from "@/components/ui/caption";
import { Card } from "@/components/ui/card";
import Title from "@/components/ui/title";
import { OrbitingCirclesDemo } from "./components/Circular";
import CardGettingStartedItem from "./components/Card";
import { ArrowRight } from "lucide-react";
import CopyScript from "@/components/ui/copy-script";

export default function GettingStarted() {
  return (
    <section className="py-12 relative">
      <div className="container px-0 md:px-4">
        <Title className="text-center">Start Building with AI Now!</Title>
        <Caption className="text-center mt-4">
          Type your prompt. Watch your code come to life.
        </Caption>
        <div className="flex justify-center mt-10">
          <CopyScript script={"npm install promptlab"} className="w-[490px]"/>
        </div>
        <div className="mt-8">
          <div className="flex justify-center gap-3">
            <Button>Start Free</Button>
            <Button variant="outline" className="px-8">
              <IconGithub />
              2,092
            </Button>
          </div>
        </div>
        <Card className="mt-20">
          <div className="py-16 px-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-4 justify-center items-start">
                <Title as="h4" className="text-2xl lg:text-[56px]">
                  AI That Works the Way You Do
                </Title>
                <Caption className="md:text-base">
                  PromptLab integrates with the best AI models, giving you the
                  freedom to choose the right tool for the job.
                </Caption>
                <Button className="mt-12">Try It Now</Button>
              </div>
              <div className="flex justify-center">
                <OrbitingCirclesDemo />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
              <CardGettingStartedItem>
                <div className="flex gap-6 items-center">
                  <img src="/frame-2147226728.png" className="object-cover" />
                  <div className="flex flex-col gap-4 items-start">
                    <Title as="h5" className="md:text-lg font-normal">
                      ChatGPT for code generation?
                    </Title>
                    <Caption className="md:text-base">
                      The go-to AI for code generation, debugging, and
                      explanations.
                    </Caption>
                    <Button variant="outline" size="sm">
                      Try OpenAI <ArrowRight />
                    </Button>
                  </div>
                </div>
              </CardGettingStartedItem>
              <CardGettingStartedItem>
                <div className="flex gap-6 items-center">
                  <img src="/frame-2147226729.png" className="object-cover" />
                  <div className="flex flex-col gap-4 items-start">
                    <Title as="h5" className="md:text-lg font-normal">
                      Gemini for deep reasoning?
                    </Title>
                    <Caption className="md:text-base">
                      Best for deep reasoning, structured coding, and
                      research-heavy tasks.
                    </Caption>
                    <Button variant="outline" size="sm">
                      Try Gemini <ArrowRight />
                    </Button>
                  </div>
                </div>
              </CardGettingStartedItem>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

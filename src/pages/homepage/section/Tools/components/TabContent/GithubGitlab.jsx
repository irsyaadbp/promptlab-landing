import Caption from "@/components/ui/caption";
import { Card } from "@/components/ui/card";
import Title from "@/components/ui/title";

export default function GithubGitlab() {
  return (
    <Card
      style={{
        background:
          "background: linear-gradient(180deg, #10131E 0%, #0E1525 100%), linear-gradient(180deg, #10181E 0%, #0E1F25 100%)",
        border: "1px solid #353535",
      }}
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-4 px-16">
          <Title as="h4" className="text-2xl lg:text-[56px]">
            GitHub & GitLab
          </Title>
          <Caption className="md:text-base text-[#6D747E] mt-4">
            Push, pull, and manage your repositories with built-in GitHub and
            GitLab integration. Track changes, collaborate with teams, and
            commit updates directly from PromptLab—no extra setup required.
          </Caption>
        </div>
        <img src="/github-gitlab.png"/>
      </div>
    </Card>
  );
}

import Caption from "@/components/ui/caption";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Title from "@/components/ui/title";
import GithubGitlab from "./components/TabContent/GithubGitlab";

export default function Tools() {
  return (
    <section className="pt-40 pb-20 relative">
      <div className="container px-4">
        <Title className="text-center">Connect with Your Favorite Tools</Title>
        <Caption className="text-center mt-4">
          Type your prompt. Watch your code come to life.
        </Caption>
        <Tabs defaultValue="account" className="mt-14">
          <div className="flex justify-center">
            <TabsList className="gap-8">
              {tabList.map((tab) => (
                <TabsTrigger
                  key={tab.key}
                  value={tab.key}
                  className="py-3 px-6"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="mt-8">
            {tabList.map((tab) => (
              <TabsContent key={tab.key} value={tab.key}>
                {tab.component}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

const tabList = [
  {
    title: "Gihub & Gitlab",
    key: "github_gitlab",
    component: <GithubGitlab />,
  },
  {
    title: "VS Code",
    key: "vs_code",
    component: <GithubGitlab />,
  },
  {
    title: "API & Database",
    key: "api_database",
    component: <GithubGitlab />,
  },
  {
    title: "Cloud & Local Hosting",
    key: "cloud_local_hosting",
    component: <GithubGitlab />,
  },
];

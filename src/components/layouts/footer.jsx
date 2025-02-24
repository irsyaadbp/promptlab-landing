import application from "@/constants/application";
import { Button } from "@/components/ui/button";
import IconArrow from "@/components/icon/arrow";

export default function Footer() {
  const thisYear = new Date().getFullYear();

  function gotoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="relative">
      <div className="container px-4">
        <h1 className="gradient-text font-medium text-3xl mt-8">
          {application.name}
        </h1>
        <div className="flex justify-between py-9 text-[#44535B] items-center">
          <p className="text-copyright">
            © {thisYear} Promptlabs Inc. All Rights Reserved.
          </p>
          <Button
            variant="outline"
            className="rounded-full h-[78px] w-[78px] p-4 [&_svg]:size-12 text-[#BBBBBB]"
            onClick={gotoTop}
          >
            <IconArrow />
          </Button>
        </div>
      </div>
    </footer>
  );
}

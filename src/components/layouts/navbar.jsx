import { Button } from "@/components/ui/button";
import application from "@/constants/application";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useState } from "react";

export function Navbar({ data = [], ...props }) {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY > 100) {
        setScrolled(true);
      }

      if (window.scrollY < 100) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <header className="fixed top-0 z-10 left-0 right-0">
      <div className={cn('navbar', isScrolled && "navbar-blur")}>
        <nav
          className={cn(
            "container flex items-center justify-between py-9 transition-all relative px-4 xl:px-0",
            isScrolled && "py-4"
          )}
        >
          <a href="#">
            <h1 className="gradient-text font-medium text-2xl">
              {application.name}
            </h1>
          </a>
          <ul className="flex gap-14">
            {data.map((item, index) => (
              <li
                key={`nav-item-${index}`}
                className="font-normal text-[#B2B2B2]"
              >
                <a href={item.to}>{item.name}</a>
              </li>
            ))}
          </ul>
          <Button>Get $PLABS</Button>
        </nav>
      </div>
    </header>
  );
}

"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkButton from "../buttons/LinkButton";
import { btnStyles } from "../buttons/btnStyles";
import { Container } from "../sectionComponants";

const LandingNavbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <header className="max_screen_width w-full bg-background2 border-b border-line sticky top-0 z-40">
      <Container>
        <nav className="flex py-2 md:py-3 w-full items-center justify-between">
          <div className="relative aspect-[345/117] w-28 md:w-32">
            <Image
              src="/images/logo.png"
              alt="Midori - Live the slow life"
              fill
              priority
              sizes="128px"
              className="object-contain"
            />
          </div>
          <LinkButton
            href="#form"
            label="BOOK YOUR STAY"
            calendarIcon
            className={`${btnStyles.green} text-white! font-semibold!`}
          />
        </nav>
      </Container>
    </header>
  );
};

export default LandingNavbar;

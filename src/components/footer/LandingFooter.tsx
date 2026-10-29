"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";

const LandingFooter = () => {
  const pathName = usePathname();
  // read the clock after mount: Cache Components blocks `new Date()` during prerender
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <footer className="max_screen_width bg-background">
      <Container>
        <div className="grid py-10 md:py-14 grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div className="sm:col-span-3 lg:col-span-1">
            <div className="relative aspect-[345/117] w-32">
              <Image
                src={footerData.logo}
                alt="Midori"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          </div>

          {footerData.lists.map((list, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="text-dark text-sm">{list.title}</h2>
              <ul className="flex flex-col gap-2">
                {list.links.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-light text-sm md:text-[15px]"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-p1 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-line h-px w-full" />
      </Container>
      <Container className="py-4 flex max-md:flex-col items-center gap-2 justify-between text-xs md:text-sm text-light">
        <p>© {year} Midori. All rights reserved.</p>
        <p>
          Powered By{" "}
          <Link href="https://www.fielmente.com/" target="_blank">
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default LandingFooter;

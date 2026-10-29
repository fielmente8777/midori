import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

export default function ThankYou() {
  return (
    <main className="bg-background2 min-h-screen flex items-center">
      <SectionWithContainer sectionClassName="w-full">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <div className="relative aspect-[345/117] w-48">
            <Image
              src="/images/logo.png"
              alt="Midori"
              fill
              sizes="192px"
              priority
              className="object-contain"
            />
          </div>
          <p className="text-p1 text-sm tracking-widest">
            THANK YOU FOR YOUR ENQUIRY
          </p>
          <h1 className="font-primary font-light text-3xl md:text-5xl text-dark">
            We&apos;ll get back to you shortly.
          </h1>
          <LinkButton
            href="/"
            label="Back to Home"
            className="rounded-full bg-p1 border-p1 text-white text-sm"
          />
        </div>
      </SectionWithContainer>
    </main>
  );
}

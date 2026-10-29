"use client";

import { contact } from "@/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

function Call() {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <div className="fixed bottom-6 md:bottom-10 left-4 z-20 cursor-pointer">
      <Link
        href={contact.callCta}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-p1 text-white hover:shadow-2xl transition-all"
      >
        <IoCall size={24} color="white" />
        <span className="sr-only">call</span>
      </Link>
    </div>
  );
}

export default Call;

"use client";
import { useWebContext } from "@/context-api/WebContext";
import { MdClose } from "react-icons/md";
import Form1 from "../forms/Form1";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();
  return (
    <section
      onClick={() => setIsOpenFormPopUp(false)}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpenFormPopUp ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-md w-full max-h-[90vh] overflow-y-auto hide-scroll p-5 bg-background2 relative rounded-2xl"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setIsOpenFormPopUp(false)}
          className="absolute top-4 right-4 text-2xl text-dark"
        >
          <MdClose />
        </button>
        <p className="font-primary font-light text-2xl text-dark pr-8">
          Tell us when you&apos;d like to arrive.
        </p>
        <p className="text-sm text-light mt-1 mb-4">
          We&apos;ll confirm availability and get back to you with the details.
        </p>
        <Form1 gridView />
      </div>
    </section>
  );
};

export default PopUpForm;

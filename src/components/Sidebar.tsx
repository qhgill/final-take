import React from "react";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import Question from "../components/Question";

interface SidebarTypes {
  budget: number;
  sustainStatus: number;
}

const Sidebar = ({ budget, sustainStatus }: SidebarTypes) => {
  return (
    <div className="flex flex-col items-start justify-between h-screen max-h-screen w-[20vw] mx-4 absolute left-0 inset-y-0">
      <div className="flex flex-col gap-4">
        <Image
          src={placeholder}
          alt="logo"
          className="aspect-square object-fill size-40 mt-5"
        />
        <Question />
        <p className="text-start text-3xl">
          budget
          <br />${budget}
        </p>
        <p className="text-start text-3xl">
          sustain:
          <br />
          {sustainStatus}
        </p>
      </div>
      <div className="flex flex-col  justify-start gap-y-5 py-10">
        <Image
          src={placeholder}
          alt="placeholder"
          className="aspect-square object-fill size-30 hover:border-4 hover:border-black rounded-full duration-100"
        />
        <Image
          src={placeholder}
          alt="placeholder"
          className="aspect-square object-fill size-30 hover:border-4 hover:border-black rounded-full duration-100"
        />
        <Image
          src={placeholder}
          alt="placeholder"
          className="aspect-square object-fill size-30 hover:border-4 hover:border-black rounded-full duration-100"
        />
      </div>
    </div>
  );
};

export default Sidebar;

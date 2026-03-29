import React from "react";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full flex mt-20 items-center justify-center">
      <div className="container flex items-center justify-between border-t border-[#FF2D19] py-8 max-[550px]:mx-8">
        <button
          onClick={handleScrollTop}
          type="button"
          className="bg-none border-none text-[#BF564C] uppercase font-medium text-[1.2rem] font-[Montserrat] max-[550px]:text-[0.9rem]"
        >
          Back to top
        </button>
        <section className="flex items-center gap-6">
          <Link
            href={"https://www.linkedin.com/in/lucas-figueiredo-m/"}
            target="_blank"
          >
            <IoLogoLinkedin className="w-12 h-12 cursor-pointer text-[#bfbebb] transition-colors duration-500 hover:text-[#FF2D19] max-[450px]:w-8 max-[450px]:h-8" />
          </Link>

          <Link href={"https://github.com/lucas-figueiredo-m"} target="_blank">
            <IoLogoGithub className="w-12 h-12 cursor-pointer text-[#bfbebb] transition-colors duration-500 hover:text-[#FF2D19] ml-6 max-[450px]:w-8 max-[450px]:h-8 max-[450px]:ml-2" />
          </Link>
        </section>
      </div>
    </footer>
  );
};

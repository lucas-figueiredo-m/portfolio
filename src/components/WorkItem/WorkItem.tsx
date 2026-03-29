import React from "react";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

type WorkItemProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
  isEven?: boolean;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  title,
  type,
  slug,
  imgUrl,
  isEven = false,
}) => {
  return (
    <section
      className={`group relative flex w-full h-[25rem] items-end max-[700px]:h-[17rem] ${
        isEven ? "flex-row-reverse max-[1000px]:flex-row" : ""
      }`}
    >
      <section
        className={`relative h-full w-[50rem] rounded-[0.5rem] bg-no-repeat max-[1450px]:w-[40rem] max-[1000px]:w-full`}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "right 0 bottom -1.2rem",
          backgroundSize: "100%",
        }}
      >
        <div className="absolute h-full w-full rounded-[0.5rem] bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
        <div
          className={`absolute top-[3rem] w-fit transition-all duration-500 ${
            isEven
              ? "right-auto left-[-8rem] text-right group-hover:left-[-12rem] max-[1000px]:left-[1rem] max-[1000px]:top-[1rem] max-[1000px]:text-left max-[1000px]:group-hover:left-[1rem]"
              : "right-[-8rem] group-hover:right-[-12rem] max-[1000px]:left-[1rem] max-[1000px]:top-[1rem] max-[1000px]:right-auto max-[1000px]:group-hover:right-auto"
          }`}
        >
          <h1 className="text-[2.5rem] text-white transition-colors duration-500 [text-shadow:-4px_5px_22px_#11172b] group-hover:text-[#FF9E99] max-[450px]:text-[1.5rem]">
            {title}
          </h1>
          <h2 className="text-[2rem] font-light capitalize text-[#CCCCCC] transition-colors duration-500 [text-shadow:-4px_5px_22px_#11172b] group-hover:text-[#FF9E99] max-[450px]:text-[1rem]">
            - {type}
          </h2>
        </div>
      </section>

      <button
        type="button"
        className={`h-[4rem] border-none bg-none cursor-pointer max-[450px]:h-auto max-[1000px]:absolute max-[1000px]:bottom-[1rem] max-[1000px]:right-[1rem] max-[1000px]:m-0 ${
          isEven
            ? "m-[0_3rem_3rem_0] max-[1000px]:m-0"
            : "m-[0_0_3rem_5rem]"
        }`}
      >
        <Link href={`/work/${encodeURIComponent(slug)}`} className="flex items-center gap-[0.8rem] text-[2rem] text-white transition-colors duration-500 group-hover:text-[#FF2D19] max-[450px]:text-[1.5rem]">
            See more <IoChevronForwardOutline />
        </Link>
      </button>
    </section>
  );
};

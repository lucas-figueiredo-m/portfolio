import React from "react";
import Image from "next/image";

type WorkDetailItemProps = {
  imgUrl: string;
  children: React.ReactNode;
  isOdd?: boolean;
};

export const WorkDetailItem: React.FC<WorkDetailItemProps> = ({
  children,
  imgUrl,
  isOdd = false,
}) => {
  return (
    <div
      className={`flex w-full gap-[4rem] max-[700px]:flex-col max-[700px]:h-[60rem] ${
        isOdd ? "flex-row-reverse max-[700px]:flex-col" : ""
      }`}
    >
      <div className="relative flex-1 max-[700px]:w-full max-[700px]:h-[30rem]">
        <Image
          src={imgUrl}
          style={{ objectFit: "contain" }}
          fill
          alt="work_pic_1"
        />
      </div>
      <div className="relative flex flex-1 flex-col items-center [&>h2]:text-center [&>h2]:text-[1.8rem] [&>h2]:font-semibold [&_ul]:list-inside [&_ul]:text-justify [&_li]:text-[1.3rem] [&_p]:text-[1.5rem] [&_p]:text-justify [&_p]:leading-[3rem] max-[700px]:[&>h2]:text-[1.5rem] max-[700px]:[&_li]:text-[1.2rem] max-[700px]:[&_p]:text-[1.2rem]">
        {children}
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";

import Selfie from "@assets/images/me.png";

export const HomeHero: React.FC = () => {
  return (
    <section className="w-full flex gap-8 items-center justify-center mt-20 max-[700px]:flex-col-reverse">
      <Image
        src={Selfie}
        alt="Minha foto"
        className="object-contain w-[40rem] max-[1450px]:w-[35rem] max-[1000px]:w-[30rem] flex-1 [mask-image:linear-gradient(black_80%,transparent_90%)] z-0"
      />
      <div className="flex-[3] max-[700px]:w-full">
        <section className="mb-8 w-full">
          <h1 className="text-[8rem] max-[1450px]:text-[5rem] max-[1000px]:text-[3rem] text-[#FF2D19]">
            Hi there!
          </h1>
          <h2 className="text-[3rem] max-[1450px]:text-[2rem] max-[1000px]:text-[1.5rem] font-medium text-white">
            {`I'm Lucas`}
          </h2>
          <p className="text-[1.5rem] font-normal font-[Montserrat] text-white text-right mt-12">
            Senior mobile engineer with almost 6 years of experience
          </p>
        </section>
      </div>
    </section>
  );
};

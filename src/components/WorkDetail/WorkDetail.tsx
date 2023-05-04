import React from "react";
import { Container } from "./styles";
import Image from "next/image";

type WorkDetailItemProps = {
  imgUrl: string;
  children: React.ReactNode;
};

export const WorkDetailItem: React.FC<WorkDetailItemProps> = ({
  children,
  imgUrl,
}) => {
  return (
    <Container>
      <div>
        <Image
          src={imgUrl}
          style={{ objectFit: "cover" }}
          fill
          alt="work_pic_1"
        />
      </div>
      {/* <StyledImage src={imgUrl} alt="work_pic_1" /> */}
      <div>{children}</div>
    </Container>
  );
};

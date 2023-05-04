import React from "react";
import { WorkItemContainer } from "./styles";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

type WorkItemProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
};

export const WorkItem: React.FC<WorkItemProps> = ({
  title,
  type,
  slug,
  imgUrl,
}) => {
  return (
    <WorkItemContainer imgUrl={imgUrl}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/work/${encodeURIComponent(slug)}`} legacyBehavior>
          <a>
            See more <IoChevronForwardOutline />
          </a>
        </Link>
      </button>
    </WorkItemContainer>
  );
};

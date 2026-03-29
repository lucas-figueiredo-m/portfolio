import React from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

type WorkDetailItemProps = {
  company: string;
  role: string;
  jobType: string;
  description: string;
  responsability: string;
  coverImageUrl: string;
};

export const WorkDetailItem: React.FC<WorkDetailItemProps> = ({
  company,
  role,
  jobType,
  description,
  responsability,
  coverImageUrl,
}) => {
  return (
    <article>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={coverImageUrl}
          alt={company}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/work"
          className="mb-10 inline-block text-sm text-text-secondary transition-colors hover:text-accent"
        >
          &larr; Back to Work
        </Link>

        <header className="mb-12 flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            {company}
          </h1>
          <p className="text-lg text-text-secondary">{role}</p>
          <span className="text-sm uppercase tracking-wider text-text-tertiary">
            {jobType}
          </span>
        </header>

        <section className="mb-16">
          <p className="text-base leading-8 text-text-secondary">
            {description}
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-text-primary">
            Responsibilities
          </h2>
          <div className="prose-custom text-base leading-8 text-text-secondary [&_li]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
            {parse(DOMPurify.sanitize(responsability))}
          </div>
        </section>
      </div>
    </article>
  );
};

import React from "react";
import { BlogCardContainer, StyledImage } from "./BlogCard.styled";
import { AllBlogPosts } from "@services/CmsService";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: AllBlogPosts;
};

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <BlogCardContainer href={`/blog/${post.slug}`}>
      <div className="image">
        <Image
          src={post.coverImage.url}
          style={{ objectFit: "contain" }}
          fill
          alt="blog_postc_cover"
        />
      </div>
      <div className="overlay" />
      <div>
        <h1>{post.title}</h1>
        <p>{post.headline}</p>
      </div>
    </BlogCardContainer>
  );
};

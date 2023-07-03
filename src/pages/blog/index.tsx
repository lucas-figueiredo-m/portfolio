import React, { useEffect } from "react";
import { Header } from "@components/Header";

import { BlogContainer } from "@styles";
import { BlogCard } from "@components/BlogCard";
import { GetStaticProps } from "next";
import { AllBlogPosts, CmsService } from "@services/CmsService";

type BlogPageProps = {
  posts: AllBlogPosts[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <BlogContainer>
      <Header />
      <main className="container">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </main>
    </BlogContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await CmsService.getAllBlogPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default BlogPage;

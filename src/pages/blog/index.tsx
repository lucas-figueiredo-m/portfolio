import React, { useEffect } from "react";
import { Header } from "@components/Header";

import { BlogContainer } from "@styles";
import { BlogCard } from "@components/BlogCard";

const BlogPage: React.FC = () => {
  return (
    <BlogContainer>
      <Header />
      <main className="container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </main>
    </BlogContainer>
  );
};

export default BlogPage;

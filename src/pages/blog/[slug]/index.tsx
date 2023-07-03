import React, { useEffect } from "react";
import { BlogPostContainer, BlogPostContent } from "@styles";
import { Header } from "@components/Header";

import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { BlogPostType, CmsService } from "@services/CmsService";
import { GetServerSideProps } from "next";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

type BlogPostProps = {
  blogPost: BlogPostType;
};

const BlogPost: React.FC<BlogPostProps> = ({ blogPost }) => {
  useEffect(() => {
    Prism.highlightAll(); // <--- prepare Prism
  }, [blogPost]);

  return (
    <BlogPostContainer>
      <Header />
      <main className="container">
        <BlogPostContent>
          <h1>{blogPost.title}</h1>
          {parse(DOMPurify.sanitize(blogPost.content))}
        </BlogPostContent>
      </main>
    </BlogPostContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;

  const blogPost = await CmsService.getUniqueBlogPost(String(params?.slug));

  return {
    props: {
      blogPost,
    },
  };
};

export default BlogPost;

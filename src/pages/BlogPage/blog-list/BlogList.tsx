import { useEffect, useState } from "react";
import BlogListItem from "../../../components/blog-list-item/blogListItem";

export default function BlogList() {
  type Blogs = { img: string; tag: string };
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  async function loadingBlogList() {
    const response = await fetch("src/db/blog-list.json");
    if (response.ok) {
      const json = await response.json();
      setBlogs(json);
    } else {
      console.error("Failed to load blogs");
    }
  }
  useEffect(() => {
    loadingBlogList();
  }, []);

  const renderBlogs = blogs?.map((item, index) => {
    return (
      <BlogListItem key={index} img={item.img} tag={item.tag}></BlogListItem>
    );
  });

  return (
    <div className="blog-list">
      <p style={{ fontSize: 30, fontWeight: 700, marginBottom: 26 }}>
        Reading blog list
      </p>
      <div style={{ display: "flex", gap: 76 }}>{renderBlogs}</div>
    </div>
  );
}

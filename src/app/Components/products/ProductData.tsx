"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import CategorySelection from "../CategorySelection";
// import BlogCard from "./BlogCard";
// import Pagination from "../Pagination";
// import BlogSidebar from "./BlogSidebar";
export const revalidate = 10;
export default function BlogsData() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        image,
        commentsCount,
        readingTime,
        summary,
        category,
        "slug": slug.current
      }`;
      const fetchedPosts = await client.fetch(query);
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!activeCategory) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === activeCategory)
      );
    }
    setCurrentPage(1);
  }, [activeCategory, posts]);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <CategorySelection
        selectedCategory=""
        onSelectCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="flex flex-col lg:flex-row px-11 mt-12 gap-8">
        <div className="lg:w-3/4 w-full">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div> */}
          {/* <div className="lg:mt-10 -mt-5">
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalBlogs={filteredPosts.length}
              pageSize={pageSize}
            />
          </div> */}
        </div>
        {/* <div className="lg:w-1/4 w-full">
          <BlogSidebar/>
        </div> */}
      </div>
    </>
  );
}
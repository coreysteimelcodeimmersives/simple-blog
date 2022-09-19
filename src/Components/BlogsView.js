import React, { useState } from "react";
import BlogPostView from "./BlogPostView";
import WriteBlogView from "./WriteBlogView";

const BlogsView = ({ userName, profileImg }) => {
  const [newBlog, setNewBlog] = useState("");
  const [blogsArr, setBlogsArr] = useState([]);

  return (
    <>
      <WriteBlogView
        userName={userName}
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        blogsArr={blogsArr}
        setBlogsArr={setBlogsArr}
      ></WriteBlogView>
      <div className="BlogPostsScroll">
        {blogsArr.map((blog, idx) => {
          return (
            <BlogPostView
              key={`blog-${idx}`}
              blog={blog}
              profileImg={profileImg}
              userName={userName}
              blogsArr={blogsArr}
              setBlogsArr={setBlogsArr}
            ></BlogPostView>
          );
        })}
      </div>
    </>
  );
};

export default BlogsView;

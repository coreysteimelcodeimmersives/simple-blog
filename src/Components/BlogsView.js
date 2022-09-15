import React, { useState } from "react";
import validateText from "../Validation/Validation";
import BlogPostView from "./BlogPostView";

const BlogsView = ({ userName, profileImg }) => {
  const [blogMssg, setBlogMssg] = useState("");
  const [newBlog, setNewBlog] = useState("");
  const [blogsArr, setBlogsArr] = useState([]);

  return (
    <>
      <div className="WriteBlog">
        <div className="PageTitle">Welcome {userName}!</div>
        <textarea
          className="NewBlog"
          placeholder="ENTER YOUR POST HERE ..."
          value={newBlog}
          onChange={(e) => {
            setNewBlog(e.target.value);
          }}
        ></textarea>
        <button
          className="BlogButton"
          onClick={() => {
            setBlogMssg("");
            const blogValid = validateText(newBlog);
            if (!blogValid) {
              setBlogMssg("Please enter blog post text.");
              return;
            }

            const blogId = Math.ceil(Math.random() * 10000);
            const newBlogPost = { id: blogId, blog: newBlog };
            const blogsArrCopy = [...blogsArr];
            blogsArrCopy.unshift(newBlogPost);
            setBlogsArr(blogsArrCopy);
            console.log("blogs obj ", blogsArrCopy);
            setNewBlog("");
          }}
        >
          Post
        </button>
        <div className="Mssg">{blogMssg}</div>
      </div>
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

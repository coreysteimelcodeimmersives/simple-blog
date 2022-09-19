import React, { useState } from "react";
import validateText from "../Utils/Validation";

const WriteBlogView = ({
  userName,
  newBlog,
  setNewBlog,
  blogsArr,
  setBlogsArr,
}) => {
  const [blogMssg, setBlogMssg] = useState("");

  const onPostBlog = (newBlog) => () => {
    const blogValid = validateText(newBlog);
    if (!blogValid) {
      setBlogMssg("Please enter blog post text.");
      return;
    }
    setBlogMssg("");
    const blogId = Math.ceil(Math.random() * 10000);
    const newBlogPost = { id: blogId, blog: newBlog };
    const blogsArrCopy = [...blogsArr];
    blogsArrCopy.unshift(newBlogPost);
    setBlogsArr(blogsArrCopy);
    setNewBlog("");
  };
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
        <button className="BlogButton" onClick={onPostBlog(newBlog)}>
          Post
        </button>
        <div className="Mssg">{blogMssg}</div>
      </div>
    </>
  );
};

export default WriteBlogView;

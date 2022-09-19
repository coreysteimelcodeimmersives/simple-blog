import React from "react";

const BlogPostView = ({
  blog,
  profileImg,
  userName,
  blogsArr,
  setBlogsArr,
}) => {
  const onDelete = (blogsArr, blogIdToDelte) => () => {
    const copyBlogsArr = blogsArr.filter((post) => post.id !== blogIdToDelte);
    setBlogsArr(copyBlogsArr);
  };
  return (
    <>
      <div className="BlogPostContainer">
        <div className="BlogPostUserNameArea">
          <div className="CropContainer">
            <img className="ProfileImg" src={profileImg} alt=""></img>
          </div>
          <div className="BlogUserName">{userName}</div>
        </div>
        <div className="BlogPostText">{blog.blog}</div>
        <div className="DeletePostButtonContainer">
          <button className="BlogButton" onClick={onDelete(blogsArr, blog.id)}>
            Delete Post
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPostView;

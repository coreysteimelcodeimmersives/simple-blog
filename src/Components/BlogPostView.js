import React from "react";

const BlogPostView = ({
  blog,
  profileImg,
  userName,
  blogsArr,
  setBlogsArr,
}) => {
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
          <button
            className="BlogButton"
            onClick={() => {
              console.log("delete");
              console.log("blog id to delete ", blog.id);
              const copyBlogsArr = blogsArr.filter((post) => {
                if (post.id !== blog.id) {
                  return post;
                }
                return false;
              });
              setBlogsArr(copyBlogsArr);
            }}
          >
            Delete Post
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPostView;

import "./App.css";
import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import BlogsView from "./Components/BlogsView";

function App() {
  // Profile Pic URL :

  //   https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all

  const [profileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("");
  const [showBlogs, setShowBlogs] = useState(false);

  return (
    <div className="App">
      <div className="BlogContainer">
        <div>
          <div className="Header">
            <div className="HeaderTitle">Simple Blog</div>
            <div className="CropContainer">
              {showBlogs && (
                <img className="ProfileImg" src={profileImg} alt=""></img>
              )}
            </div>
          </div>
        </div>

        {!showBlogs && (
          <SignIn
            pageTitle={"Sign In"}
            setUserName={setUserName}
            setProfileImg={setProfileImg}
            setShowBlogs={setShowBlogs}
            userName={userName}
            profileImg={profileImg}
          ></SignIn>
        )}
        {showBlogs && (
          <BlogsView userName={userName} profileImg={profileImg}></BlogsView>
        )}
      </div>
    </div>
  );
}

export default App;

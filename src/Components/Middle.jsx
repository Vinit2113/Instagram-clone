import "./Middle.css";
import story from "../story.json";

import Post from "./Post/Post";
import instaLogo from '../assets/instagramLogo.svg'

const Middle = () => {
  const stories = story.story;

  return (
    <div className="middleHomeSide">
      <div className="middleTopBar">
        <div className="instalogo">
          <img className="instalogoMobile  " src={instaLogo} alt="" />
        </div>
      </div>
      {/* Story Block */}
      <div className="storyBlock">
        {stories?.map((item) => {
          return (
            <div className="storyParticular" key={item.id}>
              <div className="imageDiv">
                <img className="statusImg" src={item.img} alt="" />
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>

      {/* POST SECTION */}
      <div className="postSection">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Middle;

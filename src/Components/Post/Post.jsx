import LikeIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareIcon from "@mui/icons-material/SendOutlined";
import SaveIcon from "@mui/icons-material/BookmarkBorder";

const Post = () => {
  return (
    <div className="post">
      <div className="postInfo">
        <img
          className="postInfoImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhPU5ariCQjcy-qrQtVeh5Hs9jaNDKUHQXg&s"
          alt="imgnotfound"
        />
        <div className="postInfousername">RanbirKapoor</div>
        <div className="timingInfo">. 35 min</div>
      </div>
      <div className="postImg">
        <img
          className="postImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhPU5ariCQjcy-qrQtVeh5Hs9jaNDKUHQXg&s"
          alt="imgnotfound"
        />
      </div>
      <div className="iconBlock">
        <div className="leftIcon">
          <LikeIcon sx={{ fontSize: "25px" }} />
          <CommentIcon sx={{ fontSize: "25px" }} />
          <ShareIcon sx={{ fontSize: "25px" }} />
        </div>
        <div className="rightIcon"></div>
        <SaveIcon sx={{ fontSize: "25px" }} />
      </div>
      <div className="likeSection">
        <div className="imagesLike">
          <img
            className="likeImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhPU5ariCQjcy-qrQtVeh5Hs9jaNDKUHQXg&s"
            alt=""
          />
          <img
            className="likeImg2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhPU5ariCQjcy-qrQtVeh5Hs9jaNDKUHQXg&s"
            alt=""
          />
        </div>
        <div className="noOfLikes">112,456 likes</div>
      </div>
      <div className="postAbout">
        <div className="postAboutName">RanbirKapoor</div>
        <div className="infoComment">I am the best actor...</div>
      </div>
      <div className="noOfComments">view All 500 comments</div>
      <div className="addComment">Add a Comment...</div>
    </div>
  );
};

export default Post;

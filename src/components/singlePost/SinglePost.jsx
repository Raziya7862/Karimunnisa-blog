import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          The Beauty Of plants
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Karimunnisa
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Plants are like the breathing machines of our planet! They take in carbon dioxide, the gas we exhale, and use sunlight to turn it into oxygen, the gas we need to breathe. This makes them essential for our survival. But plants do much more than just clean the air. They also provide us with delicious and nutritious food, like fruits, vegetables, and grains. They even give us materials like cotton for clothes and wood for furniture. Plants are also crucial for healthy ecosystems. They provide homes and food for animals, and their roots help hold soil in place, preventing erosion. So, next time you see a plant, take a moment to appreciate its importance!
          <br />
          <br />
          Plants are like Earth's tiny factories! They use sunlight, water, and air to make their own food. This food isn't just for them, it feeds animals (including us!) and helps keep the air clean. Plants also provide homes for animals and cool down the planet by releasing water vapor. They come in all shapes and sizes, from giant trees to tiny mosses, and all play a vital role in keeping our planet healthy.
        </p>
      </div>
    </div>
  );
}
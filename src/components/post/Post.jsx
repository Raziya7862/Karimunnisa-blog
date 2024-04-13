import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
        The Beauty Of Plants
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Plants are like Earth's tiny factories! They use sunlight, air, and water to make their own food. This food not only nourishes them, but also helps feed animals (including us!). In return, animals breathe out the air plants need. Plants also clean the air and help keep the soil healthy. They're pretty amazing!
      </p>
    </div>
  );
}
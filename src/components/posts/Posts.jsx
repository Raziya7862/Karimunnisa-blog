import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVusT99smkgWe5wxG-dw03DI4GHY7jDhEj8VNi6m09Xg&s" />
      <Post img="https://i.pinimg.com/originals/c4/0f/70/c40f700ec9944655bec36ddc34157b78.jpg" />
      <Post img="https://static.tnn.in/photo/101237303/101237303.jpg"/>
      <Post img="https://assets.winni.in/product/primary/2022/6/61485.jpeg?dpr=1&w=500"/>
      <Post img="https://www.trees.com/wp-content/uploads/files/inline-images/most-beautiful-flowers/Sunflower-Helianthus-annuus.jpg"/>
    </div>
  );
}
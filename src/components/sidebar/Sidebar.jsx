import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
           src="https://i.ibb.co/Sc1fhyL/munni.jpg"  border="0" alt=""  
        
        />
        <p>
          I'm Sk.Karimunnisa, a dedicated and enthusiastic B.Tech student with a profound interest in technology and design. 
          Currently in my second year of study in Computer Science and Design at SRKR Engineering College, I have maintained a consistent 
          academic performance, achieving an overall score of 80%.I am deeply passionate about exploring the fields of Full Stack Engineering and DevOps Engineering, as I believe they offer 
          exciting opportunities to create innovative solutions and contribute positively to the technological landscape. My goal is to 
          actively participate in meaningful projects that have a real-world impact and drive positive change.</p>
        
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Drawings
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}
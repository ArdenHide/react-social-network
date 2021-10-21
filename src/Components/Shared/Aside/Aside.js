import { NavLink } from "react-router-dom";

function Aside() {
    return (
        <div className="d-none d-md-block col-md-3">
            <div className="nav flex-column nav-pills text-center" aria-orientation="vertical">
                <NavLink to="/Profile" className="nav-link">Profile</NavLink>
                <NavLink to="/Dialogs" className="nav-link">Messages</NavLink>
                <NavLink to="/News" className="nav-link">News</NavLink>
                <NavLink to="/Music" className="nav-link">Music</NavLink>
                <NavLink to="/Settings" className="nav-link">Settings</NavLink>
            </div>
        </div>
    );
  }
  
  export default Aside;
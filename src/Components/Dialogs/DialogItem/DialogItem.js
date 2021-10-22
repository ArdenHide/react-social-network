import React from "react";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink to={"/Dialogs/" + props.id} className="nav-link">{props.userName}</NavLink>
    );
}

export default DialogItem;
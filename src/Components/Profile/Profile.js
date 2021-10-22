import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from '../../Redux/State';
import { updatePostInput } from '../../Redux/State';

function Profile(props) {
    return (
        <div className="col-12 col-md-9 col-lg-10">
            <ProfileInfo />
            <MyPosts
                postsData={props.data.postsData} newPostTitle={props.data.newPostTitle} newPostText={props.data.newPostText}
                addPost={addPost} updatePostInput={updatePostInput} />
        </div>
    );
}

export default Profile;
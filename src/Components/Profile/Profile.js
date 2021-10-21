import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className="col-12 col-md-9">
            <ProfileInfo />
            <MyPosts postsData={props.data.postsData}/>
        </div>
    );
}

export default Profile;
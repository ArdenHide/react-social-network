import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.postsData.map(p =>
        <Post
            key={p.id}
            img_path={p.img_path}
            title={p.title}
            text={p.text}
            like_count={p.like_count}>
        </Post>
    );

    return (
        <div className="container-fluid p-0">
            <div className="bg-dark py-2 mb-4">
                <div className="container text-white">
                    <h1 className="fs-1">My Post</h1>
                    <span className="fs-4">New Post</span>
                </div>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;
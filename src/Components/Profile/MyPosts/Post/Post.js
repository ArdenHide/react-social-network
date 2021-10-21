
function Post(props) {
    return (
        <div className="card bg-dark text-white mb-4">
            <img src={props.img_path} className="card-img-top" alt="post"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
            <div className="card-footer">
                <span className="text-small">Like count {props.like_count}</span>
            </div>
        </div>
    );
}

export default Post;
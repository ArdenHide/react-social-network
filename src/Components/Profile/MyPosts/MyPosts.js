import React from "react";
import Post from "./Post/Post";
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function MyPosts(props) {
    let postsElements = props.postsData.map(p =>
        <Post
            key={p.id}
            title={p.title}
            text={p.text}
            likeCount={p.likeCount}>
        </Post>
    );

    let newPostTitle = React.createRef();
    let newPostText = React.createRef();
    function clickAddPost() {
        let title = newPostTitle.current.value;
        let text = newPostText.current.value;
        props.addPost(title, text);
    }

    function onChangePostTitle() {
        let title = newPostTitle.current.value;
        let text = newPostText.current.value;
        console.log(title + text);
        props.updatePostInput(title, text);
    }
    function onChangePostText() {
        let title = newPostTitle.current.value;
        let text = newPostText.current.value;
        console.log(title + text);
        props.updatePostInput(title, text);
    }
    return (
        <div className="container-fluid p-0">
            <div className="bg-dark py-2 mb-2">
                <div className="container text-white">
                    <span className="fs-4">New Post</span>
                </div>
            </div>
            <div className="mb-3">
                <div id='titleInputLabel' className='form-text mb-2'>
                    Title for you post
                </div>
                <input onChange={onChangePostTitle} value={props.newPostTitle} ref={newPostTitle} type='text' />
                {/* <MDBInput label='Post title' type='text' aria-describedby='titleInputLabel' /> */}
            </div>

            <div className="mb-3">
                <div id='textAreaLabel' className='form-text mb-2'>
                    Tell me how are you doing.
                </div>
                <textarea onChange={onChangePostText} value={props.newPostText} ref={newPostText}></textarea>
                {/* <MDBInput labelRef={newPostTitle} label='Post message' aria-describedby='textAreaLabel' textarea rows={4} /> */}
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                <MDBBtn onClick={clickAddPost}>Create post</MDBBtn>
            </div>

            <div className="row">
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
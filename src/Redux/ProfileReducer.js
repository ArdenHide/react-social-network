import React from "react";
const ADD_POST = 'ADD-POST';
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';

function ProfileReducer(state, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                title: action.postTitle,
                text: action.postText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            return state;

        case UPDATE_POST_INPUT:
            state.newPostTitle = action.postTitle;
        state.newPostText = action.postText;
            return state;

        default:
            return state;
    }
}

export default ProfileReducer;
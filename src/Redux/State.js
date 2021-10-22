import { React } from 'react';
import { RerenderDOM } from '../Render'

let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                title: "Post 1",
                text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
                likeCount: 3
            },
            {
                id: 2,
                title: "Post 2",
                text: "С другой стороны понимание сущности ресурсосберегающих технологий требует анализа укрепления демократической системы.",
                likeCount: 33
            }
        ],
        newPostTitle: 'Title',
        newPostText: 'Post text'
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, userName: "Санек" },
            { id: 2, userName: "Оля" },
            { id: 3, userName: "Яна" },
            { id: 4, userName: "Аня" }
        ],
        messagesData: [
            { id: 1, message: "Привет Санек" },
            { id: 2, message: "Привет Оля" },
            { id: 3, message: "Привет Яна" },
            { id: 4, message: "Привет Аня" },
            { id: 5, message: "Привет Стасян" },
        ]
    }
}

export function addPost(postTitle, postText) {
    let newPost = {
        id: state.profilePage.postsData.length+1,
        title: postTitle,
        text: postText,
        likeCount: 0
    };
    state.profilePage.postsData.push(newPost);
    RerenderDOM(state);
}

export function updatePostInput(postTitle, postText) {
    state.profilePage.newPostTitle = postTitle;
    state.profilePage.newPostText = postText;
    RerenderDOM(state);
}

export default state;
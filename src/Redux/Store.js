const ADD_POST = 'ADD-POST';
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT';

let store = {
    _state: {
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
    },
    _RerenderDOM() { },
    _addPost(postTitle, postText) {
        let newPost = {
            id: this.getState().profilePage.postsData.length + 1,
            title: postTitle,
            text: postText,
            likeCount: 0
        };
        this.getState().profilePage.postsData.push(newPost);
        this._RerenderDOM(this.getState());
    },
    _updatePostInput(postTitle, postText) {
        this.getState().profilePage.newPostTitle = postTitle;
        this.getState().profilePage.newPostText = postText;
        this._RerenderDOM(this.getState());
    },

    getState() {
        return this._state;
    },
    subscribeToRerenderDOM(observer) {
        this._RerenderDOM = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost(action.postTitle, action.postText);
        }
        else if (action.type === UPDATE_POST_INPUT) {
            this._updatePostInput(action.postTitle, action.postText)
        }
    }
}

export function addPostActionCreator(title, text) {
    return {
        type: 'ADD-POST', postTitle: title, postText: text
    };
}
export function onChangePostInputActionCreator(title, text) {
    return {
        type: 'UPDATE-POST-INPUT', postTitle: title, postText: text
    };
}

window.store = store;
export default store;
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';

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
            ],
            newMessage: 'new message'
        }
    },
    _RerenderDOM() { },

    getState() {
        return this._state;
    },
    subscribeToRerenderDOM(observer) {
        this._RerenderDOM = observer;
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._RerenderDOM(this._state);
    }
}

export function addPostActionCreator(title, text) {
    return { type: 'ADD-POST', postTitle: title, postText: text };
}
export function onChangePostInputActionCreator(title, text) {
    return { type: 'UPDATE-POST-INPUT', postTitle: title, postText: text };
}
export function updateNewMessageInputActionCreator(message) {
    return { type: 'UPDATE-NEW-MESSAGE-INPUT', newMessage: message };
}
export function sendMessageActionCreator(message) {
    return { type: 'SEND-MESSAGE', newMessage: message };
}

window.store = store;
export default store;
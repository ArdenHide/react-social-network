import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';

function RerenderDOM(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} updatePostInput={store.updatePostInput.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
RerenderDOM(store.getState());
store.subscribeToRerenderDOM(RerenderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
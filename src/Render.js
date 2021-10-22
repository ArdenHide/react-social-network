import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import {addPost} from './Redux/State';
import {updatePostInput} from './Redux/State';

export function RerenderDOM(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostInput={updatePostInput} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
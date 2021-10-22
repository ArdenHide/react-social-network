import React from "react";
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Aside from './Components/Shared/Aside/Aside';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { addPost } from './Redux/State';
import { updatePostInput } from './Redux/State';

function App(props) {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <main className="row m-0">
                    <Aside />
                    <Route path='/Profile' render={ () => <Profile data={props.state.profilePage} addPost={addPost} updatePostInput={updatePostInput} />} />
                    <Route path='/Dialogs' render={ () => <Dialogs data={props.state.dialogsPage} />} />
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
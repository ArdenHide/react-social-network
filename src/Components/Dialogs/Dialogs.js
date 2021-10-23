import React from "react";
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { MDBBtn } from 'mdb-react-ui-kit';
import { updateNewMessageInputActionCreator, sendMessageActionCreator } from './../../Redux/Store';

function Dialogs(props) {
    let dialogsElements = props.data.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} userName={d.userName} />
    );
    let messagesElements = props.data.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );

    let newMessageInput = React.createRef();
    function updateNewMessageInput() {
        let newMessageValue = newMessageInput.current.value;
        props.dispatch(updateNewMessageInputActionCreator(newMessageValue));
    }
    function clickAddPost() { 
        let newMessageValue = newMessageInput.current.value;
        props.dispatch(sendMessageActionCreator(newMessageValue));
    }

    return (
        <div className="col-12 col-md-9 col-lg-10">
            <div className="row h-100">
                <div className="d-none d-sm-block col-sm-4 col-md-5 col-lg-3" style={{ backgroundColor: '#BDBDBD' }}>
                    <div className="nav flex-column nav-pills text-center" aria-orientation="vertical">
                        {dialogsElements}
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-7 col-lg-9 d-flex flex-column justify-content-end" style={{ backgroundColor: '#E0E0E0' }}>
                    {messagesElements}
                    <div>
                        <div className="mb-3">
                            <div id='titleInputLabel' className='form-text mb-2'>
                                Title for you post
                            </div>
                            <input onChange={updateNewMessageInput} value={props.data.newMessage} ref={newMessageInput} type='text' />
                            {/* <MDBInput label='Post title' type='text' aria-describedby='titleInputLabel' /> */}
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4">
                            <MDBBtn onClick={clickAddPost}>Send message</MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
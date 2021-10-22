import React from "react";
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {
    let dialogsElements = props.data.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} userName={d.userName} />
    );
    let messagesElements = props.data.messagesData.map(m =>
        <Message key={m.id} message={m.message} />
    );

    return (
        <div className="col-12 col-md-9">
            <div className="row h-100">
                <div className="col-4 bg-dark">
                    <div className="nav flex-column nav-pills text-center" aria-orientation="vertical">
                        { dialogsElements }
                    </div>
                </div>
                <div className="col-8 d-flex flex-column justify-content-end bg-dark">
                    { messagesElements }
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
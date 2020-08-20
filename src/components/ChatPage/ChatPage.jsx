import React from 'react';

const ChatPage = (props) => (
    <div>
        <form onSubmit={props.handleChatSubmit}>
            <textarea value={props.value} onChange={props.handleChange} />
            <input type='submit' value='Submit' />
        </form>
    </div >
);

export default ChatPage;
import './App.css';
import React from 'react';

function App() {
    const [messages, setMessages] = React.useState(["", ""]);
    // if (messages.length === 0) {
    //     return <h1>you're all caught up</h1>;
    // } 

    return (
        <div>
            {/* {messages.length > 0 ? <h1> you have {messages.length} unread  { messages.length === 1 ? "message" : "messages" }  !</h1> : <h1>you're all caught up</h1>  } */}
            {messages.length > 0
                ? <h1> you have {messages.length} unread message{messages.length > 1 && "s"}  !</h1>
                : <h1>you're all caught up</h1>}
        </div>
    );
}

export default App;
//{messages.length = 1 ? "message" : "messages"}

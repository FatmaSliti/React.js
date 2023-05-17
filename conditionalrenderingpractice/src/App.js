import './App.css';
import React from 'react';

function App() {
  const [messages, setMessages] = React.useState(["a", "b", "c"]);

  return (
    <div>
      {/* { messages.length !== 0 && <h1> you have {messages.length} unread messages!</h1>} */}
      {messages.length > 0 && <h1> you have {messages.length} unread messages!</h1>}
    </div>
  );
}

export default App;


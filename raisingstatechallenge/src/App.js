import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import React from 'react';

function App() {
  const [user, setUser] = React.useState("Fatma");
  return (
    <div >
      <Header user={user} setterFunction={setUser}  />
      <Body user={user} setterFunction={setUser} />
    </div>
  );
}

export default App;

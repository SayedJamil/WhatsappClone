import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios';
import { useState } from 'react';
function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })

  }, [])
  useEffect(() => {
    const pusher = new Pusher('eaa2a68c51a2dc308da0', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

  }, [messages])
  return () => {
    channel.unbin
  }


  console.log(messages)
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>

    </div>
  );
}

export default App;

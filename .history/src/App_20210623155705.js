import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
function App() {

  useEffect(() => {
    const pusher = new Pusher('eaa2a68c51a2dc308da0', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('my-event', function (data) {
      alert(JSON.stringify(data));
    });

  }, [])

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

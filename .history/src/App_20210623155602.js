import React, {use} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
function App() {

  useEffect(() => {
    
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

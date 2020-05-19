import React, {useState} from 'react';
import List from './components/List';
import Chat from './components/Chat';
import './css/App.css';
import './css/Header.css';
import './css/List.css';
import './css/Chat.css';

function App() {

  const [chatStatus, setChatStatus] = useState([]);
  
  const chatList = [
    {
      name:'Honey',
      pic: 'pp-2.jpg'
    }, 
    {
      name:'Eliezer Salvador',
      pic: 'eli.jpg'
    }, 
    {
      name:'Cloves Augusto da Silva',
      pic: 'cloves.jpg'
    }, 
    {
      name:'Elisa',
      pic: 'elisa.jpg'
    }
  ];

  return (
    <div className="App">
      <div className="frame">
        <div className="container">
          <List list={chatList} setChatStatus={setChatStatus} />
          <Chat chatStatus={chatStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;

// App.tsx
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import ChatList from './Components/ChatList';
import { fetchChatData } from './api/ChatApi';
import './App.css';
import MessageInput from './Components/MessageInput';

const App: React.FC = () => {
  const [chatData, setChatData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchChatData(page).then((data) => {
      setChatData(data);
    });
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
   console.log(chatData);
  return (
    <div className="app">
      <Header chatData={chatData} />
      <ChatList chatData={chatData} loadMore={handleLoadMore} />
    
      <MessageInput/>
    </div>
  );
};

export default App;

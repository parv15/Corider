// ChatList.tsx
import React, { useEffect, useRef, useState } from 'react';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import '../style/ChatList.css';

// ChatList.tsx
const ChatList: React.FC<{ chatData: ChatData[]; loadMore: () => void; loadPrevious: () => void }> = ({ chatData, loadMore, loadPrevious }) => {
    const chatListRef = useRef<HTMLDivElement>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const handleRefresh = () => {
      if (!isRefreshing) {
        setIsRefreshing(true);
        loadPrevious(); // Call the loadPrevious function to load older messages
      }
    };
  
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        loadMore(); // When the bottom of the chat list is reached, load more messages
      }
    };
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
  
      if (chatListRef.current) {
        observer.observe(chatListRef.current);
      }
  
      return () => {
        if (chatListRef.current) {
          observer.unobserve(chatListRef.current);
        }
      };
    }, [loadMore]);
  
    useEffect(() => {
      setIsRefreshing(false);
    }, [chatData]);
  
    return (
      <div ref={chatListRef} className="chat-list">
        {isRefreshing && <div className="refresh-indicator">Refreshing...</div>}
        {chatData.chats?.map((chat, index) => (
          chat.sender.self ? (
            <SenderMessage key={index} message={chat.message} />
          ) : (
            <ReceiverMessage key={index} message={chat.message} />
          )
        ))}
        <div className="load-previous" onPointerDown={handleRefresh}>
          Pull to Load Previous Messages
        </div>
      </div>
    );
  };
  export default ChatList;
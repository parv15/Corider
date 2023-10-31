// ChatMessage.tsx
import React from 'react';
import '../style/ChatMessage.css';

interface ChatMessageProps {
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    console.log(message);
  return <div className="SenderMessage">{message}</div>;
};

export default ChatMessage;

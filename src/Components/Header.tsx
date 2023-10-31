// Header.tsx
import React from 'react';
import '../style/Header.css';

const Header: React.FC<{ chatData: ChatData[] }> = ({ chatData }) => {
  return (
    <header>
      <h3>{chatData.name}</h3>
      <h4>From: {chatData.from}</h4>
      <h4>to: {chatData.to}</h4>

    </header>
  );
};

export default Header;

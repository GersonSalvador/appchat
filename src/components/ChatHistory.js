import React from 'react';
import ChatInit from './ChatInit';

export default function ChatHistory({chatStatus}){
  return(
    <div className="chatHistory">
    {
      chatStatus.length === 0
          ? <ChatInit />
          : 'clicked'
    }
    </div>
  )
}
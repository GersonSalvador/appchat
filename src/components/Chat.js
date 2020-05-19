import React from 'react';
import ChatFooter from './ChatFooter';
import ChatHistory from './ChatHistory';
import HeaderChatHistory from './HeaderChatHistory';

export default function Chat({chatStatus}){

  return(
    <section className="chat">
      { 
        <>
          <HeaderChatHistory chatStatus={chatStatus} />
          <ChatHistory chatStatus={chatStatus} />
          <ChatFooter />
        </>
      }
    </section>
  )
}
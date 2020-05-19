import React from 'react';
// import img from '../img/pp.jpg';

export default function HeaderChatHistory({chatStatus}){

  console.log('chatStatus',chatStatus)

  return(
    <header>
      <div className="profile">
        <div className="circle">
          {
            !chatStatus.pic
            ? <></>
            : <img src={require(`../img/${chatStatus.pic}`)} alt="Perfil"/>
          }
        </div>
      </div>
    </header>
  )
}
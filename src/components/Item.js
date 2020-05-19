import React from 'react';

export default function Item({info,setChatStatus, i}){

  return(
    <div className="item" onClick={() => {setChatStatus(info)}}>
      <div>
        <div>
          <div className="profileContainer">
            <div className="profile">
              <div className="circle">
                <img src={require(`../img/${info.pic}`)} alt="Perfil"/>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="top">
              <div className="name">
                <span>
                  <span>{info.name}</span>
                </span>
              </div>
              <div className="date">Ontem</div>
            </div>
            <div className="msg">
              <div>
                <span>
                  <span>https://</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
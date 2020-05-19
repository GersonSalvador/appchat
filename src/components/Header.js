import React from 'react';
import img from '../img/pp.jpg';

export default function Header(){
  return(
    <header>
      <div className="profile">
        <div className="circle">
          <img src={img} alt="Perfil"/>
        </div>
      </div>
    </header>
  )
}
import React from 'react';
import ItemGroup from './ItemGroup';
import Header from './Header';

export default function List({list, setChatStatus}){
  return(
    <section className="list">
      <Header />
        <div className="search">
          <div>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>
        </div>
      <ItemGroup list={list} setChatStatus={setChatStatus}/>
    </section>
  )
}
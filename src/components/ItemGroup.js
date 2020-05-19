import React from 'react';
import Item from './Item';

export default function ItemGroup({list, setChatStatus}){

  const items = list.map((item,i) => <Item key={i} i={i} info={item} setChatStatus={setChatStatus}/>);

  return(
    <div className="listGroup">
      {items}
    </div>
  )
}
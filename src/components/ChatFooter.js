import React, {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import IconBtn from './IconBtn';

export default function ChatFooter(){
  const [iconConsole, setIconConsole] = useState(['smiley']);

  function clickHandle (ord, dataIcon){
    console.log('clicked')
    if(ord === 0){
      if(dataIcon === 'smiley'){
        setIconConsole(['x', 'smiley', 'gif', 'sticker']);
      }else{
        setIconConsole(['smiley']);
      }
    }
  }

  // function keyHandle(a){

  //   console.log('textarea',a)

  // }

  return(
    <footer>
      <div className="container">
        <div>
          <div style={{'width':iconConsole.length > 1 ? '120px': '26px'}}>
            {iconConsole.map((item, i) => <IconBtn key={i} ord={i} dataIcon={item} clickHandle={clickHandle} />)}
          </div>
        </div>
        <div>
          <TextareaAutosize
            minRows={1}
            maxRows={4}
          />
        </div>
        <div>
          <div>
            <IconBtn key="1" ord="1" dataIcon="ptt" clickHandle={clickHandle}/>
          </div>
        </div>
      </div>
    </footer>
  )
}
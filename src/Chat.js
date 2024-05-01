import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));

    }, []);

    const sendMessage = (e) => {

    }

  return (
    <div className="chat">

        <div className='chat__header'>
            <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?${seed}`} />
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                  <SearchOutlined />
                </IconButton>
                <IconButton>
                  <AttachFile />
                </IconButton>
                <IconButton>
                  <MoreVert/>
                </IconButton> 

            </div>

        </div>

        <div className="chat__body">
            <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className='chat__name'>Brian Coder</span>
                This is the beast..!
            <span className='chat__timestamp'>3:52pm</span>

            </p>
            <p className='chat__message'>
                This is the beast, I cant wait to showcase this to the guys.!
            </p>
        </div>

        <div className="chat__footer">
            <InsertEmoticon />
            <form>
                <input value={input} type='text' placeholder='Type a message' />
                <button onClick={sendMessage}>Send a message</button>
            </form>
            <Mic />

        </div>
      
    </div>
  )
}

export default Chat

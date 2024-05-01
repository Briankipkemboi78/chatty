import React, { useState, useEffect } from 'react';
import './SidebarChat.css'
import { Avatar } from '@mui/material';

function SidebarChat({ addNewChat}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));

    }, []);

    const createChat = () => {
      const roonName = prompt("Please enter name for chat");

      if (roonName) {
        // do database stuff...
      }
    };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?${seed}`} />
      <div className="sidebarChat__info"> 
        <h2>Room Name</h2>
        <p>Last message...</p>

      </div>
    </div>
  ): (
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>

  );
}

export default SidebarChat;

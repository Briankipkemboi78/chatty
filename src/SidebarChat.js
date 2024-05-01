import React, { useState, useEffect } from 'react';
import './SidebarChat.css'
import { Avatar } from '@mui/material';

function SidebarChat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));

    }, []);

  return (
    <div className='sidebarChat'>
      <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?${seed}`} />
        <h2>Room Name</h2>
        <p>Last message...</p>

    </div>
  )
}

export default SidebarChat;

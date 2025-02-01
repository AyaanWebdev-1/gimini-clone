import React, { useState } from 'react'
import { assests } from '../../assets/assets'
import "./Sidebar.css"

function Sidebar() {

  const [extended,setExtended]=useState(false);
  return (
    <div className='Sidebar'>
        <div className='top'>
            
           <img className="menu" onClick={()=>setExtended(prev=>!prev)}src={assests.menu_icon} alt="" />
           
        
        <div className="new-chat">
            <img src={assests.plus_icon} alt="" />
            {extended? <p>New Chat</p>:null}
        </div>
       {extended?
       <div className="recent">
       <p className='recent-title'>
          <div className="recent-entry">
          <img src={assests.message_icon} alt="" />
          <p>What is React...</p>
           
           </div> 
            
       </p>
       </div>:null} 

        
        </div>
      <div className="bottom">
           <div className="bottom-icon recent-entry">
            <img src={assests.question_icon} alt="" />
            {extended?<p>Help</p>:null}
           </div>
           <div className="bottom-icon recent-entry">
            <img src={assests.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
           </div>
           <div className="bottom-icon recent-entry">
            <img src={assests.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
           </div>
      </div>
    </div>
  );
}

export default Sidebar

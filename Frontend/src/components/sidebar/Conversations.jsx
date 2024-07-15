import React from 'react'
import useGetConversations from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emojis';
const Conversations = () => {
   const {loading , Conversations}=useGetConversations();
   console.log("CONVERSATIONS:" , Conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {Conversations.map((Conversation , idx) =>(
        <Conversation key={Conversation._id}
        Conversation ={Conversation}
        emoji ={getRandomEmoji}
        lastIdx = {idx === Conversations.length -1}
        ></Conversation>
      ))}
      {loading ? <span className='loading loading-spinner mx-auto '></span> : null}

    </div>
  )
}

export default Conversations
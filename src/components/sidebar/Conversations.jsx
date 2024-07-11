import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emoijs";
import Conversation from "./Conversation"

const Conversations = () => {

   const { conversations, loading } = useGetConversations();
  console.log(conversations);
    return (
      <div className=" py-2 flex flex-col overflow-auto ">

        {
          conversations.map((conv, idx)=> (
           <Conversation key={conv._id} 
           conversation={conv} 
           emoij={getRandomEmoji()}
           lastIdx={ idx === conversations.length - 1  }/>
          ))
        }
        {
          loading ? <span className=" loading loading-spinner"></span> : null
        }
      </div>
    )
  }
  
  export default Conversations





  
// import Conversation from "./Conversation"

// const Conversations = () => {
//     return (
//       <div className=" py-2 flex flex-col overflow-auto ">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//       </div>
//     )
//   }
  
//   export default Conversations
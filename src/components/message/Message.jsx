
import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"

const Message = ({ message  }) => {
 
  const {authUser}  = useAuthContext()
  const  { selectedConversation }   = useConversation()
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture
  const bubbleColor = fromMe ? 'bg-blue-500'  : ""

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
            <img alt="Tailwindcss chat bubble" 
            src={profilePic}
            />
        </div>
      </div>


      <div className={`chat-bubble text-white ${bubbleColor} pb-2
       ${shakeClass}`}> 
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  )
}

export default Message





// const Message = () => {
//   return (
//     <div className=" chat chat-end ">
//       <div className=" chat-image avatar">
//         <div className=" w-10 rounded-full">
//             <img alt="Tailwindcss chat bubble" 
//             src={
//                 "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//                 }
//             />
//         </div>
//       </div>


//       <div className={`chat-bubble text-white bg-blue-500 `}> Hi! What is up?</div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//     </div>
//   )
// }

// export default Message

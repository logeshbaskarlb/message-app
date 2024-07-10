/* eslint-disable react/prop-types */
import { useSocketContext } from "../../context/ScoketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoij }) => {

  const { selectedConversation,setSelectedConversation  } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  const {onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
 
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded py-2 p-2 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}`} onClick={() => setSelectedConversation(conversation)}>

        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className=" w-12 rounded-full ">
            <img
              src={conversation.profilePicture}
              alt="user avatar"
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className=" font-bold text-gray-200">
                  {conversation.fullname}
                </p>
                <span className=" text-xl">{emoij}</span>
            </div>
        </div>
      </div>
      {!lastIdx  &&  <div className=" divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;




// const Conversation = () => {
//   return (
//     <>
//       <div className=" flex gap-2 items-center hover:bg-sky-500 rounded py-2 p-2 cursor-pointer">
//         <div className=" avatar online ">
//           <div className=" w-12 rounded-full ">
//             <img
//               src="https://cdn.iconfinder.com/data/icons/communication-line-10/24/
//               account_profile_uper_contact_person_avatar_placeholder-512.png"
//               alt="user avatar"
//             />
//           </div>
//         </div>
//         <div className=" flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className=" font-bold text-gray-200">oki</p>
//                 <span className=" text-xl">🍾</span>
//             </div>
//         </div>
//       </div>
//       <div className=" divider my-0 py-0 h-1"></div>
//     </>
//   );
// };

// export default Conversation;

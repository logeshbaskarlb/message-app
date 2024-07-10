import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"

const NoChatSelected = () =>{
  return(
    <div className=" flex items-center justify-center w-full h-full">
      <div className=" px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Loki</p>
        <p>Select a chat to start message</p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}

const MessageContainer = () => {

	const { selectedConversation, setSelectedConversation } = useConversation()

	useEffect(()=>{
		
		// clean up conversation
		return () => setSelectedConversation(null)
	},[setSelectedConversation])

//   const noChatSelected = false
  return (
      <div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
  )
}

export default MessageContainer





























// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   return (
//     <div className=" md:min-w-[450px] flex flex-col">
//         <>
//         {/* <Headers /> */}
//         <div className=" bg-slate-500 px-4 py-2 mb-2">
//             <span className=" label-text "> To:</span>
//             <span className=" text-gray-900 font-bold">Loki</span>
//         </div>

//         <Messages />
//         <MessageInput />
//         </>
      
//     </div>
//   )
// }

// export default MessageContainer

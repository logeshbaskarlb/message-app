import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL || "";

const useLogin = () =>{

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const login = async (username, password) => {

            
    const success = handleInputErrors({ username,password })
    if(!success)   return;

        setLoading(true)
        try {
            const res = await axios.post(`/api/auth/login`, {
               username, password
            }) 

            const data =  res.data
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            toast.success("Login Successful")
        } catch (error) {
            toast.error( "Invalid password" , error.message);
        } finally {
            setLoading(false)
        }
    }
    return {loading, login}

}

export default useLogin



function handleInputErrors({username,password}) {
    if( !username || !password  ){
        toast.error("Please fill in all fields")
        return false
    }
    return true
}
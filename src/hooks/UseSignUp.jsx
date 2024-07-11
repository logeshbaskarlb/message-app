import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const UseHooks = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, authUser } = useAuthContext();
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    try {
      setLoading(true)
      const config =  {
        headers : {
          Authorization: authUser ? `Bearer ${authUser.token}` : '',
        }
      }
      const res = await axios.post(`${apiUrl}/api/auth/signup`, {
        fullname,
        username,
        password,
        confirmPassword,
        gender,
      }, config);
      console.log(res);
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Signup successful");
      // context
    } catch (error) {
      toast.error(error.message);
      console.log("Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default UseHooks;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Please check username and password");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const UseHooks = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  // const apiUrl = import.meta.env.VITE_API_URL || ""

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
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success('Signup successful');
      // context
    } catch (error) {
      toast.error("Signup",error.message);
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

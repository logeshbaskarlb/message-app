import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignUp from "../../hooks/UseSignUp";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckBox = (gender) => {
    setInput({ ...input, gender });
  };

  const {loading, signup} = useSignUp()

  const handleSubmit = async (e) => {
    console.log(input);
    e.preventDefault();
    await signup(input)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender */}
          <GenderCheckbox selectedGender={input.gender} onCheckBoxChange={handleCheckBox} />
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account
          </Link>
          <div>
            <button className="btn btn-block btn-sm border border-slate-700" type="submit" disabled={loading}>
              {
                loading ? <span className=" loading loading-spinner"></span> :  "Sign Up"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



// Stater page


// import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className=" text-3xl font-semibold text-center text-gray-300">
//           Sign Up  <span className=" text-blue-500">ChatApp</span>
//         </h1>

//         <form action="">
//         <div>
//             <label htmlFor="" className=" label p-2">
//                 <span className=" text-base label-text">First Name</span>
//             </label>
//             <input type="text" placeholder="Enter firstname" className=" w-full input input-bordered h-10" />
//         </div>
//         <div>
//             <label htmlFor="" className=" label p-2">
//                 <span className=" text-base label-text">User Name</span>
//             </label>
//             <input type="text" placeholder="Enter username" className=" w-full input input-bordered h-10" />
//         </div>

//         <div>
//             <label htmlFor="" className=" label">
//                 <span className=" text-base label-text">Password</span>
//             </label>
//             <input type="text" placeholder="Enter password" className=" w-full input input-bordered h-10" />
//         </div>
//         <div>
//             <label htmlFor="" className=" label">
//                 <span className=" text-base label-text">Confirm Password</span>
//             </label>
//             <input type="text" placeholder="Enter password" className=" w-full input input-bordered h-10" />
//         </div>

//         {/* Gender  */}
//         <GenderCheckbox />
//         <a href="#/" className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-blockblock">
//          Already have an account
//         </a>
//         <div>
//         <button className="btn btn-block btn-sm border border-slate-700">Sign Up</button>

//         </div>
//         </form>
//       </div>
      
//     </div>
//   )
// }

// export default SignUp

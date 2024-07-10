
// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {




  return (
    <div className=" flex">
      <div className=" form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text ">Male</span>
            <input type="checkbox" className=" checkbox border-slate-900" 
            checked= {selectedGender === "male"}
            onChange={()=> onCheckBoxChange("male")}
            name="" id="" />
        </label>
      </div>

      <div className=" form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text ">Female</span>
            <input type="checkbox" className=" checkbox border-slate-900" 
            checked= {selectedGender === "female"}
            onChange={()=> onCheckBoxChange("female")}
            name="" id="" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox




// const GenderCheckbox = () => {
//     return (
//       <div className=" flex">
//         <div className=" form-control">
//           <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//               <span className="label-text ">Male</span>
//               <input type="checkbox" className=" checkbox border-slate-900" name="" id="" />
//           </label>
//         </div>
  
//         <div className=" form-control">
//           <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//               <span className="label-text ">Female</span>
//               <input type="checkbox" className=" checkbox border-slate-900" name="" id="" />
//           </label>
//         </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckbox
  
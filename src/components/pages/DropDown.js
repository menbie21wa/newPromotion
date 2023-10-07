// import React from 'react'
// import { useState } from 'react'

// export const DropDown = () => {
// const [fields, setFields] = useState({})
// function handleChange(event) {
//   const target = event.target;
//   const value = target.type === "checkbox" ? target.checked : target.value;
//   const name = target.name;
    
//   setFields({
//     ...fields,
//     [name]: value
//   });
// }
// return (
//         <form>
//             <label htmlFor="startupName">Startup Name</label>
//             <input type="text" 
//                 name="startupName"                     
//                 onChange={handleChange}
//                 value={fields["startupName"]}
//             />

//             <label htmlFor="countryName">Country</label>                
//             <input type="text" 
//                 name="countryName"                     
//                 onChange={handleChange}
//                 value={fields["countryName"]}
//             />            

//             <label htmlFor="revenueGenerated">Do you make revenue?</label>
//             <select name="revenueGenerated"
//                 onChange={handleChange}
//                 value={fields["revenueGenerated"]}
//             >
//                 <option disabled selected value=''> -- select an option -- </option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//             </select>

//             { fields['revenueGenerated'] === 'Yes' ?
//                <>
//                    <label htmlFor="numberOfUsers">Sample Yes</label>
//                    <input type="text"
//                        name="numberOfUsers"
//                    />
//                </>
//                : null
//            } 
            
//         </form>            )}

//import useRef
//import useRef
import { useState, useRef } from "react";

function DropDown() {
  const [formValues, setFormValues] = useState([]);
  const [toggle, setToggle] = useState(false);

  const inputRef = useRef();
  const selectRef = useRef();
  
  const handleChange = (e, index) => {
     const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      label: inputRef.current.value || "label",
      type: selectRef.current.value || "text",
      value: "",
    });
    setFormValues(values);
    setToggle(false);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  return (
    <div className="App">
      <form>
      {formValues.map((obj, index) => (
          <input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
          />
        ))}

        {!toggle ? (
          <div className="center">
            <button className="add-btn" onClick={addBtnClick}>
              Add new
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="label" ref={inputRef} />
            <select ref={selectRef}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
export default DropDown;

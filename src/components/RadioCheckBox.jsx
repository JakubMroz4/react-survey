import React from 'react'

function RadioCheckBox({name, textContent, value, formValue, handleChange}) {
    const id = `${name}-${value}`;
  return (
    <div>
        <li>
            <input type="radio" id={id} name={name} value={value} onChange={(e) => {
    console.log("Radio clicked:", e.target.name, e.target.value);
    handleChange(e);
  }} checked={formValue === value}/>
            <label htmlFor={id}>{textContent}</label>
        </li>
    </div>
  )
}

export default RadioCheckBox
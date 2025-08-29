import React from 'react'

function RadioCheckBox({name, textContent, value, formValue, handleChange}) {
  return (
    <div>
        <li>
            <input type="radio" name={name} value={value} onChange={handleChange} checked={formValue === value}/>
            <label>{textContent}</label>
        </li>
    </div>
  )
}

export default RadioCheckBox
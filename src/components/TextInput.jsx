import React from 'react'

function TextInput({name, formDataValue, handleChange}) {
  return (
    <div>
        <input name={name}
            type="text"
            value={formDataValue}
            onChange={handleChange} />       
    </div>
  )
}

export default TextInput
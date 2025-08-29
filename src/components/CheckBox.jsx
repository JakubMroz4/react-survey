import React from 'react'

export const CheckBox = ({name, textContent, formDataValue, handleChange}) => {

  return (
    <div><li><label
      ><input
        name={name}
        type="checkbox"
        checked={formDataValue}
        onChange={handleChange}
      />{textContent}</label
    ></li></div>
  )
}

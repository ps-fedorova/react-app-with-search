import React from 'react'
import './Input.css'

function Input({placeHolder, handleChange}) {
    return (
        <input
        type="text"
        className="Input"
        placeholder={placeHolder}
        onChange={handleChange}
        />
    )
}
export default Input
import React from 'react'
import './Input.css'

function Input({placeHolder, handleChange, value}) {
    return (
        <input
        type="text"
        className="Input"
        placeholder={placeHolder}
        onChange={event => handleChange(event.target.value)}
        value={value}
        />
    )
}
export default Input

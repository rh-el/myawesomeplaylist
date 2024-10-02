import { useState } from "react"

  
const Input = props => {
    return (
        <>
            <input
                type="text"
                className="second h-16 w-full md:w-3/6 text-center bg-transparent px-3 py-1 text-sm shadow-sm duration-200 rounded-xl focus:outline-none focus:border focus:border-customred"
                placeholder={props.placeholder}
                onChange={props.handleInputChange}
                value={props.input}/>
        </>
    )
  }



export default Input
import { useState } from "react"

  
const Input = props => {
    const className = props.valid ? "second h-16 w-full md:w-3/6 text-center bg-transparent px-3 py-1 text-sm shadow-sm duration-200 rounded-xl focus:outline-none focus:border focus:border-customred" : "h-16 w-full md:w-3/6 text-center bg-customred px-3 py-1 text-sm text-custompink shadow-sm duration-200 rounded-xl focus:outline-none focus:border focus:border-customred"
    return (
        <>
            <input
                type="text"
                className={className}
                placeholder={props.placeholder}
                onChange={props.handleInputChange}
                value={props.input}/>
        </>
    )
  }

export default Input
import { createClient } from '@supabase/supabase-js'

  const Button = props => {
    return (
        <>
            <button className="px-8 border  py-2 rounded-xl duration-200 text-custompink bg-customred hover:bg-custompink hover:border hover:border-customred hover:text-customred " onClick={props.handleSubmit}>{props.buttonText}</button>
        </>
    )
  }


export default Button
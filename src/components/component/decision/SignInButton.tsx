import React from "react";
import FoxImg from '../../../../public/images/fox.png'

export const  SignInButton = () => {
    return(
        <button className="bg-transparent hover:bg-grey text-white font-bold py-2 px-8 rounded-3xl inline-flex items-center border-2 border-white">
          <img src={FoxImg} />
        </button>
    )
}


export default SignInButton;
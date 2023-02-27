import React from "react";

const SmallButton = (props) =>{
    const {type = 'simple', name, image = null} = props;
    return(
      <>
       {
         type === 'simple' ?
         <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-12 border border-white rounded text-xs">
            {name}
         </button>
         :
         <div className="bg-black hover:bg-gray-900 text-white font-bold   border border-white rounded text-xs inline-flex items-center">
            <span className="pl-12 pr-8 py-2">{name}</span>
            <img src={image}  className="h-5 float-right mr-2"/>
         </div>
       }
      </>
    )
}

export default SmallButton;
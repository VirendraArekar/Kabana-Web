import React from "react";
import  DecisionIcon  from "../../../../public/images/decision big icon.png";
import GithubImg from '../../../../public/images/Github.png'
import SmallButton from "./SmallButton";

export const  HowToPlay = () => {
    return(
        <>
            <div className="grid place-items-center w-full  bg-black text-white">
                 <h3 className="text-6xl font-thin mt-16 mb-4">How to Play</h3>  
            </div>
            <div className="grid  place-items-center w-full  bg-black text-white text-lg my-9">
                For Tutorials on How to play, please visit out Tutorials page.{'\n'}
                For info on cards, please visit our Cards Wiki Page or our Docs.
            </div>
            <div className="grid place-items-center w-full  grid-cols-3 gap-4 text-white my-9 mx-56 px-56">
                <SmallButton name={'CARDS WIKI'}/>
                <SmallButton name={'DOCS'}  type="image" image={GithubImg}/>
                <SmallButton name={'TUTORIALS'}/>
            </div>
         </>
    )
}


export default HowToPlay;
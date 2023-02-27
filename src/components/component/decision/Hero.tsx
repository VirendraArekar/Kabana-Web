import React from "react";
import FoxImg from '../../../../public/images/fox.png'
import  DecisionIcon  from "../../../../public/images/decision big icon.png";

export const  Hero = () => {
    return(
        <>
            <div className="grid place-items-center w-full  bg-black ">
                   
                        <img src={DecisionIcon}  className=" place-items-center mt-48"/>
                   
            </div>
            {/* <div className="grid h-screen place-items-center w-full  bg-black "> */}
                      <p className="grid  place-items-center w-full  bg-black text-white text-2xl my-9">
                        Kabana Clubs DECISION is an innovative card game that merge NFTs, Gambling, Staking,<br></br>
                        Mining, DeFi, & GameFi. Build on Polygon, players can stake crypto, gamble, mine & explore<br></br>
                         DeFi in a captivating game experience. This convergence pf tech & gaming changes the<br></br>
                         digital asset landscape & offers endless possibilities.
                     </p>
             {/* </div>  */}
         </>

    )
}


export default Hero;
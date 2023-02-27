import React from "react";
import TestImg from '../../../public/images/TEST NET.png';
import AlreadyImg from'../../../public/images/ALREADY AVALABLE ON TESTNET.png';
import GroupImg from '../../../public/images/Group 1642.png';
import GroupImgs from '../../../public/images/Group1641.png';


export const  SquareCard = () => {
    const playNow = () => {
        alert('Play Now');
    }

    const incomingSoon = () => {
        alert('Incoming Soon');
    }
    return(
        <div className="grid w-full place-items-center grid-cols-2 gap-8 text-white mx-96 my-4">
            <img src={GroupImg} className="mx-auto w-96 cursor-pointer" onClick={playNow}/>
            <img src={GroupImgs} className="mx-auto w-96 cursor-pointer" onClick={incomingSoon}/>
        </div>
    )
}


export default SquareCard;
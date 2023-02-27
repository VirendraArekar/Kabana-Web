import React from "react";
import Card from "./Card";
import KATYA from '../../../../public/images/KATYA.png'
import ALEX from '../../../../public/images/ALEX.png'
import DAN from '../../../../public/images/DAN.png'
import MARK from '../../../../public/images/MARK.png'

const BroughtToYou = () => {
  const peoples = [
    {name : 'KATYA', image : KATYA, job : 'ENGINE'},
    {name : 'ALEX', image : ALEX, job : 'CONSTRUCTOR'},
    {name : 'DAN', image : DAN, job :'SOLIDITY EXPERT'},
    {name : 'MARC', image : MARK, job : 'UNITY EXPERT'},
   ];
  return(
    <>
    <div className="grid place-items-center w-full  bg-black text-white">
         <h3 className="text-6xl font-thin mt-16 mb-24">Brought to you by</h3>  
    </div>
    <div className="grid w-full place-items-center grid-cols-4 gap-4 text-white mx-56 my-4">
       {
        peoples.map((item, index) =>  <Card {...item} />)
       }
    </div>
    </>
  )
}

export default BroughtToYou;
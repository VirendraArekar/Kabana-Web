import React from "react";
import Telegram from '../../../../public/images/Telegram black.png';
import Discord from '../../../../public/images/Discord black.png';
import Twitter from '../../../../public/images/twitter black.png';
import Github from '../../../../public/images/githab black.png';
import BigLogo from '../../../../public/images/footer logo.png';
import Contact from '../../../../public/images/Group contact.png'

const Footer = () => {
    return(
        <>
            <div className="grid w-1/5 place-items-center grid-cols-4 gap-2 text-white mt-28 mx-auto border-t-4 border-t-white  pt-2">
                <img src={Telegram} className="w-7"/>
                <img src={Discord} className="w-7"/>
                <img src={Twitter} className="w-7"/>
                <img src={Github} className="w-7"/>
            </div>
            <div className="grid place-items-center w-full  bg-black text-white ">
              <hr className="h-px my-2 bg-white border-2 dark:bg-gray- w-1/3" />
            </div>
            <div className="grid place-items-center w-full  bg-black text-white my-8">
                <img src={BigLogo} className="w-1/4"/>
                <img src={Contact} className="mt-6 w-64"/>
            </div>
           
        </>
    )
}

export default Footer;
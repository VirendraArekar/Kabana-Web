import React from "react";
import Telegram from '../../../../public/images/telegram.png';
import Twitter from '../../../../public/images/twitter.png';
import Tiktok from '../../../../public/images/ic_baseline-tiktok.png';
import Linkedin from '../../../../public/images/uil_linkedin.png'

const Card = (props) => {
    const {name, image, job} = props;
    return(
      <div className="rounded rounded-lg">
        <img src={image} />
        <div className="h-28 bg-white mx-1 rounded-b-lg">
           <p className="text-center text-black font-bold text-2xl pt-2 pb-1">{name}</p>
           <div className="grid grid-cols-4 gap-1 mx-10">
             <img src={Twitter} />
             <img src={Telegram} />
             <img src={Tiktok} />
             <img src={Linkedin} />
            </div>
            <p className="text-center text-zinc-600 font-bold text-xs p-1 pt-2">{job}</p>
        </div>
      </div>
    )
}

export default Card;
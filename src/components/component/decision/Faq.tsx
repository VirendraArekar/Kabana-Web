import React from "react";
import FoxImg from '../../../../public/images/fox.png'
import Accordion from "./Accordion";

export const  Faq = () => {
    const data = [
        {
          title: "Do i need NFT Mushroom for play?",
          content:
            "No, for bids under 10-99 you need only $ASS tokens."
        },
        {
          title: "What is max bet with Kabana Coina?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo."
        },
        {
          title: "What is the maximum bet?",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "What happen to the bet, if no one wins?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "How mush should I win from a 1 win?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Where i can get $ASS tokens?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Can't receive tokens from QuikSwap?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        
      ]
    return(
        <>
        <div className="grid place-items-center w-full  bg-black text-white">
             <h3 className="text-6xl font-thin mt-16 mb-4">FAQ</h3>  
        </div>
        <div className="grid  place-items-center w-full  bg-black text-white text-lg my-9">
            {data.map((item, index) => (
                <Accordion title={item.title} content={item.content} key={index}/>
            ))}
        </div>
     </>
    )
}

export default Faq;
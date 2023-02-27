import React, { useState, useRef } from "react"
import PlusImg from "../../../../public/images/Group1629.png"
import MinusImg from  "../../../../public/images/minus.png"
type AccordionProps = {
  title: string
  content: string
}
const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<string>("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight +10}px` : "0px")
  }
  return (
    <div onClick={HandleOpening} className="border rounded rounded-lg border-[#232323] w-2/3 my-1 shadow-inner">
      <div className={"bg-[#232323] p-4 py-2.5 flex justify-between text-white"}>
        <h4 className="font-semibold">{title}</h4>
        {
            isOpened ?
            <img src={MinusImg} className="h-4 w-6 my-1.5"/>
            :
            <img src={PlusImg} className="h-4 my-1.5"/>
        }
      </div>

      <div
        ref={contentElement}
        style={{ height: height }}
        className=" overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  )
}

export default Accordion

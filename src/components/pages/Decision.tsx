import {useState, useEffect, ReactNode, Children} from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '../component/decision/NavBar';
import cn from 'classnames';
import React from 'react';
import Hero from '../component/decision/Hero';
import SquareCard from './SquareCard';
import HowToPlay from '../component/decision/HowToPlay';
import Faq from '../component/decision/Faq';
import BroughtToYou from '../component/decision/BroughtToYou';
import Footer from '../component/decision/Footer';
export const Decision = () => {
  const { t } = useTranslation();
  return(
     <BlackBg>
       <NavBar />
       <Hero />
       <SquareCard />
       <HowToPlay />
       <Faq />
       <BroughtToYou />
       <Footer />
     </BlackBg>
  )
}


export const BlackBg =  ({ children, classname }: { children?: ReactNode; classname?: string }) => {
    return <div className={'bg-black ' + cn('flex flex-wrap', classname)}>{children}</div>;
}
import cn from 'classnames';
import React from 'react';
import { ButtonWithBg } from '../buttons/Button';
import { discordUrl, documentationUrl, lobbyUrl } from '../config/urls';

const Island = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={cn('bg-center bg-no-repeat inline-block align-middle', className)}>{children}</div>;
};

const IslandLeft = () => {
  return (
    <div className="w-[310px] h-[200px] mr-[-250px] inline-block">
      <div className="bg-cloud bg-center bg-no-repeat bg-cover w-[370px] h-[170px] mt-[-100px] ml-[-100px] absolute animate-floatX z-10 opacity-75" />
      <Island className="bg-islandLeft w-[310px] h-[370px] animate-floatY animation-delay-500 absolute z-0" />
      <ButtonWithBg
        className="bg-documentationButton mt-[180px] w-[300px]"
        url={documentationUrl}
        animation="animation-delay-500"
      />
      <div className="bg-cloud1 bg-center bg-no-repeat bg-cover w-[370px] h-[170px] absolute mt-[230px] animate-floatX" />
    </div>
  );
};

const IslandCenter = () => {
  return (
    <div className="w-[800px] h-[350px] inline-block">
      <Island className="bg-islandCenter w-[830px] h-[720px] absolute animate-floatY" />
      <ButtonWithBg className="bg-clubButton w-[200px] h-[80px] mt-[520px] ml-[440px]" url={discordUrl} />
    </div>
  );
};

const IslandRight = () => {
  return (
    <div className="w-[350px] h-[400px] inline-block">
      <div className="bg-cloud bg-center bg-no-repeat bg-cover w-[370px] h-[170px] mt-[-100px] absolute animate-floatX z-10 opacity-75" />
      <Island className="bg-islandRight w-[350px] h-[400px] animate-floatY animation-delay-900" />
      <ButtonWithBg
        className="bg-arenaBetaButton mt-[-120px] ml-[65px]"
        url={lobbyUrl}
        animation="animation-delay-900"
      />
      <div className="bg-cloud2 bg-center bg-no-repeat bg-cover w-[500px] h-[170px] absolute mt-[-100px] animate-floatX opacity-70" />
    </div>
  );
};

export const Islands = () => {
  return (
    <>
      <div className="bg-fog bg-center bg-no-repeat bg-cover h-[800px] w-full mt-[100px] opacity-40 absolute" />
      <div className="h-[870px] w-fit mx-auto">
        <IslandLeft />
        <IslandCenter />
        <IslandRight />
      </div>
    </>
  );
};

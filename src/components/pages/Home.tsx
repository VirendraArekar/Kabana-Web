import cn from 'classnames';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AlexContact, KabanContact, MemberContact, wolfCoinUrl } from '../config/urls';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <BlueSky>
        <Sun />
        <Menu />
      </BlueSky>
      <BlueSky>
        <Islands />
        <div className="bg-scrollDown bg-no-repeat bg-cover bg-center w-[5vw] h-[3vw] mt-[5vw] mx-auto mb-[15vw]" />
        <div className="bg-backToTop bg-no-repeat bg-cover bg-center w-[3vw] h-[4vw] mt-[5vw] pr-6 fixed right-10 bottom-10 z-50" />
      </BlueSky>
      <Dirt>
        <Logo />
        <Contacts />

        <p className="whitespace-pre-line text-white font-tuffy text-center text-2xl pt-10">{t('about')}</p>

        <div className="py-10 mx-auto w-fit">
          <div className="flex">
            <PicButton pic="bg-whitepaper" />
            <PicButton pic="bg-chart" />
          </div>
          <div className="flex">
            <PicButton pic="bg-audit" />
            <PicButton pic="bg-presale" />
          </div>
        </div>

        <div className="flex py-10 justify-center place-items-center">
          <div className="p-10 pr-[5vw]">
            <Title>{t('token.title')}</Title>
            <ul className="list-disc">
              <ListPoint>{t('token.p1')}</ListPoint>
              <ListPoint>{t('token.p2')}</ListPoint>
              <ListPoint>{t('token.p3')}</ListPoint>
              <ListPoint>{t('token.p4')}</ListPoint>
            </ul>
          </div>

          <iframe className="w-[20vw] h-[20vw] ml-[5vw]" src={wolfCoinUrl} />
        </div>

        <div className="flex py-10 justify-center place-items-center my-[5vw]">
          <div className="bg-shroom bg-no-repeat bg-center bg-cover w-[18vw] h-[18vw] mr-[1vw]" />

          <div className="p-10 pl-[9vw]">
            <Title>{t('shroom.title')}</Title>
            <ul className="list-disc">
              <ListPoint>{t('shroom.p1')}</ListPoint>
              <ListPoint>{t('shroom.p2')}</ListPoint>
              <ListPoint>{t('shroom.p3')}</ListPoint>
              <ListPoint>{t('shroom.p4')}</ListPoint>
              <ListPoint>{t('shroom.p5')}</ListPoint>
              <ListPoint>{t('shroom.p6')}</ListPoint>
            </ul>
          </div>
        </div>

        <div className="bg-mint bg-no-repeat bg-center bg-cover w-[25vw] h-[16vw] mx-auto my-[5vw]" />

        <div className="my-[5vw]">
          <Title classname="text-center py-10">{t('mine.title')}</Title>
          <div className="bg-cave bg-center bg-no-repeat bg-cover w-[40vw] h-[20vw] mx-auto" />
          <ul className="list-disc w-[40vw] mx-auto py-10 pl-[2vw]">
            <ListPoint>{t('mine.p1')}</ListPoint>
            <ListPoint>{t('mine.p2')}</ListPoint>
            <ListPoint>{t('mine.p3')}</ListPoint>
            <ListPoint>{t('mine.p4')}</ListPoint>
          </ul>
        </div>

        <div className="my-[5vw]">
          <Title classname="text-center py-10">{t('cards.title')}</Title>
          <div className="bg-cards bg-center bg-no-repeat bg-cover w-[40vw] h-[20vw] mx-auto" />
          <ul className="list-disc w-[40vw] mx-auto py-10 pl-[2vw]">
            <ListPoint>{t('cards.p1')}</ListPoint>
            <ListPoint>{t('cards.p2')}</ListPoint>
            <ListPoint>{t('cards.p3')}</ListPoint>
          </ul>
        </div>

        <p className="text-white font-truculenta text-5xl font-bold text-center py-[2vw]">THE TEAM</p>
        <div className="flex justify-center">
          <ContactCard contact={AlexContact} />
          <div className="bg-logo1 bg-center bg-no-repeat bg-cover w-[6vw] h-[5.8vw] place-self-center" />
          <ContactCard contact={KabanContact} />
        </div>

        <p className="text-slate-500 font-truculenta text-4xl text-center my-[5vw]">
          Please feel free to contact us through our socials or at
        </p>

        <div className="bg-email bg-center bg-no-repeat bg-cover w-[25vw] h-[3vw] mx-auto" />

        <div className="py-[5vw]" />
      </Dirt>

      <Stones />

      <NightSky>
        <div className="bg-allies bg-center bg-no-repeat bg-cover w-[40vw] h-[30vw] mt-[30vw] absolute mx-auto my-auto left-0 right-0" />
        <Moon />
        <Footer />
      </NightSky>
    </>
  );
};

const Footer = () => {
  return (
    <div className="bg-footer w-full h-[10vw] mt-[-10vw] flex place-items-center shadow-inner border-t-2 border-slate-700">
      <div className="bg-footerlogo bg-center bg-cover bg-no-repeat w-[30vw] h-[70%] ml-[5vw]" />
      <div className="ml-auto mr-[10vw]">
        <p className="text-white font-truculenta text-4xl font-bold mb-4">Follow Our Socials</p>
        <div className="flex justify-between place-items-center">
          <Contact pic="bg-telegramWhite" />
          <Contact pic="bg-discordWhite" />
          <Contact pic="bg-twitterWhite" />
          <Contact pic="bg-githubWhite" />
        </div>
      </div>
    </div>
  );
};

export const Moon = () => {
  return <div className="bg-moon bg-center bg-no-repeat bg-contain w-full h-full ml-[-22vw]" />;
};

export const NightSky = ({ children, classname }: { children?: ReactNode; classname?: string }) => {
  return (
    <div className={cn('bg-nightsky bg-center bg-cover bg-no-repeat w-full h-[90vw] mt-[-25vw]', classname)}>
      {children}
    </div>
  );
};

export const Stones = () => {
  return <div className="bg-stones bg-no-repeat bg-cover bg-center w-full h-[49vw] relative" />;
};

export const ContactCard = ({ contact }: { contact: MemberContact }) => {
  return (
    <div className={cn('bg-gradient-to-b from-black h-[22vw] w-[15.5vw] mx-[3vw] rounded-2xl', contact.toGradient)}>
      <div className={cn('bg-center bg-no-repeat bg-cover h-full w-full', contact.photo)} />
    </div>
  );
};

export const PicButton = ({ pic }: { pic?: string }) => {
  return <div className={cn('bg-no-repeat bg-center bg-cover w-[10vw] h-[2vw] my-[1vw] mx-[2vw]', pic)} />;
};

export const Contacts = () => {
  return (
    <div className="flex justify-center mt-[-2vw]">
      <Contact pic="bg-telegram" />
      <Contact pic="bg-discord" />
      <Contact pic="bg-twitter" />
      <Contact pic="bg-github" />
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="flex justify-center place-items-center pt-10 ml-[-5vw]">
      <div className="bg-logo bg-no-repeat bg-center bg-cover w-[10vw] h-[10vw]" />
      <p className="text-white font-truculenta font-bold text-7xl ml-[-2vw]">KABANA CLUB</p>
    </div>
  );
};

export const Dirt = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Grass />
      <div className="bg-dirt bg-no-repeat bg-center bg-cover mt-[-2vw]">{children}</div>
    </div>
  );
};

export const Grass = () => {
  return (
    <div className="bg-grassBackdrop bg-no-repeat bg-cover w-full h-[11vw] mt-[-10vw] relative">
      <div className="bg-grass bg-no-repeat bg-cover w-full h-[11vw]" />
    </div>
  );
};

export const RightIsland = () => {
  return <div className="bg-rightIsland bg-no-repeat bg-cover w-[13vw] h-[15vw] ml-[-2vw]"></div>;
};

export const LeftIsland = () => {
  return <div className="bg-leftIsland bg-no-repeat bg-cover w-[13vw] h-[15vw]"></div>;
};

export const CenterIsland = () => {
  return <div className="bg-centerIsland bg-no-repeat bg-cover bg-center w-[30vw] h-[26vw] ml-[-12vw]"></div>;
};

export const Islands = () => {
  return (
    <div className="z-0 mx-auto flex place-items-center mt-[5vw] basis-full justify-center">
      <LeftIsland />
      <CenterIsland />
      <RightIsland />
    </div>
  );
};

export const Menu = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-fit h-fit absolute ml-[15%] mt-4">
        <Title classname="mx-6 cursor-pointer">{t('menu.token')}</Title>
        <Title classname="mx-6 cursor-pointer">nft</Title>
        <Title classname="mx-6 cursor-pointer">{t('menu.mining')}</Title>
        <Title classname="mx-6 cursor-pointer">{t('menu.game')}</Title>
        <Title classname="mx-6 cursor-pointer">team</Title>
      </div>

      <div className="bg-connectwallet bg-center bg-no-repeat bg-cover w-[12vw] h-[2.5vw] cursor-pointer ml-auto mt-4 mr-10" />
    </>
  );
};

export const BlueSky = ({ children, classname }: { children?: ReactNode; classname?: string }) => {
  return <div className={cn('bg-sky flex flex-wrap', classname)}>{children}</div>;
};

export const Sun = () => {
  return <div className="bg-sun bg-center bg-cover bg-no-repeat w-[40vw] h-[40vw] absolute" />;
};

export const Title = ({ children, classname }: { children?: ReactNode; classname?: string }) => {
  return (
    <p className={cn(classname, 'uppercase text-white text-3xl mb-6 cursor-default font-extrabold')}>{children}</p>
  );
};

export const ListPoint = ({ children }: { children?: ReactNode }) => {
  return <li className="text-white text-2xl mb-2 ml-4 cursor-default font-tuffy">{children}</li>;
};

export const Contact = ({ pic }: { pic?: string }) => {
  return <div className={cn(pic, 'bg-center bg-no-repeat bg-cover w-[1.5vw] h-[1.5vw] mx-3 mb-8 cursor-pointer')} />;
};

export const Dirt1 = ({ pic, children }: { pic?: string; children?: ReactNode }) => {
  return <div className={cn('bg-center bg-auto w-full h-fit', pic)}>{children}</div>;
};

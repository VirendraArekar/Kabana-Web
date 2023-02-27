import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBook,
  faChartSimple,
  faFileCircleCheck,
  faHouse,
  faLock,
  faPeopleGroup,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AlexContact,
  KabanContact,
  auditsUrl,
  chartUrl,
  discordUrl,
  email,
  githubUrl,
  mintUrl,
  presaleUrl,
  telegramUrl,
  twitterUrl,
  whitepaperUrl,
  wolfCoinUrl,
} from '../config/urls';
import { List } from '../misc/List';
import { openLink } from '../misc/util';
import { TeamMemberProps } from '../sections/Team';

const SidemenuRow = ({ icon, text, onClick }: { icon: IconProp; text: string; onClick: () => void }) => {
  return (
    <div
      className="flex font-tuffy text-white mx-auto my-[1vh] p-[1vh] shadow-xl backdrop-blur-3xl cursor-pointer"
      onClick={onClick}
    >
      <div className="w-[3vh]">
        <FontAwesomeIcon icon={icon} size={'2x'} />
      </div>

      <span className="text-3xl mx-[2vh]">{text}</span>
    </div>
  );
};

export const HomeMobile = () => {
  const [sidemenuIsOpen, sidemenuSetOpen] = useState(false);
  const [languageMenuIsOpen, languageMenuSetOpen] = useState(false);

  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    languageMenuSetOpen(false);
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple via-bg to-purple h-full">
      {!languageMenuIsOpen && (
        <div
          className="fixed right-0 p-[2vh] text-tuffy text-white uppercase text-2xl bg-slate-500 bg-opacity-40 rounded-bl-xl cursor-pointer z-50"
          onClick={() => languageMenuSetOpen(true)}
        >
          {i18n.language}
        </div>
      )}

      {languageMenuIsOpen && (
        <div className="fixed w-fit bg-slate-500 right-0 rounded-bl-2xl bg-opacity-40 backdrop-blur-sm z-50 h-fit">
          <ul className="p-[1vh]">
            {Object.keys(i18n.services.resourceStore.data)
              .filter((l) => l !== i18n.language)
              .map((lang) => (
                <li
                  key={lang}
                  className="p-[2vh] mb-[1vh] w-fit uppercase text-white text-tuffy text-3xl bg-slate-500 bg-opacity-50 rounded-3xl cursor-pointer"
                >
                  <div onClick={() => handleLanguageChange(lang)}>{lang}</div>
                </li>
              ))}
          </ul>
          <div className="w-fit h-fit p-[1vh] mx-auto" onClick={() => languageMenuSetOpen(false)}>
            <FontAwesomeIcon icon={faXmark} size={'3x'} color={'white'} />
          </div>
        </div>
      )}

      {sidemenuIsOpen && (
        <div className="fixed h-full w-[30vh] bg-slate-500 bg-opacity-50 backdrop-blur-sm z-50 shadow-xl">
          <div className="w-fit h-fit p-[1vh] mx-auto" onClick={() => sidemenuSetOpen(false)}>
            <FontAwesomeIcon icon={faXmark} size={'3x'} color={'white'} />
          </div>
          <div>
            <SidemenuRow
              icon={faHouse}
              text="Home"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                sidemenuSetOpen(false);
              }}
            />
            <SidemenuRow
              icon={faPeopleGroup}
              text="Team"
              onClick={() => {
                document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                sidemenuSetOpen(false);
              }}
            />
            <SidemenuRow
              icon={faBook}
              text="Whitepaper"
              onClick={() => {
                openLink(whitepaperUrl);
              }}
            />
            <SidemenuRow
              icon={faFileCircleCheck}
              text="Audit"
              onClick={() => {
                openLink(auditsUrl);
              }}
            />
            <SidemenuRow
              icon={faLock}
              text="Presale"
              onClick={() => {
                openLink(presaleUrl);
              }}
            />
            <SidemenuRow
              icon={faChartSimple}
              text="Chart"
              onClick={() => {
                openLink(chartUrl);
              }}
            />
          </div>
        </div>
      )}

      <div className="flex">
        <Logo />
        <div className="bg-cloud2 bg-center bg-no-repeat bg-cover opacity-90 w-[30vh] h-[10vh] ml-auto mt-[2vh] animate-floatLeft" />
      </div>

      {!sidemenuIsOpen && (
        <div className="fixed z-50 ml-[2vh] p-[1vh]" onClick={() => sidemenuSetOpen(true)}>
          <FontAwesomeIcon icon={faBars} size={'3x'} color="white" />
        </div>
      )}

      <ClubIsland />
      <ArenaIsland />
      <DocumentationIsland />
      <ContactMenu />
      <About />
      <KabanaClubWolfCoin />
      <NftShroom />
      <Mining />
      <GameToken />
      <Allies />
      <Team />
      <ContactMenu />
      <Footer />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="h-[15vh] w-[15vh] rounded-full bg-gradientRadial from-white via-transparent flex justify-center place-items-center">
      <div className="bg-logo bg-no-repeat bg-center bg-cover h-[8vh] w-[8vh]" />
    </div>
  );
};

const ClubIsland = () => {
  return (
    <div className="bg-islandCenterMobile bg-no-repeat bg-center bg-cover w-full h-[60vh] max-h-[600px] mx-auto mt-[-50px] flex justify-center animate-floatY">
      <div className="bg-clubButton bg-no-repeat bg-center w-[60vw] max-w-[250px] h-[10vh] mt-[40vh] inline-block cursor-pointer transition-transform delay-75 hover:scale-125"></div>
    </div>
  );
};

const ArenaIsland = () => {
  return (
    <>
      <div className="bg-fog bg-center bg-no-repeat bg-cover h-[40vh] w-full opacity-30 absolute" />
      <div className="bg-islandRight bg-no-repeat bg-center mx-auto w-full h-[400px] mt-[-80px] flex justify-center animate-floatY animation-delay-300">
        <div className="bg-arenaBetaButton bg-no-repeat bg-center w-[60vw] max-w-[250px] h-[15vh] mt-[220px] inline-block cursor-pointer transition-transform delay-75 hover:scale-125"></div>
      </div>
    </>
  );
};

const DocumentationIsland = () => {
  return (
    <>
      <div className="bg-islandLeft bg-no-repeat bg-center mx-auto w-full h-[380px] mt-[-50px] flex justify-center animate-floatY animation-delay-600">
        <div className="bg-documentationButton bg-no-repeat bg-center w-[40vw] max-w-[350px] min-w-[250px] h-[10vh] mt-[180px] inline-block cursor-pointer transition-transform delay-75 hover:scale-125"></div>
      </div>
      <div className="bg-cloud bg-center bg-no-repeat bg-cover opacity-90 w-[30vh] h-[10vh] mx-auto mt-[-50px] animate-floatLeft" />
    </>
  );
};

const ContactButton = ({ className, url }: { className?: string; url: string }) => {
  return (
    <div
      className={cn(
        className,
        'bg-no-repeat bg-center bg-cover h-[3vh] mx-[6vw] cursor-pointer hover:bg-slate-500 hover:rounded-lg hover:bg-opacity-50'
      )}
      onClick={() => {
        url?.includes('mailto') ? (window.location.href = url) : openLink(url);
      }}
    />
  );
};

const ContactMenu = () => {
  return (
    <div className="flex justify-center mt-[3vh]">
      <ContactButton className="bg-telegram w-[3vh]" url={telegramUrl} />
      <ContactButton className="bg-discord w-[2.5vh]" url={discordUrl} />
      <ContactButton className="bg-email w-[4.5vh]" url={`mailto:${email}`} />
      <ContactButton className="bg-twitter w-[3vh]" url={twitterUrl} />
      <ContactButton className="bg-github w-[3vh]" url={githubUrl} />
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white uppercase mx-auto mt-[3vh]">
      <h1 className="text-4xl uppercase font-tuffy text-center">{t('about.title')}</h1>
      <List listPoints={[t('about.list.p1'), t('about.list.p2')]} />
    </div>
  );
};

const KabanaClubWolfCoin = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[3vh]">
      <iframe className="mx-auto my-[3vh] h-[35vh] w-[35vh]" src={wolfCoinUrl} />
      <div className="text-white">
        <h1 className="text-4xl uppercase font-tuffy text-center">{t('wolf-coin.title')}</h1>
        <List
          listPoints={[t('wolf-coin.list.p1'), t('wolf-coin.list.p2'), t('wolf-coin.list.p3'), t('wolf-coin.list.p4')]}
        />
      </div>
    </div>
  );
};

const NftShroom = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-[3vh]">
        <div className="bg-nftShroom bg-no-repeat bg-center my-[3vh] bg-cover mx-auto h-[30vh] w-[30vh]" />
        <div className="text-white uppercase">
          <h1 className="text-4xl font-tuffy text-center">{t('nft-shroom.title')}</h1>
          <List
            listPoints={[
              t('nft-shroom.list.p1'),
              t('nft-shroom.list.p2'),
              t('nft-shroom.list.p3'),
              t('nft-shroom.list.p4'),
              t('nft-shroom.list.p5'),
              t('nft-shroom.list.p6'),
            ]}
          />
        </div>
      </div>
      <div
        className="text-center font-tuffy text-red-600 text-7xl stroke w-fit mx-auto
          hover:bg-slate-500 hover:rounded-lg hover:bg-opacity-50 hover:cursor-pointer"
        onClick={() => openLink(mintUrl)}
      >
        <p>
          MINT
          <br />
          NFT MUSHROOM
        </p>
      </div>
    </>
  );
};

const Mining = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[3vh]">
      <div className="text-white uppercase">
        <h1 className="text-4xl text-center font-tuffy">{t('mining.title')}</h1>
        <List listPoints={[t('mining.list.p1'), t('mining.list.p2'), t('mining.list.p3'), t('mining.list.p4')]} />
      </div>
    </div>
  );
};

const GameToken = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white uppercase mt-[3vh]">
      <div className="bg-cards bg-no-repeat bg-center bg-cover mx-auto h-[25vh] w-[35vh]" />
      <div className="max-w-3xl mx-auto mt-[3vh]">
        <h1 className="text-4xl text-center">{t('game-token.title')}</h1>
        <List listPoints={[t('game-token.list.p1'), t('game-token.list.p2'), t('game-token.list.p3')]} />
      </div>
    </div>
  );
};

const Allies = () => {
  return (
    <div className="bg-allies bg-no-repeat bg-center bg-cover h-[37vh] w-full max-w-[50vh] mx-auto flex justify-center"></div>
  );
};

const Team = () => {
  return (
    <>
      <div className="w-full" id="team">
        <TeamMember name={'NFTKABAN'} position={'CEO'} picture={'bg-teamKaban'} contact={KabanContact} />
        <TeamMember name={'ALEXAYE'} position={'CTO'} picture={'bg-teamAlex'} contact={AlexContact} />
      </div>
    </>
  );
};

const TeamMember = ({ name, position, picture, contact }: TeamMemberProps) => {
  return (
    <div className="bg-team mx-auto mt-[2vh] bg-opacity-10 backdrop-blur-3xl rounded-xl shadow-2xl text-white max-w-[40vh]">
      <div className="flex p-[1vh] justify-center">
        <div className="font-tuffy text-2xl">
          <div className={cn(picture, 'bg-no-repeat bg-center bg-cover h-[10vh] w-[10vh] mx-auto')} />
          <p className="text-center py-[1vh] cursor-default">{name}</p>
          <p className="text-center cursor-default">{position}</p>
        </div>
        <div className="font-inter text-xl ml-[1vh]">
          <p
            className="hover:underline cursor-pointer my-[1vh]"
            onClick={() => window.open(contact.telegram, '_blank')}
          >
            Telegram
          </p>
          <p className="hover:underline cursor-pointer my-[1vh]" onClick={() => window.open(contact.twitter, '_blank')}>
            Twitter
          </p>
          <p className="hover:underline cursor-pointer my-[1vh]" onClick={() => window.open(contact.tiktok, '_blank')}>
            Tik-Tok
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-team w-full h-fit flex place-items-center mt-[3vh]">
      <div className="bg-logo bg-no-repeat bg-center bg-cover h-[6.2vh] w-[6.5vh] mx-[2vh]" />
      <div className="flex flex-col justify-center font-tuffy text-xl">
        <p className="">
          <span className="font-bold text-2xl">KABANA CLUB</span>
          <br />
          Private club of crypto enthusiasts
        </p>
        <p
          className="uppercase cursor-pointer hover:underline"
          onClick={() => {
            window.location.href = `mailto:${email}`;
          }}
        >
          {email}
        </p>
      </div>
    </div>
  );
};

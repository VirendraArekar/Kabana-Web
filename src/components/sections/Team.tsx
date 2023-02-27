import cn from 'classnames';
import React from 'react';
import { AlexContact, KabanContact, MemberContact } from '../config/urls';

export interface TeamMemberProps {
  name: string;
  position: string;
  picture: string;
  contact: MemberContact;
}

const TeamMember = ({ name, position, picture, contact }: TeamMemberProps) => {
  return (
    <div>
      <div className="flex mx-[140px] my-[50px] pr-[30px]">
        <div className="font-tuffy text-2xl">
          <div className={cn(picture, 'bg-no-repeat bg-center w-[175px] h-[175px]')} />
          <p className="text-center py-[10px] cursor-default">{name}</p>
          <p className="text-center cursor-default">{position}</p>
        </div>
        <div className="mt-[30px] ml-[20px] font-inter text-xl">
          <p
            className="hover:underline cursor-pointer my-[10px]"
            onClick={() => window.open(contact.telegram, '_blank')}
          >
            Telegram
          </p>
          <p
            className="hover:underline cursor-pointer my-[10px]"
            onClick={() => window.open(contact.twitter, '_blank')}
          >
            Twitter
          </p>
          <p className="hover:underline cursor-pointer my-[10px]" onClick={() => window.open(contact.tiktok, '_blank')}>
            Tik-Tok
          </p>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <>
      <div className="bg-team w-full h-[350px] mt-[1000px] flex justify-center pl-12" id="team">
        <TeamMember name={'NFTKABAN'} position={'CEO'} picture={'bg-teamKaban'} contact={KabanContact} />
        <TeamMember name={'ALEXAYE'} position={'CTO'} picture={'bg-teamAlex'} contact={AlexContact} />
      </div>
    </>
  );
};

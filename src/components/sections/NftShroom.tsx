import React from 'react';
import { useTranslation } from 'react-i18next';
import { mintUrl } from '../config/urls';
import { List } from '../misc/List';
import { openLink } from '../misc/util';

export const NftShroom = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center py-[2%]">
        <div className="text-white uppercase">
          <h1 className="text-4xl font-tuffy">{t('nft-shroom.title')}</h1>
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
        <div className="bg-nftShroom w-[531px] h-[531px] bg-no-repeat bg-center" />
      </div>
      <div
        className="text-center p-8 font-tuffy text-red-600 text-8xl font-bold stroke w-fit mx-auto
          hover:bg-slate-500 hover:rounded-lg hover:bg-opacity-50 hover:cursor-pointer"
        onClick={() => openLink(mintUrl)}
      >
        <p>MINT</p>
        <p>NFT MUSHROOM</p>
      </div>
    </>
  );
};

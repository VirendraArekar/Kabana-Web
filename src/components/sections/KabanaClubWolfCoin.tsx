import React from 'react';
import { useTranslation } from 'react-i18next';
import { wolfCoinUrl } from '../config/urls';
import { List } from '../misc/List';

export const KabanaClubWolfCoin = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center py-[2%] w-fit mx-auto max-w-[1200px]">
      <iframe className="max-w-full w-[500px] h-[500px] mr-[50px]" src={wolfCoinUrl} />
      <div className="text-white w-[500px]">
        <h1 className="text-4xl uppercase font-tuffy">{t('wolf-coin.title')}</h1>
        <List
          listPoints={[t('wolf-coin.list.p1'), t('wolf-coin.list.p2'), t('wolf-coin.list.p3'), t('wolf-coin.list.p4')]}
        />
      </div>
    </div>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { List } from '../misc/List';

export const Mining = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col place-items-center">
      <div className="bg-cave w-[705px] h-[434px] bg-no-repeat bg-center my-16" />
      <div className="text-white uppercase max-w-3xl">
        <h1 className="text-4xl text-center mb-16 font-tuffy">{t('mining.title')}</h1>
        <List listPoints={[t('mining.list.p1'), t('mining.list.p2'), t('mining.list.p3'), t('mining.list.p4')]} />
      </div>
    </div>
  );
};

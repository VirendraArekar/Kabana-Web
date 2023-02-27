import React from 'react';
import { useTranslation } from 'react-i18next';
import { List } from '../misc/List';

export const GameToken = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white uppercase py-[2%]">
      <div className="bg-cards bg-no-repeat bg-center w-full h-[400px] mb-10" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center">{t('game-token.title')}</h1>
        <List listPoints={[t('game-token.list.p1'), t('game-token.list.p2'), t('game-token.list.p3')]} />
      </div>
    </div>
  );
};

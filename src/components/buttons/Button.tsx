import cn from 'classnames';
import React, { ReactNode } from 'react';
import { openLink } from '../misc/util';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  pictureUrl?: string;
  url?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, pictureUrl, url, onClick }: ButtonProps) => {
  return pictureUrl ? (
    <button></button>
  ) : (
    <button
      onClick={() => {
        if (url) openLink(url);
        if (onClick) onClick();
      }}
      className={cn(
        'border border-transparent rounded-xl bg-gray-500 opacity-80 hover:bg-gray-700 px-4 mx-2 h-12 w-[200px] font-bold text-white uppercase shadow-lg shadow-purple',
        className
      )}
    >
      <span className="font-acme uppercase text-2xl text-neutral-200">{children}</span>
    </button>
  );
};

export const ButtonWithBg = ({
  className,
  url,
  animation,
}: {
  className?: string;
  url: string;
  animation?: string;
}) => {
  return (
    <div className={cn('absolute animate-floatY z-10 w-[200px] h-[120px]', animation)}>
      <div
        className={cn(
          'bg-center bg-no-repeat w-[200px] h-[120px] cursor-pointer transition-transform delay-75 hover:scale-125 z-10',
          className
        )}
        onClick={() => openLink(url)}
      />
    </div>
  );
};

export const ContactButton = ({ className, url }: { className?: string; url: string }) => {
  return (
    <div
      className={cn(
        className,
        'bg-no-repeat bg-center h-24 w-24 my-6 mx-12 cursor-pointer hover:bg-slate-500 hover:rounded-lg hover:bg-opacity-50'
      )}
      onClick={() => {
        url?.includes('mailto') ? (window.location.href = url) : openLink(url);
      }}
    />
  );
};

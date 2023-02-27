import cn from 'classnames';
import React from 'react';

export const List = ({ classname, listPoints }: { classname?: string; listPoints: string[] }) => {
  return (
    <ul className={cn(classname, 'list-disc text-2xl mt-10 lg:px-[2vh] px-[4vh] uppercase text-left')}>
      {listPoints.map((p, i) => (
        <li key={i} className="py-2 font-tuffy">
          {p}
        </li>
      ))}
    </ul>
  );
};

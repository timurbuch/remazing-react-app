import React from 'react';
import { Card } from './Card';

export const MainContent = ({ brands }) => {
  const brandsToRender = brands;
  return (
    <div>
      <div className="bg-brand-main grid grid-cols-3 md:grid-cols-4 overflow-auto gap-8 py-2 pl-4 pr-16 w-full">
        {brandsToRender &&
          brandsToRender.map((item) => {
            return <Card key={item.name} src={item.img} />;
          })}
      </div>
    </div>
  );
};

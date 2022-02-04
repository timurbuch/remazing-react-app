import React, { useEffect, useState } from 'react';
import { MainContent } from './MainContent.js';

import chevron from '../images/chevron.svg';
import search from '../images/search.svg';
import hamburger from '../images//hamburger.svg';
import grid from '../images/grid.svg';
import umbrella from '../brands/Umbrella.png';
import evil from '../brands/Evil.png';
import mcdowell from '../brands/McDowells.png';
import stark from '../brands/StarkIndustries.png';
import oscorp from '../brands/Oscorp.png';
import wayne from '../brands/Wayne.png';
import circle from '../brands/Circle.png';
import ips from '../brands/IPS.png';

const mockBrands = [
  {
    id: 1,
    name: 'Evil Corp.',
    img: evil,
  },
  {
    id: 2,
    name: 'McDowells',
    img: mcdowell,
  },
  {
    id: 3,
    name: 'Umbrella Corp.',
    img: umbrella,
  },
  {
    id: 4,
    name: 'Stark Industries',
    img: stark,
  },
  {
    id: 5,
    name: 'Oscorp',
    img: oscorp,
  },
  {
    id: 6,
    name: 'Wayne Enterprises',
    img: wayne,
  },
  {
    id: 7,
    name: 'Circle',
    img: circle,
  },
  {
    id: 8,
    name: 'IPS',
    img: ips,
  },
];

export const Main = () => {
  const [brands, setBrands] = useState(mockBrands);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filteredBrands = brands.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    searchTerm === '' ? setBrands(mockBrands) : setBrands(filteredBrands);
  }, [searchTerm]);

  return (
    <div className="flex-auto bg-brand-main border-t border-slate-300 h-l">
      <div className="font-bold pl-4 flex items-center border-b border-slate-300 bg-brand-header text-slate-500 h-sm">
        Brands
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full pl-2 pr-16 h-sm">
          <h3 className="flex pl-8 font-medium text-slate-600">
            Your Brands
            <img
              src={chevron}
              alt="Chevron"
              height="22"
              width="22"
              className="pl-1"
            />
          </h3>
          <div className="text-sm  flex border-solid justify-between border border-slate-300 w-2/5">
            <input
              className="bg-brand-main text-slate-500 w-4/5 pl-2 py-1"
              type="text"
              placeholder="Search brands...."
              value={searchTerm}
              onChange={handleChange}
            />
            <img
              src={search}
              alt="Search Icon"
              height="28"
              width="28"
              className="p-1"
            />
          </div>
          <div className="flex">
            <img src={grid} alt="Grid Icon" height="36" width="36" />
            <img src={hamburger} alt="Hamburger Icon" height="36" width="36" />
          </div>
        </div>
      </div>
      <MainContent brands={brands} />
    </div>
  );
};

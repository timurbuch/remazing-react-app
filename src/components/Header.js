import React from 'react';
import logo from '../images/logo.svg';
import bell from '../images/bell.svg';
import avatar from '../images/avataaars.svg';

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-screen h-sm">
      <div className="w-44 border-r border-slate- md:pr-2 py-4 px-4">
        <a href="/">
          <img
            src={logo}
            alt="Remazing Logo"
            className="w-24 md:w-32"
            height="144"
            width="144"
          />
        </a>
      </div>
      <div className="flex-auto">
        <div className="flex mx-1.5 gap-4 justify-end pr-16">
          <img
            src={bell}
            alt="Bell Icon"
            height="20"
            width="20"
            className="stroke-slate-500"
          />
          <div className="flex items-center">
            <div className="px-1 text-xs text-gray-500 font-bold">TB</div>
            <img
              src={avatar}
              alt="Avatar"
              height="28"
              width="28"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

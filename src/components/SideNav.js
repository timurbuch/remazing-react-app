import React from 'react';
import home from '../images/home.svg';
import dashboard from '../images/dashboard.svg';
import chart from '../images/chart.svg';
import bulb from '../images/bulb.svg';
import cog from '../images/cog.svg';
import users from '../images/users.svg';

export const SideNav = () => {
  return (
    <div className="flex flex-col justify-items-start min-w-min pt-8 bg-white border-t border-slate-300 border-r h-l">
      <div className="text-xs font-bold text-slate-500 w-44">
        <ul className="flex flex-col justify-evenly h-auto w-full">
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-4 py-2 bg-white text-slate-500 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={home} alt="Home Icon" height="20" width="20" />
              <div className="text-left">Dashboard</div>
            </div>
          </li>
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-4 py-2 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={dashboard} alt="" height="20" width="20" />
              <div className="text-left">Content Management</div>
            </div>
          </li>
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-4 py-2 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={chart} alt="" height="20" width="20" />
              <div className="text-left">Monitoring</div>
            </div>
          </li>
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-8 py-2 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={bulb} alt="" height="20" width="20" />
              <div className="text-left">Content</div>
            </div>
          </li>
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-4 py-2 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={cog} alt="" height="20" width="20" />
              <div className="text-left">Accounts</div>
            </div>
          </li>
          <li>
            <div className="flex gap-2 justify-items-center w-full pl-8 py-2 hover:bg-highlight-bg hover:text-highlight-text">
              <img src={users} alt="" height="20" width="20" />
              <div className="text-left">Brands</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

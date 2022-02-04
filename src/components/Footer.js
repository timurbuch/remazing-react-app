import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-footer flex justify-between items-center text-xs font-medium w-full text-slate-500 border-t border-slate-300 h-sm fixed bottom-0">
      <div className="flex py-4 px-4">
        <a href="/">©2019 All rights reserved</a> | <a href="/">Remazing</a>
      </div>
      <div className="flex py-4 px-4">
        <a href="/">Terms & Conditions</a> | <a href="/">Privacy Policy</a>
      </div>
    </div>
  );
};

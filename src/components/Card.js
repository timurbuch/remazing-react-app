import React from 'react';

export const Card = ({ src }) => {
  return (
    <div className="h-40 w-40 bg-white border-solid border border-slate-300 shadow-md col-span-1 align-middle relative group">
      <div className="h-40 w-40 relative opacity-100 group-hover:opacity-10 ">
        <img
          src={src}
          alt=""
          className=" absolute top-8 left-8 w-3/5 m-auto text-center"
        />
      </div>

      <div className="absolute top-0 left-0 text-xs font-semibold opacity-0 group-hover:opacity-100 w-full h-40">
        <ul className="flex flex-col items-center justify-around h-full py-4">
          <li>
            <a href="/" className="hover:text-highlight-button">
              All Phases
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-highlight-button">
              Monitoring
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-highlight-button">
              Amazon Cases
            </a>
          </li>
          <li>
            <button className="bg-highlight-button rounded-3xl w-32 text-white font-semibold py-1">
              Dashboard
            </button>
          </li>
          <li>
            <button className="bg-white font-semibold rounded-3xl border-slate-500 py-1">
              Product Catalog
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

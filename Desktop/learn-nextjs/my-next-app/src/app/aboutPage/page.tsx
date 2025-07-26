import React from 'react';

import NavbarPage from './Navbar/page';
import ContentPage from './Content/page';
import MiddlePage from './MiddlePage/page';
export default function AboutPage() {

  return (
    <div className='bg-gradient-to-l from-blue-800 to-slate-400'>
      <div className="flex flex-row w-full py-6 px-5 ">
        <div className="w-0.5/4 p-4 ">
          {/* 50% width */}
          <NavbarPage />
        </div>
        <div className="w-3/4 p-4 ">
          {/* 50% width */}
          <ContentPage/>
     
        </div>
      
      </div>
        <div className='flex flex-col m-auto'>
          <MiddlePage/>
        </div>
    </div>
  );
}

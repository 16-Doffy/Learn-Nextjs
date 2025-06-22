import React from 'react';

import NavbarPage from './Navbar/page';
import ContentPage from './Content/page';

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-row w-full py-6 px-5">
        <div className="w-1/4 p-4 border">
          {/* 50% width */}
          <NavbarPage />
        </div>
        <div className="w-3/4 p-4 border">
          {/* 50% width */}
          <ContentPage/>
     
        </div>
      </div>
    </>
  );
}

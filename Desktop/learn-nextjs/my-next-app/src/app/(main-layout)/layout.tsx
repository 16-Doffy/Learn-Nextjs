import React from 'react'

export default function MainLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <div className='main-layout text-blue-200 p-10 '>
      <div className='flex justify-between flex-col-3'>
        <h3>menu</h3>
          <h3>menu</h3>
            <h3>menu</h3>
      </div>
      <div className='flex flex-col-9'>{children}
      </div>
      
    </div>
  )
}

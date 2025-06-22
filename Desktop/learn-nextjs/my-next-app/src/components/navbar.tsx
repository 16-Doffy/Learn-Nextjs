'use client';
import Link from 'next/link';
//import { useRouter } from 'next/navigation'; // ✅ ĐÚNG — dùng cho App Router
import '../global.css';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  //const router = useRouter();
  return (
    <div className='bg-linear-to-l from-white -mb-2 to-black  flex flex-col-2  border-b border-b-amber-200'>
      <div className="text-black flex-col ml-10 ">
        <Image
          src="https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          width={100}
          height={20}
          alt="beauty"
          style={{borderRadius:20}}
        ></Image> 
        
        {/* phải khai báo width and height khi dùng thẻ Image */}
      </div>
    
       <div className=" grid grid-cols-5 ml-auto pr-20 mt-15 space-x-10 text-3xl  font-sans">
        <Link href="/">Home</Link>
        <Link href="/aboutPage">About</Link>
        <Link href="/dashBoard">dashboard</Link>
        <Link href="/search">Search Film</Link>
         <Link href="/search/select-movie">Select Movie</Link>
        {/* <button onClick={() => router.push('/dashBoard')}>dashboard</button> */}
      </div>
     
    </div>
  );
}

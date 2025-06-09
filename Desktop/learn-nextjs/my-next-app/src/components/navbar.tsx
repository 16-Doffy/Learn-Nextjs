'use client';
import Link from 'next/link';
//import { useRouter } from 'next/navigation'; // ✅ ĐÚNG — dùng cho App Router
import '../global.css';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  //const router = useRouter();
  return (
    <nav>
      <div className="text-black text-2xl pl-20 mr-auto">
        <Image
          src="https://images.unsplash.com/photo-1728443433557-3fc9e37b58c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          width={80}
          height={20}
          alt="beauty"
          style={{borderRadius:20}}
        ></Image> 
        {/* phải khai báo width and height khi dùng thẻ Image */}
      </div>
      <div className="grid grid-cols-3 justify-center text-2xl pr-10">
        <Link href="/">Home</Link>
        <a href="/about">About</a>
        <a href="/dashBoard">dashboard</a>
        {/* <button onClick={() => router.push('/dashBoard')}>dashboard</button> */}
      </div>
    </nav>
  );
}

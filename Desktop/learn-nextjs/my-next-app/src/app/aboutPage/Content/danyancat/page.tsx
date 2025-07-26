import React from 'react';
import b1 from '../../img/b1.jpg';
import b2 from '../../img/b2.jpg';
import b3 from '../../img/b3.jpg';
import b4 from '../../img/b4.jpg';
import b5 from '../../img/b5.jpg';
import b6 from '../../img/b6.jpg';
import b7 from '../../img/b7.jpg';
import vt4 from '../../img/vt4.jpg';
import vt5 from '../../img/vt5.jpg';
import Image from 'next/image';
const imageList = [
  { src: vt4, alt: 'DanyanCat 3' },
  { src: b1, alt: 'DanyanCat 1' },
  { src: b2, alt: 'DanyanCat 2' },
  { src: b3, alt: 'DanyanCat 3' },
  { src: b4, alt: 'DanyanCat 4' },
  { src: b5, alt: 'DanyanCat 4' },
  { src: b6, alt: 'DanyanCat 1' },
  { src: b7, alt: 'DanyanCat 2' },
  
];
export default function InforVt() {
  return (
    <div className="headerinfor font-sans w-full h-auto bg-slate-200 mt-5">
      <article className="flex gap-2 px-120 py-25 ">
        <Image
          className="w-200 p-1 h-90 rounded-full object-cover border-3 border-red-500 "
          src={vt5}
          alt="DanyanCat avatar"
          width={800}
          height={800}
          quality={100}
        />
        <div className="flex flex-col py-10 text-3xl ml-2 gap-3 -mt-4">
          <h1 className="text-3xl font-bold">Billes</h1>
          <p className="text-gray-600">Billes, BillesSQ, Billescatgaming</p>
          <div className="flex gap-2 my-2">
            <button className="px-3 py-1 bg-green-200 rounded">CamSoda</button>
            <button className="px-3 py-1 bg-sky-200 rounded">OnlyFans</button>
            <button className="px-3 py-1 bg-purple-200 rounded">Instagram</button>
            <button className="px-3 py-1 bg-purple-400 rounded">Twitter</button>
          </div>
          <div className="flex justify-between my-2">
            <span className="cursor-pointer px-3 py-1 bg-pink-300">Follow</span>
            <span className="cursor-pointe px-3 py-1 bg-blue-600">Discuss</span>
            <span className="cursor-pointer w-20">❤️</span>
          </div>
          <div className="flex justify-between text-2xl text-gray-500 ">
            <p>
              1139 <strong>Media</strong>
            </p>
            <p>
              9034 <strong>Likes</strong>{' '}
            </p>
          </div>
        </div>
      </article>
      <div className="bodyInfor grid grid-cols-4   m-5 gap-1 p-1 ">
        {imageList.map((image, index) => (
          <div key={index} className="overflow-hidden m-10">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              quality={100}
                priority 
              className="object-cover w-200 h-130 hover:scale-105 transition-transform "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

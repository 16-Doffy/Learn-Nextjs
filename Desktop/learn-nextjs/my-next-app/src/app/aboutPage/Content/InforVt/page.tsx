import React from 'react';
import vt from '../../img/vt.jpg';
// import vt2 from '../../img/vt2.jpg';
// import vt3 from '../../img/vt3.jpg';
// import vt4 from '../../img/vt4.jpg';
// import vt5 from '../../img/vt5.jpg';
import Image from 'next/image';
const imageList = [
  { src: vt, alt: 'DanyanCat 1' },
  { src: vt, alt: 'DanyanCat 2' },
  { src: vt, alt: 'DanyanCat 3' },
  { src: vt, alt: 'DanyanCat 4' },
  { src: vt, alt: 'DanyanCat 4' },
  { src: vt, alt: 'DanyanCat 1' },
  { src: vt, alt: 'DanyanCat 2' },
  { src: vt, alt: 'DanyanCat 3' },
];
export default function InforVt() {
  return (
    <div className="headerinfor font-sans w-full h-auto bg-slate-200 mt-5">
      <article className="flex gap-2 px-120 py-25 ">
        <Image
          className="w-200 p-1 h-85 rounded-full object-cover border-3 border-red-500 "
          src={vt}
          alt="DanyanCat avatar"
          width={240}
          height={260}
          quality={100}
        />
        <div className="flex flex-col py-10 text-3xl ml-2 gap-3 -mt-4">
          <h1 className="text-3xl font-bold">DanyanCat</h1>
          <p className="text-gray-600">Danyan, DanyanCatSQ, danyancatgaming</p>
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
          <div key={index} className="overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={240}
              height={260}
              quality={100}
              className="object-cover w-full h-full hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

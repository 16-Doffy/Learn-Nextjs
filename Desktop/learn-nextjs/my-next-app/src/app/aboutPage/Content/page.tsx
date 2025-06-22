import Image from 'next/image';
import React from 'react';
import rz from '../../../../public/img/rz.jpg';
import Link from 'next/link';
import vt1 from '../img/vt.jpg'
import vt2 from '../img/vt2.jpg'
import vt3 from '../img/vt3.jpg'
import vt4 from '../img/vt4.jpg'
import vt5 from '../img/vt5.jpg'
export default function ContentPage() {
  return (
    <>
      <div className="body flex-col gap-2 flex">
        <h1>Top Girls by Follower</h1>
        <div className="img columns-3 w-185 h-120 ">
          <Link href='/aboutPage/Content/InforVt'><Image src={rz}  alt="" className="aspect-3/2 "/> </Link>
          <Link  href='/aboutPage/Content/InforVt2'><Image src={vt1} alt=""  className="aspect-square"/>cc</Link>
          <Link href='/aboutPage/Content/InforVt3'><Image src={vt2} alt=""  className="aspect-square"/>cc</Link>
          <Link href='/search'><Image src={vt3} alt=""  className="aspect-square"/>cc</Link>
           <Link href='/search'><Image src={vt4} alt=""  className="aspect-square"/>cc</Link>
            <Link href='/search'><Image src={vt5} alt=""  className="aspect-square"/>cc</Link>
        </div>
        <div className="columns-3xs ">
          <Image src={rz} alt="" className="aspect-1/2"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
        </div>

        <div className="columns-3 gap-8 ...">
          <Image src={rz} alt="" className="aspect-3/2"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
          <Image src={rz} alt="" className="aspect-square"></Image>
        </div>
      </div>
    </>
  );
}

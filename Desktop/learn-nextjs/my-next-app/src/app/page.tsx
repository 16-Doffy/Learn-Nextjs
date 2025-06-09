import React from 'react';
import styles from '../app/styles/home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='py-10 m-10 text-2xl'>
      <div className={styles.title}>Home page</div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at, doloribus odit maxime
        dolores blanditiis quisquam perferendis tenetur ea sequi dignissimos voluptas officia nam
        impedit, eveniet cumque. Corporis, sit voluptas.
      </p>
      <p className={styles.text}>
        Lorem .....

      </p>
     <div className='text-black  
      m-auto text-xl bg-blue-300 w-50  
      justify-center flex cursor-pointer 
      hover:bg-gradient-to-r hover:from-green-300 hover:to-white'>
       <Link href="/dashBoard">
        <div >See list doffy</div>
      </Link>
     </div>
    </div>
  );
}

import Link from 'next/link';
import { Suspense } from 'react';
import styles from "../styles/dashboard.module.css"
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getData(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error('fail to fetchData');
  }
  return res.json();
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <div>
      <h1>All List Doffy</h1>
      <Suspense fallback={<div>Loading....</div>}> 
      {(data || []).map((item) => (
        <Link href={'/dashBoard/' + item.id} key={item?.id}>
          <div className={styles.single}>
            
            <h3>{item?.title}</h3>
          </div>
        </Link>
      ))}
     </Suspense>
    </div>
  );
}

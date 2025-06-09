//take id
//use params to take id v.v and create type data
import React from 'react';

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error('fail to fetchData');
  }
  return res.json();
}

export default async function DashboardDetail({ params: { id } }: { params: { id: string } }) {
  const post = await getPost(id);
  return (
    <div>
      <h1>
       Id: {post?.id}
      </h1>
      <p>Email :{post?.email}</p>
      <p>Id: {post?.name}</p>
    </div>
  );
}

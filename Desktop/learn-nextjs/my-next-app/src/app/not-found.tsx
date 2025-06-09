// app/not-found.tsx hoặc pages/404.tsx tùy bạn dùng App Router hay Pages Router
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>This page cant be found</h2>
      <p>
        Go back to the <Link href="/">Home page</Link>
      </p>
    </div>
  )
}

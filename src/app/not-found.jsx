'use client';
import "../styles/not-found.scss";
import Link from 'next/link';

const NotFound = () => {

  return (
    <div id='not-found'>
      <div className="tt">
        404
      </div>
      <h1>Page not found</h1>
      <Link href="/">Back to home page</Link>
    </div>
  )
}

export default NotFound
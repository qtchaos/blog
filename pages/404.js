// 404.js
import Link from 'next/link'
import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function ErrorPage() {
  return <div>
    <Head>
      <title>404 - Page Not Found</title>
    </Head>
    <main className={`${styles.main}`}>
      <Link href="/">
        <h1 className={'font-bold text-4xl hover:underline'}>404 - Page Not Found</h1>
      </Link>
    </main>
  </div>
}
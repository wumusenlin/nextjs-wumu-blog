import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())
export default function FirstPost() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)
  // useEffect(()=>{
  //   const url = 'api/user'
  //   fetch(url).then((values)=>{
  //     console.log(values)
  //   })
  // })
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <p>
        {isLoading ? '获取数据中' : data?.name}
      </p>
    </>
  )
}
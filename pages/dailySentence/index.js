import Link from 'next/link'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())
export default function FirstPost() {
  const { data, error, isLoading } = useSWR('https://v1.hitokoto.cn/', fetcher)
  const { hitokoto, from_who, from } = data ?? {}
  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)


  return (
    <>
      <Head>
        <title>每日一句</title>
      </Head>

      <main style={{ textAlign: 'center', paddingTop: '20vh' }}>
        {
          isLoading ?
            <p>获取数据中...</p> :
            <Fragment>
              <h1 style={{ width: '50%', margin: '0 auto',  }}>{hitokoto}</h1>
              <p>{from}</p>
              <p>{from_who}</p>
            </Fragment>
        }
      </main>
    </>
  )
}
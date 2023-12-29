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
    <div style={{ height: '100vh', width: '100vw', background: '#000', color: 'white' }}>
      <Head>
        <title>每日一句</title>
      </Head>

      <main style={{ textAlign: 'center', width: '50%', margin: '0 auto', paddingTop: '30vh' }}>
        {
          isLoading ?
            <p>获取数据中...</p> :
            <Fragment>
              <h1 >{hitokoto}</h1>
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-end', float: 'right' }}>
                  <div style={{ paddingRight: 12 }}>——</div>
                  <div>
                    <span style={{ paddingRight: 12 }}>{from}</span>
                    <span>{from_who}</span>
                  </div>
                </div>
              </div>
            </Fragment>
        }
      </main>
    </div>
  )
}
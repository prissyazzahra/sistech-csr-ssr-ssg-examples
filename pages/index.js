import Head from 'next/head'
import ClientSide from '../components/clientSide'
import StaticGeneration from '../components/staticGeneration'
import styles from '../styles/Home.module.css'

export default function Home({json, post}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistech: CSR, SSR, SSG Examples</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClientSide />

      {/* Use the components below interchangeably */} 

      {/* <ServerSide json={json} /> */}
      <StaticGeneration post={post} />

    </div>
  )
}

/* UNCOMMENT THIS FUNCTION IF YOU WANT TO TRY SSR */ 

// export async function getServerSideProps(context) { // this function only works on page components (in pages folder)
//   const result = await fetch('https://jsonplaceholder.typicode.com/posts/5')
//   const json = await result.json()
//   return {
//     props: { json }, // will be passed to Home component as props automatically
//   }
// }

/* COMMENT THIS FUNCTION IF YOU WANT TO TRY SSR */

export async function getStaticProps(context) { // this function only works on page components (in pages folder)
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/7')
  const post = await result.json()
  return {
    props: { post }, // will be passed to Home component as props automatically
  }
}

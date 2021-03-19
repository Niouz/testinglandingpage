// import Head from 'next/head'
import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
        
//       </main>
//     </div>
//   )
// }

import Layout from '../components/Layout' 

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Layout />
      </main>
    </div>
  )
}

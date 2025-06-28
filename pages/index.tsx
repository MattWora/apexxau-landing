import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
export default function Home() {
  return (
    <>
      <Head>
        <title>ApexXAU Intelligent Pro-5</title>
        <meta name="description" content="Automated Gold Trading System" />
      </Head>
      <main className="bg-black text-white min-h-screen">
  <Hero />
  <Features />
      </main>
    </>
  )
}

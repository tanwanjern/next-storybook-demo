import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NCT</title>
        <meta name="description" content="NCT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto py-8 px-4">
         <p className="text-blue-500 underline">Testing Tailwind with Storybook</p>
        </div>
      </main>
    </div>
  )
}

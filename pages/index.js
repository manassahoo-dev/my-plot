import Head from 'next/head';

export default function Home() {
  const title = 'PLOT MANAGEMENT SYSTEM';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto'>
        <h1 className='text-4xl font-bold uppercase text-slate-500 text-center	'>
          {title}
        </h1>
      </main>
    </div>
  );
}

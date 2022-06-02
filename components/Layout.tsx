import Head from 'next/head';
import React from 'react';

function Layout({ title, children }: any): JSX.Element {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title> {title}</title>
        <link rel='icon' href='/favicon.icon' />
      </Head>
      <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
        {children}
      </main>
    </div>
  );
}

export default Layout;

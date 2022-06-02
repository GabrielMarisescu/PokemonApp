import Head from 'next/head';
import React from 'react';
import { LayoutProps } from '../interfaces/main';

//PropsWithChildren<React.ReactNode>

function Layout(props: LayoutProps): JSX.Element {
  const { title, children } = props;

  return (
    <div className='bg-gray-300'>
      <Head>
        <title> {title}</title>
        <link
          rel='icon'
          href='https://assets.pokemon.com/static2/_ui/img/favicon.ico'
        />
      </Head>
      <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
        {children}
      </main>
    </div>
  );
}

export default Layout;

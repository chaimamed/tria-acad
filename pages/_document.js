// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ar">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();",
            }}
          />
        </Head>
        <body className="bg-white-500 text-black-500 dark:bg-gray-900 dark:text-white">
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';

// Next.js Custom Document: https://nextjs.org/docs/advanced-features/custom-document
// Snipcart Installation: https://docs.snipcart.com/v3/setup/installation

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
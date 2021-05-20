import Head from 'next/head'
import Link from 'next/link'

import { Product, getAllProducts } from '@lib/products';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Header from '@components/Header';
import Button from '@components/Button';

import styles from '@styles/pages/Home.module.scss'

export default function Home({ products }) {
  products = products.map(product => new Product(product));
  return (
    <Layout>
      <Head>
        <title>Hyper Bros Trading</title>
        <meta name="description" content="Your favorite trading cards delivered!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="sr-only">Hyper Bros Trading</h1>

        <h2 className="sr-only">Available Cards</h2>

        <ul id="characters" className={styles.grid}>
          {products.map(({ id, sku, slug, title, featuredImage, price }) => {
            return (
              <li id={`product-${id}`} key={id} className={styles.product}>
                <Link href={`/products/${slug}`}>
                  <a>
                    <img className={styles.productImage} src={featuredImage.sourceUrl} alt={featuredImage.altText} />
                    <h2 className={styles.productTitle}>{ title }</h2>
                    <p className={styles.productPrice}>
                      ${ price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button className="snipcart-add-item"
                    data-item-id={sku}
                    data-item-image={featuredImage.sourceUrl}
                    data-item-name={title}
                    data-item-url={`/products/${slug}`}
                    data-item-price={price}
                  >
                    Add to Cart
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products
    }
  };
}
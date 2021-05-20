import Head from 'next/head';
import Link from 'next/link';

import { useCart } from '@hooks/use-cart.js';
import { Product, getAllProducts, getProductBySlug } from '@lib/products';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/pages/Product.module.scss'

export default function ProductPage({ product }) {
  product = new Product(product);
  return (
    <Layout>
      <Head>
        <title>{ product.title } - Hyper Bros Trading</title>
        <meta name="description" content={`Buy ${product.title} at Hyper Bros Trading`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={product.featuredImage.sourceUrl} alt={product.featuredImage.altText} />
        </div>
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>{ product.title }</h1>
          <div className={styles.productDescription} dangerouslySetInnerHTML={{
            __html: product.content
          }} />
          <p className={styles.productPrice}>
            ${product.price}
          </p>
          <p className={styles.productBuy}>
            <Button className="snipcart-add-item"
              data-item-id={product.sku}
              data-item-image={product.featuredImage.sourceUrl}
              data-item-name={product.title}
              data-item-url={`/products/${product.slug}`}
              data-item-price={product.price}
            >
              Add to Cart
            </Button>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const product = await getProductBySlug(params.productSlug);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map(({ slug }) => {
    return {
      params: {
        productSlug: `${slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
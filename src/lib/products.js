import { gql } from '@apollo/client';
import { getApolloClient } from '@lib/apollo'

export class Product {
  constructor(productNode) {
    this.content = productNode.content;
    this.featuredImage = productNode.featuredImage.node;
    this.id = productNode.id;
    this.price = productNode.product.price;
    this.releaseDate = productNode.product.releaseDate;
    this.slug = productNode.slug;
    this.sku = productNode.product.sku;
    this.title = productNode.title;
  }
}

/**
 * getAllProducts
 */

export async function getAllProducts() {
  const apolloClient = getApolloClient();

  let productsData;

  try {
    productsData = await apolloClient.query({
      query: gql`
        query AllProducts {
          products {
            edges {
              node {
                id
                product {
                  price
                  releaseDate
                  sku
                }
                title
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                slug
              }
            }
          }
        }
      `,
    });
  } catch (e) {
    throw e;
  }

  return productsData.data.products.edges.map(({ node }) => node);
}

/**
 * getProductBySlug
 */

export async function getProductBySlug(slug) {
  const apolloClient = getApolloClient();

  let productsData;

  try {
    productsData = await apolloClient.query({
      query: gql`
        query ProductBySlug($slug: ID!) {
          product(id: $slug, idType: SLUG) {
            id
            content
            product {
              price
              releaseDate
              sku
            }
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            slug
          }
        }
      `,
      variables: {
        slug
      }
    });
  } catch (e) {
    throw e;
  }

  return productsData.data.product;
}
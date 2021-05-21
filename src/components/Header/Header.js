import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import { useSnipcart } from '@hooks/use-snipcart';

import styles from './Header.module.scss';

const Header = () => {
  const { cart = {} } = useSnipcart();
  const { subtotal = '0.00' } = cart;
  return (
    <div>
      <header className={styles.header}>
        <Container className={styles.headerContainer}>
          <p className={styles.title}>
            <Link href="/">
              <a>
                Hyper Bros Trading
              </a>
            </Link>
          </p>
          <div className={styles.cart}>
            <p className={styles.cartSubtotal}>
              <button className={`snipcart-checkout snipcart-summary ${styles.cartSubtotalButton}`}>
                <FaShoppingCart className={styles.cartIcon} />
                <strong className="sr-only">Cart</strong>
                <span>${ subtotal }</span>
              </button>
            </p>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Header;
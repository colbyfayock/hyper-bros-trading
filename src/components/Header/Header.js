import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '@hooks/use-cart.js';
import { useGames } from '@hooks/use-games.js';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  const { subtotal, cartItems } = useCart();

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
              <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
                <FaShoppingCart className={styles.cartIcon} />
                <strong className="sr-only">Cart</strong>
                <span className="snipcart-total-price">${subtotal.toFixed(2)}</span>
              </a>
            </p>
          </div>
        </Container>
      </header>
      {/* <nav className={styles.nav}>
        <Container>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">
                Xbox Series X
              </a>
            </li>
            <li>
              <a href="#">
                Playstation 5
              </a>
            </li>
            <li>
              <a href="#">
                Nintendo Switch
              </a>
            </li>
            <li>
              <a href="#">
                PC
              </a>
            </li>
          </ul>
        </Container>
      </nav> */}
    </div>
  )
}

export default Header;
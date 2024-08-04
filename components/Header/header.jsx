import { useSelector } from 'react-redux';
import styles from './header.module.scss';
import Image from 'next/image';
import { useFetchProducts } from '../../src/hooks/useCart';

function Header({ onCartClick }) {
  const { data: products } = useFetchProducts();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className={styles.headerSection}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="Logo" width={101} height={38} />
        </div>

        <div className={styles.shopCartContainer} onClick={onCartClick}>
          <div className={styles.shopCart}>
            <Image
              className={styles.shopCartImage}
              src="/images/Bag.svg"
              alt="Bag"
              width={33}
              height={33}
            />
            <p>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

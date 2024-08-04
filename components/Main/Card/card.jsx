import styles from './card.module.scss';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../src/redux/cartSlice';

export function Card({ id, imageSrc, imageAlt, price, name, description }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, imageSrc, imageAlt, price, name, quantity: 1 };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.cardSection}>
      <div className={styles.imageContainer}>
        <div className={styles.imageContent}>
          <div className={styles.imageItem}>
            <Image
              className={styles.image}
              src={`${imageSrc}?w=216&h=195&fit=crop&auto=format`} // Use imageSrc aqui
              alt={imageAlt}
              width={216}
              height={195}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.infoCardContainer}>
        <div className={styles.titleAndPrice}>
          <h2>{name}</h2> {/* Mostrando o campo name no título */}
          <p>{description}</p> {/* Adicionando a descrição */}
          <div className={styles.buySection}>
            <div className={styles.buyInfo}>
              <Image
                src="/images/Ellipse.png"
                alt="Ellipse"
                width={29}
                height={29}
                priority
              />
              <p>{price} ETH</p> {/* Mostrando o preço do item */}
            </div>
            <button onClick={handleAddToCart}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import styles from './main.module.scss';
import { Card } from './Card/card'; 
import { useFetchProducts } from '../../src/hooks/useCart'; 
import Load from '../Load/Load';

function Main() {
  const { data: products = [], isLoading, isError } = useFetchProducts();
  const [itemsToShow, setItemsToShow] = useState(8);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;

  const displayedItems = Array.isArray(products)
    ? products.slice(0, itemsToShow)
    : [];

  const allItemsLoaded =
    itemsToShow >= (Array.isArray(products) ? products.length : 0);

  const loadMoreItems = () => {
    if (!allItemsLoaded) {
      setItemsToShow((prevItems) => Math.min(prevItems + 4, products.length));
    }
  };

  return (
    <main className={styles.MainSection}>
      <div className={styles.MainContainer}>
        <div className={styles.cardContainer}>
          {displayedItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              imageSrc={item.image}
              imageAlt={item.name}
              price={item.price}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
        <Load onClick={loadMoreItems} allItemsLoaded={allItemsLoaded} />
      </div>
    </main>
  );
}

export default Main;

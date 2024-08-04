import styles from "./cardItems.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../../src/redux/cartSlice";

function CartItems({ item }) {
  const dispatch = useDispatch();

  // Manipula o aumento da quantidade do item
  const handleIncreaseQuantity = () => dispatch(increaseQuantity(item.id));

  // Manipula a redução da quantidade do item
  const handleDecreaseQuantity = () => dispatch(decreaseQuantity(item.id));

  // Manipula a remoção do item do carrinho
  const handleRemoveItem = () => dispatch(removeItem(item.id));

  return (
    <div className={styles.itensContent}>
      <div className={styles.item}>
        <div className={styles.content}>
          <div className={styles.imageItem}>
            <div>
            <Image
              className={styles.image}
              src={item.imageSrc}
              alt={item.imageAlt}
              width={139}
              height={139}
              priority
            />
            </div>
          </div>
          <div className={styles.infoItemContainer}>
            <div className={styles.infoText}>
              <h2>Lorem ipsum</h2>
              <p>Redesigned from scratch and completely revised.</p>
            </div>
            <div className={styles.priceInfo}>
              <Image
                src="/images/Ellipse.png"
                alt="Ellipse"
                width={29}
                height={29}
                priority
              />
              <p>{item.price} ETH</p>
            </div>

            <div className={styles.quantityContainer}>
              <div className={styles.quantity}>
                <div className={styles.contentIcons}>
                  <div
                    className={styles.iconAdd}
                    onClick={handleIncreaseQuantity}
                  >
                    <Image
                      src="/images/Union.svg"
                      alt="Add"
                      width={16}
                      height={16}
                      priority
                    />
                  </div>
                  <p>{item.quantity}</p>
                  <div
                    className={styles.iconSub}
                    onClick={handleDecreaseQuantity}
                  >
                    <Image
                    className={styles.image}
                      src="/images/Sub.svg"
                      alt="Subtract"
                      width={16}
                      height={16}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className={styles.deleteItem} onClick={handleRemoveItem}>
                <div className={styles.trashIcon}>
                  <Image
                    src="/images/Trash.svg"
                    alt="Trash"
                    width={25.8}
                    height={25.8}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

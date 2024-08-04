import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Importando Framer Motion
import confetti from 'canvas-confetti'; // Importando canvas-confetti
import styles from "./cart.module.scss";
import Image from "next/image";
import CartItems from "./CardItems/cardItems";
import { clearCart } from "../../src/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart({ isVisible, onClose }) {
  // Estado para controlar se a compra foi finalizada
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  // Seletores para acessar dados do estado do Redux
  const cartData = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const cartRef = useRef(null);

  // Efeito para fechar o carrinho ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  // Efeito para redefinir o estado de compra finalizada quando o carrinho for fechado
  useEffect(() => {
    if (!isVisible) {
      setIsPurchaseCompleted(false);
    }
  }, [isVisible]);

  // Função para finalizar a compra e limpar o carrinho
  const handleFinalizePurchase = () => {
    setIsPurchaseCompleted(true);
    dispatch(clearCart());
    confetti(); // Dispara o confete
  };

  // Configura a animação de entrada do carrinho
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Não renderiza o componente se o carrinho não estiver visível
  if (!isVisible) return null;

  return (
    <motion.section
      className={styles.LoadSection}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.LoadContainer} ref={cartRef}>
        <div className={styles.headerContainer}>
          <div className={styles.backBtn} onClick={onClose}>
            <Image
              className={styles.arrowLeft}
              src="/images/ArrowLeft.svg"
              alt="Arrow"
              width={33.33}
              height={33.33}
              priority
            />
          </div>
          <p>Mochila de Compras</p>
        </div>

        <div className={styles.LoadContent}>
          <div className={styles.mainLoadContainer}>
            <div className={styles.mainLoad}>
              <div className={styles.itensContainer}>
                {/* Mapeia e renderiza os itens do carrinho */}
                {cartData.map((item) => (
                  <CartItems key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.amountContainer}>
            <div>
              <p>TOTAL</p>
              <div className={styles.amount}>
                <Image
                  src="/images/Ellipse.png"
                  alt="Ellipse"
                  width={34}
                  height={34}
                  priority
                />
                <p>
                  {/* Calcula o total do carrinho */}
                  {cartData.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}{" "}
                  ETH
                </p>
              </div>
            </div>
          </div>

          <div className={styles.finalizePurchase}>
            <button onClick={handleFinalizePurchase}>
              <span>
                {isPurchaseCompleted ? "COMPRA FINALIZADA" : "FINALIZAR COMPRA"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Cart;

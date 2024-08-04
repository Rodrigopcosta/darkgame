import {
  useAddItem,
  useRemoveItem,
  useUpdateQuantity,
} from '../../hooks/useCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { mutate: addItem } = useAddItem();
  const { mutate: removeItem } = useRemoveItem();
  const { mutate: updateQuantity } = useUpdateQuantity();

  // Lógica para adicionar, remover e atualizar itens
  const handleAddItem = (item) => {
    addItem(item);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleUpdateQuantity = (itemId, action) => {
    updateQuantity({ itemId, action });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      {/* Renderize produtos e itens do carrinho */}
      {cart.items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => handleUpdateQuantity(item.id, 'increase')}>
            Increase
          </button>
          <button onClick={() => handleUpdateQuantity(item.id, 'decrease')}>
            Decrease
          </button>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default CartPage;

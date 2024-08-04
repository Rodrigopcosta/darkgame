import { useQuery } from '@tanstack/react-query';
import api from '../pages/api/axios';

// Função para buscar todos os produtos
export const useFetchProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await api.get('/products?page=1&limit=20');
      return data.data;
    },
  });
};

// Função para adicionar item ao carrinho
export const useAddItem = () => {
  const dispatch = useDispatch();
  return useMutation(
    async (item) => {
      const { data } = await api.post('/cart/addItem', item);
      return data;
    },
    {
      onSuccess: (data) => {
        dispatch(addItem(data));
      },
    },
  );
};

// Função para remover item do carrinho
export const useRemoveItem = () => {
  const dispatch = useDispatch();
  return useMutation(
    async (itemId) => {
      const { data } = await api.post('/cart/removeItem', { itemId });
      return data;
    },
    {
      onSuccess: () => {
        dispatch(removeItem(itemId));
      },
    },
  );
};

// Função para atualizar a quantidade do item
export const useUpdateQuantity = () => {
  const dispatch = useDispatch();
  return useMutation(
    async ({ itemId, action }) => {
      const { data } = await api.post('/cart/updateQuantity', {
        itemId,
        action,
      });
      return data;
    },
    {
      onSuccess: ({ itemId, action }) => {
        if (action === 'increase') {
          dispatch(increaseQuantity(itemId));
        } else if (action === 'decrease') {
          dispatch(decreaseQuantity(itemId));
        }
      },
    },
  );
};

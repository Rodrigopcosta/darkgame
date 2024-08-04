import axios from 'axios';

export default async function updateQuantityHandler(req, res) {
  const { itemId, action } = req.body;

  try {
    await axios.patch(
      `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products/${itemId}`,
      { action }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

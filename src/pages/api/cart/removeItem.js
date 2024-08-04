import axios from 'axios';

export default async function removeItemHandler(req, res) {
  const { itemId } = req.body;

  try {
    await axios.delete(
      `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products/${itemId}`
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

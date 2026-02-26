export const CART_STORAGE_KEY = "v_shop_cart";
export const WISHLIST_STORAGE_KEY = "v_shop_wishlist";
export const ORDERS_STORAGE_KEY = "v_shop_orders";

export const setStorageItem = (key, value) => {
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const getStorageItem = (key, defaultValue = []) => {
  if (!key) return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    localStorage.removeItem(key);
    return defaultValue;
  }
};

export const removeStorageItem = (key) => {
  if (!key) return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const clearStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
};

export const calculateCartSummary = (cartItems = []) => {
  if (!Array.isArray(cartItems)) {
    return { totalPrice: 0, totalItems: 0 };
  }

  return cartItems.reduce(
    (acc, item) => {
      const price = Number(item?.price) || 0;
      const quantity = Number(item?.quantity) || 0;

      acc.totalPrice += price * quantity;
      acc.totalItems += quantity;

      return acc;
    },
    { totalPrice: 0, totalItems: 0 }
  );
};
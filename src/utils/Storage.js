export const setStorageItem = (key, value) => {
  if (!key || !value) {
    console.error("Key and value are required to set an item in localStorage.");
  }
  localStorage.setItem(key, JSON.stringify(value)); // Set a value
};

export const  getStorageItem = (key) => {
  if (!key) {
    console.error("Key is required to get an item from localStorage.");
  }
  const item = localStorage.getItem(key); 
  return item ? JSON.parse(item) : null; 
}

export const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((cal,item)=>{
        return cal + item.price * item.quantity;
    },0)
}
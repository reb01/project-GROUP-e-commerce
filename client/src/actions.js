export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});
export const removeItem = (itemId) => ({
  type: "REMOVE_ITEM",
  itemId,
});

export const updateQuantity = ({ itemId, quantity }) => ({
  type: "UPDATE_QUANTITY",
  itemId,
  quantity,
});

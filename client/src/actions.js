
export const addItem = (item) => ({
    type:'ADD_ITEM',
    item,
})
export const removeItem = (item) => ({
    type: "REMOVE_ITEM",
    item,
  });
  
  export const updateQuantity = ({itemId, quantity}) => ({
    type: "UPDATE_QUANTITY",
    itemId,
    quantity,
  });
  //Added
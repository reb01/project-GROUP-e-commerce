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

export const requestStoreInfo = () => ({
  type: "REQUEST_STORE_INFO",
});

export const receiveStoreInfo = (store) => ({
  type: "RECEIVE_STORE_INFO",
  store,
});

export const receiveStoreInfoError = (error) => ({
  type: 'RECEIVE_STORE_INFO_ERROR',
  error,
});

export const updateStoreSort = (value) => ({
  type: 'UPDATE_STORE_SORT',
  value,
});

export const updateStoreFilterPrice = (value) => ({
  type: 'UPDATE_STORE_FILTER_PRICE',
  value,
});
export const updateStoreFilterBodyLocation = (id, value) => ({
  type: 'UPDATE_STORE_FILTER_BODY_LOCATION',
  id,
  value,
});

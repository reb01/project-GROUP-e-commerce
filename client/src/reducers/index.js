import React from "react";
const initialState = {};

export default function itemReducer(state = initialState, action) {
  console.log(Object.values(state));
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          quantity: state[action.item._id] ? state[action.item._id].quantity + 1 : 1
        }
      };
    }
    case "REMOVE_ITEM": {
      const stateCopy = { ...state };
      delete stateCopy[action.item._id];
      return {
        ...stateCopy,
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.quantity,
        },
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => {
  return Object.values(state);
};

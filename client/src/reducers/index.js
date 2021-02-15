
import { combineReducers } from 'redux';

import React from "react";
const initialState = [];


import item from './item-reducer';
import store from './store-reducer';


export default combineReducers({ item, store });

import { combineReducers } from 'redux';

import item from './item-reducer';
import store from './store-reducer';


export default combineReducers({ item, store });

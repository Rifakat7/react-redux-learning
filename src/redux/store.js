//here we will create Redux store whihc will hoold all the state of the application.
import cakeReducer from './cake/cakeReducer';
 import {createStore} from 'redux';                           //no problem if the createStore is apearing line-through

 const store = createStore(cakeReducer);

 export default store;

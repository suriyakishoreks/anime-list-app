import {createStore} from 'redux';
import REDUX_REDUCER from './reducer';


const store = createStore(REDUX_REDUCER);

export default store;
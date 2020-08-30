import { createStore , applyMiddleware} from 'redux';
import CartReducer from './Reducer';
const logger = () => {
    return (next) => {
        return (action) => {
            const result = next(action);
            return result;
        }
    }   
}
// const rootReducer = combineReducers({    
//     cart: CartReducer,
// });
export const STORE = createStore(CartReducer, applyMiddleware(logger));

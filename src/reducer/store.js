import AddReducer from './addReducer.js'; 
import {createStore,combineReducers} from 'redux'



const store = createStore(combineReducers({
    AddReducer:AddReducer
    
}))

export default store; 
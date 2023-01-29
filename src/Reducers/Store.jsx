
import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import PageIn from "./PageIn";

const rootReducer = combineReducers({
    PageIn
})

const store = createStore(rootReducer);

export default store;
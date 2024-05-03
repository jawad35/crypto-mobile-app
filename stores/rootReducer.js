import { combineReducers } from "redux";
import marketReducer from "./market/marketReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
    marketReducer, userReducer   
    
})
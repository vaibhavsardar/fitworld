import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userDetailsReducer, userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    user: userReducer,
    userDetails: userDetailsReducer,
  });

  const initialState = {}
  const middleware = [thunk];
const store = createStore(
    reducer,initialState,
    // applyMiddleware(thunk)
   
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;
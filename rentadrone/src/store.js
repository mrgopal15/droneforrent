import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from "./reducers/index";

export const store = createStore(
  persistReducer({
    key: "root", 
    storage,
  }, reducers),
  {},  
  compose(
    applyMiddleware(thunk),
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
  )
);

export const persistor = persistStore(store);
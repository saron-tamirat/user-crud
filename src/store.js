import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import rootSaga from "./saga/rootsaga";
import reducer from "./redux/Userreducer";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persistKey",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middleware));
let persistor = persistStore(store);
sagamiddleware.run(rootSaga);
export default store;
export { persistor };

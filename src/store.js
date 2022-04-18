import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import rootSaga from "./saga/rootsaga";
import reducer from "./redux/Userreducer";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";

const sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagamiddleware.run(rootSaga);
export default store;

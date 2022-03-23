import React from "react";
import ReactDOM from "react-dom";
import UserEdit from "./components/UserEdit";
import UserPost from "./components/UserPost";
import UserList from "./components/UserList";
import NavBar from "./components/NavBar";
import { Navigate } from "react-router-dom";

import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/User" replace={true} />} />

          <Route path="User" element={<UserList />} />
          <Route path="User/post" element={<UserPost />} />
          <Route path="User/:id" element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById("root")
);

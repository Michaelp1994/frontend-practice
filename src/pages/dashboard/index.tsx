import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Outlet } from "react-router";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

export default index;

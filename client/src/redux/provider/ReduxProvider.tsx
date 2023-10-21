'use client'

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

type Props = {};

const ReduxProvider = (props: PropsWithChildren<Props>) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;

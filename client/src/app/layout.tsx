import "./globals.css";
import CSSWrapperComponent from "@/components/CSS/CSSWrapper/CSSWrapperComponent";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import Head from "next/head";
import React, { PropsWithChildren } from "react";

type Props = {};

const layout = (props: PropsWithChildren<Props>) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <CSSWrapperComponent />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default layout;

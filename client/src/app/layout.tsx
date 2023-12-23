import VisualEditorCSSClassWrapper from "@/components/visual-editor-components/visual-editor-css-class-wrapper/VisualEditorCSSClassWrapper";
import "./globals.css";
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
          <VisualEditorCSSClassWrapper />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default layout;

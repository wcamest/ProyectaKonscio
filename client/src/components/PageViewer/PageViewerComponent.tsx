"use client";

import Page from "@/types/Classes/Page";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  page: PageDataObject;
};

const PageViewerComponent = (props: Props) => {
  const { page } = props;
  const pageClass = new Page(page);

  const Renderer = {
    Root() {
      const rootNode = pageClass.Root();

      if (!rootNode) return undefined;

      return rootNode.Render();
    },
  };

  return Renderer.Root();
};

export default PageViewerComponent;

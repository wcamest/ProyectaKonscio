import HTMLRenderer from "@/HTMLRenderer/HTMLRenderer";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";

type Props = {
  elements: WHTMLElement[];
  root: WHTMLElement | undefined;
};

const View = (props: Props) => {
  const { elements, root } = props;

  const Renderer = {
    Content() {
      if (!root) return undefined;

      return HTMLRenderer.Render(root.id, elements);
    },
  };

  return Renderer.Content();
};

export default View;

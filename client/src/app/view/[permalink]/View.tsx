import HTMLRenderer from "@/HTMLRenderer/HTMLRenderer";
import WHTMLElement from "@/types/WHTMLElement";
import React from "react";

type Props = {
  content: WHTMLElement;
};

const View = (props: Props) => {
  const Renderer = {
    Content() {
      return HTMLRenderer.Render(props.content);
    },
  };

  return Renderer.Content();
};

export default View;

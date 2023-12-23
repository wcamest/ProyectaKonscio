import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";
import Styles from "@/components/visual-editor-components/styles/styles";

type Props = {};

const pageDocumentMockData: PageDocument = {
  configuration: {
    title: "Page Document Mock Data",
    permalink: "page document mock data",
    description:
      "estos datos están simulados, directamente en el código, no están en una base de datos todavía",
  },
  rows: [],
  selectedNode: "0XD5E5555555555",
  root: "0XD5E5555555555",
  nodes: [
    {
      id: "0XD5E5555555555",
      nodes: [],
      type: "PageDocumentContainerElement",
      name: "Contenedor Principal",
      root: true,
      canAddChild: true,
      styles: Styles.CreateClassListCollection(),
    },
  ],
};

const page = (props: Props) => {
  return <VisualEditor data={pageDocumentMockData} />;
};

export default page;

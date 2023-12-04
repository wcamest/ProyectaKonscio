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
  rows: ["O25CDTGYSAIHRZR"],
  nodes: [
    {
      id: "O25CDTGYSAIHRZR",
      nodes: ["OFIUSK75A1LT434"],
      type: "PageDocumentRow",
      styles: Styles.CreateClassListCollection(),
    },
    {
      id: "OFIUSK75A1LT434",
      nodes: [],
      type: "PageDocumentColumn",
      parent: "O25CDTGYSAIHRZR",
      styles: Styles.CreateClassListCollection(),
    },
  ],
};

const page = (props: Props) => {
  return <VisualEditor data={pageDocumentMockData} />;
};

export default page;

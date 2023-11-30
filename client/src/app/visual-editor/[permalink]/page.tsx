import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";

type Props = {};

const pageDocumentMockData: PageDocument = {
  configuration: {
    title: "Page Document Mock Data",
    permalink: "page document mock data",
    description:
      "estos datos están simulados, directamente en el código, no están en una base de datos todavía",
  },
  nodes: [
    {
      id: "O25CDTGYSAIHRZR",
      nodes: ["OFIUSK75A1LT434"],
      type: "PageDocumentRow",
    },
    {
      id: "OFIUSK75A1LT434",
      nodes: [],
      type: "PageDocumentColumn",
      parent: "O25CDTGYSAIHRZR"
    },
  ],
};

const page = (props: Props) => {
  return <VisualEditor data={pageDocumentMockData} />;
};

export default page;

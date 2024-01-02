import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";
import Styles from "@/components/visual-editor-components/styles/styles";
import mockData from "./mockData.json";

type Props = {};

const pageDocumentMockData: any = mockData;

const page = (props: Props) => {
  return <VisualEditor data={pageDocumentMockData} />;
};

export default page;

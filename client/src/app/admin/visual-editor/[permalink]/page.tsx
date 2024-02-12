import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";
import Styles from "@/components/visual-editor-components/styles/styles";
import _empty from "./mock/_empty.json";
import home from "./mock/home.json";
import ecomonia_real_colaborativa from "./mock/economia-real-colaborativa.json";
import educacion_alternativa from "./mock/educacion-alternativa.json";

type Props = {
  params: {
    permalink: string;
  };
};

const mock: any = {
  _empty: _empty,
  home: home,
  "economia-real-colaborativa": ecomonia_real_colaborativa,
  "educacion-alternativa": educacion_alternativa,
};

const getData = async (permalink: string) => {
  if (!mock[permalink]) return mock["_empty"];

  return mock[permalink];
};

const page = async (props: Props) => {
  const data: any = await getData(props.params.permalink);

  return <VisualEditor data={data} />;
};

export default page;

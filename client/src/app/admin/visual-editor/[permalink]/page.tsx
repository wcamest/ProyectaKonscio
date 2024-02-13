import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";
import Styles from "@/components/visual-editor-components/styles/styles";
import _empty from "./mock/_empty.json";
import _blogPostTemplate from "./mock/_blogPostTemplate.json";
import home from "./mock/home.json";
import ecomonia_real_colaborativa from "./mock/economia-real-colaborativa.json";
import educacion_alternativa from "./mock/educacion-alternativa.json";
import cultura_inclusiva from "./mock/cultura-inclusiva.json";
import ecologia_conciencia_ambiental from "./mock/ecologia-conciencia-ambiental.json";
import innovaciones_tecnologicas from "./mock/innovaciones-tecnologicas.json";
import periodismo_digno from "./mock/periodismo-digno.json";
import politica_de_conciencia from "./mock/politica-de-conciencia.json";
import historia_no_manipulada from "./mock/historia-no-manipulada.json";
import salud_y_bienestar from "./mock/salud-y-bienestar.json";
import colabora from "./mock/colabora.json";
import notikonscio from "./mock/notikonscio.json";
import proyectos from "./mock/proyectos.json";
import plataforma_digital_konsciohousing from "./mock/plataforma-digital-konsciohousing.json";

type Props = {
  params: {
    permalink: string;
  };
  searchParams: {
    isBlogPost?: boolean;
  };
};

const mock: any = {
  _empty: _empty,
  _blogPostTemplate: _blogPostTemplate,
  home: home,
  "economia-real-colaborativa": ecomonia_real_colaborativa,
  "educacion-alternativa": educacion_alternativa,
  "cultura-inclusiva": cultura_inclusiva,
  "ecologia-conciencia-ambiental": ecologia_conciencia_ambiental,
  "innovaciones-tecnologicas": innovaciones_tecnologicas,
  "periodismo-digno": periodismo_digno,
  "politica-de-conciencia": politica_de_conciencia,
  "historia-no-manipulada": historia_no_manipulada,
  "salud-y-bienestar": salud_y_bienestar,
  colabora: colabora,
  notikonscio: notikonscio,
  proyectos: proyectos,
  "plataforma-digital-konsciohousing": plataforma_digital_konsciohousing,
};

const getData = async (permalink: string, isBlogPost: boolean) => {
  if (!mock[permalink]) {
    if (isBlogPost) return mock["_blogPostTemplate"];

    return mock["_empty"];
  }

  return mock[permalink];
};

const page = async (props: Props) => {
  const isBlogPost: boolean = props.searchParams.isBlogPost ? true : false;
  const data: any = await getData(props.params.permalink, isBlogPost);

  console.log(isBlogPost);

  return <VisualEditor data={data} />;
};

export default page;

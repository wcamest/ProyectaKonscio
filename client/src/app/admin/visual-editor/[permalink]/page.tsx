import React from "react";
import VisualEditor from "../VisualEditor";
import PageDocument from "@/types/page-document/PageDocument";
import Styles from "@/components/visual-editor-components/styles/styles";
import fs from "fs";

type Props = {
  params: {
    permalink: string;
  };
};

const getData = async (permalink: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/mock/${permalink}.json`, {cache: "no-store"}
    ).then((response) => {
      return response.json();
    });
    const data = response;
    return data;
  } catch (error) {
    const response = await fetch(`http://localhost:3000/mock/_empty.json`, {
      cache: "no-store",
    }).then((response) => {
      return response.json();
    });
    const data = response;
    return data;
  }
};

const page = async (props: Props) => {
  const data: any = await getData(props.params.permalink);

  return <VisualEditor data={data} />;
};

export default page;

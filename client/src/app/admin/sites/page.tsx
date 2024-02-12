import ButtonComponent from "@/components/controls/button/ButtonComponent";
import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import SitesSectionComponent from "@/components/sites/SitesSectionComponent";
import React from "react";
import Sites from "./Sites";
import mockData from "./mockData.json";

type Props = {};

const getData = async () => {
  //mock data
  return mockData;
};

const page = async (props: Props) => {
  const data = await getData();

  return <Sites data={data} />;
};

export default page;

import PageDocument3DModelComponent, {
  PageDocument3DModelFormat,
} from "@/types/page-document/PageDocument3DModelComponent";
import { useFBX } from "@react-three/drei";
import React from "react";
import { Euler } from "three";
import Interactive3DFBXModelComponent from "./Interactive3DFBXModelComponent";

type Props = {
  data: PageDocument3DModelComponent;
};

const Interactive3DModelComponent = (props: Props) => {
  const { data } = props;

  if (!data.url.length) return undefined;

  const Functions = {
    GetRotation() {
      let xRad = (data.rotation.x * Math.PI) / 180;
      let yRad = (data.rotation.y * Math.PI) / 180;
      let zRad = (data.rotation.z * Math.PI) / 180;

      return new Euler(xRad, yRad, zRad, "YXZ");
    },
  };

  if (data.format === PageDocument3DModelFormat.fbx) {
    return <Interactive3DFBXModelComponent data={data} />;
  }

  return undefined;
};

export default Interactive3DModelComponent;

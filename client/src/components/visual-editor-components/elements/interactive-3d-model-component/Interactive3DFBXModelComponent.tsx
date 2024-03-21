import PageDocument3DModelComponent from "@/types/page-document/PageDocument3DModelComponent";
import { useFBX } from "@react-three/drei";
import React from "react";
import { Euler } from "three";

type Props = {
  data: PageDocument3DModelComponent;
};

const Interactive3DFBXModelComponent = (props: Props) => {
  const { data } = props;
  const fbx = useFBX(data.url);

  if (!data.url.length) return undefined;

  const Functions = {
    GetRotation() {
      let xRad = (data.rotation.x * Math.PI) / 180;
      let yRad = (data.rotation.y * Math.PI) / 180;
      let zRad = (data.rotation.z * Math.PI) / 180;

      return new Euler(xRad, yRad, zRad, "YXZ");
    },
  };

  return (
    <mesh
      position={[data.position.x, data.position.y, data.position.z]}
      rotation={Functions.GetRotation()}
    >
      <primitive object={fbx} />
    </mesh>
  );
};

export default Interactive3DFBXModelComponent;

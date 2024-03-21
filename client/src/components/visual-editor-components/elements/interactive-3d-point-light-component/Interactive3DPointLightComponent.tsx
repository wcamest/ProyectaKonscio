import PageDocument3DPointLightComponent from "@/types/page-document/PageDocument3DPointLightComponent";
import React from "react";

type Props = {
  data: PageDocument3DPointLightComponent;
};

const Interactive3DPointLightComponent = (props: Props) => {
  const { data } = props;
  return (
    <pointLight
      color={data.color}
      intensity={data.intensity}
      decay={data.decay}
      distance={data.distance}
      position={[data.position.x, data.position.y, data.position.z]}
    />
  );
};

export default Interactive3DPointLightComponent;

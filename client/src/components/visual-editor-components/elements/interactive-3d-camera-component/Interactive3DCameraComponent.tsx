import PageDocument3DCameraComponent from "@/types/page-document/PageDocument3DCameraComponent";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

type Props = {
  data: PageDocument3DCameraComponent;
};

const Interactive3DCameraComponent = (props: Props) => {
  const { data } = props;
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    let xRad = (data.rotation.x * Math.PI) / 180;
    let yRad = (data.rotation.y * Math.PI) / 180;
    let zRad = (data.rotation.z * Math.PI) / 180;

    camera.position.set(data.position.x, data.position.y, data.position.z);
    camera.rotation.set(xRad, yRad, zRad, "YXZ");
  }, [data]);

  return undefined;
};

export default Interactive3DCameraComponent;

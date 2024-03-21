import React, { ChangeEvent } from "react";
import Vector3DControllerComponent from "../vector-3d-controller/Vector3DControllerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { Vector3D } from "@/types/page-document/PageDocument3DObjectComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument3DPointLightComponent from "@/types/page-document/PageDocument3DPointLightComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";

type Props = {};

const PointLight3DEditor = (props: Props) => {
  const { currentEditNode, currentDocument } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  const Functions = {
    GetNode() {
      if (!currentDocument) return undefined;
      if (!currentEditNode) return undefined;

      const node = currentDocument.nodes.find(
        (node: PageDocumentNode) => node.id === currentEditNode
      );

      if (!node) return undefined;

      return node;
    },
    GetPointLight() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const _3DPointLightComponent: PageDocument3DPointLightComponent =
        node as PageDocument3DPointLightComponent;

      return _3DPointLightComponent;
    },
    Get3DPosition() {
      const _3DPointLightComponent = Functions.GetPointLight();

      if (!_3DPointLightComponent) return { x: 0, y: 0, z: 0 };

      return _3DPointLightComponent.position;
    },
    Get3DRotation() {
      const _3DPointLightComponent = Functions.GetPointLight();

      if (!_3DPointLightComponent) return { x: 0, y: 0, z: 0 };

      return _3DPointLightComponent.rotation;
    },
    GetIntensity() {
        const _3DPointLightComponent = Functions.GetPointLight();
  
        if (!_3DPointLightComponent) return 0;
  
        return _3DPointLightComponent.intensity;
      },
    UpdateNode(data: any) {
      const _3DPointLightComponent = Functions.GetPointLight();
      if (!_3DPointLightComponent) return undefined;

      const updatedInputElement: PageDocument3DPointLightComponent = {
        ..._3DPointLightComponent,
        ...data,
      };

      dispatch(updateNode(updatedInputElement));
    },
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-1">
      <Vector3DControllerComponent
        label="posición:"
        vector={Functions.Get3DPosition()}
        onChange={(updatedPosition: Vector3D) => {
          Functions.UpdateNode({
            position: updatedPosition,
          });
        }}
      />
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-400">Intensidad:</span>
        <TextInputComponent
          type="number"
          min={0}
          max={500}
          value={Functions.GetIntensity()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              intensity: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default PointLight3DEditor;

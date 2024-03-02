import React from "react";
import Vector3DControllerComponent from "../vector-3d-controller/Vector3DControllerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocument3DCameraComponent from "@/types/page-document/PageDocument3DCameraComponent";
import { Vector3D } from "@/types/page-document/PageDocument3DObjectComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {};

const Camera3DEditor = (props: Props) => {
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
    Get3DCamera() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const _3DCameraComponent: PageDocument3DCameraComponent =
        node as PageDocument3DCameraComponent;

      return _3DCameraComponent;
    },
    Get3DPosition() {
      const _3dCameraComponent = Functions.Get3DCamera();

      if (!_3dCameraComponent) return { x: 0, y: 0, z: 0 };

      return _3dCameraComponent.position;
    },
    Get3DRotation() {
      const _3dCameraComponent = Functions.Get3DCamera();

      if (!_3dCameraComponent) return { x: 0, y: 0, z: 0 };

      return _3dCameraComponent.rotation;
    },
    UpdateNode(data: any) {
      const _3dCameraComponent = Functions.Get3DCamera();
      if (!_3dCameraComponent) return undefined;

      const updatedInputElement: PageDocument3DCameraComponent = {
        ..._3dCameraComponent,
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
      <Vector3DControllerComponent
        label="rotación:"
        vector={Functions.Get3DRotation()}
        onChange={(updatedRotation: Vector3D) => {
          Functions.UpdateNode({
            rotation: updatedRotation,
          });
        }}
      />
    </div>
  );
};

export default Camera3DEditor;

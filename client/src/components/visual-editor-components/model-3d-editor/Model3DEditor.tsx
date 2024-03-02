import React from "react";
import Vector3DControllerComponent from "../vector-3d-controller/Vector3DControllerComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import { Vector3D } from "@/types/page-document/PageDocument3DObjectComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import PageDocument3DModelComponent from "@/types/page-document/PageDocument3DModelComponent";

type Props = {};

const Model3DEditor = (props: Props) => {
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
    Get3DModel() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const _3DModelComponent: PageDocument3DModelComponent =
        node as PageDocument3DModelComponent;

      return _3DModelComponent;
    },
    Get3DPosition() {
      const _3dModelComponent = Functions.Get3DModel();

      if (!_3dModelComponent) return { x: 0, y: 0, z: 0 };

      return _3dModelComponent.position;
    },
    Get3DRotation() {
      const _3dModelComponent = Functions.Get3DModel();

      if (!_3dModelComponent) return { x: 0, y: 0, z: 0 };

      return _3dModelComponent.rotation;
    },
    UpdateNode(data: any) {
      const _3dModelComponent = Functions.Get3DModel();
      if (!_3dModelComponent) return undefined;

      const updatedInputElement: PageDocument3DModelComponent = {
        ..._3dModelComponent,
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

export default Model3DEditor;

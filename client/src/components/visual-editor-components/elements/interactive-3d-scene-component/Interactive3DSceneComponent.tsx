import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import PageDocumentInteractive3DSceneComponent from "@/types/page-document/PageDocumentInteractive3DSceneComponent";
import ClassGenerator, {
  ClassGeneratorResult,
} from "../class-generator/ClassGenerator";
import { useDispatch, useSelector } from "react-redux";
import Rectangle from "@/types/Rectangle";
import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import ElementRenderer from "../renderer/renderer";
import PageDocument3DCameraComponent from "@/types/page-document/PageDocument3DCameraComponent";

type Props = {
  data: PageDocumentInteractive3DSceneComponent;
  document: PageDocument;
};

const Interactive3DSceneComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    GetClasses() {
      const classes = ClassGenerator.Generate(data, currentScreen);

      return classes
        .map((classResult: ClassGeneratorResult) => classResult.className)
        .join(" ");
    },
    IsSelected() {
      let currentNodeId: string | undefined = document.selectedNode;

      while (currentNodeId) {
        if (currentNodeId === data.id) return true;

        const currentNode = document.nodes.find((node: PageDocumentNode) => {
          return node.id === currentNodeId;
        });

        if (currentNode) currentNodeId = currentNode.parent;
      }

      return false;
    },
    ShowSelection() {
      const isSelected = Functions.IsSelected();
      if (!ref.current) return;
      if (!isSelected) return;

      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const domRect = ref.current.getBoundingClientRect();
      const rectangle: Rectangle = {
        x: domRect.x,
        y: domRect.y,
        width: domRect.width,
        height: domRect.height,
      };

      dispatch(setSelectionRectangle(rectangle));
    },
    GetCamera() {
      const nodeFound = document.nodes.find((node: PageDocumentNode) => {
        return (
          data.nodes.includes(node.id) &&
          node.type === "PageDocument3DCameraComponent"
        );
      });

      if (!nodeFound) {
        const defaultCamera: any = {
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 0],
        };

        return defaultCamera;
      }

      const cameraComponent = nodeFound as PageDocument3DCameraComponent;

      const camera: any = {
        fov: cameraComponent.fov,
        near: cameraComponent.near,
        far: cameraComponent.far,
        position: [
          cameraComponent.position.x,
          cameraComponent.position.y,
          cameraComponent.position.z,
        ],
      };

      return camera;
    },
  };

  const Renderer = {
    Nodes() {
      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        const element = ElementRenderer.Render(node, document, key);
        return element;
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div ref={ref} className={Functions.GetClasses()}>
      <Canvas camera={Functions.GetCamera()}>
        <color attach={"background"} args={["#000000"]} />
        {Renderer.Nodes()}
      </Canvas>
    </div>
  );
};

export default Interactive3DSceneComponent;

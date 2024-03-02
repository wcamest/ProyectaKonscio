import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocument3DCameraComponent from "@/types/page-document/PageDocument3DCameraComponent";
import PageDocument3DModelComponent, {
  PageDocument3DModelFormat,
} from "@/types/page-document/PageDocument3DModelComponent";
import PageDocumentInteractive3DSceneComponent from "@/types/page-document/PageDocumentInteractive3DSceneComponent";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

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
  const [state, setState] = useState<{
    scene: THREE.Scene | undefined;
    sceneRenderer: THREE.WebGLRenderer | undefined;
    camera: THREE.PerspectiveCamera | undefined;
  }>({
    scene: undefined,
    sceneRenderer: undefined,
    camera: undefined,
  });
  const refState = useRef(state);

  const Functions = {
    CreateScene() {
      if (!ref.current) return undefined;
      const { clientWidth, clientHeight } = ref.current;

      const cameraNode = Functions.GetCameraComponent();

      if (!cameraNode) return undefined;

      const cameraComponent = cameraNode as PageDocument3DCameraComponent;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        cameraComponent.fov,
        clientWidth / clientHeight,
        cameraComponent.near,
        cameraComponent.far
      );

      const light = new THREE.PointLight(0xffffff, 50);
      light.position.set(0.8, 1.4, 1.0);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight();
      scene.add(ambientLight);

      scene.add(camera);
      camera.position.set(
        cameraComponent.position.x,
        cameraComponent.position.y,
        cameraComponent.position.z
      );

      let xRad = (cameraComponent.rotation.x * Math.PI) / 180;
      let yRad = (cameraComponent.rotation.y * Math.PI) / 180;
      let zRad = (cameraComponent.rotation.z * Math.PI) / 180;

      camera.rotation.set(xRad, yRad, zRad, "YXZ");

      const sceneRenderer = new THREE.WebGLRenderer();
      sceneRenderer.setSize(clientWidth, clientHeight);

      ref.current.appendChild(sceneRenderer.domElement);

      const fbxModels = Functions.GetModels(
        data,
        PageDocument3DModelFormat.fbx
      );

      if (fbxModels.length) {
        const fbxLoader = new FBXLoader();
        for (let _it_ = 0; _it_ < fbxModels.length; _it_++) {
          const _3DModelComponent = fbxModels[_it_];
          fbxLoader.load(
            _3DModelComponent.url,
            (data) => {
              data.position.set(
                _3DModelComponent.position.x,
                _3DModelComponent.position.y,
                _3DModelComponent.position.z
              );
              let xRad = (_3DModelComponent.rotation.x * Math.PI) / 180;
              let yRad = (_3DModelComponent.rotation.y * Math.PI) / 180;
              let zRad = (_3DModelComponent.rotation.z * Math.PI) / 180;

              data.rotation.set(xRad, yRad, zRad, "YXZ");
              data.name = `fbx-${_3DModelComponent.id}`;
              scene.add(data);
            },
            (xhr) => {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }

      sceneRenderer.render(scene, camera);

      setState({
        scene,
        camera,
        sceneRenderer,
      });

      refState.current = {
        scene,
        camera,
        sceneRenderer,
      };

      Functions.Animate();

      return sceneRenderer;
    },
    UpdateObjectsProperties() {
      const { scene, camera, sceneRenderer } = refState.current;
      if (!scene || !camera || !sceneRenderer) return;

      const cameraNode = Functions.GetCameraComponent();
      if (!cameraNode) return undefined;
      const cameraComponent = cameraNode as PageDocument3DCameraComponent;

      camera.position.set(
        cameraComponent.position.x,
        cameraComponent.position.y,
        cameraComponent.position.z
      );

      let cameraXRad = (cameraComponent.rotation.x * Math.PI) / 180;
      let cameraYRad = (cameraComponent.rotation.y * Math.PI) / 180;
      let cameraZRad = (cameraComponent.rotation.z * Math.PI) / 180;

      camera.rotation.set(cameraXRad, cameraYRad, cameraZRad, "YXZ");

      const models = Functions.GetModels(data, PageDocument3DModelFormat.fbx);

      models.forEach((model: PageDocument3DModelComponent) => {
        const sceneChild = scene.children.find(
          (child: THREE.Object3D<THREE.Object3DEventMap>) => {
            return child.name == `fbx-${model.id}`;
          }
        );

        if (sceneChild) {
          sceneChild.position.set(
            model.position.x,
            model.position.y,
            model.position.z
          );

          let modelXRad = (model.rotation.x * Math.PI) / 180;
          let modelYRad = (model.rotation.y * Math.PI) / 180;
          let modelZRad = (model.rotation.z * Math.PI) / 180;

          sceneChild.rotation.set(modelXRad, modelYRad, modelZRad, "YXZ");
        }
      });
    },
    Render() {
      const { scene, camera, sceneRenderer } = refState.current;
      if (!scene || !camera || !sceneRenderer) return;

      sceneRenderer.render(scene, camera);
    },
    Animate() {
      requestAnimationFrame(Functions.Animate);
      Functions.Render();
    },
    ResizeScene() {
      const { scene, camera, sceneRenderer } = refState.current;
      if (!ref.current || !scene || !camera || !sceneRenderer) return;

      const { clientWidth, clientHeight } = ref.current;
      sceneRenderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    },
    GetCameraComponent() {
      const _3dCameraComponent = document.nodes.find(
        (node: PageDocumentNode) => {
          return (
            data.nodes.includes(node.id) &&
            node.type === "PageDocument3DCameraComponent"
          );
        }
      );

      return _3dCameraComponent;
    },
    GetModels(parent: PageDocumentNode, format: PageDocument3DModelFormat) {
      const nodes = document.nodes.filter((node: PageDocumentNode) =>
        parent.nodes.includes(node.id)
      );

      let models: PageDocument3DModelComponent[] = [];

      for (let _it_ = 0; _it_ < nodes.length; _it_++) {
        const node = nodes[_it_];

        if (node.type === "PageDocument3DContainerComponent") {
          const subModels = Functions.GetModels(node, format);

          models = [...models, ...subModels];
        }

        if (node.type !== "PageDocument3DModelComponent") continue;

        const _3DModelComponent = node as PageDocument3DModelComponent;

        if (_3DModelComponent.format !== format) continue;

        if (!_3DModelComponent.url.length) continue;

        models.push(_3DModelComponent);
      }

      return models;
    },
    IsSelected() {
      let parentNode: string | undefined = document.selectedNode;

      while (parentNode) {
        if (data.id === parentNode) return true;

        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === parentNode
        );

        parentNode = node?.parent;
      }

      return false;
    },
    ShowSelection() {
      if (!ref.current) return;
      if (!Functions.IsSelected()) return;

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
  };

  useEffect(() => {
    const sceneRenderer = Functions.CreateScene();

    return () => {
      if (ref.current && sceneRenderer) {
        ref.current.removeChild(sceneRenderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    Functions.ShowSelection();
    Functions.UpdateObjectsProperties();
    Functions.ResizeScene();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return <div ref={ref} className="w-full h-full"></div>;
};

export default Interactive3DSceneComponent;

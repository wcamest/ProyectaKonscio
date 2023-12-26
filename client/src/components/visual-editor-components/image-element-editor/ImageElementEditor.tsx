import React, { ChangeEvent } from "react";
import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentImageElement from "@/types/page-document/PageDocumentImageElement";
import ImageFileInputComponent from "../file-input/ImageFileInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {};

const ImageElementEditor = (props: Props) => {
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
    GetImage() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const imageElement: PageDocumentImageElement =
        node as PageDocumentImageElement;

      return imageElement;
    },
    GetFileNameValue() {
      const imageElement = Functions.GetImage();
      if (!imageElement) return "";

      return imageElement.fileName;
    },
    GetUrlValue() {
      const imageElement = Functions.GetImage();
      if (!imageElement) return "";

      return imageElement.url;
    },
    GetDescriptionValue() {
      const imageElement = Functions.GetImage();
      if (!imageElement) return "";

      return imageElement.description;
    },
    UpdateNode(data: any) {
      const imageElement = Functions.GetImage();
      if (!imageElement) return undefined;

      const updatedImageElement: PageDocumentImageElement = {
        ...imageElement,
        ...data,
      };
      dispatch(updateNode(updatedImageElement));
    },
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">1. Seleccione una imagen:</span>
        <ImageFileInputComponent
          fileName={Functions.GetFileNameValue()}
          imageUrl={Functions.GetUrlValue()}
          onChange={Functions.UpdateNode}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">
          2. Incluya una descripción de la imagen:
        </span>
        <p className="p-2 bg-yellow-100 text-yellow-800 border border-dashed border-yellow-800 text-xs rounded-md">
          Este texto describe la imagen, permitiendo que los motores de búsqueda
          comprendan su contenido. Mejora la accesibilidad para usuarios con
          discapacidad visual y asegura que el contenido sea indexado de manera
          más precisa, aumentando la visibilidad en los resultados de búsqueda.
        </p>
        <TextAreaComponent
          value={Functions.GetDescriptionValue()}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            Functions.UpdateNode({
              description: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default ImageElementEditor;

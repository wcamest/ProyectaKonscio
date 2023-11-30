import RichTextEditorComponent from "@/components/RichTextEditor/RichTextEditorComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const RichTextElementEditorComponent = (props: Props) => {
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
    GetValue() {
      const node = Functions.GetNode();
      if (!node) return "";

      const richTextElement: PageDocumentRichTextElement =
        node as PageDocumentRichTextElement;

      return richTextElement.rawHTML;
    },
    UpdateNode(value: string) {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const richTextElement: PageDocumentRichTextElement =
        node as PageDocumentRichTextElement;
      const updatedRichTextElement: PageDocumentRichTextElement = {
        ...richTextElement,
        rawHTML: value,
      };
      dispatch(updateNode(updatedRichTextElement));
    },
  };

  return (
    <RichTextEditorComponent
      value={Functions.GetValue()}
      onChange={Functions.UpdateNode}
    />
  );
};

export default RichTextElementEditorComponent;

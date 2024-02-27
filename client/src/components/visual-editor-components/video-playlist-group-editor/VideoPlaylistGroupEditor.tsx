import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentVideoPlaylistGroupComponent from "@/types/page-document/PageDocumentVideoPlaylistGroupComponent";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const VideoPlaylistGroupEditor = (props: Props) => {
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
    GetVideoPlaylistGroup() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const videoPlaylistGroupComponent: PageDocumentVideoPlaylistGroupComponent =
        node as PageDocumentVideoPlaylistGroupComponent;

      return videoPlaylistGroupComponent;
    },
    GetTitle() {
      const videoPlaylistGroupComponent = Functions.GetVideoPlaylistGroup();
      if (!videoPlaylistGroupComponent) return undefined;

      return videoPlaylistGroupComponent.title;
    },
    GetSubtitle() {
      const videoPlaylistGroupComponent = Functions.GetVideoPlaylistGroup();
      if (!videoPlaylistGroupComponent) return undefined;

      return videoPlaylistGroupComponent.subtitle;
    },
    UpdateNode(data: any) {
      const videoPlaylistGroupComponent = Functions.GetVideoPlaylistGroup();
      if (!videoPlaylistGroupComponent) return undefined;

      const updatedInputElement: PageDocumentVideoPlaylistGroupComponent = {
        ...videoPlaylistGroupComponent,
        ...data,
      };

      dispatch(updateNode(updatedInputElement));
    },
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Titulo:</span>
        <TextInputComponent
          value={Functions.GetTitle()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              title: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Subtitulo:</span>
        <TextInputComponent
          value={Functions.GetSubtitle()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              subtitle: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlaylistGroupEditor;

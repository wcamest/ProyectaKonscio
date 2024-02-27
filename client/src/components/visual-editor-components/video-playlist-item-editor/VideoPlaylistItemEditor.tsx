import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { updateNode } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentVideoPlaylistItemComponent from "@/types/page-document/PageDocumentVideoPlaylistItemComponent";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const VideoPlaylistItemEditor = (props: Props) => {
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
    GetVideoPlaylistItem() {
      const node = Functions.GetNode();
      if (!node) return undefined;

      const videoPlaylistItemComponent: PageDocumentVideoPlaylistItemComponent =
        node as PageDocumentVideoPlaylistItemComponent;

      return videoPlaylistItemComponent;
    },
    GetTitle() {
      const videoPlaylistItemComponent = Functions.GetVideoPlaylistItem();
      if (!videoPlaylistItemComponent) return undefined;

      return videoPlaylistItemComponent.title;
    },
    GetSubtitle() {
      const videoPlaylistItemComponent = Functions.GetVideoPlaylistItem();
      if (!videoPlaylistItemComponent) return "";

      return videoPlaylistItemComponent.subtitle;
    },
    GetDescription() {
      const videoPlaylistItemComponent = Functions.GetVideoPlaylistItem();
      if (!videoPlaylistItemComponent) return "";

      return videoPlaylistItemComponent.description;
    },
    UpdateNode(data: any) {
      const videoPlaylistItemComponent = Functions.GetVideoPlaylistItem();
      if (!videoPlaylistItemComponent) return undefined;

      const updatedInputElement: PageDocumentVideoPlaylistItemComponent = {
        ...videoPlaylistItemComponent,
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
      <div className="flex flex-col gap-2">
        <span className="text-xs text-gray-500">Subtitulo:</span>
        <TextAreaComponent
          value={Functions.GetDescription()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            Functions.UpdateNode({
              description: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlaylistItemEditor;

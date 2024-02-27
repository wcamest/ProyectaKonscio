import { setSelectionRectangle } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import Rectangle from "@/types/Rectangle";
import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentVideoPlaylistComponent from "@/types/page-document/PageDocumentVideoPlaylistComponent";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementRenderer from "../renderer/renderer";
import VideoPlaylistGroupComponent from "../video-playlist-group-component/VideoPlaylistGroupComponent";
import PageDocumentVideoPlaylistGroupComponent from "@/types/page-document/PageDocumentVideoPlaylistGroupComponent";
import VideoPlaylistItemComponent from "../video-playlist-item-component/VideoPlaylistItemComponent";
import PageDocumentVideoPlaylistItemComponent from "@/types/page-document/PageDocumentVideoPlaylistItemComponent";

type Props = {
  data: PageDocumentVideoPlaylistComponent;
  document: PageDocument;
};

const VideoPlaylistComponent = (props: Props) => {
  const { data, document } = props;
  const { currentScreen, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const Functions = {
    IsPlaylistSelected() {
      if (data.id === document.selectedNode) return true;

      const selectedNode = document.nodes.find(
        (node: PageDocumentNode) => node.id === document.selectedNode
      );

      if (!selectedNode) return false;

      let currentNode: PageDocumentNode | undefined = selectedNode;

      while (currentNode !== undefined) {
        const _currentNode: PageDocumentNode = currentNode;

        if (_currentNode.id === data.id) return true;

        currentNode = document.nodes.find(
          (node: PageDocumentNode) => node.id === _currentNode.parent
        );
      }

      return false;
    },
    ShowSelection() {
      if (!ref.current) return;
      if (!Functions.IsPlaylistSelected()) return;

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

  const Renderer = {
    Items() {
      return data.nodes.map((nodeId: string, key: number) => {
        const node = document.nodes.find(
          (node: PageDocumentNode) => node.id === nodeId
        );

        if (!node) return undefined;

        if (node.type === "PageDocumentVideoPlaylistGroupComponent")
          return (
            <VideoPlaylistGroupComponent
              key={key}
              data={node as PageDocumentVideoPlaylistGroupComponent}
              document={document}
            />
          );

        if (node.type === "PageDocumentVideoPlaylistItemComponent")
          return (
            <VideoPlaylistItemComponent
              key={key}
              data={node as PageDocumentVideoPlaylistItemComponent}
            />
          );
      });
    },
  };

  useEffect(() => {
    Functions.ShowSelection();
  }, [document.selectedNode, currentStyleEditNode, document, currentScreen]);

  return (
    <div
      ref={ref}
      id={`video-${data.id}`}
      className="w-full h-full flex overflow-hidden"
    >
      <div>
        <div className="p-2 w-80 h-full overflow-hidden bg-gray-500">
          <div className="w-full h-full flex flex-col gap-2 overflow-auto">
            {Renderer.Items()}
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden bg-gray-700"></div>
    </div>
  );
};

export default VideoPlaylistComponent;

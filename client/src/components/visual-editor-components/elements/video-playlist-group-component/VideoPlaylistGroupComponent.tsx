import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";
import PageDocumentVideoPlaylistGroupComponent from "@/types/page-document/PageDocumentVideoPlaylistGroupComponent";
import PageDocumentVideoPlaylistItemComponent from "@/types/page-document/PageDocumentVideoPlaylistItemComponent";
import React from "react";
import VideoPlaylistItemComponent from "../video-playlist-item-component/VideoPlaylistItemComponent";

type Props = {
  data: PageDocumentVideoPlaylistGroupComponent;
  document: PageDocument;
};

const VideoPlaylistGroupComponent = (props: Props) => {
  const { data, document } = props;

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

  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 w-full bg-gray-600 flex gap-2">
        <div>
          <div className="w-20 aspect-video bg-gray-800"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-white truncate">{data.title}</span>
          <span className="text-white text-xs text-opacity-50 truncate">
            {data.subtitle}
          </span>
        </div>
      </div>
      {data.nodes.length > 0 && (
        <div className="pl-10">
          <div className="flex flex-col gap-2">{Renderer.Items()}</div>
        </div>
      )}
    </div>
  );
};

export default VideoPlaylistGroupComponent;

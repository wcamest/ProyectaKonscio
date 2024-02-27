import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentVideoPlaylistItemComponent from "@/types/page-document/PageDocumentVideoPlaylistItemComponent";
import React from "react";

type Props = {
  data: PageDocumentVideoPlaylistItemComponent;
};

const VideoPlaylistItemComponent = (props: Props) => {
  const { data } = props;

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
    </div>
  );
};

export default VideoPlaylistItemComponent;

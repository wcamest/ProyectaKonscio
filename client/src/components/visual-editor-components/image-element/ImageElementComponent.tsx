import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentImageElement from "@/types/page-document/PageDocumentImageElement";
import Image from "next/image";
import React from "react";

type Props = {
  data: PageDocumentImageElement;
  document?: PageDocument;
};

const ImageElementComponent = (props: Props) => {
  const { data, document } = props;

  if (!data.url || !data.description)
    return (
      <div className="aspect-video flex justify-center items-center">
        <span>Imagen vacía</span>
      </div>
    );

  return (
    <div
      style={{
        width: `${data.width}px`,
        height: `${data.height}px`,
      }}
      className="relative overflow-hidden"
    >
      <Image
        src={data.url}
        alt={data.description}
        fill={true}
        className="object-contain"
      />
    </div>
  );
};

export default ImageElementComponent;

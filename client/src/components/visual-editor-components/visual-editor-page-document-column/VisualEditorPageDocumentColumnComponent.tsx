import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import React from "react";

type Props = {
  data: PageDocumentColumn;
  document: PageDocument;
};

const VisualEditorPageDocumentColumnComponent = (props: Props) => {
  const { data, document } = props;

  const Renderer = {
    EmptyColumnDefaultContent(){
        if(data.node) return undefined;

        return <div className="relative w-full h-28 flex justify-center items-center">
            Columna vacía
        </div>
    }
  }

  return <div className="relative h-fit">
    {Renderer.EmptyColumnDefaultContent()}
  </div>;
};

export default VisualEditorPageDocumentColumnComponent;

import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import React from "react";
import VisualEditorPageDocumentRowComponent from "../visual-editor-page-document-row/VisualEditorPageDocumentRowComponent";

type Props = {
  data: PageDocument;
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    Rows() {
      return data.rows.map((Row: PageDocumentRow, key: number) => {
        return (
          <VisualEditorPageDocumentRowComponent
            key={key}
            data={Row}
            document={data}
          />
        );
      });
    },
  };

  return (
    <div className="relative w-full h-fit p-10">
      <div className="border border-dashed border-blue-200 flex flex-col">
        {Renderer.Rows()}
      </div>
    </div>
  );
};

export default VisualEditorPageDocumentComponent;

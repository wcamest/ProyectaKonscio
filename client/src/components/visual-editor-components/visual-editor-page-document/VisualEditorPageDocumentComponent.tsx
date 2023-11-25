import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentSection from "@/types/page-document/PageDocumentSection";
import React from "react";
import VisualEditorPageDocumentSectionComponent from "../visual-editor-page-document-section/VisualEditorPageDocumentSectionComponent";

type Props = {
  data: PageDocument;
};

const VisualEditorPageDocumentComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    Sections() {
      return data.sections.map((section: PageDocumentSection, key: number) => {
        return (
          <VisualEditorPageDocumentSectionComponent
            key={key}
            data={section}
            document={data}
          />
        );
      });
    },
  };

  return (
    <div className="relative w-full h-fit p-10">
      <div className="border border-dashed border-blue-200 flex flex-col">
        {Renderer.Sections()}
      </div>
    </div>
  );
};

export default VisualEditorPageDocumentComponent;

import PageDocument from "@/types/page-document/PageDocument";
import PageDocumentRichTextElement from "@/types/page-document/PageDocumentRichTextElement";
import React from "react";
import "react-quill/dist/quill.snow.css";

type Props = {
  data: PageDocumentRichTextElement;
  document?: PageDocument;
};

const RichTextElementComponent = (props: Props) => {
  const { data } = props;
  return (
    <div className="ql-snow">
      <div
        className="ql-editor"
        dangerouslySetInnerHTML={{ __html: data.rawHTML }}
      ></div>
    </div>
  );
};

export default RichTextElementComponent;

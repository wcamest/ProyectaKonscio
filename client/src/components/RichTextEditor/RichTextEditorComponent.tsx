import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditorComponent.css";

type Props = {
  value: string;
  onChange?: Function;
};

const RichTextEditorComponent = (props: Props) => {
  const { value, onChange } = props;

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      ["link"],

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  const Functions = {
    Update(value: string) {
      if (onChange) onChange(value);
    },
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      className="w-full h-full flex flex-col"
      modules={modules}
      onChange={(value: string) => {
        Functions.Update(value);
      }}
    />
  );
};

export default RichTextEditorComponent;

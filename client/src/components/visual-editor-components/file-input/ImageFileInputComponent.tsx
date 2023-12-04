import { default as NextImage } from "next/image";
import React, { ChangeEvent, useRef } from "react";

type Props = {
  fileName?: string;
  imageUrl?: string;
  onChange?: Function;
};

const ImageFileInputComponent = (props: Props) => {
  const { fileName, imageUrl, onChange } = props;
  const ref = useRef<HTMLInputElement>(null);

  const Functions = {
    ShowFileInput() {
      if (ref.current) {
        ref.current.click();
      }
    },
    SelectFile(file: File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result !== "string") return;

        const image = new Image();
        image.onload = () => {
          const { width, height } = image;

          if (onChange)
            onChange({
              fileName: file.name,
              width,
              height,
              url: reader.result,
            });
        };

        image.src = reader.result;
      };

      reader.readAsDataURL(file);
    },
  };

  return (
    <div
      className="p-4 border border-solid border-blue-300 rounded-md bg-blue-100 hover:bg-blue-200 cursor-pointer select-none"
      onClick={() => {
        Functions.ShowFileInput();
      }}
    >
      <input
        ref={ref}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            Functions.SelectFile(file);
          }
        }}
      />
      {!imageUrl && <span>No hay archivo seleccionado</span>}
      {imageUrl && (
        <div className="flex items-center gap-4">
          <div>
            <div className="relative w-20 h-20 overflow-hidden border border-solid border-blue-300 rounded-md bg-blue-200">
              <NextImage
                src={imageUrl}
                alt="image-preview"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
          <span>{fileName}</span>
        </div>
      )}
    </div>
  );
};

export default ImageFileInputComponent;

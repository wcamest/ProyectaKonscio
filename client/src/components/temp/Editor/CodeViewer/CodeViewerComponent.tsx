import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  pageData: PageDataObject;
};

const CodeViewerComponent = (props: Props) => {
  const { pageData } = props;

  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <div className="p-2 bg-gray-100">
          <button
            className="px-2 py-1 border border-solid border-blue-800 text-blue-800 active:text-blue-50 rounded-md shadow-md hover:bg-blue-200 active:bg-blue-800"
            onClick={() => {
              const code = JSON.stringify(pageData, null, 2);
              navigator.clipboard.writeText(code);
              alert("Texto copiado");
            }}
          >
            Copiar
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        <pre className="w-full h-full">{JSON.stringify(pageData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CodeViewerComponent;

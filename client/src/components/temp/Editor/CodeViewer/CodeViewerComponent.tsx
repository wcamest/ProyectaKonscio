import Page from "@/types/Classes/Page";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React from "react";

type Props = {
  pageData: PageDataObject;
};

const CodeViewerComponent = (props: Props) => {
  const { pageData } = props;

  const Functions = {
    ClearLayoutComponents() {
      let page = new Page(pageData);
      const root = page.Root();

      if (!root) return "";

      const layoutComponents = root.GetChildrenByType("LayoutComponent");

      for (let it = 0; it < layoutComponents.length; it++) {
        const layoutComponent = layoutComponents[it];

        page = new Page(layoutComponent.Delete().pageData);
      }

      const code = JSON.stringify(page.data, null, 2);

      return code;
    },
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <div className="p-2 bg-gray-100">
          <button
            className="px-2 py-1 border border-solid border-blue-800 text-blue-800 active:text-blue-50 rounded-md shadow-md hover:bg-blue-200 active:bg-blue-800"
            onClick={() => {
              const code = Functions.ClearLayoutComponents();
              navigator.clipboard.writeText(code);
              alert("Texto copiado");
            }}
          >
            Copiar
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        <pre className="w-full h-full">{Functions.ClearLayoutComponents()}</pre>
      </div>
    </div>
  );
};

export default CodeViewerComponent;

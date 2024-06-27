import Page from "@/types/Classes/Page";
import React, { ChangeEvent } from "react";

type Props = {
  page: Page;
  breakpoint: string;
  selectedNodeId: string;
  onChangeBreakpoint?: Function;
};

const breakpointSizes: any = {
  base: "100vw",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const EditorViewerComponent = (props: Props) => {
  const { page, breakpoint, selectedNodeId, onChangeBreakpoint } = props;

  const Renderer = {
    Root() {
      const root = page.Root();

      if (!root) return undefined;

      return root.Render(
        breakpoint,
        undefined,
        undefined,
        undefined,
        selectedNodeId
      );
    },
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-300">
      <div className="absolute p-2 right-0 top-0 z-50">
        <select
          className="p-2 border border-solid border-blue-800 rounded-md shadow-md"
          value={breakpoint}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const newBreakpoint = e.target.selectedOptions[0].value;
            if (onChangeBreakpoint) onChangeBreakpoint(newBreakpoint);
          }}
        >
          <option value={"base"}>base</option>
          <option value={"sm"}>sm</option>
          <option value={"md"}>md</option>
          <option value={"lg"}>lg</option>
          <option value={"xl"}>xl</option>
          <option value={"2xl"}>2xl</option>
        </select>
      </div>
      <div className="w-full h-full overflow-auto">
        <div className="p-20 w-fit">
          <div
            style={{
              width: breakpointSizes[breakpoint],
            }}
            className="bg-white border-gray-800 shadow-md"
          >
            {Renderer.Root()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorViewerComponent;

import CaretLeftFillIcon from "@/components/Icons/CaretLeftFillIcon";
import CaretRightFillIcon from "@/components/Icons/CaretRightFillIcon";
import React from "react";

type Props = {};

const BlogPostGridViewerComponent = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col justify-between items-stretch">
        <div className="p-2 flex justify-end"></div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5">
          
        </div>
        <div className="p-2 flex justify-center items-center">
          <div className="flex gap-2">
            <button className="p-2 text-blue-50 bg-blue-500 rounded-full">
              <CaretLeftFillIcon />
            </button>
            <button className="p-2 text-blue-50 bg-blue-500 rounded-full">
              <CaretRightFillIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostGridViewerComponent;

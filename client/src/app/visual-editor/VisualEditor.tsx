"use client";

import NodeTreeEditor from "@/components/visual-editor-components/node-tree-editor/NodeTreeEditor";
import ScreenSelectorComponent from "@/components/visual-editor-components/screen-selector/ScreenSelectorComponent";
import StyleEditor from "@/components/visual-editor-components/style-editor/StyleEditor";
import VisualEditorPageDocumentComponent from "@/components/visual-editor-components/visual-editor-page-document/VisualEditorPageDocumentComponent";
import { setCurrentPageDocument } from "@/redux/features/visual-editor/visualEditorSlice";
import { RootState } from "@/redux/store/store";
import PageDocument from "@/types/page-document/PageDocument";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  data: PageDocument;
};

const VisualEditor = (props: Props) => {
  const { data } = props;
  const { currentDocument, currentStyleEditNode } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageDocument(data));
  }, []);

  if (!currentDocument) return undefined;

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="p-4 w-full flex justify-between items-center border-b border-b-solid border-b-blue-200">
        <div>
          <button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400" onClick={() => {
            console.log(JSON.stringify(currentDocument));
          }}>Export document to JSON</button>
        </div>
        <ScreenSelectorComponent />
      </div>
      <div className="w-full h-full flex overflow-hidden">
        <div className="h-full">
          <div className="w-96 h-full overflow-hidden">
            <NodeTreeEditor document={currentDocument} />
          </div>
        </div>
        <div className="w-full h-full overflow-auto">
          <VisualEditorPageDocumentComponent data={currentDocument} />
        </div>
        {currentStyleEditNode && (
          <div className="h-full">
            <div className="w-96 h-full overflow-hidden">
              <StyleEditor
                styleEditNodeId={currentStyleEditNode}
                document={currentDocument}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualEditor;

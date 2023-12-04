"use client";

import ScreenSelectorComponent from "@/components/visual-editor-components/screen-selector/ScreenSelectorComponent";
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
  const { currentDocument } = useSelector(
    (state: RootState) => state.visualEditor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageDocument(data));
  }, []);

  if (!currentDocument) return undefined;

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="p-4 w-full flex justify-between border-b border-b-solid border-b-blue-200">
        <div>

        </div>
        <ScreenSelectorComponent />
      </div>
      <div className="w-full h-full overflow-auto">
        <VisualEditorPageDocumentComponent data={currentDocument} />
      </div>
    </div>
  );
};

export default VisualEditor;

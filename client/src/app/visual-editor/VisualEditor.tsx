"use client";

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

  return <VisualEditorPageDocumentComponent data={currentDocument} />;
};

export default VisualEditor;

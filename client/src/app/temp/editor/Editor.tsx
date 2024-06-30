"use client";

import CSSStylesComponent from "@/components/CSSStyles/CSSStylesComponent";
import CodeViewerComponent from "@/components/temp/Editor/CodeViewer/CodeViewerComponent";
import EditorViewerComponent from "@/components/temp/Editor/EditorViewer/EditorViewerComponent";
import ElementPropertyGridComponent from "@/components/temp/Editor/ElementPropertyGrid/ElementPropertyGridComponent";
import NodesTreeEditorComponent from "@/components/temp/Editor/NodesTreeEditor/NodesTreeEditorComponent";
import StylesGridComponent from "@/components/temp/Editor/StylesGrid/StylesGridComponent";
import TabsContainerComponent from "@/components/temp/Editor/TabsContainer/TabsContainerComponent";
import Page from "@/types/Classes/Page";
import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useState } from "react";

type Props = {
  pageData: PageDataObject;
};

type EditorState = {
  pageData: PageDataObject;
  selectedNodeId: string;
  currentBreakpoint: string;
  copiedNodeId: string | undefined;
};

const Editor = (props: Props) => {
  const { pageData } = props;

  const [state, setState] = useState<EditorState>({
    pageData,
    selectedNodeId: pageData.rootNodeId,
    currentBreakpoint: "base",
    copiedNodeId: undefined,
  });

  const page = new Page(state.pageData);

  const Functions = {
    SelectNode(id: string) {
      setState({
        ...state,
        selectedNodeId: id,
      });
    },
    UpdatePage(callback: Function) {
      const pageNode = page.GetNodeById(state.selectedNodeId);
      if (!pageNode) return;

      const updatedPageData = callback(pageNode);

      if (!updatedPageData) return;

      setState({
        ...state,
        pageData: updatedPageData,
      });
    },
    AddNode(type: string) {
      Functions.UpdatePage((pageNode: PageNode) => pageNode.AddNode(type));
    },
    UpdateProperty(propertyName: string, propertyValue: any) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.UpdateProperty(propertyName, propertyValue)
      );
    },
    ActivateProperty(propertyName: string, propertyValue: any) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.ActivateProperty(propertyName, propertyValue)
      );
    },
    DeactivateProperty(propertyName: string) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.DeactivateProperty(propertyName)
      );
    },
    AssignClassToNewProperty(propertyName: string, propertyValue: string) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.AssignCSSPropertyToClass(
          propertyName,
          propertyValue,
          state.currentBreakpoint
        )
      );
    },
    DeleteCSSProperty(propertyName: string, propertyValue: string) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.DeleteCSSProperty(
          propertyName,
          propertyValue,
          state.currentBreakpoint
        )
      );
    },
    UpdateCSSProperty(
      propertyName: string,
      propertyValue: string,
      newPropertyValue: string
    ) {
      Functions.UpdatePage((pageNode: PageNode) =>
        pageNode.UpdateCSSProperty(
          propertyName,
          propertyValue,
          newPropertyValue,
          state.currentBreakpoint
        )
      );
    },
    DeleteNode() {
      const pageNode = page.GetNodeById(state.selectedNodeId);

      if (!pageNode) return;

      const deleteResponse = pageNode.Delete();

      setState({
        ...state,
        pageData: deleteResponse.pageData,
        selectedNodeId: deleteResponse.nextSelection,
      });
    },
    CopyNode() {
      setState({
        ...state,
        copiedNodeId: state.selectedNodeId,
      });
    },
    PasteNode() {
      const pageNode = page.GetNodeById(state.selectedNodeId);

      if (!pageNode) return;

      if (!state.copiedNodeId) return;

      const updatedPageData = pageNode.Paste(state.copiedNodeId);

      setState({
        ...state,
        pageData: updatedPageData,
      });
    },
  };

  const selectedNode = page.GetNodeById(state.selectedNodeId);
  const editorComponent = (
    <div
      key={"editor"}
      className="w-screen h-screen flex overflow-hidden divide-x divide-gray-300"
    >
      <div>
        <div className="w-80 h-full flex flex-col overflow-hidden divide-y divide-gray-300 bg-gray-100">
          <div className="w-full h-1/2 overflow-hidden">
            {state.pageData && (
              <NodesTreeEditorComponent
                selectedItemId={state.selectedNodeId}
                pageData={state.pageData}
                copiedNodeId={state.copiedNodeId}
                onSelect={Functions.SelectNode}
                onAdd={Functions.AddNode}
                onDelete={Functions.DeleteNode}
                onCopy={Functions.CopyNode}
                onPaste={Functions.PasteNode}
              />
            )}
          </div>
          <div className="w-full h-1/2 overflow-hidden">
            {selectedNode && (
              <TabsContainerComponent
                tabs={["Properties", "Styles"]}
                tabsContents={[
                  <ElementPropertyGridComponent
                    key={0}
                    pageNode={selectedNode}
                    onChange={Functions.UpdateProperty}
                    onActivateProperty={Functions.ActivateProperty}
                    onDeactivateProperty={Functions.DeactivateProperty}
                  />,
                  <StylesGridComponent
                    key={1}
                    pageNode={selectedNode}
                    breakpoint={state.currentBreakpoint}
                    onAssignClassToNewProperty={
                      Functions.AssignClassToNewProperty
                    }
                    onDeleteProperty={Functions.DeleteCSSProperty}
                    onUpdateProperty={Functions.UpdateCSSProperty}
                  />,
                ]}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <TabsContainerComponent
          tabs={["View", "JSON"]}
          tabsContents={[
            <EditorViewerComponent
              key={0}
              page={new Page(state.pageData)}
              breakpoint={state.currentBreakpoint}
              selectedNodeId={state.selectedNodeId}
              onChangeBreakpoint={(breakpoint: string) => {
                setState({
                  ...state,
                  currentBreakpoint: breakpoint,
                });
              }}
            />,
            <CodeViewerComponent key={1} pageData={state.pageData} />,
          ]}
        />
      </div>
    </div>
  );

  return [
    editorComponent,
    <CSSStylesComponent
      key={"styles"}
      styles={state.pageData.styles}
      targetBreakpoint={state.currentBreakpoint}
    />,
  ];
};

export default Editor;

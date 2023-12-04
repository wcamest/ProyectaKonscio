import generateId from "@/utils/Utils";
import { VisualEditorState } from "../visualEditorSlice";
import PageDocumentRow from "@/types/page-document/PageDocumentRow";
import PageDocumentColumn from "@/types/page-document/PageDocumentColumn";
import Styles from "@/components/visual-editor-components/styles/styles";
import PageDocumentNode from "@/types/page-document/PageDocumentNode";

export default function InsertRowBefore(
  state: VisualEditorState,
  action: { payload: any; type: string }
) {
  if (!state.currentDocument) return state;

  const beforeId: string = action.payload;
  const newRowId: string = generateId();
  const newEmptyColumnId: string = generateId();

  const newRow: PageDocumentRow = {
    id: newRowId,
    type: "PageDocumentRow",
    nodes: [newEmptyColumnId],
    parent: state.currentSectionLevel,
    styles: Styles.CreateClassListCollection(),
  };

  const newEmptyColumn: PageDocumentColumn = {
    id: newEmptyColumnId,
    type: "PageDocumentColumn",
    nodes: [],
    styles: Styles.CreateClassListCollection(),
  };

  const currentSectionLevelElement = state.currentDocument.nodes.find(
    (node: PageDocumentNode) => node.id === state.currentSectionLevel
  );

  const updateNodeIdList: string[] = [];
  const previousNodeIdList = currentSectionLevelElement
    ? currentSectionLevelElement.nodes
    : state.currentDocument.rows;

  for (let it = 0; it < previousNodeIdList.length; it++) {
    const rowId = previousNodeIdList[it];

    if (rowId === beforeId) {
      updateNodeIdList.push(newRow.id);
    }

    updateNodeIdList.push(rowId);
  }

  state.currentDocument.nodes = [
    ...state.currentDocument.nodes,
    newRow,
    newEmptyColumn,
  ];

  if (!currentSectionLevelElement) {
    state.currentDocument.rows = updateNodeIdList;
  } else {
    state.currentDocument.nodes = state.currentDocument.nodes.map(
      (node: PageDocumentNode) => {
        if (node.id === currentSectionLevelElement.id)
          return {
            ...node,
            nodes: updateNodeIdList,
          };

        return node;
      }
    );
  }
}

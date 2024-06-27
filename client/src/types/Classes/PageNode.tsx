import NodesRenderer from "@/components/PageViewer/Renderer";
import PageNodeDataObject from "../DataObjects/PageNodeDataObject";
import Page from "./Page";
import PageNodeProperty from "./PageNodeProperty";
import { GenerateId } from "@/utils/Utils";
import PageDataObject from "../DataObjects/PageDataObject";
import DeleteNodeResponse from "../DataObjects/DeleteNodeResponse";
import _elementsAndProperties from "./ElementsAndProperties.json";
import _componentTemplates from "./ComponentTemplates.json";

const ElementsAndProperties: any = _elementsAndProperties;
const ComponentTemplates: any = _componentTemplates;

export default class PageNode {
  data: PageNodeDataObject;
  page: Page;

  constructor(pageNode: PageNodeDataObject, page: Page) {
    this.data = pageNode;
    this.page = page;
  }

  Render(
    breakpoint?: string,
    key?: number,
    inputPayload?: any,
    outputPayload?: any,
    selectedNodeId?: string
  ) {
    return NodesRenderer.Render(
      this,
      this.page,
      breakpoint,
      key,
      inputPayload,
      outputPayload,
      selectedNodeId
    );
  }

  PreviousSibling() {
    const parent = this.Parent();

    if (!parent) return undefined;

    const selfIndex = parent.data.children.indexOf(this.Id());

    if (selfIndex === 0) return undefined;

    const previousSiblingId = parent.data.children[selfIndex - 1];

    return this.page.GetNodeById(previousSiblingId);
  }

  NextSibling() {
    const parent = this.Parent();

    if (!parent) return undefined;

    const selfIndex = parent.data.children.indexOf(this.Id());

    if (selfIndex >= parent.data.children.length - 1) return undefined;

    const nextSiblingId = parent.data.children[selfIndex + 1];

    return this.page.GetNodeById(nextSiblingId);
  }

  Parent() {
    if (this.data.parentId) {
      const parenNodeData = this.page.data.nodes[this.data.parentId];

      if (parenNodeData) return new PageNode(parenNodeData, this.page);
    }
  }

  Children() {
    const children = this.data.children.map((nodeId: string) => {
      const node = this.page.Nodes()[nodeId];
      if (!node) return undefined;

      return new PageNode(node, this.page);
    });

    return children.filter(
      (childNode: PageNode | undefined) => childNode !== undefined
    ) as PageNode[];
  }

  RenderChildren(
    breakpoint?: string,
    inputPayload?: any,
    outputPayload?: any,
    selectedNodeId?: string
  ) {
    const children = this.Children();

    return children.map((child: PageNode, key: number) => {
      return child.Render(
        breakpoint,
        key,
        inputPayload,
        outputPayload,
        selectedNodeId
      );
    });
  }

  GetChildByIndex(index: number) {
    const children = this.Children();

    if (index < children.length) return children[index];
  }

  ClassName(targetBreakpoint?: string) {
    if (!targetBreakpoint) return this.data.classList.join(" ");

    const breakpoints: string[] = ["base", "sm", "md", "lg", "xl", "2xl"];
    const breakpointsRange: string[] = [];
    const classes: string[] = [];

    for (let _it_ = 0; _it_ < breakpoints.length; _it_++) {
      const breakpoint = breakpoints[_it_];

      breakpointsRange.push(breakpoint);

      if (breakpoint === targetBreakpoint) break;
    }

    for (let _it_ = 0; _it_ < breakpointsRange.length; _it_++) {
      const breakpoint = breakpointsRange[_it_];

      if (breakpoint === "base") {
        const classList = this.data.classList.filter((className: string) =>
          /^\w+$/.test(className)
        );

        classes.push(classList.join(" "));
      } else {
        const classList = this.data.classList
          .filter((className: string) => className.startsWith(`${breakpoint}:`))
          .map((className: string) => className.replace(`${breakpoint}:`, ""));

        const classNames = classList.join(" ");

        if (classNames.length) classes.push(classNames);
      }
    }

    return classes.join(" ");
  }

  ActiveProperty(propertyName: string): boolean {
    return this.data.properties[propertyName] !== undefined;
  }

  PropertyValue(propertyName: string): any {
    return this.data.properties[propertyName];
  }

  Properties() {
    const result: PageNodeProperty[] = [];
    const properties = ElementsAndProperties[this.data.type];

    if (!properties) return [];

    for (let propertyName in properties) {
      result.push(
        new PageNodeProperty(
          propertyName,
          this.data.properties[propertyName],
          properties[propertyName]
        )
      );
    }

    return result;
  }

  Type() {
    return this.data.type;
  }

  Name() {
    return this.data.name;
  }

  Id() {
    return this.data.id;
  }

  AddNode(type: string) {
    let childNodeData: PageNodeDataObject = {
      type,
      id: GenerateId(),
      name: type,
      children: [],
      classList: [],
      properties: {},
      parentId: this.Id(),
    };

    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      children: [...this.data.children, childNodeData.id],
    };

    let updatedPageData: PageDataObject = this.page.data;

    const componentTemplate = ComponentTemplates[type];

    if (componentTemplate) {
      const cssProperties = componentTemplate.CSSProperties;

      Object.entries(cssProperties).forEach((kvp: [string, any]) => {
        const existingClassName = this.page.ExistingClassWithPropertyAndValue(
          kvp[0],
          kvp[1]
        );

        if (existingClassName) {
          childNodeData = {
            ...childNodeData,
            classList: [...childNodeData.classList, existingClassName],
          };
        } else {
          const className = GenerateId();

          childNodeData = {
            ...childNodeData,
            classList: [...childNodeData.classList, className],
          };

          updatedPageData = {
            ...updatedPageData,
            styles: {
              ...updatedPageData.styles,
              base: {
                ...updatedPageData.styles.base,
                [className]: {
                  [kvp[0]]: kvp[1],
                },
              },
            },
          };
        }
      });
    }

    updatedPageData = {
      ...updatedPageData,
      nodes: {
        ...updatedPageData.nodes,
        [updatedNodeData.id]: updatedNodeData,
        [childNodeData.id]: childNodeData,
      },
    };

    return updatedPageData;
  }

  UpdateProperty(propertyName: string, propertyValue: string) {
    let updatedNodeData: PageNodeDataObject = this.data;

    const baseProperties: string[] = ["name"];

    if (baseProperties.includes(propertyName)) {
      updatedNodeData = {
        ...this.data,
        [propertyName]: propertyValue,
      };
    } else {
      updatedNodeData = {
        ...this.data,
        properties: {
          ...this.data.properties,
          [propertyName]: propertyValue,
        },
      };
    }

    const updatedPage: PageDataObject = {
      ...this.page.data,
      nodes: {
        ...this.page.data.nodes,
        [updatedNodeData.id]: updatedNodeData,
      },
    };

    return updatedPage;
  }

  ActivateProperty(propertyName: string, propertyValue: string) {
    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      properties: {
        ...this.data.properties,
        [propertyName]: propertyValue,
      },
    };

    const updatedPage: PageDataObject = {
      ...this.page.data,
      nodes: {
        ...this.page.data.nodes,
        [updatedNodeData.id]: updatedNodeData,
      },
    };

    return updatedPage;
  }

  DeactivateProperty(propertyName: string) {
    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      properties: Object.fromEntries(
        Object.entries(this.data.properties).filter(([key]) => {
          return key !== propertyName;
        })
      ),
    };

    const updatedPage: PageDataObject = {
      ...this.page.data,
      nodes: {
        ...this.page.data.nodes,
        [updatedNodeData.id]: updatedNodeData,
      },
    };

    return updatedPage;
  }

  CSSProperties(breakpoint: string = "base"): ([string, any] | undefined)[] {
    const classNames = this.data.classList.filter((className: string) => {
      if (breakpoint !== "base") return className.startsWith(`${breakpoint}:`);
      else return /^\w+$/.test(className);
    });

    return classNames.map((className: string) => {
      const _className = className.replace(`${breakpoint}:`, "");
      const classObject = (this.page.data.styles as any)[breakpoint][
        _className
      ];
      return Object.entries(classObject)[0];
    });
  }

  AssignCSSPropertyToClass(
    propertyName: string,
    propertyValue: string,
    breakpoint: string = "base",
    pageData?: PageDataObject,
    pageNodeData?: PageNodeDataObject
  ) {
    const page = new Page(pageData ? pageData : this.page.data);
    const pageNode = new PageNode(
      pageNodeData ? pageNodeData : this.data,
      page
    );

    const existingClassName = page.ExistingClassWithPropertyAndValue(
      propertyName,
      propertyValue,
      breakpoint
    );

    let updatedNodeData: PageNodeDataObject = pageNode.data;

    //ya existe una clase con la misma propiedad y el mismo valor, por lo tanto
    //se reutiliza
    if (existingClassName) {
      const classNameWithBreakpoint =
        breakpoint === "base"
          ? existingClassName
          : `${breakpoint}:${existingClassName}`;

      //la clase ya existe en este nodo, por lo tanto no ocurre ningún cambio
      if (pageNode.data.classList.includes(classNameWithBreakpoint))
        return page.data;

      updatedNodeData = {
        ...pageNode.data,
        classList: [...pageNode.data.classList, classNameWithBreakpoint],
      };

      const updatedPage: PageDataObject = {
        ...page.data,
        nodes: {
          ...page.data.nodes,
          [updatedNodeData.id]: updatedNodeData,
        },
      };

      return updatedPage;
    }
    //no existe una clase con la misma propiedad y el mismo valor, por lo tanto
    //se crea una
    else {
      const className = GenerateId();
      const classNameWithBreakpoint =
        breakpoint === "base" ? className : `${breakpoint}:${className}`;

      updatedNodeData = {
        ...pageNode.data,
        classList: [...pageNode.data.classList, classNameWithBreakpoint],
      };

      const updatedPage: PageDataObject = {
        ...page.data,
        nodes: {
          ...page.data.nodes,
          [updatedNodeData.id]: updatedNodeData,
        },
        styles: {
          ...page.data.styles,
          [breakpoint]: {
            ...(page.data.styles as any)[breakpoint],
            [className]: {
              [propertyName]: propertyValue,
            },
          },
        },
      };

      return updatedPage;
    }
  }

  DeleteCSSProperty(
    propertyName: string,
    propertyValue: string,
    breakpoint: string = "base"
  ) {
    const existingClassName = this.page.ExistingClassWithPropertyAndValue(
      propertyName,
      propertyValue,
      breakpoint
    );

    if (!existingClassName) return this.page.data;

    const classNameWithBreakpoint =
      breakpoint === "base"
        ? existingClassName
        : `${breakpoint}:${existingClassName}`;

    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      classList: this.data.classList.filter(
        (className: string) => className !== classNameWithBreakpoint
      ),
    };

    const updatedPageData: PageDataObject = {
      ...this.page.data,
      nodes: {
        ...this.page.data.nodes,
        [updatedNodeData.id]: updatedNodeData,
      },
    };

    const updatedPage = new Page(updatedPageData);
    const classUsedByAnotherNode = updatedPage.ClassUsedByAnotherNode(
      existingClassName,
      breakpoint
    );

    if (classUsedByAnotherNode) return updatedPageData;

    return updatedPage.DeleteClass(existingClassName, breakpoint);
  }

  UpdateCSSProperty(
    propertyName: string,
    propertyValue: string,
    newPropertyValue: string,
    breakpoint: string = "base"
  ) {
    let updatedPageData = this.DeleteCSSProperty(
      propertyName,
      propertyValue,
      breakpoint
    );

    let pageNode = new Page(updatedPageData).GetNodeById(this.Id());

    if (pageNode)
      updatedPageData = this.AssignCSSPropertyToClass(
        propertyName,
        newPropertyValue,
        breakpoint,
        updatedPageData,
        pageNode.data
      );

    return updatedPageData;
  }

  Delete(): DeleteNodeResponse {
    const parentNode = this.Parent();

    if (!parentNode)
      return {
        pageData: this.page.data,
        nextSelection: this.Id(),
      };

    const previousSibling = this.PreviousSibling();
    const nextSibling = this.NextSibling();

    let nextSelectionId: string = this.Id();

    nextSelectionId = nextSibling
      ? nextSibling.Id()
      : previousSibling
      ? previousSibling.Id()
      : parentNode.Id();

    return {
      pageData: parentNode.DeleteDescendants(this.GetDescendantsIds()),
      nextSelection: nextSelectionId,
    };
  }

  DeleteDescendants(descendantsIds: string[]) {
    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      children: [
        ...this.data.children.filter(
          (nodeId: string) => !descendantsIds.includes(nodeId)
        ),
      ],
    };

    let updatedPageData: PageDataObject = {
      ...this.page.data,
      nodes: Object.fromEntries(
        Object.entries(this.page.data.nodes).filter((kvp: [string, any]) => {
          return !descendantsIds.includes(kvp[0]);
        })
      ),
    };

    updatedPageData = {
      ...updatedPageData,
      nodes: {
        ...updatedPageData.nodes,
        [this.Id()]: updatedNodeData,
      },
    };

    const classesFromDescendants =
      this.GetClassesFromDescendants(descendantsIds);

    const updatedPage = new Page(updatedPageData);

    return updatedPage.DeleteClasses(classesFromDescendants);
  }

  GetDescendantsIds() {
    const children = this.Children();
    let descendantsIds: string[] = [this.Id()];

    for (let _it_ = 0; _it_ < children.length; _it_++) {
      const child = children[_it_];
      descendantsIds = [...descendantsIds, ...child.GetDescendantsIds()];
    }

    return descendantsIds;
  }

  GetClassesFromDescendants(descendantsIds: string[]) {
    const nodes = descendantsIds
      .map((descendantId: string) => this.page.GetNodeById(descendantId))
      .filter(
        (descendantNode: PageNode | undefined) => descendantNode !== undefined
      ) as PageNode[];

    let classes: any = {
      base: [],
      sm: [],
      md: [],
      lg: [],
      xl: [],
      "2xl": [],
    };

    nodes.forEach((descendantNode: PageNode) => {
      descendantNode.data.classList.forEach((className) => {
        const breakpointAndClassName = className.split(":");
        let _breakpoint: string = "";
        let _className: string = "";

        if (breakpointAndClassName.length === 1) {
          _breakpoint = "base";
          _className = breakpointAndClassName[0];
        } else {
          _breakpoint = breakpointAndClassName[0];
          _className = breakpointAndClassName[1];
        }

        if (classes[_breakpoint].includes(_className)) return;

        classes[_breakpoint].push(_className);
      });
    });

    return classes;
  }

  Paste(nodeId: string) {
    const node = this.page.GetNodeById(nodeId);

    if (!node) return this.page.data;

    const descendantsIds = node.GetDescendantsIds();
    let updatedIds: any = {};

    descendantsIds.forEach((descendantId: string) => {
      updatedIds = {
        ...updatedIds,
        [descendantId]: GenerateId(),
      };
    });

    const descendants = (
      descendantsIds
        .map((descendantId: string) => this.page.GetNodeById(descendantId))
        .filter(
          (descendant: PageNode | undefined) => descendant !== undefined
        ) as PageNode[]
    ).map((descendant: PageNode) => descendant.data);

    const descendantsWithUpdatedIds = descendants.map(
      (_data: PageNodeDataObject) => {
        let parentId = _data.parentId ? updatedIds[_data.parentId] : undefined;

        if (!parentId) parentId = this.data.parentId;

        return {
          ..._data,
          id: updatedIds[_data.id],
          parentId,
          children: _data.children.map(
            (childId: string) => updatedIds[childId]
          ),
        };
      }
    );

    const updatedNodeData: PageNodeDataObject = {
      ...this.data,
      children: [...this.data.children, updatedIds[nodeId]],
    };

    let updatedPageData: PageDataObject = {
      ...this.page.data,
      nodes: {
        ...this.page.data.nodes,
        [this.data.id]: updatedNodeData,
      },
    };

    for (let _it_ = 0; _it_ < descendantsWithUpdatedIds.length; _it_++) {
      const descendant = descendantsWithUpdatedIds[_it_];
      updatedPageData = {
        ...updatedPageData,
        nodes: {
          ...updatedPageData.nodes,
          [descendant.id]: descendant,
        },
      };
    }

    return updatedPageData;
  }

  IsDescendant(nodeId: string) {
    const descendantsIds = this.GetDescendantsIds();

    return descendantsIds.includes(nodeId);
  }
}

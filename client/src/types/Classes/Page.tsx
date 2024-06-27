import PageDataObject from "../DataObjects/PageDataObject";
import PageNodeDataObject from "../DataObjects/PageNodeDataObject";
import PageNode from "./PageNode";

export default class Page {
  data: PageDataObject;

  constructor(classData: PageDataObject) {
    this.data = classData;
  }

  Root() {
    const rootNode = this.data.nodes[this.data.rootNodeId];

    if (!rootNode) return undefined;

    return new PageNode(rootNode, this);
  }

  Nodes() {
    return this.data.nodes;
  }

  GetNodeById(id: string) {
    if (this.data.nodes[id]) return new PageNode(this.data.nodes[id], this);
  }

  ExistingClassWithPropertyAndValue(
    propertyName: string,
    propertyValue: string,
    breakpoint: string = "base"
  ) {
    const classEntry = Object.entries(
      (this.data.styles as any)[breakpoint]
    ).find((kvp: [string, any]) => {
      const propertyAndValueEntry = Object.entries(kvp[1]).find(
        (pvKVP: [string, any]) => {
          return pvKVP[0] === propertyName && pvKVP[1] === propertyValue;
        }
      );
      return propertyAndValueEntry !== undefined;
    });

    if (!classEntry) return undefined;

    return classEntry[0];
  }

  ClassUsedByAnotherNode(className: string, breakpoint: string) {
    const classNameWithBreakpoint =
      breakpoint === "base" ? className : `${breakpoint}:${className}`;

    return Object.entries(this.data.nodes).some((kvp: [string, any]) => {
      const nodeData: PageNodeDataObject = kvp[1];

      if (!nodeData) return false;

      return nodeData.classList.includes(classNameWithBreakpoint);
    });
  }

  DeleteClass(className: string, breakpoint: string) {
    const updatedPageData: PageDataObject = {
      ...this.data,
      styles: {
        ...this.data.styles,
        [breakpoint]: Object.fromEntries(
          Object.entries((this.data.styles as any)[breakpoint]).filter(
            (kvp: [string, any]) => {
              return kvp[0] !== className;
            }
          )
        ),
      },
    };

    return updatedPageData;
  }

  DeleteClasses(classes: any) {
    const breakpoints: string[] = ["base", "sm", "md", "lg", "xl", "2xl"];

    let updatedPageData: PageDataObject = this.data;

    for (let _it_ = 0; _it_ < breakpoints.length; _it_++) {
      const breakpoint = breakpoints[_it_];

      updatedPageData = {
        ...updatedPageData,
        styles: {
          ...updatedPageData.styles,
          [breakpoint]: Object.fromEntries(
            Object.entries((updatedPageData.styles as any)[breakpoint]).filter(
              (kvp: [string, any]) => {
                const classUsedByAnotherNode = this.ClassUsedByAnotherNode(
                  kvp[0],
                  breakpoint
                );
                const includedClass = classes[breakpoint].includes(kvp[0]);

                if (classUsedByAnotherNode) return true;

                return !includedClass;
              }
            )
          ),
        },
      };
    }

    return updatedPageData;
  }
}

import mockData from "./mockData.js";

const Functions = {
  JoinLayoutComponents(content) {
    let updatedContent = {
      ...content,
    };
    const { layoutComponents } = updatedContent;

    if (Array.isArray(layoutComponents)) {
      const { rootNodeId } = updatedContent;

      for (let it = 0; it < layoutComponents.length; it++) {
        const componentId = layoutComponents[it];
        const component = mockData[componentId];

        if (!component) continue;

        const componentRootId = component.rootNodeId;
        const componentNodes = {
          ...component.nodes,
          [componentRootId]: {
            ...component.nodes[componentRootId],
            type: "LayoutComponent",
            parentId: rootNodeId
          },
        };

        updatedContent = {
          ...updatedContent,
          nodes: {
            ...updatedContent.nodes,
            ...componentNodes,
            [rootNodeId]: {
              ...updatedContent.nodes[rootNodeId],
              children: [
                ...updatedContent.nodes[rootNodeId].children,
                componentRootId,
              ],
            },
          },
          styles: {
            base: {
              ...updatedContent.styles.base,
              ...component.styles.base,
            },
            sm: {
              ...updatedContent.styles.sm,
              ...component.styles.sm,
            },
            md: {
              ...updatedContent.styles.md,
              ...component.styles.md,
            },
            lg: {
              ...updatedContent.styles.lg,
              ...component.styles.lg,
            },
            xl: {
              ...updatedContent.styles.xl,
              ...component.styles.xl,
            },
            "2xl": {
              ...updatedContent.styles["2xl"],
              ...component.styles["2xl"],
            },
          },
        };
      }
    }

    return updatedContent;
  },
};

const ContentController = {
  GetAll(req, res) {
    res.send("get all");
  },
  Post(req, res) {
    res.send("post");
  },
  Put(req, res) {
    res.send("put");
  },
  Delete(req, res) {
    res.send("get all");
  },
  GetById(req, res) {
    const { id } = req.params;

    let content = mockData[id];

    if (content) {
      const updatedContent = Functions.JoinLayoutComponents(content);

      return res.json(updatedContent);
    }

    res.json(mockData["empty"]);
  },
  GetByPermalink(req, res) {
    const { permalink } = req.params;

    const kvp = Object.entries(mockData).filter((kvp) => {
      const contentPermalink = kvp[1].metadata.permalink;

      return permalink === contentPermalink;
    });

    if (kvp.length) {
      const content = kvp[0][1];

      const updatedContent = Functions.JoinLayoutComponents(content);

      return res.json(updatedContent);
    }

    res.json(mockData["empty"]);
  },
};

export default ContentController;

import React, { useState } from "react";

type Props = {
  tabs: string[];
  tabsContents: React.JSX.Element[];
};

const TabsContainerComponent = (props: Props) => {
  const { tabs, tabsContents } = props;
  const [state, setState] = useState({
    selectedTabIndex: 0,
  });

  const Renderer = {
    Tabs() {
      return tabs.map((tabTitle: string, key: number) => {
        if (key === state.selectedTabIndex)
          return (
            <div
              key={key}
              className="px-2 py-1 w-fit text-blue-50 bg-blue-800 select-none"
            >
              <span>{tabTitle}</span>
            </div>
          );

        return (
          <div
            key={key}
            className="px-2 py-1 w-fit text-blue-800 hover:bg-blue-200 cursor-pointer select-none"
            onClick={() => {
              setState({
                selectedTabIndex: key,
              });
            }}
          >
            <span>{tabTitle}</span>
          </div>
        );
      });
    },
    Content() {
      if (tabsContents.length <= state.selectedTabIndex) return undefined;

      return tabsContents[state.selectedTabIndex];
    },
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden divide-y divide-blue-900">
      <div>
        <div className="flex overflow-auto">{Renderer.Tabs()}</div>
      </div>
      {Renderer.Content()}
    </div>
  );
};

export default TabsContainerComponent;

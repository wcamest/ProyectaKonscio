import React, { ChangeEvent, useEffect, useState } from "react";
import CheckIcon from "../Icons/CheckIcon";
import PageNode from "@/types/Classes/PageNode";
import TrashFillIcon from "../Icons/TrashFillIcon";
import ArrowCounterclockwise from "../Icons/ArrowCounterclockwise";

type Props = {
  pageNode: PageNode;
  breakpoint: string;
  onAssignClassToNewProperty?: Function;
  onDeleteProperty?: Function;
  onUpdateProperty?: Function;
};

const StylesGridComponent = (props: Props) => {
  const {
    pageNode,
    breakpoint,
    onAssignClassToNewProperty,
    onDeleteProperty,
    onUpdateProperty,
  } = props;

  const [state, setState] = useState({
    properties: pageNode.CSSProperties(breakpoint),
    newPropertyName: "",
    newPropertyValue: "",
  });

  const Functions = {
    UpdateLocalPropertyValue(index: number, value: string) {
      setState({
        ...state,
        properties: state.properties.map(
          (kvp: [string, any] | undefined, key: number) => {
            if (!kvp) return undefined;

            if (key === index) return [kvp[0], value];

            return kvp;
          }
        ),
      });
    },
    NewPropertyValidFields() {
      return (
        state.newPropertyName.length > 0 && state.newPropertyValue.length > 0
      );
    },
    AssignClassToNewProperty() {
      if (onAssignClassToNewProperty)
        onAssignClassToNewProperty(
          state.newPropertyName,
          state.newPropertyValue
        );

      setState({
        ...state,
        newPropertyName: "",
        newPropertyValue: "",
      });
    },
    DeleteProperty(propertyName: string, propertyValue: string) {
      if (onDeleteProperty) onDeleteProperty(propertyName, propertyValue);
    },
    UpdateProperty(propertyName: string, propertyValue: string, newPropertyValue:string) {
      if (onUpdateProperty) onUpdateProperty(propertyName, propertyValue, newPropertyValue);
    },
  };

  const Renderer = {
    NewPropertyRow() {
      return (
        <tr>
          <td className="p-2 border border-blue-900">
            <div className="w-full flex">
              <input
                className="w-full"
                placeholder="name..."
                value={state.newPropertyName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setState({
                    ...state,
                    newPropertyName: e.target.value,
                  });
                }}
              />
            </div>
          </td>
          <td className="p-2 border border-blue-900">
            <div className="w-full flex">
              <input
                className="w-full"
                placeholder="value..."
                value={state.newPropertyValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setState({
                    ...state,
                    newPropertyValue: e.target.value,
                  });
                }}
              />
            </div>
          </td>
          <td className="p-2 w-fit border border-blue-900">
            <div className="flex items-center">
              <button
                className="p-1 bg-blue-100 hover:bg-blue-300 active:bg-blue-800 text-blue-800 active:text-blue-50 border border-blue-800 disabled:grayscale disabled:bg-transparent disabled:text-blue-800 rounded-md shadow-md"
                disabled={!Functions.NewPropertyValidFields()}
                onClick={() => {
                  Functions.AssignClassToNewProperty();
                }}
              >
                <CheckIcon />
              </button>
            </div>
          </td>
        </tr>
      );
    },
    PropertyActionButton(
      index: number,
      propertyName: string,
      propertyValue: string
    ) {
      const initialProperties = pageNode.CSSProperties(breakpoint);
      const properties = state.properties;

      const initialProperty = initialProperties[index];
      const property = properties[index];

      if (!initialProperty || !property) return undefined;

      const sameValue = initialProperty[1] === property[1];

      return (
        <button
          className="p-1 bg-blue-100 hover:bg-blue-300 active:bg-blue-800 text-blue-800 active:text-blue-50 border border-blue-800 disabled:grayscale disabled:bg-transparent disabled:text-blue-800 rounded-md shadow-md"
          //disabled={!Functions.NewPropertyValidFields()}
          onClick={() => {
            if (sameValue)
              Functions.DeleteProperty(propertyName, propertyValue);
            else Functions.UpdateProperty(propertyName, initialProperty[1], propertyValue);
          }}
        >
          {sameValue ? <TrashFillIcon /> : <ArrowCounterclockwise />}
        </button>
      );
    },
    Properties() {
      return (
        <table className="w-full h-fit border-collapse border border-blue-900">
          <thead className="bg-blue-800 text-blue-50">
            <tr>
              <td className="border border-blue-900">CSS Property</td>
              <td className="border border-blue-900">Value</td>
              <td className="border border-blue-900"></td>
            </tr>
          </thead>
          <tbody>
            {state.properties.map(
              (kvp: [string, any] | undefined, key: number) => {
                if (!kvp) return undefined;

                return (
                  <tr key={key}>
                    <td className="p-2 border border-blue-900">
                      <span>{kvp[0]}</span>
                    </td>
                    <td className="p-2 border border-blue-900">
                      <div className="w-full flex">
                        <input
                          className="w-full"
                          placeholder="value..."
                          value={kvp[1]}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            Functions.UpdateLocalPropertyValue(
                              key,
                              e.target.value
                            );
                          }}
                        />
                      </div>
                    </td>
                    <td className="p-2 border border-blue-900">
                      <div className="flex items-center">
                        {Renderer.PropertyActionButton(key, kvp[0], kvp[1])}
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
            {Renderer.NewPropertyRow()}
          </tbody>
        </table>
      );
    },
  };

  useEffect(() => {
    setState({
      ...state,
      properties: pageNode.CSSProperties(breakpoint),
    });
  }, [pageNode, breakpoint]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-auto">{Renderer.Properties()}</div>
    </div>
  );
};

export default StylesGridComponent;

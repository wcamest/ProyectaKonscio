import PageNode from "@/types/Classes/PageNode";
import PageNodeProperty from "@/types/Classes/PageNodeProperty";
import React, { ChangeEvent } from "react";

type Props = {
  pageNode: PageNode;
  onChange?: Function;
  onActivateProperty?: Function;
  onDeactivateProperty?: Function;
};

const ElementPropertyGridComponent = (props: Props) => {
  const { pageNode, onChange, onActivateProperty, onDeactivateProperty } =
    props;

  const Renderer = {
    PropertyValueControl(propertyName: string, propertyValue: any, type: any) {
      if (Array.isArray(type)) {
        const selectedOption = propertyValue ? propertyValue : type[0];

        return (
          <select
            className="w-full h-full bg-white disabled:text-gray-400"
            value={selectedOption}
            disabled={!pageNode.ActiveProperty(propertyName)}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              if (onChange) onChange(propertyName, e.target.selectedOptions[0].value);
            }}
          >
            {type.map((option: any, key: number) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }

      if (type === "boolean") {
        const selectedOption = propertyValue ? propertyValue : "false";

        return (
          <select
            className="w-full h-full bg-white disabled:text-gray-400"
            value={selectedOption}
            disabled={!pageNode.ActiveProperty(propertyName)}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              if (onChange)
                onChange(
                  propertyName,
                  e.target.selectedOptions[0].value === "true"
                );
            }}
          >
            <option value={"true"}>true</option>
            <option value={"false"}>false</option>
          </select>
        );
      }

      if (type === "number") {
        const numericValue = propertyValue ? propertyValue : 0;
        return (
          <input
            className="w-full"
            type="number"
            value={numericValue}
            disabled={!pageNode.ActiveProperty(propertyName)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) onChange(propertyName, parseFloat(e.target.value));
            }}
          />
        );
      }

      const stringValue = propertyValue ? propertyValue : "";
      return (
        <input
          className="w-full"
          value={`${stringValue}`}
          placeholder="empty"
          disabled={!pageNode.ActiveProperty(propertyName)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(propertyName, e.target.value);
          }}
        />
      );
    },
    Properties() {
      const properties = pageNode.Properties();

      return (
        <table className="w-full h-fit border-collapse border border-blue-900">
          <thead className="bg-blue-800 text-blue-50">
            <tr>
              <td className="border border-blue-900"></td>
              <td className="border border-blue-900">Name</td>
              <td className="border border-blue-900">Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 w-fit border border-blue-900">
                <input type="checkbox" defaultChecked />
              </td>
              <td className="p-2 border border-blue-900">name</td>
              <td className="p-2 border border-blue-900">
                <input
                  className="w-full"
                  value={pageNode.Name()}
                  placeholder="empty"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (onChange) onChange("name", e.target.value);
                  }}
                />
              </td>
            </tr>
            {properties.map((property: PageNodeProperty, key: number) => {
              return (
                <tr key={key}>
                  <td className="p-2 w-fit border border-blue-900">
                    <input
                      type="checkbox"
                      checked={pageNode.ActiveProperty(property.name)}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const checked = e.target.checked;

                        if (checked && onActivateProperty) {
                          let value: any = "";

                          if (Array.isArray(property.type)) {
                            value = property.type[0];
                          } else if (property.type === "boolean") {
                            value = false;
                          } else if (property.type === "number") {
                            value = 0;
                          } else if (property.type === "string") {
                            value = "";
                          }

                          onActivateProperty(property.name, value);
                        } else if (!checked && onDeactivateProperty) {
                          onDeactivateProperty(property.name);
                        }
                      }}
                    />
                  </td>
                  <td className="p-2 border border-blue-900">
                    {property.name}
                  </td>
                  <td className="p-2 border border-blue-900">
                    <div className="w-full flex">
                      {Renderer.PropertyValueControl(
                        property.name,
                        property.value,
                        property.type
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    },
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-auto">{Renderer.Properties()}</div>
    </div>
  );
};

export default ElementPropertyGridComponent;

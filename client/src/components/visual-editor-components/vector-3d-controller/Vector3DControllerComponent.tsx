import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import { Vector3D } from "@/types/page-document/PageDocument3DObjectComponent";
import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  vector: Vector3D;
  onChange: Function;
};

const Vector3DControllerComponent = (props: Props) => {
  const { label, vector, onChange } = props;

  const Functions = {
    UpdateVector(value: string, axis: string) {
      const strValue = value.replaceAll(/[^\d\-\.]+/g, "");
      const numValue = parseFloat(strValue);
      onChange({
        ...vector,
        [axis]: numValue,
      });
    },
  };

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2">
          <span className="text-xs text-gray-400">x:</span>
          <TextInputComponent
            type="number"
            min={-359}
            max={359}
            className="w-20"
            value={vector.x}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              Functions.UpdateVector(e.target.value, "x");
            }}
          />
        </div>
        <div className="flex gap-2">
          <span className="text-xs text-gray-400">y:</span>
          <TextInputComponent
            type="number"
            min={-359}
            max={359}
            className="w-20"
            value={vector.y}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              Functions.UpdateVector(e.target.value, "y");
            }}
          />
        </div>
        <div className="flex gap-2">
          <span className="text-xs text-gray-400">z:</span>
          <TextInputComponent
            type="number"
            min={-359}
            max={359}
            className="w-20"
            value={vector.z}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              Functions.UpdateVector(e.target.value, "z");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Vector3DControllerComponent;

import { setScreen } from "@/redux/features/editor/editorSlice";
import { RootState } from "@/redux/store/store";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const CSSScreenSelectorComponent = (props: Props) => {
  const { currentScreen } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const Functions = {
    SetScreen(value: string) {
        dispatch(setScreen(value));
    },
  };

  return (
    <div className="flex items-center gap-1">
      <span>pantalla:</span>
      <select
        className="w-full p-1 border border-solid border-blue-300 rounded-md outline-none"
        value={currentScreen}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          Functions.SetScreen(e.target.value);
        }}
      >
        <option value={"base"}>Base</option>
        <option value={"sm"}>Pantalla pequeña</option>
        <option value={"md"}>Pantalla mediana</option>
        <option value={"lg"}>Pantalla grande</option>
        <option value={"xl"}>Pantalla muy grande</option>
        <option value={"2xl"}>Pantalla extra grande</option>
      </select>
    </div>
  );
};

export default CSSScreenSelectorComponent;

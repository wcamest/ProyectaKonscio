import {
  Screen,
  setScreen,
} from "@/redux/features/visual-editor/visualEditorSlice";
import React, { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";

type Props = {
  screen: Screen;
  currentScreen: Screen;
};

const ScreenSelectorItemComponent = (props: PropsWithChildren<Props>) => {
  const { screen, currentScreen } = props;
  const dispatch = useDispatch();

  const Functions = {
    SetScreen() {
      dispatch(setScreen(screen));
    },
  };

  if (screen === currentScreen)
    return (
      <div className="p-1 border bg-blue-800 border-solid border-blue-800 rounded-full text-blue-100">
        {props.children}
      </div>
    );

  return (
    <div
      className="p-1 border border-solid text-blue-300 hover:text-blue-50 hover:bg-blue-300 border-blue-300 rounded-full cursor-pointer"
      onClick={() => {
        Functions.SetScreen();
      }}
    >
      {props.children}
    </div>
  );
};

export default ScreenSelectorItemComponent;

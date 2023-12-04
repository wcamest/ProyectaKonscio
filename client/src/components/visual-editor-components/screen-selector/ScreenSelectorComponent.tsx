import React from "react";
import ScreenSelectorItemComponent from "../screen-selector-item/ScreenSelectorItemComponent";
import Image from "next/image";
import ScreenSMIcon from "@/components/Icons/ScreenSMIcon";
import ScreenMDIcon from "@/components/Icons/ScreenMDIcon";
import ScreenLGIcon from "@/components/Icons/ScreenLGIcon";
import ScreenXLIcon from "@/components/Icons/ScreenXLIcon";
import Screen2XLIcon from "@/components/Icons/Screen2XLIcon";
import ScreenBaseIcon from "@/components/Icons/ScreenBaseIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { Screen } from "@/redux/features/visual-editor/visualEditorSlice";

type Props = {};

const ScreenSelectorComponent = (props: Props) => {
  const { currentScreen } = useSelector(
    (state: RootState) => state.visualEditor
  );

  return (
    <div className="flex gap-1">
      <ScreenSelectorItemComponent
        screen={Screen.base}
        currentScreen={currentScreen}
      >
        <ScreenBaseIcon />
      </ScreenSelectorItemComponent>
      <ScreenSelectorItemComponent
        screen={Screen.sm}
        currentScreen={currentScreen}
      >
        <ScreenSMIcon />
      </ScreenSelectorItemComponent>
      <ScreenSelectorItemComponent
        screen={Screen.md}
        currentScreen={currentScreen}
      >
        <ScreenMDIcon />
      </ScreenSelectorItemComponent>
      <ScreenSelectorItemComponent
        screen={Screen.lg}
        currentScreen={currentScreen}
      >
        <ScreenLGIcon />
      </ScreenSelectorItemComponent>
      <ScreenSelectorItemComponent
        screen={Screen.xl}
        currentScreen={currentScreen}
      >
        <ScreenXLIcon />
      </ScreenSelectorItemComponent>
      <ScreenSelectorItemComponent
        screen={Screen.xl2}
        currentScreen={currentScreen}
      >
        <Screen2XLIcon />
      </ScreenSelectorItemComponent>
    </div>
  );
};

export default ScreenSelectorComponent;

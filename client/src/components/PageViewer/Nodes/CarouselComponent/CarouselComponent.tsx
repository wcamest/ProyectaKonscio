import CaretLeftFillIcon from "@/components/admin/Editor/Icons/CaretLeftFillIcon";
import CaretRightFillIcon from "@/components/admin/Editor/Icons/CaretRightFillIcon";
import PageNode from "@/types/Classes/PageNode";
import PageDataObject from "@/types/DataObjects/PageDataObject";
import React, { useEffect, useRef, useState } from "react";
import slideStyle from "./CarouselSlide.module.css";

type Props = {
  node: PageNode;
  page: PageDataObject;
  breakpoint?: string;
  inputPayload?: any;
  outputPayload?: any;
  selectedNodeId?: string;
};

type CarouselComponentState = {
  currentSlideIndex: number;
  intervalFunctionId: number | undefined;
};

const CarouselComponent = (props: Props) => {
  const {
    node,
    page,
    breakpoint,
    inputPayload,
    outputPayload,
    selectedNodeId,
  } = props;
  const [state, setState] = useState<CarouselComponentState>({
    currentSlideIndex: 0,
    intervalFunctionId: undefined,
  });
  const refState = useRef<CarouselComponentState>(state);

  const Functions = {
    SetState(updatedState: CarouselComponentState) {
      refState.current = updatedState;
      setState(updatedState);
    },
    ClearIntervalFunction() {
      if (!refState.current.intervalFunctionId) return;

      clearInterval(refState.current.intervalFunctionId);
    },
    PreviousSlide() {
      const children = node.Children();
      const previousSlideIndex =
        refState.current.currentSlideIndex > 0
          ? refState.current.currentSlideIndex - 1
          : children.length - 1;

      Functions.ClearIntervalFunction();

      Functions.SetState({
        ...refState.current,
        currentSlideIndex: previousSlideIndex,
        intervalFunctionId: undefined,
      });
    },
    NextSlide(autoSlide: boolean = false) {
      const children = node.Children();
      const nextSlideIndex =
        refState.current.currentSlideIndex < children.length - 1
          ? refState.current.currentSlideIndex + 1
          : 0;

      if (autoSlide) {
        Functions.SetState({
          ...refState.current,
          currentSlideIndex: nextSlideIndex,
        });
      } else {
        Functions.ClearIntervalFunction();

        Functions.SetState({
          ...refState.current,
          currentSlideIndex: nextSlideIndex,
          intervalFunctionId: undefined,
        });
      }
    },
    StartSliding(currentSlideIndex: number = 0) {
      if (breakpoint) return;

      if (refState.current.intervalFunctionId)
        window.clearInterval(refState.current.intervalFunctionId);

      const intervalFunctionId = window.setInterval(() => {
        Functions.NextSlide(true);
      }, 5000);

      Functions.SetState({
        ...refState.current,
        intervalFunctionId,
        currentSlideIndex,
      });
    },
    PlayOrPause() {
      if(selectedNodeId) return;
      
      if (!refState.current.intervalFunctionId) {
        Functions.StartSliding(refState.current.currentSlideIndex);
      } else {
        Functions.ClearIntervalFunction();
        Functions.SetState({
          ...refState.current,
          intervalFunctionId: undefined,
        });
      }
    },
  };

  const Renderer = {
    CurrentSlide() {
      if (!selectedNodeId) return undefined;

      const children = node.Children();

      const descendants = node.GetDescendantsIds();
      const isDescendant =
        selectedNodeId !== node.Id() && descendants.includes(selectedNodeId);

      if (!children.length) return undefined;

      if (!isDescendant)
        return children[0].Render(
          breakpoint,
          undefined,
          inputPayload,
          outputPayload,
          selectedNodeId
        );

      for (let _it_ = 0; _it_ < children.length; _it_++) {
        const child = children[_it_];
        const childDescendants = child.GetDescendantsIds();

        if (childDescendants.includes(selectedNodeId))
          return child.Render(
            breakpoint,
            undefined,
            inputPayload,
            outputPayload,
            selectedNodeId
          );
      }
    },
    Slides() {
      if (selectedNodeId) return undefined;

      const children = node.Children();

      return children.map((childNode: PageNode, key: number) => {
        return (
          <div
            className={`${slideStyle.slide} absolute left-0 top-0 w-full h-full overflow-hidden`}
            key={key}
            style={{
              opacity: refState.current.currentSlideIndex === key ? "1" : "0",
              zIndex: refState.current.currentSlideIndex === key ? "1" : "0",
            }}
          >
            {childNode.Render(
              breakpoint,
              key,
              inputPayload,
              outputPayload,
              selectedNodeId
            )}
          </div>
        );
      });
    },
    PlayButton() {
      const text =
        refState.current.intervalFunctionId !== undefined
          ? "Pausar"
          : "Reproducir";

      return (
        <button onClick={() => Functions.PlayOrPause()} className="px-2 py-1 w-full rounded-md shadow-md bg-gray-300 hover:bg-gray-400 active:bg-gray-800 text-gray-800 active:text-gray-50">
          {text}
        </button>
      );
    },
  };

  useEffect(() => {
    Functions.StartSliding();

    return () => {
      Functions.ClearIntervalFunction();
    };
  }, []);

  return (
    <div className={node.ClassName(breakpoint)}>
      <div className="w-full h-full flex flex-col gap-5">
        <div className="relative w-full h-full">
          <div
            onClick={() => {
              Functions.PreviousSlide();
            }}
            className="absolute left-0 top-0 h-full z-10 p-2 flex items-center justify-center cursor-pointer"
          >
            <div className="p-2 rounded-full bg-white border-2 border-solid border-gray-400 shadow-md sticky">
              <CaretLeftFillIcon />
            </div>
          </div>
          <div className="relative w-full h-full border border-solid border-gray-300 rounded-md shadow-md overflow-hidden">
            {Renderer.CurrentSlide()}
            {Renderer.Slides()}
          </div>
          <div
            onClick={() => {
              Functions.NextSlide();
            }}
            className="absolute right-0 top-0 h-full z-10 p-2 flex items-center justify- cursor-pointer"
          >
            <div className="p-2 rounded-full bg-white border-2 border-solid border-gray-400 shadow-md sticky">
              <CaretRightFillIcon />
            </div>
          </div>
        </div>
        <div>{Renderer.PlayButton()}</div>
      </div>
    </div>
  );
};

export default CarouselComponent;

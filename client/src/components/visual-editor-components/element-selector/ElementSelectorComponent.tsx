import React, { PropsWithChildren } from "react";
import ElementSelectorSectionComponent from "../element-selector-section/ElementSelectorSectionComponent";
import ElementSelectorItemComponent from "../element-selector-item/ElementSelectorItemComponent";

type Props = {};

const ElementSelectorComponent = (props: Props) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ElementSelectorSectionComponent title="Textos">
        <ElementSelectorItemComponent
          icon="/icons/body-text.svg"
          text="Texto enriquecido"
        />
        <ElementSelectorItemComponent
          icon="/icons/type.svg"
          text="Texto simple"
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Media">
        <ElementSelectorItemComponent
          icon="/icons/card-image.svg"
          text="Imagen"
        />
        <ElementSelectorItemComponent
          icon="/icons/film.svg"
          text="Video"
        />
      </ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Tablas"></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Formularios"></ElementSelectorSectionComponent>
      <ElementSelectorSectionComponent title="Componentes"></ElementSelectorSectionComponent>
    </div>
  );
};

export default ElementSelectorComponent;

"use client";

import React, { MouseEvent } from "react";
import ButtonComponent from "../controls/button/ButtonComponent";
import { ButtonSizeType } from "@/types/ButtonSIzeType";
import { useDispatch, useSelector } from "react-redux";
import { addSite } from "@/redux/features/sites/sitesSlice";
import { RootState } from "@/redux/store/store";
import Site from "@/types/Site";
import SiteItemComponent from "./SiteItemComponent";

type Props = {
  title: string;
  id: string;
  siteDescription: string,
  isBlogSite?: boolean;
};

const SitesSectionComponent = (props: Props) => {
  const { title, id, siteDescription, isBlogSite = false } = props;
  const dispatch = useDispatch();
  const { sites, selectedSiteId } = useSelector(
    (state: RootState) => state.sites
  );

  const Functions = {
    CreateSite() {
      dispatch(
        addSite({
          sectionId: id,
          isBlogSite,
          blogId: "",
        })
      );
    },
    GetSites() {
      return sites.filter((site: Site) => {
        return site.sectionId === id;
      });
    },
  };

  const Renderer = {
    Sites() {
      const sites = Functions.GetSites();

      if(!selectedSiteId) return undefined;

      return sites.map((site: Site, key: number) => {
        return (
          <SiteItemComponent
            data={site}
            key={key}
            selectedItemId={selectedSiteId}
            siteDescription={siteDescription}
          />
        );
      });
    },
  };

  return (
    <div className="p-2 flex flex-col gap-2 border border-solid border-blue-200 rounded-md shadow-md">
      <div className="flex items-center gap-4">
        <span>{title}</span>
        <ButtonComponent
          size={ButtonSizeType.small}
          onClick={() => {
            Functions.CreateSite();
          }}
        >
          Añadir
        </ButtonComponent>
      </div>
      <div className="w-full border-t border-t-blue-200"></div>
      <div className="w-full flex flex-wrap gap-2">{Renderer.Sites()}</div>
    </div>
  );
};

export default SitesSectionComponent;

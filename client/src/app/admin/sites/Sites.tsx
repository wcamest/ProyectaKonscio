"use client";

import ButtonComponent from "@/components/controls/button/ButtonComponent";
import TextAreaComponent from "@/components/controls/text-area/TextAreaComponent";
import TextInputComponent from "@/components/controls/text-input/TextInputComponent";
import SitesSectionComponent from "@/components/sites/SitesSectionComponent";
import { setSites, updateSite } from "@/redux/features/sites/sitesSlice";
import { RootState } from "@/redux/store/store";
import Site from "@/types/Site";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  data: any;
};

const Sites = (props: Props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const { selectedSiteId, sites } = useSelector(
    (state: RootState) => state.sites
  );

  const Functions = {
    SetSites() {
      dispatch(setSites(data));
    },
    GetSelectedSite() {
      const selectedSite = sites.find(
        (site: Site) => site.id === selectedSiteId
      );

      if (!selectedSiteId) return undefined;

      return selectedSite;
    },
    UpdateSiteProperty(id: string, property: string, value: string) {
      dispatch(
        updateSite({
          id,
          property,
          value,
        })
      );
    },
  };

  useEffect(() => {
    Functions.SetSites();
  }, []);

  const selectedSite = Functions.GetSelectedSite();

  return (
    <div className="w-full h-screen flex gap-4 overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <div className="p-4 w-full h-fit flex justify-center">
          <div className="p-2 w-full max-w-7xl flex flex-col gap-4 border border-solid border-blue-200 rounded-md shadow-md">
            <SitesSectionComponent
              id="pages"
              title="Paginas"
              siteDescription="Pagina estática"
            />
            <SitesSectionComponent
              id="blogs"
              title="Blogs"
              siteDescription="Blog"
            />
          </div>
        </div>
      </div>
      {selectedSite && (
        <div>
          <div className="w-96 h-full border-l border-l-blue-200">
            <div className="p-2 bg-blue-800 text-blue-50">
              Configuración de sitio
            </div>
            <div className="px-4 py-2 flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-blue-600">Titulo</span>
                <TextInputComponent
                  value={selectedSite.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    Functions.UpdateSiteProperty(
                      selectedSite.id,
                      "name",
                      e.target.value
                    );
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-blue-600">Permalink</span>
                <TextInputComponent
                  value={selectedSite.permalink}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    Functions.UpdateSiteProperty(
                      selectedSite.id,
                      "permalink",
                      e.target.value
                    );
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-blue-600">Descripción</span>
                <TextAreaComponent
                  value={selectedSite.description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    Functions.UpdateSiteProperty(
                      selectedSite.id,
                      "description",
                      e.target.value
                    );
                  }}
                />
              </div>
              <ButtonComponent>Guardar</ButtonComponent>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sites;

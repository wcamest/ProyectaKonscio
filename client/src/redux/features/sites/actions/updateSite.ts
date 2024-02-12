import Site from "@/types/Site";
import { SitesState } from "../sitesSlice";

export default function UpdateSite(
  state: SitesState,
  action: { payload: any; type: string }
) {
  const { id, property, value } = action.payload;
  const site = state.sites.find((site: Site) => site.id === id);

  if (!site) return state;

  const updatedSite: any = {
    ...site,
    [property]: value,
  };

  state.sites = state.sites.map((site: Site) => {
    if (site.id === id) return updatedSite;

    return site;
  });
}

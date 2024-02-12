import { SitesState } from "../sitesSlice";

export default function SetSites(
  state: SitesState,
  action: { payload: any; type: string }
) {
    state.sites = action.payload;
    state.selectedSiteId = action.payload[0].id;
}

import { SitesState } from "../sitesSlice";

export default function SelectSite(
  state: SitesState,
  action: { payload: any; type: string }
) {
  state.selectedSiteId = action.payload;
}

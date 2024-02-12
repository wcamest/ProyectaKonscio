import Site from "@/types/Site";
import { createSlice } from "@reduxjs/toolkit";
import AddSite from "./actions/addSite";
import SetSites from "./actions/setSites";
import SelectSite from "./actions/selectSite";
import UpdateSite from "./actions/updateSite";

export interface SitesState {
  sites: Site[];
  selectedSiteId?: string;
}

const initialState: SitesState = {
  sites: [],
};

export const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {
    addSite: AddSite,
    setSites: SetSites,
    selectSite: SelectSite,
    updateSite: UpdateSite,
  },
});

export const { addSite, setSites, selectSite, updateSite } = sitesSlice.actions;

export default sitesSlice.reducer;

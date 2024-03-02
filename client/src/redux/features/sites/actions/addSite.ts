import Site from "@/types/Site";
import { SitesState } from "../sitesSlice";
import generateId from "@/utils/Utils";

export default function AddSite(
  state: SitesState,
  action: { payload: any; type: string }
) {
  const { sectionId, blogId, isBlogSite, isBlogPost } = action.payload;

  const site: Site = {
    id: generateId(),
    sectionId,
    name: "",
    permalink: "",
    description: "",
    blogId,
    isBlogSite,
    isBlogPost
  };

  state.sites = [...state.sites, site];
  state.selectedSiteId = site.id;
}

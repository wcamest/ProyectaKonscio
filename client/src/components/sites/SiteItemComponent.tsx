import { selectSite } from "@/redux/features/sites/sitesSlice";
import Site from "@/types/Site";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  data: Site;
  selectedItemId: string;
  siteDescription: string;
};

const SiteItemComponent = (props: Props) => {
  const { data, siteDescription, selectedItemId } = props;
  const dispatch = useDispatch();

  const Functions = {
    GetName() {
      if (!data.name.length) return "Sin Nombre";

      return data.name;
    },
    SelectSite() {
      dispatch(selectSite(data.id));
    },
    GetBlogPostFlag() {
      if (data.isBlogSite) return "?isBlogPost=true";

      return "";
    },
  };

  if (selectedItemId === data.id)
    return (
      <div className="p-2 w-fit h-fit flex bg-blue-800 text-blue-50 border border-solid border-blue-800 rounded-md shadow-md select-none">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span>{Functions.GetName()}</span>
            {data.permalink.length > 0 && (
              <Link
                className="text-xs underline opacity-70 hover:opacity-90"
                href={`visual-editor/${data.permalink
                  .replaceAll(" ", "-")
                  .toLowerCase()}${Functions.GetBlogPostFlag()}`}
                target="_blank"
              >
                Editar
              </Link>
            )}
          </div>
          <span className="text-xs text-blue-50 text-opacity-60">
            {siteDescription}
          </span>
        </div>
      </div>
    );

  return (
    <div
      className="p-2 w-fit h-fit flex text-blue-800 hover:bg-blue-200 border border-solid border-blue-200 rounded-md shadow-md cursor-pointer select-none"
      onClick={() => {
        Functions.SelectSite();
      }}
    >
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <span>{Functions.GetName()}</span>
          {data.permalink.length > 0 && (
            <Link
              className="text-xs underline opacity-70 hover:opacity-90"
              href={`visual-editor/${data.permalink
                .replaceAll(" ", "-")
                .toLowerCase()}${Functions.GetBlogPostFlag()}`}
              target="_blank"
            >
              Editar
            </Link>
          )}
        </div>
        <span className="text-xs text-blue-800 text-opacity-30">
          {siteDescription}
        </span>
      </div>
    </div>
  );
};

export default SiteItemComponent;

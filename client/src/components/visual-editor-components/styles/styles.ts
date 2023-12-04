import StylesClassList from "@/types/page-document/styles/StylesClassList";
import StylesClassListCollection from "@/types/page-document/styles/StylesClassListCollection";
import { StylesSizeType } from "@/types/page-document/styles/StylesSizeType";

const Styles = {
  CreateClassList(): StylesClassList {
    return {
      width: {
        type: StylesSizeType.undefined,
        className: undefined,
        percentDivisionsIndex: 5,
        percentValueIndex: 12,
      },
    };
  },
  CreateClassListCollection(): StylesClassListCollection{
    return {
      base: Styles.CreateClassList(),
      sm: Styles.CreateClassList(),
      md: Styles.CreateClassList(),
      lg: Styles.CreateClassList(),
      xl: Styles.CreateClassList(),
      xl2: Styles.CreateClassList()
    }
  }
};

export default Styles;

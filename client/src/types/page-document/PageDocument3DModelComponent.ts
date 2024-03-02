import PageDocument3DObjectComponent from "./PageDocument3DObjectComponent";

export default interface PageDocument3DModelComponent
  extends PageDocument3DObjectComponent {
  url: string;
  format: PageDocument3DModelFormat;
}

export enum PageDocument3DModelFormat {
  fbx = "fbx",
  obj = "obj",
}

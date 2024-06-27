export default class PageNodeProperty {
  name: string;
  value: string;
  type: any;

  constructor(name: string, value: string, type:any) {
    this.name = name;
    this.value = value;
    this.type = type;
  }
}

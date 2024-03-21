import PageDocument3DObjectComponent from "./PageDocument3DObjectComponent";

export default interface PageDocument3DPointLightComponent extends PageDocument3DObjectComponent {
    color: number,
    intensity: number,
    distance: number,
    decay: number
}
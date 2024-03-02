import PageDocument3DObjectComponent from "./PageDocument3DObjectComponent";

export default interface PageDocument3DCameraComponent extends PageDocument3DObjectComponent {
    fov: number,
    near: number,
    far: number
}
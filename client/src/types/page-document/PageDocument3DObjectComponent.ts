import PageDocumentNode from "./PageDocumentNode";

export default interface PageDocument3DObjectComponent extends PageDocumentNode {
    position: Vector3D,
    rotation: Vector3D
}

export interface Vector3D {
    x: number,
    y: number,
    z: number
}
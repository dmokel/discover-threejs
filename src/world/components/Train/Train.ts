import { Group, MathUtils } from 'three';
import { IUpdatables } from '../../systems/Loop';
import { createMeshes } from './meshes';

const wheelSpeed = MathUtils.degToRad(24);
const r = MathUtils.degToRad(30);

class Train extends Group implements IUpdatables {
  private meshes: ReturnType<typeof createMeshes>;

  constructor() {
    super();

    this.meshes = createMeshes();
    this.add(
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.nose,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    );
  }

  tick(delta: number) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;

    this.rotation.y -= delta * r;
  }
}

export { Train };

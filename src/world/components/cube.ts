import {
  BoxGeometry,
  BufferGeometry,
  Material,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from 'three';
import { IUpdatables } from '../systems/Loop';

class CusMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
  >
  extends Mesh
  implements IUpdatables
{
  constructor(geometry?: TGeometry, material?: TMaterial) {
    super(geometry, material);
  }

  tick(delta: number) {}
}

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new CusMesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta: number) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };

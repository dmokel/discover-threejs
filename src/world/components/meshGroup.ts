import {
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
} from 'three';
import { IUpdatables } from '../systems/Loop';

class CusGroup extends Group implements IUpdatables {
  constructor() {
    super();
  }

  tick(delta: number) {}
}

function createMeshGroup() {
  const group = new CusGroup();

  const geometry = new SphereGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({ color: 'indigo' });
  const protoSphere = new Mesh(geometry, material);

  group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();

    const x = Math.cos(2 * Math.PI * i);
    const y = Math.sin(2 * Math.PI * i);

    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = -i * 5;

    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  group.scale.multiplyScalar(1.5);

  const radiansPerSecond = MathUtils.degToRad(30);
  group.tick = (delta: number) => {
    // group.rotation.x -= delta * radiansPerSecond;
    group.rotation.z += delta * radiansPerSecond;
  };

  return group;
}

export { createMeshGroup };

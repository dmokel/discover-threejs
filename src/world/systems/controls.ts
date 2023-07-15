import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { IUpdatables } from './Loop';

class CusOrbitControls extends OrbitControls implements IUpdatables {
  constructor(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
    super(camera, canvas);
  }

  tick(delta: number) {}
}

function createControls(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
  const controls = new CusOrbitControls(camera, canvas);

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createCamera } from './components/camera.js';
import { createLights } from './components/light.js';
import { createScene } from './components/scene.js';

import { createMeshGroup } from './components/meshGroup.js';
import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';

class World {
  private loop: Loop;
  private renderer: WebGLRenderer;

  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(container: Element) {
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    this.scene = createScene();
    this.camera = createCamera();

    this.loop = new Loop(this.scene, this.camera, this.renderer);

    const meshGroup = createMeshGroup();
    const { mainLight, ambientLight, hemisphereLight } = createLights();
    this.scene.add(meshGroup, hemisphereLight);
    this.loop.updatables.push(meshGroup);

    const controls = createControls(this.camera, this.renderer.domElement);
    controls.target.copy(meshGroup.position);
    controls.enableDamping = true;
    this.loop.updatables.push(controls);

    new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };

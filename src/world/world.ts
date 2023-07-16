import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';
import { CusOrbitControls, createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';

class World {
  private loop: Loop;
  private renderer: WebGLRenderer;
  private controls: CusOrbitControls;

  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(container: Element) {
    // synchronous stages of World setup
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    this.scene = createScene();
    this.camera = createCamera();

    this.loop = new Loop(this.scene, this.camera, this.renderer);

    const { mainLight, ambientLight, hemisphereLight } = createLights();
    this.scene.add(hemisphereLight);

    this.controls = createControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.loop.updatables.push(this.controls);

    new Resizer(container, this.camera, this.renderer);
  }

  async init() {
    // asynchronous stages of World setup
    const { parrot, flamingo, stork } = await loadBirds();
    this.controls.target.copy(parrot.position);
    this.scene.add(parrot, flamingo, stork);
    this.loop.updatables.push(parrot, flamingo, stork);
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

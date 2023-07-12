import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/light.js';
import { createScene } from './components/scene.js';

import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';
import { createRenderer } from './systems/renderer.js';

class World {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  private loop: Loop;

  constructor(container: Element) {
    this.scene = createScene();
    this.camera = createCamera();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    this.loop = new Loop(this.scene, this.camera, this.renderer);

    const cube = createCube();
    const light = createLights();
    this.scene.add(cube, light);
    this.loop.updatables.push(cube);

    const resizer = new Resizer(container, this.camera, this.renderer);
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

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/light.js';
import { createScene } from './components/scene.js';

import { Resizer } from './systems/Resizer.js';
import { createRenderer } from './systems/renderer.js';

class World {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  constructor(container: Element) {
    this.scene = createScene();
    this.camera = createCamera();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    const cube = createCube();
    const light = createLights();
    this.scene.add(cube, light);

    const resizer = new Resizer(container, this.camera, this.renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export { World };

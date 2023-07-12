import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

// Define interface on the usage side,
export interface IUpdatables {
  /**
   * @param delta delta in seconds
   */
  tick: (delta: number) => void;
}

const clock = new Clock();

class Loop {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderder: WebGLRenderer;
  public updatables: IUpdatables[] = [];

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderder: WebGLRenderer
  ) {
    this.scene = scene;
    this.camera = camera;
    this.renderder = renderder;
  }

  start() {
    this.renderder.setAnimationLoop(() => {
      this.tick();
      this.renderder.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderder.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();

    for (const obj of this.updatables) {
      obj.tick(delta);
    }
  }
}

export { Loop };

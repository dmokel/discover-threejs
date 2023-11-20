import { AnimationMixer, MathUtils, Mesh } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { IUpdatables } from '../../systems/Loop';

const r = MathUtils.degToRad(30);

class CusObject3D extends Mesh implements IUpdatables {
  constructor() {
    super();
  }

  tick(delta: number) {}
}

function setupModel(data: GLTF) {
  const model = data.scene.children[0] as CusObject3D;
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta: number) => {
    mixer.update(delta);
    // model.rotation.z -= delta * r;
  };

  return model;
}

export { setupModel };

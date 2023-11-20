import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ]);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);
  parrot.scale.set(0.03, 0.03, 0.03);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);
  flamingo.scale.set(0.03, 0.03, 0.03);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);
  stork.scale.set(0.03, 0.03, 0.03);

  return { parrot, flamingo, stork };
}

export { loadBirds };

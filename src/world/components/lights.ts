import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new AmbientLight('white', 2);

  const hemisphereLight = new HemisphereLight('white', 'darkslategray', 5);

  const mainLight = new DirectionalLight('white', 10);
  mainLight.position.set(10, 10, 10);

  return { mainLight, ambientLight, hemisphereLight };
}

export { createLights };

import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  // renderer.physicallyCorrectLights = true
  //
  // THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead.
  // renderer.useLegacyLights = true; // Whether to use the legacy lighting mode or not. Default is true.

  return renderer;
}

export { createRenderer };

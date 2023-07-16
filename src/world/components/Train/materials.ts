import { MeshStandardMaterial } from 'three';

function craeteMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  });

  return { body, detail };
}

export { craeteMaterials };

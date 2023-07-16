import { World } from './world/world';

async function main() {
  const container = document.querySelector('#scene-container')!;
  const world = new World(container);
  await world.init();
  world.start();
}

main()
  .then()
  .catch((err) => console.log('err:', err));

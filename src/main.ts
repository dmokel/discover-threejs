import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const container = document.querySelector('#scene-container')!;

const scene = new Scene();
scene.background = new Color('skyblue');

const fov = 35; // AKA field of view
const aspect = container?.clientWidth / container?.clientHeight;
const near = 0.1; // near clipping plane
const far = 100; // far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

const geometry = new BoxGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);

scene.add(cube);

const renderer = new WebGLRenderer();
renderer.setSize(container?.clientWidth, container?.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);

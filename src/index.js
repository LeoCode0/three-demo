import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh,
  Color,
} from "three";

import "./styles.css";

const scene = new Scene();
scene.background = new Color("#121f3d");
const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new SphereGeometry(15, 32, 16);
const material = new MeshBasicMaterial({ color: "#94c63d" });
const sphere = new Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 30;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// let acceleration = 9.8;
// let bounce_distance = 5;
// let bottom_position_y = -4;
// let time_step = 0.04;
// time_counter is calculated to be the time the ball just reached the top position
// this is simply calculated with the s = (1/2)gt*t formula, which is the case when ball is dropped from the top position
// let time_counter = Math.sqrt((bounce_distance * 2) / acceleration);
// let initial_speed = acceleration * time_counter;
// const animate = () => {
//   requestAnimationFrame(animate); // reset time_counter back to the start of the bouncing sequence when sphere hits through the bottom position
//   if (sphere.position.y < bottom_position_y) {
//     time_counter = 0;
//   }
// calculate sphere position with the s2 = s1 + ut + (1/2)gt*t formula
// this formula assumes the ball to be bouncing off from the bottom position when time_counter is zero
// sphere.translateY(0.04);
// sphere.rotation.x += 0.01;
// sphere.rotation.y += 0.01;
// sphere.position.y =
//   bottom_position_y +
//   initial_speed * time_counter -
//   0.5 * acceleration * time_counter * time_counter;
// advance time
//   time_counter += time_step;
//   renderer.render(scene, camera);
// };

function animate() {
  requestAnimationFrame(animate);
  sphere.translateY(0.04);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

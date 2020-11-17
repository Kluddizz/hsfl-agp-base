import * as THREE from "three";
import { update, setup } from "./Main";

(() => {
  let clock;
  let renderer;
  let scene;
  let camera;

  const render = () => {
    requestAnimationFrame(render);

    // Get the elapsed time of rendering the last frame.
    const dt = clock.getDelta();

    update(dt);
    renderer.render(scene, camera);
  };

  window.addEventListener("load", () => {
    // Start the clock, which records the elapsed time between frames.
    clock = new THREE.Clock();
    clock.start();

    // Get the canvas dom element and use it to init the renderer.
    const canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a camera instance (perspective).
    camera = new THREE.PerspectiveCamera(
      65.0,
      window.innerWidth / window.innerHeight,
      0.1,
      1000.0
    );

    // Create the scene.
    scene = new THREE.Scene();
    setup(scene, camera);

    // Start the rendering loop.
    requestAnimationFrame(render);
  });

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
})();

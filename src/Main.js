import * as THREE from "three";

let plane;

const setup = (scene, camera) => {
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  fetch("/shaders/WaveShader.vert.glsl")
    .then((f) => f.text())
    .then((vertexShader) => {
      fetch("/shaders/WaveShader.frag.glsl")
        .then((f) => f.text())
        .then((fragmentShader) => {
          const planeGeometry = new THREE.PlaneGeometry(2, 2, 100, 100);
          const planeMaterial = new THREE.RawShaderMaterial({
            uniforms: {
              time: { value: 0.0 },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          });

          plane = new THREE.Mesh(planeGeometry, planeMaterial);
          scene.add(plane);
        });
    });

  const light = new THREE.DirectionalLight(0xffffff, 1.0);
  const ambient = new THREE.AmbientLight(0x333333);

  scene.add(ambient);
  scene.add(light);
};

const update = (dt) => {
  if (plane) {
    plane.material.uniforms.time.value += dt;
  }
};

export { update, setup };

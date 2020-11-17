#version 300 es
precision highp float;

in vec3 position;

uniform float time;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

void main() {
  vec3 mPosition = position;
  mPosition.y += sin(position.x * 10.0 + time) * 0.05;

  vec4 mvPosition = modelViewMatrix * vec4(mPosition, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}

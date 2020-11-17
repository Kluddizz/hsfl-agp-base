#version 300 es
precision highp float;

uniform float time;

out vec4 color;

void main() {
    color = abs(vec4(sin(time), cos(time + 3.1415), cos(time + 6.283 / 3.0), 1.0));
}

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. SHADER CONFIG
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETA DE CORES SOLICITADA
      const vec3 C_BG = vec3(0.98, 0.969, 0.969);           // #FAF7F7
      const vec3 C_CENTER_DARK = vec3(0.459, 0.271, 0.282); // #754548 (Vinho)
      const vec3 C_RING_DARK = vec3(0.851, 0.663, 0.690);   // #D9A9B0 (Rosa Médio)
      const vec3 C_RING_LIGHT = vec3(0.949, 0.910, 0.914);  // #F2E8E9 (Rosa Claro)

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      // Função de ruído simples para movimento orgânico
      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          
          vec2 coord = uv;
          coord.x *= aspect;

          // --- POSICIONAMENTO AJUSTADO ---
          // Centro ligeiramente à esquerda e abaixo, como solicitado
          // x = 0.35 * aspect (Esquerda)
          // y = 0.65 (Abaixo do topo visualmente no shader, coordenadas GL invertidas as vezes, ajustando para 'abaixo')
          // Ajuste fino para "atrás do título Emotion"
          vec2 center = vec2(0.35 * aspect, 0.45); 
          
          // Animação "Lava Lamp" lenta e orgânica
          float n = noise(coord * 2.0 + u_time * 0.1);
          center.x += sin(u_time * 0.15) * 0.1;
          center.y += cos(u_time * 0.1) * 0.08;
          
          float dist = distance(coord, center);

          // Distorção da borda para não ser um círculo perfeito
          dist += n * 0.15;

          // --- GRADIENTE RADIAL SUAVE ---
          vec3 color = C_BG;

          // Smoothsteps controlam a expansão e difusão das cores
          
          // Núcleo (Vinho)
          float step1 = smoothstep(0.0, 0.4, dist);
          vec3 layer1 = mix(C_CENTER_DARK, C_RING_DARK, step1);

          // Anel Médio (Rosa Médio -> Rosa Claro)
          float step2 = smoothstep(0.35, 0.8, dist);
          vec3 layer2 = mix(layer1, C_RING_LIGHT, step2);

          // Fusão com Fundo (#FAF7F7)
          // Expansão ampla para cobrir a área
          float step3 = smoothstep(0.7, 1.5, dist);
          color = mix(layer2, C_BG, step3);

          // --- TEXTURA (FILM GRAIN) ---
          float grain = random(uv * 3.0 + u_time * 2.0);
          // Grão mais forte nas áreas escuras
          float grainStrength = 0.06 * (1.0 - step3); 
          color -= grain * grainStrength;

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(containerRef.current.clientWidth, containerRef.current.clientHeight) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Loop de Animação
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // 4. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        renderer.setSize(width, height);
        uniforms.u_resolution.value.set(width, height);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full" />
  );
};

export default FluidBackground;
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
    
    // Inicializa com tamanho zero, o ResizeObserver vai ajustar imediatamente
    renderer.setSize(0, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. SHADER "EMOTION AURA"
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

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          
          vec2 coord = uv;
          coord.x *= aspect;

          // --- POSICIONAMENTO ---
          // X: 0.35 * aspect (Ligeiramente à esquerda, alinhado com o texto EMOTION)
          // Y: 0.65 (Acima do centro geométrico, parte superior da seção)
          vec2 center = vec2(0.35 * aspect, 0.65);
          
          // Animação orgânica de flutuação
          center.x += cos(u_time * 0.2) * 0.05; 
          center.y += sin(u_time * 0.15) * 0.03;
          
          float dist = distance(coord, center);

          // --- GRADIENTE RADIAL EXPANSIVO ---
          vec3 color = C_BG;

          // Camada 1: Núcleo Profundo (#754548)
          // O núcleo é concentrado mas suave
          float step1 = smoothstep(0.0, 0.5, dist);
          vec3 layer1 = mix(C_CENTER_DARK, C_RING_DARK, step1);

          // Camada 2: Auréola Externa (#D9A9B0 -> #F2E8E9)
          float step2 = smoothstep(0.3, 0.9, dist);
          vec3 layer2 = mix(layer1, C_RING_LIGHT, step2);

          // Camada 3: Fusão Total com o Fundo (#FAF7F7)
          // Smoothstep longo para garantir que não haja "corte" visível nas bordas da section
          float step3 = smoothstep(0.6, 1.5, dist);
          color = mix(layer2, C_BG, step3);

          // --- TEXTURA (FILM GRAIN) ---
          // Adiciona ruído para evitar banding e dar textura editorial
          float grain = random(uv * 2.0 + u_time * 0.1);
          float grainStrength = 0.04 * (1.0 - step3); // Grão mais forte no centro, zero no fundo
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
      u_resolution: { value: new THREE.Vector2(1, 1) }, // Inicializa dummy
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // 4. Robust Resize Handling (Observer)
    // Isso garante que o canvas tenha SEMPRE o tamanho exato da div pai
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
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }} // Garante que o mouse passe através
    />
  );
};

export default FluidBackground;
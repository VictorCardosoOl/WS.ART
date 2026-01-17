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
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. SHADER "VELVET RADIAL"
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETA DE CORES
      const vec3 C_BG = vec3(0.98, 0.969, 0.969);          // #FAF7F7
      const vec3 C_CENTER_DARK = vec3(0.46, 0.27, 0.28);   // #754548
      const vec3 C_RING_DARK = vec3(0.85, 0.66, 0.69);     // #D9A9B0
      const vec3 C_RING_LIGHT = vec3(0.95, 0.91, 0.91);    // #F2E8E9

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          uv.x *= aspect;

          // --- POSICIONAMENTO ---
          // ALINHAMENTO COM "EMOTION":
          // Texto está no Topo/Esquerda.
          // x: 0.25 (Esquerda)
          // y: 0.75 (Topo - Lembre-se que UV 0,0 é inferior/esquerdo)
          vec2 center = vec2(0.25 * aspect, 0.70);
          
          // Respiração sutil
          float breathe = sin(u_time * 0.4) * 0.02; 
          
          float dist = distance(uv, center);

          // --- GRADIENTE SUAVE ---
          vec3 color = C_BG;

          // Camada central (Escura)
          float step1 = smoothstep(0.0, 0.35 + breathe, dist);
          vec3 layer1 = mix(C_CENTER_DARK, C_RING_DARK, step1);

          // Camada média (Clara)
          float step2 = smoothstep(0.2, 0.6 + breathe, dist);
          vec3 layer2 = mix(layer1, C_RING_LIGHT, step2);

          // Fade out para o fundo (C_BG)
          // smoothstep longo para eliminar corte seco
          float step3 = smoothstep(0.4, 1.1, dist);
          color = mix(layer2, C_BG, step3);

          // --- TEXTURA ---
          float grain = random(uv * 3.0 + u_time * 0.2);
          float grainStrength = 0.04 * (1.0 - step3); 
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
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: false 
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    />
  );
};

export default FluidBackground;
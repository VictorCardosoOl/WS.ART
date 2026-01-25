import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // CTO Optimization: Check for mobile or reduced motion preference
    // This prevents battery drain on weaker devices
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile && !prefersReducedMotion) {
      setShouldRender(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldRender || !containerRef.current) return;

    // 1. Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio for performance
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

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          
          vec2 coord = uv;
          coord.x *= aspect;

          // --- POSICIONAMENTO ---
          // Center: x = 0.35 * aspect (Ligeiramente a esquerda)
          // Center: y = 0.65 (Acima do centro vertical)
          vec2 center = vec2(0.35 * aspect, 0.65);
          
          // Animação sutil de "respiração" da posição
          center.x += sin(u_time * 0.2) * 0.03;
          center.y += cos(u_time * 0.15) * 0.02;
          
          float dist = distance(coord, center);

          // --- GRADIENTE RADIAL SUAVE ---
          vec3 color = C_BG;

          // Camada 1: Núcleo (Vinho -> Rosa Médio)
          // Smoothstep controla a difusão
          float step1 = smoothstep(0.0, 0.55, dist);
          vec3 layer1 = mix(C_CENTER_DARK, C_RING_DARK, step1);

          // Camada 2: Halo (Rosa Médio -> Rosa Claro)
          float step2 = smoothstep(0.4, 0.9, dist);
          vec3 layer2 = mix(layer1, C_RING_LIGHT, step2);

          // Camada 3: Fusão com Fundo (#FAF7F7)
          // O limite 1.3 garante que o gradiente se espalhe bem antes de sumir
          float step3 = smoothstep(0.65, 1.3, dist);
          color = mix(layer2, C_BG, step3);

          // --- TEXTURA (FILM GRAIN) ---
          // Adiciona ruído apenas nas áreas coloridas para evitar banding
          float grain = random(uv * 3.0 + u_time * 1.0);
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
      u_resolution: { value: new THREE.Vector2(1, 1) },
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

    // 4. Resize Observer para garantir preenchimento correto
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
  }, [shouldRender]);

  if (!shouldRender) {
      // Fallback estático leve para mobile
      return <div className="w-full h-full bg-[#FAF7F7]"></div>;
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
    />
  );
};

export default FluidBackground;
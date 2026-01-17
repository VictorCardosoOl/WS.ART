import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Alpha true para permitir mistura
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. SHADER "ETHEREAL AURA"
    // Refatorado para corresponder à seção Testimonials/Emotion
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETA DE CORES NORMALIZADA (0.0 - 1.0)
      const vec3 C_BG = vec3(0.98, 0.969, 0.969);          // #FAF7F7
      const vec3 C_CENTER_DARK = vec3(0.459, 0.271, 0.282); // #754548
      const vec3 C_RING_DARK = vec3(0.851, 0.663, 0.690);   // #D9A9B0
      const vec3 C_RING_LIGHT = vec3(0.949, 0.910, 0.914);  // #F2E8E9

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          
          // Correção de aspecto para coordenadas
          vec2 coord = uv;
          coord.x *= aspect;

          // --- POSICIONAMENTO ---
          // Centro ajustado conforme solicitado:
          // X: 0.35 (Levemente à esquerda do centro geométrico para balancear com o texto)
          // Y: 0.65 (Posicionado verticalmente para ficar atrás do título "EMOTION")
          vec2 center = vec2(0.35 * aspect, 0.65);
          
          // Animação orgânica de "respiração" e leve flutuação
          float breathe = sin(u_time * 0.3) * 0.03;
          center.x += cos(u_time * 0.2) * 0.02;
          center.y += sin(u_time * 0.15) * 0.01;
          
          float dist = distance(coord, center);

          // --- GRADIENTE SUAVE ---
          vec3 color = C_BG;

          // Camada 1: Núcleo (Mais intenso/escuro)
          // Smoothstep controla a transição do centro para fora
          float step1 = smoothstep(0.0, 0.35 + breathe, dist);
          vec3 layer1 = mix(C_CENTER_DARK, C_RING_DARK, step1);

          // Camada 2: Anel de Transição
          float step2 = smoothstep(0.25, 0.75 + breathe, dist);
          vec3 layer2 = mix(layer1, C_RING_LIGHT, step2);

          // Camada 3: Fusão com o Fundo (#FAF7F7)
          // Smoothstep longo (0.45 a 1.3) garante que a borda desapareça suavemente sem cortes
          float step3 = smoothstep(0.45, 1.3, dist);
          color = mix(layer2, C_BG, step3);

          // --- TEXTURA (FILM GRAIN) ---
          // Adiciona textura sutil para evitar color banding e dar aspecto editorial
          float grain = random(uv * 1.5 + u_time * 0.05);
          float grainStrength = 0.04 * (1.0 - step3 * 0.8); // Menos grão onde é fundo puro
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
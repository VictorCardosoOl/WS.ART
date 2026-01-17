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
    
    // Configura limpeza transparente
    renderer.setClearColor(0x000000, 0); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. SHADER "VELVET ORB"
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETA REFINADA
      const vec3 C_BG = vec3(0.98, 0.969, 0.969);      // Fundo Site
      const vec3 C_CENTER_DARK = vec3(0.46, 0.27, 0.28); // Rosa Escuro
      const vec3 C_RING_DARK = vec3(0.85, 0.66, 0.69);   // Rosa Médio
      const vec3 C_RING_LIGHT = vec3(0.95, 0.91, 0.91);  // Rosa Claro

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          uv.x *= aspect;

          // --- POSICIONAMENTO ---
          // Centro da Orbe: Alinhado com o texto EMOTION na esquerda
          // Ajustado para telas largas (aspect > 1) e mobile
          float xPos = aspect > 1.0 ? 0.25 * aspect : 0.5 * aspect;
          vec2 center = vec2(xPos, 0.7);
          
          // Movimento sutil
          center.y += sin(u_time * 0.3) * 0.03; 

          float dist = distance(uv, center);

          // --- GRADIENTE ---
          float stepCore = smoothstep(0.0, 0.45, dist); 
          vec3 colorCore = mix(C_CENTER_DARK, C_RING_DARK, stepCore);

          float stepBody = smoothstep(0.15, 0.8, dist);
          vec3 colorBody = mix(colorCore, C_RING_LIGHT, stepBody);

          // Fade out suave para o fundo do site
          float stepFade = smoothstep(0.5, 1.3, dist);
          vec3 finalColor = mix(colorBody, C_BG, stepFade);

          // Textura
          float grain = random(uv + u_time * 0.1);
          finalColor -= grain * 0.03;

          gl_FragColor = vec4(finalColor, 1.0);
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
      transparent: true
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
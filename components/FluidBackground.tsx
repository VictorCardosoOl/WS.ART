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

    // 2. SHADER "ETHEREAL RADIAL"
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // Cores (RGB Normalizado)
      const vec3 C_CORE = vec3(0.46, 0.27, 0.28); // #754548
      const vec3 C_MID = vec3(0.85, 0.66, 0.69);  // #D9A9B0
      const vec3 C_OUTER = vec3(0.95, 0.91, 0.91); // #F2E8E9 (Quase branco rosado)

      // Função de Ruído de Alta Frequência (Film Grain)
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          // Normalização e correção de Aspect Ratio
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          uv.x *= aspect;

          // --- CONFIGURAÇÃO DO CENTRO ---
          // Define o centro do gradiente. 
          // Ajuste fino para posicionar atrás do texto "EMOTION" (Esquerda)
          vec2 center = vec2(0.30 * aspect, 0.6);
          
          // Respiração orgânica lenta (expansão e contração imperceptível)
          float breathe = sin(u_time * 0.2) * 0.02; 
          
          // Distância radial pura
          float dist = distance(uv, center);

          // --- MÁSCARA DE OPACIDADE (ALPHA) ---
          // CRUCIAL: O alpha deve chegar a 0.0 ANTES de atingir a borda do canvas/div.
          // smoothstep(borda_interna, borda_externa, valor)
          // Tudo acima de 0.9 de distância será totalmente transparente.
          float alpha = 1.0 - smoothstep(0.0, 0.95 + breathe, dist);
          
          // Curva exponencial para suavizar ainda mais o final (evita degrau linear)
          alpha = pow(alpha, 1.8);

          // --- MISTURA DE CORES ---
          // Núcleo
          float coreIntensity = 1.0 - smoothstep(0.0, 0.3, dist);
          vec3 color = mix(C_MID, C_CORE, coreIntensity);

          // Borda externa
          float outerIntensity = smoothstep(0.2, 0.8, dist);
          color = mix(color, C_OUTER, outerIntensity);

          // --- TEXTURA (GRAIN) ---
          // Aplica ruído apenas onde há cor visível
          float grain = random(uv * 2.0 + u_time * 0.1);
          color -= grain * 0.04; // Textura sutil

          gl_FragColor = vec4(color, alpha);
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
      transparent: true,
      depthWrite: false, // Importante para não bloquear outros objetos
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
      style={{ mixBlendMode: 'normal' }} 
    />
  );
};

export default FluidBackground;
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

    // 2. SHADER "VELVET ORB"
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETA REFINADA (Valores normalizados RGB 0.0 - 1.0)
      
      // Fundo #FAF7F7 -> (0.98, 0.97, 0.97)
      const vec3 C_BG = vec3(0.98, 0.969, 0.969);
      
      // Centro Escuro #754548 -> (0.46, 0.27, 0.28)
      const vec3 C_CENTER_DARK = vec3(0.46, 0.27, 0.28); 
      
      // Anel Médio #D9A9B0 -> (0.85, 0.66, 0.69)
      const vec3 C_RING_DARK = vec3(0.85, 0.66, 0.69);
      
      // Anel Claro #F2E8E9 -> (0.95, 0.91, 0.91)
      const vec3 C_RING_LIGHT = vec3(0.95, 0.91, 0.91);

      // Função de Ruído (Film Grain suave)
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
          // Normalização de UV com correção de Aspect Ratio
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          uv.x *= aspect;

          // --- POSICIONAMENTO ---
          // Alinhado para ficar atrás da palavra EMOTION (Esquerda e Topo)
          vec2 center = vec2(0.35 * aspect, 0.65);
          
          // Respiração lenta e orgânica
          float breathe = sin(u_time * 0.4) * 0.02; // Movimento muito sutil
          center.y += breathe; 

          float dist = distance(uv, center);

          // --- GRADIENTE RADIAL COMPLEXO ---
          
          // Camada 1: Núcleo (Escuro -> Médio)
          // Um núcleo pequeno e intenso que se dissipa rapidamente
          float stepCore = smoothstep(0.0, 0.5, dist); 
          vec3 colorCore = mix(C_CENTER_DARK, C_RING_DARK, stepCore);

          // Camada 2: Corpo (Resultado anterior -> Claro)
          // A transição principal que dá o volume
          float stepBody = smoothstep(0.2, 0.9, dist);
          vec3 colorBody = mix(colorCore, C_RING_LIGHT, stepBody);

          // Camada 3: Fusão (Resultado anterior -> Fundo do Site)
          // Fade out longo para não ter "borda" visível
          float stepFade = smoothstep(0.6, 1.4, dist);
          vec3 finalColor = mix(colorBody, C_BG, stepFade);

          // --- TEXTURA ---
          // Grão fino para imitar papel de alta qualidade
          float grain = random(uv + u_time * 0.1);
          finalColor -= grain * 0.04; // 4% de ruído subtrativo

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
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
};

export default FluidBackground;
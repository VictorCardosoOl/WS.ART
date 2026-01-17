import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 2. Custom Shader (Evangelion Ripple Style)
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      // Color Palette
      const vec3 COLOR_BG = vec3(0.98, 0.97, 0.97); // #FAF7F7
      const vec3 COLOR_WAVE = vec3(0.74, 0.56, 0.56); // #BC8F8F (Rosy Brown)
      const vec3 COLOR_DEEP = vec3(0.55, 0.27, 0.07); // #8B4513 (Saddle Brown)

      void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
          
          float dist = length(uv);
          
          // Concentric ripple logic
          // Creates expanding rings
          float ripple = sin(dist * 8.0 - u_time * 0.4);
          
          // Sharpness/Softness of rings
          ripple = smoothstep(0.2, 0.8, ripple);
          
          // Interaction: Mild distortion based on mouse
          float mouseDist = length(uv - (u_mouse * 2.0 - 1.0));
          float distortion = smoothstep(0.5, 0.0, mouseDist) * 0.1;
          
          // Mixing colors
          // Base mix
          vec3 color = mix(COLOR_BG, COLOR_WAVE, ripple * 0.15); // Subtle 15% opacity wave
          
          // Add depth
          color = mix(color, COLOR_DEEP, ripple * distortion * 0.2);

          // Vignette
          float vignette = 1.0 - smoothstep(0.5, 2.0, dist);
          
          gl_FragColor = vec4(color * vignette, 1.0);
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
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
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

    // 3. Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // 4. Events
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      uniforms.u_mouse.value.set(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default FluidBackground;
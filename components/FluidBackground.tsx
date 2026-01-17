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

    // 2. Custom Shader: Evangelion "Radial Gradient Pulse"
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;

      // PALETTE DEFINITION (EVA ALERT / IMPACT)
      const vec3 COLOR_BG = vec3(0.102, 0.102, 0.180); // #1A1A2E (Deep Purple/Black)
      const vec3 COLOR_CORE = vec3(0.902, 0.0, 0.071); // #E60012 (Core Red)
      const vec3 COLOR_PEAK = vec3(1.0, 1.0, 1.0);     // #FFFFFF (White Shockwave)
      const vec3 COLOR_CYAN = vec3(0.0, 0.75, 1.0);    // #00BFFF (AT Field Interference - Subtle)

      void main() {
          // Normalize UVs centered at 0,0
          vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
          float dist = length(uv);

          // PHYSICS: Concentric Ripple (Tunnel Effect)
          // We use 'fract' to create infinite repeating rings moving outwards
          // -u_time makes it expand from center
          float speed = 0.4;
          float density = 3.5;
          
          // The base wave function (Sawtooth profile 0.0 -> 1.0)
          float waveParams = dist * density - u_time * speed;
          float wave = fract(waveParams);

          // SHAPING THE WAVE (The "Pulse" Look)
          // We want a gradient that goes: Dark -> Red -> White -> Dark
          
          // 1. The Body (Red Gradient)
          // Exponential ease-in to make the color "rush" towards the edge
          float bodyIntensity = smoothstep(0.0, 0.8, wave);
          
          // 2. The Shockwave (White Peak)
          // A sharp spike at the very end of the wave cycle
          float peakIntensity = smoothstep(0.85, 0.95, wave) * (1.0 - smoothstep(0.95, 1.0, wave));

          // COLOR COMPOSITION
          vec3 color = COLOR_BG;

          // Add the Red Core Body
          color = mix(color, COLOR_CORE, bodyIntensity * 0.9); // 0.9 opacity to keep deep feel

          // Add Cyan Chromatic Aberration (The "Rainbow" mention)
          // We offset the cyan channel slightly based on distance to create that "Impact" prism effect
          float aberration = smoothstep(0.5, 0.7, wave) * 0.3;
          color += COLOR_CYAN * aberration * dist; 

          // Add the White Shockwave on top (Additive)
          color += COLOR_PEAK * peakIntensity;

          // VIGNETTE / DEPTH
          // Darken the edges of the screen slightly to focus center
          float vignette = 1.0 - smoothstep(0.8, 1.8, dist);
          color *= vignette;

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

    // 4. Resize Handler
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
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default FluidBackground;
import * as THREE from 'three';
import { useRef, useState, useMemo, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  Image,
  Text,
  MeshTransmissionMaterial,
  Float
} from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassProps {
  mode?: 'lens' | 'cube';
  lensProps?: any;
  cubeProps?: any;
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === 'cube' ? Cube : Lens;
  const modeConfig = mode === 'cube' ? cubeProps : lensProps;

  return (
    <div className="w-full h-full relative cursor-none bg-[#E5D0D4]/20 rounded-3xl overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 15 }} 
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }} 
        dpr={[1, 1.5]} // Otimização de performance para telas retina
      >
        <Wrapper config={modeConfig}>
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
             <Typography />
             <Images />
          </Float>
        </Wrapper>
      </Canvas>
      
      {/* Instrução Visual Discreta */}
      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none z-10">
        <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-bold opacity-60">
          Interaja com o cursor
        </span>
      </div>
    </div>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  Geometry,
  rotation = [0, 0, 0],
  config = {},
  ...props
}: any) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport } = useThree();
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, pointer, camera } = state;
    const v = state.viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Lógica de seguir o mouse suavemente (Parallax)
    // Converte coordenadas normalizadas (-1 a 1) para espaço do mundo
    const destX = (pointer.x * v.width) / 4;
    const destY = (pointer.y * v.height) / 4;
    
    if (ref.current) {
        // Movimento suave do vidro
        easing.damp3(ref.current.position, [destX, destY, 12], 0.2, delta);
        // Rotação reativa ao movimento
        easing.dampE(ref.current.rotation, [rotation[0] - pointer.y * 0.2, rotation[1] + pointer.x * 0.2, 0], 0.2, delta);
    }

    // 1. Renderizar conteúdo da cena virtual (Texto/Imagens) para o buffer offscreen
    gl.setRenderTarget(buffer);
    gl.setClearColor(0xE5D0D4, 0); // Fundo transparente no buffer
    gl.render(scene, camera);
    
    // 2. Voltar para o render target padrão (Tela)
    gl.setRenderTarget(null);
  });

  const { scale = 1, ior = 1.15, thickness = 1.5, chromaticAberration = 0.06, anisotropy = 0.1 } = config;

  return (
    <>
      {/* Portal renderiza os filhos (Imagens/Texto) na cena virtual isolada */}
      {createPortal(children, scene)}
      
      {/* Plano de fundo que exibe o buffer (o que a câmera vê sem distorção) */}
      <mesh scale={[viewport.width, viewport.height, 1]} position={[0, 0, -1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent opacity={1} />
      </mesh>
      
      {/* Objeto de Vidro (Lente) que distorce o buffer */}
      <mesh ref={ref} scale={scale} rotation={new THREE.Euler(...rotation)} {...props}>
        <Geometry />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy}
          chromaticAberration={chromaticAberration}
          roughness={0.05} // Leve rugosidade para realismo
          transmission={0.98}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          toneMapped={false}
        />
      </mesh>
    </>
  );
});

function Lens({ children, config }: any) {
  // Geometria Cilindrica Achatada (Disco de Vidro)
  return (
    <ModeWrapper 
      config={config}
      Geometry={() => <cylinderGeometry args={[2.8, 2.8, 0.15, 64]} />} 
      rotation={[Math.PI / 2, 0, 0]}
    >
      {children}
    </ModeWrapper>
  );
}

function Cube({ children, config }: any) {
  return (
    <ModeWrapper 
      config={config}
      Geometry={() => <boxGeometry args={[3.5, 3.5, 3.5]} />} 
    >
      {children}
    </ModeWrapper>
  );
}

function Images() {
  // Layout estático artístico - Colagem visual
  const images = useMemo(() => [
    { pos: [-1.8, 0.5, 2], scale: 2.2, url: "https://picsum.photos/id/103/800/800" }, // Esq
    { pos: [2, -0.5, 1], scale: 2.5, url: "https://picsum.photos/id/106/800/1200" }, // Dir
    { pos: [-1, -2.5, 0], scale: 2, url: "https://picsum.photos/id/111/600/600" }, // Baixo Centro
    { pos: [0, 2.8, -1], scale: 3.5, url: "https://picsum.photos/id/117/1200/800" }, // Topo Fundo
  ], []);

  return (
    <group>
      {images.map((img, i) => (
        <Image 
          key={i}
          position={new THREE.Vector3(...img.pos)} 
          scale={img.scale} 
          url={img.url}
          transparent
          opacity={0.8}
          toneMapped={false}
        />
      ))}
    </group>
  );
}

function Typography() {
  return (
    <group position={[0, 0, 4]}>
      <Text
        position={[0, 0.2, 0]}
        fontSize={0.6}
        letterSpacing={-0.02}
        color="#1c1917"
        font="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuQUiZQFwrK3aq2xKV14eZ.woff"
        anchorX="center"
        anchorY="middle"
      >
        WILLIAM SIQUEIRA
      </Text>
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.15}
        letterSpacing={0.2}
        color="#754548"
        font="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff"
        anchorX="center"
        anchorY="middle"
      >
        VISUAL ARTS & TATTOO
      </Text>
    </group>
  );
}

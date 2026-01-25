import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
  Cylinder,
  Box
} from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassProps {
  mode?: 'lens' | 'cube';
  lensProps?: any;
  cubeProps?: any;
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Arte', link: '#gallery' },
      { label: 'Conceito', link: '#about' },
      { label: 'Contato', link: '#booking' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <div className="w-full h-full relative cursor-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true, antialias: true }}>
        <ScrollControls damping={0.2} pages={3} distance={0.4}>
          <NavItems items={navItems} />
          <Wrapper modeProps={modeProps}>
            <Scroll>
              <Typography />
              <Images />
            </Scroll>
            {/* Scroll html removido para evitar conflito com Lenis, mantendo apenas visual 3D */}
            <Preload />
          </Wrapper>
        </ScrollControls>
      </Canvas>
      
      {/* Overlay de instrução */}
      <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Role para interagir</span>
      </div>
    </div>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  GeometryComponent, // Componente de geometria (Cylinder ou Box)
  geometryArgs,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: any) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, pointer, camera } = state;
    const v = state.viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Lógica de seguir o mouse
    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    
    if (ref.current) {
        easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
        
        // Ajuste de escala dinâmico se não definido
        if (modeProps.scale == null) {
          ref.current.scale.setScalar(0.15); // Escala fixa segura
        }
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Background Color (Adaptado para a paleta do site: Rose/Stone)
    // #E5D0D4 (Rose 200) em Hex 0xE5D0D4
    gl.setClearColor(0xE5D0D4, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      
      {/* Plane de fundo com a textura da cena renderizada */}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>

      {/* Objeto de Vidro (Lente) */}
      <GeometryComponent 
        ref={ref} 
        args={geometryArgs}
        scale={scale ?? 0.15} 
        rotation-x={Math.PI / 2} 
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.1}
          chromaticAberration={chromaticAberration ?? 0.06}
          roughness={0}
          transmission={1}
          {...extraMat}
        />
      </GeometryComponent>
    </>
  );
});

function Lens({ modeProps, ...p }: any) {
  // Usando Cylinder para simular a lente (disco)
  return (
    <ModeWrapper 
        GeometryComponent={Cylinder}
        geometryArgs={[3.5, 3.5, 0.4, 64]} // args: [radiusTop, radiusBottom, height, radialSegments]
        followPointer 
        modeProps={modeProps} 
        {...p} 
    />
  );
}

function Cube({ modeProps, ...p }: any) {
  return (
    <ModeWrapper 
        GeometryComponent={Box}
        geometryArgs={[4, 4, 4]} 
        followPointer 
        modeProps={modeProps} 
        {...p} 
    />
  );
}

function NavItems({ items }: { items: { label: string, link: string }[] }) {
  const group = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();

  const fontSize = 0.05; // Ajustado para ser visível
  const spacing = 0.5;

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    // Posicionar no topo
    group.current.position.set(0, v.height / 2 - 0.5, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    window.location.hash = link.replace('#', '');
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="#754548" // Pantone Accent
          font="https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff" // Fonte Montserrat
          anchorX="center"
          anchorY="middle"
          depthWrite={false}
          outlineWidth={0}
          depthTest={false}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<THREE.Group>(null);
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  // Usando imagens do Picsum para garantir funcionamento sem assets locais
  const urls = [
    "https://picsum.photos/id/40/800/1200", // Tattoo style
    "https://picsum.photos/id/41/800/800",
    "https://picsum.photos/id/42/600/1000",
    "https://picsum.photos/id/43/800/1200",
    "https://picsum.photos/id/44/800/800"
  ];

  useFrame(() => {
    if(!group.current) return;
    // Animação de zoom baseada no scroll
    const c = group.current.children;
    // @ts-ignore - Material properties
    if(c[0]?.material) c[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    // @ts-ignore
    if(c[1]?.material) c[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    // @ts-ignore
    if(c[2]?.material) c[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1, 1]} url={urls[0]} />
      <Image position={[2, 0, 3]} scale={3} url={urls[1]} />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url={urls[2]} />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url={urls[3]} />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url={urls[4]} />
    </group>
  );
}

function Typography() {
  return (
    <Text
      position={[0, 0, 12]}
      fontSize={0.8}
      letterSpacing={-0.05}
      color="#1c1917" // Stone 900
      font="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuQUiZQFwrK3aq2xKV14eZ.woff" // Fonte Serif
      anchorX="center"
      anchorY="middle"
    >
      WILLIAM SIQUEIRA
    </Text>
  );
}

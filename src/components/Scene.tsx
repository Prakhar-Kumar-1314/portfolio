import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { Vector3 } from 'three';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingIcon({ position, children, hover = 0.5 }: any) {
  const ref = useRef<any>();
  const { viewport } = useThree();
  const [initialY] = useState(position[1]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = initialY + Math.sin(t) * hover;
    ref.current.rotation.x = Math.sin(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
  });

  return <group ref={ref} position={position}>{children}</group>;
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)'
      }}
    >
      <Stars />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}
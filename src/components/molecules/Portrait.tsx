'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  SoftShadows,
} from '@react-three/drei'
import GLTF from '@/components/atoms/Gltf'

export default function Portrait() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 36,
        near: 10,
        far: 40,
        position: [0, 10, 30],
      }}
    >
      <SoftShadows size={25} focus={2} samples={15} />
      <ContactShadows
        opacity={0.5}
        blur={2}
        position={[0, -4.99, 0]}
        far={20}
        near={1}
        scale={50}
        frames={50}
        color={0x0099cc}
        resolution={128}
      />
      <Suspense fallback={null}>
        <GLTF position={[0, -5, -3]} scale={[0.1, 0.1, 0.1]} />
        <Environment preset="sunset" />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight
        color={0xff9900}
        position={[-0, 15, -2]}
        intensity={5}
        castShadow
      />
      <pointLight position={[0, 6, 2]} intensity={3} color={0x00aaff} />
      <OrbitControls
        minDistance={10}
        maxDistance={1000}
        rotateSpeed={0.4}
        zoomSpeed={0.5}
        autoRotate
        autoRotateSpeed={-Math.PI}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  )
}

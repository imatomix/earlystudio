'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import GLTF from '@/components/atoms/Gltf'

export default function Portrait() {
  return (
    <Canvas
      camera={{
        fov: 32,
        near: 10,
        far: 1000,
        position: [0, 100, 300],
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <spotLight
          color={0xff0000}
          position={[1000, 1000, -1000]}
          angle={0.1}
          penumbra={1}
          decay={0}
          intensity={2}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        <pointLight
          position={[0, 120, 50]}
          decay={0}
          intensity={5}
          color={0x00aaff}
          castShadow
        />

        <GLTF castShadow receiveShadow position={[0, -70, -30]} />
        <OrbitControls
          minDistance={10}
          maxDistance={1000}
          rotateSpeed={0.4}
          zoomSpeed={0.5}
          autoRotate
          enableZoom={false}
          enablePan={false}
        />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}

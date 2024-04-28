import { useAnimations } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useEffect } from 'react'

const url = '/controller.gltf'

type Props = MeshProps

export default function GLTF(props: Props) {
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    scene.traverse((c) => {
      if (c.isObject3D) {
        c.castShadow = true
        c.receiveShadow = true
      }
    })
    actions?.clip?.play()
  }, [actions, scene])

  return <primitive {...props} object={scene} />
}

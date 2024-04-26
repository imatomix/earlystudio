import { useAnimations } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useEffect } from 'react'

const url = '/controller.gltf'

type Props = MeshProps

export default function GLTF(props: Props) {
  const { scene, animations } = useGLTF(url)
  const { actions, mixer } = useAnimations(animations, scene)
  useEffect(() => {
    actions?.clip?.play()
  }, [actions])

  return <primitive {...props} object={scene} />
}

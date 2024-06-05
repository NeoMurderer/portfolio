import { useThree } from '@react-three/fiber';
import { EffectComposer, Outline, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing";

export function Effects() {
  const { size } = useThree();
  return (
    <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
      <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blur width={size.width * 1.25} edgeStrength={10} />
      <TiltShift2 samples={5} blur={0.1} />
      <ToneMapping />
    </EffectComposer>
  );
}
